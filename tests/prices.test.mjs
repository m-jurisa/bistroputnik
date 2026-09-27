import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, readdirSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { createHash } from 'node:crypto';
import { buildPublications, csvCell, parseCsv, publish, verify, verifyExport, loadSources, toCsv } from '../scripts/lib/price-publications.mjs';
import { resolveMarenda, restaurantDate, validDate } from '../menu/pricing.mjs';
import { priceCopy } from '../menu/price-copy.mjs';

const price = (id, amount = 10) => ({ id, name: id, price: amount, referencePrice: amount,
  referenceDate: '2026-09-10', isPromotional: false, promotionName: '' });
const menuFixture = { pages: [{ sections: [{ title: 'Jela', items: [price('musaka', 20)] }] }], breakfast: price('breakfast', 12) };
const offerFixture = { offerDate: '2026-09-27', tiers: Array.from({ length: 6 }, (_, i) => ({ ...price(`marenda-${i + 1}`, i + 10), name: `Marenda ${i + 1}`, referencePrice: i === 0 ? 11 : i + 10 })),
  items: [{ id: 'musaka', name: 'Musaka', tierId: 'marenda-1', allergens: ['J', 'M'] },
    { id: 'gurmanska-pljeskavica', name: 'Gurmanska pljeskavica', tierId: 'marenda-4', allergens: ['M'] }] };
const clone = value => structuredClone(value);
const firstTime = new Date('2026-09-27T05:00:00Z');

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'putnik-prices-test-'));
  mkdirSync(join(root, 'menu'));
  const menu = clone(menuFixture), offer = clone(offerFixture);
  const save = () => {
    writeFileSync(join(root, 'menu/menu-data.json'), JSON.stringify(menu));
    writeFileSync(join(root, 'menu/marenda-items.json'), JSON.stringify(offer));
  };
  const reload = () => Object.assign(offer, loadSources(root).offer);
  save();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return { root, menu, offer, save, reload };
}

test('both CSVs contain actual dishes, namespaced IDs and dish reference prices', () => {
  const files = buildPublications(menuFixture, offerFixture);
  assert.equal(files.fullCount, 4);
  assert.equal(files.dailyCount, 2);
  const rows = parseCsv(files.full);
  assert.deepEqual(rows.slice(-2).map(row => row.slice(0, 4)), [
    ['marenda:musaka', 'Musaka', 'Marenda', '10.00'],
    ['marenda:gurmanska-pljeskavica', 'Gurmanska pljeskavica', 'Marenda', '13.00'],
  ]);
  assert.ok(files.full.startsWith('\uFEFF'));
  assert.match(files.daily, /"NE","","11.00","2026-09-10"/);
  assert.ok(!files.full.includes('"Marenda 1"'));
});

test('dish prices follow assigned tiers independently of ordering; conflicts and duplicates fail', () => {
  const offer = clone(offerFixture);
  offer.items.reverse();
  assert.deepEqual(resolveMarenda(offer).map(d => [d.id, d.price]), [['gurmanska-pljeskavica', 13], ['musaka', 10]]);
  offer.items[0].price = 10;
  assert.throws(() => resolveMarenda(offer), /conflicts/);
  delete offer.items[0].price;
  offer.items[1].tierId = offer.items[0].tierId;
  assert.throws(() => resolveMarenda(offer), /duplicate/);
  offer.items[1].tierId = 'marenda-1';
  offer.items[1].id = offer.items[0].id;
  assert.throws(() => resolveMarenda(offer), /duplicate daily dish id/);
});

test('CSV round trips quoted multiline names and neutralizes spreadsheet formulas', () => {
  assert.equal(csvCell('Riba, "velika"\nž'), '"Riba, ""velika""\nž"');
  assert.equal(csvCell('=1+1'), '"\'=1+1"');
  assert.equal(parseCsv(toCsv([['id', 'Riba, "velika"\nž']]))[1][1], 'Riba, "velika"\nž');
});

test('unchanged rebuilds preserve archives, source bytes, metadata and timestamps', t => {
  const { root } = fixture(t);
  const first = publish(root, firstTime);
  const bytes = readFileSync(join(root, 'menu/marenda-items.json'), 'utf8');
  const prepared = loadSources(root).offer;
  assert.equal(prepared.lastChangedAt, firstTime.toISOString());
  assert.match(prepared.contentHash, /^[a-f0-9]{64}$/);
  assert.deepEqual(prepared.priceHistory.musaka, { referencePrice: 11, referenceDate: '2026-09-10' });
  assert.deepEqual(publish(root, new Date('2026-09-28T05:01:00Z')), first);
  assert.equal(readFileSync(join(root, 'menu/marenda-items.json'), 'utf8'), bytes);
  verify(root);
});

