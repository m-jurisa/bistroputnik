import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, renameSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { resolveMarenda, validatePrice } from '../../menu/pricing.mjs';

export const columns = ['sifra_usluge', 'naziv_usluge', 'kategorija', 'maloprodajna_cijena_eur',
  'posebni_oblik_prodaje', 'naziv_posebnog_oblika_prodaje', 'sidrena_cijena_eur', 'datum_sidrene_cijene',
  'jelo_dnevne_ponude', 'datum_dnevne_ponude', 'alergeni', 'valuta'];

export function csvCell(value) {
  let text = String(value ?? '');
  // Spreadsheet formula injection protection for human-authored service names.
  if (/^[=+@\-\t\r]/.test(text)) text = "'" + text;
  return `"${text.replaceAll('"', '""')}"`;
}

export function toCsv(rows) {
  return '\uFEFF' + [columns, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
}

function priceRow(item, category, dish = '', date = '') {
  validatePrice(item);
  if (!item.id || !item.name?.trim()) throw new Error('Every service needs an id and a Croatian name.');
  return [item.id, item.name, category, item.price.toFixed(2), item.isPromotional ? 'DA' : 'NE',
    item.promotionName || '', item.referencePrice.toFixed(2), item.referenceDate, dish, date,
    (item.allergens || []).join(' / '), 'EUR'];
}

export function buildPublications(menu, offer) {
  const dailyItems = resolveMarenda(offer);
  const full = menu.pages.flatMap(page => (page.sections || []).flatMap(section =>
    (section.items || []).filter(item => typeof item === 'object' && item.isAvailable !== false)
      .map(item => priceRow(item, section.title))));
  full.push(priceRow(menu.breakfast, 'Doručak'));
  const daily = dailyItems.map(item => priceRow({ ...item, id: `marenda:${item.id}` }, 'Marenda', item.name, offer.offerDate));
  full.push(...daily);
  if (new Set(full.map(row => row[0])).size !== full.length || new Set(daily.map(row => row[0])).size !== daily.length) {
    throw new Error('Duplicate service ids in a price list.');
  }
  const references = Object.fromEntries(full.map(row => [row[0], [row[6], row[7]]]));
  return { full: toCsv(full), daily: toCsv(daily), fullCount: full.length, dailyCount: daily.length, references };
}

function hash(text) { return createHash('sha256').update(text).digest('hex'); }
function readJson(path) { return JSON.parse(readFileSync(path, 'utf8')); }
export function loadSources(root) {
  return { menu: readJson(join(root, 'menu/menu-data.json')), offer: readJson(join(root, 'menu/marenda-items.json')) };
}
function loadManifest(dir) {
  const path = join(dir, 'manifest.json');
  if (!existsSync(path) && existsSync(dir) && readdirSync(dir).some(name => name.endsWith('.csv'))) throw new Error('Archive manifest missing; restore it before publishing.');
  return existsSync(path) ? readJson(path) : { version: 1, venue: 'U-01', publications: [], references: {} };
}
function publicationTime(now, offerDate) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zagreb', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).format(now).replaceAll(':', '-');
  return `${offerDate}_${parts}`;
}