test('changed dishes and manually edited dates create archives; description changes update only metadata', t => {
  const { root, offer, save, reload } = fixture(t);
  const first = publish(root, firstTime);
  const originals = first.publications.map(file => [file.filename, readFileSync(join(root, 'public/cjenici', file.filename), 'utf8')]);
  reload();
  offer.items[0].name = 'Novo jelo, s povrćem';
  save();
  assert.throws(() => verify(root), /does not match/);
  assert.equal(publish(root, new Date('2026-09-27T06:00:00Z')).publications.length, 4);
  reload();
  const oldHash = offer.contentHash;
  offer.items[0].description = 'Nova priprema';
  save();
  assert.equal(publish(root, new Date('2026-09-27T07:00:00Z')).publications.length, 4);
  reload();
  assert.notEqual(offer.contentHash, oldHash);
  assert.equal(offer.lastChangedAt, '2026-09-27T07:00:00.000Z');
  offer.offerDate = '2026-10-02';
  save();
  const final = publish(root, new Date('2026-09-27T08:00:00Z'));
  assert.equal(final.publications.length, 6);
  assert.ok(final.publications.at(-1).filename.includes('2026-10-02'));
  assert.equal(loadSources(root).offer.lastChangedAt, '2026-09-27T08:00:00.000Z');
  for (const [filename, bytes] of originals) assert.equal(readFileSync(join(root, 'public/cjenici', filename), 'utf8'), bytes);
});

test('tier changes, removal and returning dishes preserve their own reference prices', t => {
  const { root, offer, save, reload } = fixture(t);
  publish(root, firstTime); reload();
  offer.items[0].tierId = 'marenda-6';
  offer.tiers[0].referencePrice = 9;
  save(); publish(root, firstTime); reload();
  const musaka = resolveMarenda(offer).find(d => d.id === 'musaka');
  assert.equal(musaka.price, 15);
  assert.equal(musaka.referencePrice, 11);
  const returning = clone(offer.items[0]);
  offer.items = [];
  save(); publish(root, firstTime); reload();
  assert.equal(verify(root).dailyCount, 0);
  assert.equal(verify(root).fullCount, 2);
  assert.equal(offer.priceHistory.musaka.referencePrice, 11);
  offer.items = [returning];
  save(); publish(root, firstTime); reload();
  assert.equal(resolveMarenda(offer)[0].referencePrice, 11);
});

test('missing history is recovered from publications even for absent dishes', t => {
  const { root, offer, save, reload } = fixture(t);
  publish(root, firstTime); reload();
  delete offer.priceHistory;
  offer.items = [];
  offer.tiers[0].referencePrice = 99;
  save(); publish(root, firstTime); reload();
  assert.equal(offer.priceHistory.musaka.referencePrice, 11);
  offer.items = [clone(offerFixture.items[0])];
  save(); publish(root, firstTime);
  assert.equal(resolveMarenda(loadSources(root).offer)[0].referencePrice, 11);
});

test('legacy daily CSVs recover per-dish history without confusing regular menu IDs', t => {
  const { root, offer, save } = fixture(t);
  const dir = join(root, 'public/cjenici');
  mkdirSync(dir, { recursive: true });
  const csv = toCsv([['musaka', 'Marenda 1 · Musaka', 'Marenda', '10.00', 'NE', '', '8.00', '2026-09-01', 'Musaka', '2026-09-27', '', 'EUR']]);
  writeFileSync(join(dir, 'old.csv'), csv);
  writeFileSync(join(dir, 'manifest.json'), JSON.stringify({ version: 1, references: { musaka: ['20.00', '2026-09-10'] }, publications: [{ kind: 'daily', sequence: 1, filename: 'old.csv', sha256: createHash('sha256').update(csv).digest('hex'), offerDate: offer.offerDate }] }));
  save(); publish(root, firstTime);
  assert.equal(loadSources(root).offer.priceHistory.musaka.referencePrice, 8);
  assert.equal(verify(root).references.musaka[0], '20.00');
});

test('new dishes use explicit reference values or initial tier price and offer date', t => {
  const { root, offer, save } = fixture(t);
  delete offer.tiers[0].referencePrice;
  delete offer.tiers[0].referenceDate;
  offer.items[1].referencePrice = 12;
  offer.items[1].referenceDate = '2026-09-15';
  save(); publish(root, firstTime);
  const history = loadSources(root).offer.priceHistory;
  assert.deepEqual(history.musaka, { referencePrice: 10, referenceDate: '2026-09-27' });
  assert.deepEqual(history['gurmanska-pljeskavica'], { referencePrice: 12, referenceDate: '2026-09-15' });
});

test('regular reference values cannot move with current price edits', t => {
  const { root, menu, save, reload } = fixture(t);
  publish(root, firstTime); reload();
  const item = menu.pages[0].sections[0].items[0];
  item.price += 1; save(); publish(root, firstTime);
  assert.equal(verify(root).references[item.id][0], '20.00');
  item.referencePrice += 1; save();
  assert.throws(() => publish(root, firstTime), /reference price\/date changed/);
});