// Parse quoted CSV, including embedded commas, quotes and line breaks in names.
export function parseCsv(csv) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  const text = csv.replace(/^\uFEFF/, '');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (!quoted && c === ',') { row.push(cell); cell = ''; }
    else if (!quoted && (c === '\n' || c === '\r')) {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (quoted) throw new Error('Invalid archived CSV.');
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

export function verifyArchive(root, manifest = loadManifest(join(root, 'public/cjenici'))) {
  if (manifest.version !== 1 || !Array.isArray(manifest.publications) || !manifest.references || typeof manifest.references !== 'object') {
    throw new Error('Invalid price archive manifest.');
  }
  const filenames = new Set();
  for (const file of manifest.publications) {
    if (!/^[\w.-]+\.csv$/.test(file.filename) || filenames.has(file.filename) || !['full', 'daily'].includes(file.kind)) throw new Error('Invalid publication filename or kind.');
    filenames.add(file.filename);
    const path = join(root, 'public/cjenici', file.filename);
    if (!existsSync(path) || hash(readFileSync(path, 'utf8')) !== file.sha256) throw new Error(`Archive missing or modified: ${file.filename}`);
  }
  return manifest;
}

function recoverHistory(root, manifest) {
  const history = Object.create(null);
  for (const file of manifest.publications) {
    const [header, ...rows] = parseCsv(readFileSync(join(root, 'public/cjenici', file.filename), 'utf8'));
    const index = name => header.indexOf(name);
    for (const row of rows) {
      const serviceId = row[index('sifra_usluge')];
      // Old full CSVs used anonymous tier IDs, which cannot identify a dish.
      if (file.kind === 'full' && !serviceId.startsWith('marenda:')) continue;
      const id = serviceId.replace(/^marenda:/, '');
      if (!history[id]) history[id] = {
        referencePrice: Number(row[index('sidrena_cijena_eur')]),
        referenceDate: row[index('datum_sidrene_cijene')],
      };
    }
  }
  // New daily service IDs are also recorded in the reference ledger.
  for (const [id, [price, date]] of Object.entries(manifest.references)) {
    if (id.startsWith('marenda:') && !history[id.slice(8)]) history[id.slice(8)] = { referencePrice: Number(price), referenceDate: date };
  }
  return history;
}

function prepareOffer(root, offer, manifest, now) {
  const recovered = recoverHistory(root, manifest);
  if (offer.priceHistory != null && (typeof offer.priceHistory !== 'object' || Array.isArray(offer.priceHistory))) throw new Error('priceHistory must be an object.');
  offer.priceHistory = Object.assign(Object.create(null), recovered, offer.priceHistory);
  // Resolve first so malformed offers cannot be saved or published.
  const items = resolveMarenda(offer);
  for (const item of items) {
    if (!Object.hasOwn(offer.priceHistory, item.id)) offer.priceHistory[item.id] = {
      referencePrice: item.referencePrice, referenceDate: item.referenceDate,
    };
  }
  for (const [id, entry] of Object.entries(offer.priceHistory)) validatePrice({ id, ...entry, price: entry.referencePrice, isPromotional: false, promotionName: '' });
  const { contentHash, lastChangedAt, ...content } = offer;
  const nextHash = hash(JSON.stringify(content));
  if (contentHash !== nextHash || Number.isNaN(Date.parse(lastChangedAt))) {
    offer.contentHash = nextHash;
    offer.lastChangedAt = now.toISOString();
  }
  return offer;
}

export function publish(root, now = new Date()) {
  const { menu, offer } = loadSources(root);
  const dir = join(root, 'public/cjenici');
  const manifest = verifyArchive(root);
  prepareOffer(root, offer, manifest, now);
  const data = buildPublications(menu, offer);
  for (const [id, value] of Object.entries(data.references)) {
    if (manifest.references[id] && JSON.stringify(manifest.references[id]) !== JSON.stringify(value)) {
      throw new Error(`${id}: published reference price/date changed. Correct historical data only through a documented manual correction of the reference ledger.`);
    }
  }
  const pending = ['full', 'daily'].filter(kind => {
    const latest = manifest.publications.filter(p => p.kind === kind).at(-1);
    return !latest || latest.sha256 !== hash(data[kind]) || latest.offerDate !== offer.offerDate;
  });
  const offerPath = join(root, 'menu/marenda-items.json');
  const savedOffer = JSON.stringify(offer, null, 2) + '\n';
  if (savedOffer !== readFileSync(offerPath, 'utf8')) {
    writeFileSync(`${offerPath}.tmp`, savedOffer);
    renameSync(`${offerPath}.tmp`, offerPath);
  }
  if (!pending.length) { verify(root); return manifest; }
  mkdirSync(dir, { recursive: true });
  for (const kind of pending) {
    const sequence = Math.max(0, ...manifest.publications.map(p => p.sequence)) + 1;
    const filename = `bistro_Naputica-14-21320-Baska-Voda_U-01_${String(sequence).padStart(5, '0')}_${publicationTime(now, offer.offerDate)}_${kind === 'full' ? 'cjenik' : 'marenda'}.csv`;
    writeFileSync(join(dir, filename), data[kind], { flag: 'wx' });
    manifest.publications.push({ kind, sequence, filename, publishedAt: now.toISOString(), offerDate: offer.offerDate,
      rows: data[`${kind}Count`], sha256: hash(data[kind]) });
  }
  manifest.references = { ...manifest.references, ...data.references };
  writeFileSync(join(dir, 'manifest.json.tmp'), JSON.stringify(manifest, null, 2) + '\n');
  renameSync(join(dir, 'manifest.json.tmp'), join(dir, 'manifest.json'));
  return manifest;
}

export function verify(root) {
  const { menu, offer } = loadSources(root);
  const manifest = verifyArchive(root);
  const data = buildPublications(menu, offer);
  if (!manifest.publications.length) throw new Error('No price files published. Run npm run prices:publish.');
  for (const kind of ['full', 'daily']) {
    const latest = manifest.publications.filter(p => p.kind === kind).at(-1);
    if (!latest || latest.sha256 !== hash(data[kind]) || latest.offerDate !== offer.offerDate) {
      throw new Error(`${kind} CSV does not match the source. Run npm run prices:publish before building.`);
    }
  }
  return { ...data, manifest };
}

export function verifyExport(root) {
  const data = verify(root);
  for (const file of data.manifest.publications) {
    const path = join(root, 'out/cjenici', file.filename);
    if (!existsSync(path) || hash(readFileSync(path, 'utf8')) !== file.sha256) throw new Error(`Export archive missing or modified: ${file.filename}`);
  }
  if (JSON.stringify(readJson(join(root, 'out/cjenici/manifest.json'))) !== JSON.stringify(data.manifest)) throw new Error('Export manifest does not match the price archive.');
  return data;
}