for (const missing of [false, true]) test(`${missing ? 'missing' : 'modified'} archives block changed publications before any writes`, t => {
  const { root, offer, save, reload } = fixture(t);
  const manifest = publish(root, firstTime); reload();
  const dir = join(root, 'public/cjenici');
  const archivePath = join(dir, manifest.publications[0].filename);
  if (missing) rmSync(archivePath); else writeFileSync(archivePath, 'changed');
  offer.items[0].name = 'Changed'; save();
  const before = readdirSync(dir);
  const sourceBytes = readFileSync(join(root, 'menu/marenda-items.json'), 'utf8');
  const manifestBytes = readFileSync(join(dir, 'manifest.json'), 'utf8');
  assert.throws(() => publish(root, firstTime), /Archive missing or modified/);
  assert.throws(() => verify(root), /Archive missing or modified/);
  assert.deepEqual(readdirSync(dir), before);
  assert.equal(readFileSync(join(root, 'menu/marenda-items.json'), 'utf8'), sourceBytes);
  assert.equal(readFileSync(join(dir, 'manifest.json'), 'utf8'), manifestBytes);
});

test('invalid JSON prices fail before publications or metadata are written', t => {
  const { root, menu, save } = fixture(t);
  menu.breakfast.price = -1; save();
  const before = readFileSync(join(root, 'menu/marenda-items.json'), 'utf8');
  assert.throws(() => publish(root, firstTime), /positive EUR/);
  assert.equal(readFileSync(join(root, 'menu/marenda-items.json'), 'utf8'), before);
  assert.deepEqual(readdirSync(join(root, 'menu')), ['marenda-items.json', 'menu-data.json']);
});

test('a missing manifest cannot silently replace an existing archive', t => {
  const { root } = fixture(t);
  publish(root, firstTime);
  const dir = join(root, 'public/cjenici');
  rmSync(join(dir, 'manifest.json'));
  const files = readdirSync(dir);
  assert.throws(() => publish(root, firstTime), /Archive manifest missing/);
  assert.deepEqual(readdirSync(dir), files);
});

test('export verification requires every old CSV and the current manifest', t => {
  const { root, offer, save, reload } = fixture(t);
  const first = publish(root, firstTime); reload();
  offer.items = []; save(); publish(root, firstTime);
  cpSync(join(root, 'public/cjenici'), join(root, 'out/cjenici'), { recursive: true });
  assert.equal(verifyExport(root).manifest.publications.length, 4);
  rmSync(join(root, 'out/cjenici', first.publications[0].filename));
  assert.throws(() => verifyExport(root), /Export archive missing or modified/);
});

test('restaurant dates respect Zagreb midnight and invalid calendar dates fail', () => {
  assert.equal(restaurantDate(new Date('2026-09-27T22:01:00Z')), '2026-09-28');
  assert.equal(validDate('2026-02-30'), false);
  assert.equal(validDate('2026-09-10'), true);
});

test('webpage clock refreshes across Zagreb midnight and hides stale offers including print', () => {
  let now = new Date('2026-09-27T21:59:00Z');
  class Clock extends Date { constructor(...args) { super(...(args.length ? args : [now])); } }
  const dateNode = { getAttribute: key => key === 'data-time-zone' ? 'Europe/Zagreb' : '', textContent: '' };
  const node = current => ({ hidden: !current, getAttribute: key => key === 'data-offer-date' ? '2026-09-27' : 'true', hasAttribute: key => current && key === 'data-daily-current' });
  const current = node(true), stale = node(false), print = node(true);
  const listeners = {}, intervals = [];
  runInNewContext(readFileSync('public/static-site.js', 'utf8'), { Intl, Date: Clock,
    document: { readyState: 'complete', querySelector: () => null, querySelectorAll: selector => selector === '[data-restaurant-date]' ? [dateNode] : selector.includes('data-daily-current') ? [current, stale, print] : [] },
    window: { setInterval: callback => intervals.push(callback), addEventListener: (event, callback) => { listeners[event] = callback; } } });
  assert.equal(dateNode.textContent, '27.09.26');
  assert.equal(current.hidden, false);
  now = new Date('2026-09-27T22:01:00Z');
  intervals[0]();
  assert.equal(dateNode.textContent, '28.09.26');
  assert.equal(current.hidden, true);
  assert.equal(stale.hidden, false);
  assert.equal(print.hidden, true);
  assert.equal(typeof listeners.beforeprint, 'function');
});

test('every guest language has complete pricing copy', () => {
  const keys = Object.keys(priceCopy.en).sort();
  assert.equal(Object.keys(priceCopy).length, 9);
  for (const copy of Object.values(priceCopy)) {
    assert.deepEqual(Object.keys(copy).sort(), keys);
    assert.ok(Object.values(copy).every(value => typeof value === 'string' && value.trim()));
  }
});

test('three fish tiers have exact prices and non-overlapping labels', () => {
  const { menu } = loadSources(process.cwd());
  const fish = menu.pages.flatMap(p => (p.sections || []).flatMap(s => s.items || []))
    .filter(i => i.id?.startsWith('bijela-riba-na-grillu'));
  assert.deepEqual(fish.map(i => i.price), [20, 21, 22]);
  assert.deepEqual(fish.map(i => i.referencePrice), [20, 21, 22]);
  assert.match(fish[0].name, /<300 g/);
  assert.match(fish[1].name, /300–349 g/);
  assert.match(fish[2].name, /≥350 g/);
});
