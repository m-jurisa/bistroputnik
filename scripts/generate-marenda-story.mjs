import { mkdir, readFile } from 'fs/promises';
import { dirname, join, resolve } from 'path';
import sharp from 'sharp';

const width = 1080;
const height = 1920;
const rootDir = resolve();
const marendaItemsPath = join(rootDir, 'menu', 'marenda-items.json');
const menuDataPath = join(rootDir, 'menu', 'menu-data.json');
const logoPath = join(rootDir, 'public', 'logo-primary.png');
const outputPath = join(rootDir, 'public', 'marenda-story.png');
const timeZone = 'Europe/Zagreb';
const language = 'en';

function escapeXml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
    };

    return entities[char];
  });
}

function cleanText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function wrapText(
  value,
  maxCharacters,
  { maxLines = Number.POSITIVE_INFINITY, truncate = true } = {}
) {
  const words = cleanText(value).split(' ').filter(Boolean);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxCharacters) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;

    if (lines.length === maxLines) {
      break;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  if (lines.length > maxLines) {
    lines.length = maxLines;
  }

  if (truncate && lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    const lastLine = lines[lines.length - 1];
    lines[lines.length - 1] =
      lastLine.length > 3 ? `${lastLine.slice(0, Math.max(0, maxCharacters - 3))}...` : lastLine;
  }

  return lines;
}

function textBlock({ x, y, lines, size, lineHeight, color, weight = 400, family = 'sans', anchor = 'start' }) {
  const fontFamily =
    family === 'display' ? "Georgia, 'DejaVu Serif', serif" : "'DejaVu Sans', Arial, sans-serif";

  return lines
    .map((line, index) => {
      const dy = index * lineHeight;

      return `<text x="${x}" y="${y + dy}" text-anchor="${anchor}" font-family="${fontFamily}" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeXml(line)}</text>`;
    })
    .join('');
}

function formatPrice(item) {
  if (item.priceDisplay) {
    return item.priceDisplay;
  }

  if (typeof item.price === 'number') {
    return `${item.price} \u20ac`;
  }

  return item.price || '';
}

function getLocalizedItem(item) {
  const translation = item.translations?.[language];

  return {
    ...item,
    name: translation?.name || item.name,
    description: translation?.description || item.description,
  };
}

function getStoryDate() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

function fitTextBlock({
  value,
  baseMaxCharacters,
  preferredSize,
  minSize,
  maxHeight,
  lineHeightRatio = 1.36,
}) {
  const text = cleanText(value);

  if (!text || maxHeight <= 0) {
    return { lines: [], size: preferredSize, lineHeight: Math.ceil(preferredSize * lineHeightRatio) };
  }

  for (let size = preferredSize; size >= minSize; size -= 1) {
    const maxCharacters = Math.max(22, Math.floor((baseMaxCharacters * preferredSize) / size));
    const lineHeight = Math.ceil(size * lineHeightRatio);
    const lines = wrapText(text, maxCharacters, { truncate: false });

    if (lines.length * lineHeight <= maxHeight) {
      return { lines, size, lineHeight };
    }
  }

  const lineHeight = Math.ceil(minSize * lineHeightRatio);
  const maxLines = Math.max(1, Math.floor(maxHeight / lineHeight));
  const maxCharacters = Math.max(22, Math.floor((baseMaxCharacters * preferredSize) / minSize));

  return {
    lines: wrapText(text, maxCharacters, { maxLines }),
    size: minSize,
    lineHeight,
  };
}

function buildItemRows(items) {
  const top = 730;
  const availableHeight = 890;
  const rowHeight = Math.floor(availableHeight / items.length);
  const hasRoomyRows = items.length <= 3;
  const hasModerateRows = items.length <= 4;
  const titleMaxLines = items.length <= 4 ? 2 : 1;
  const titleSize = hasModerateRows ? 45 : 39;
  const titleLineHeight = hasModerateRows ? 50 : 44;
  const titleMaxCharacters = hasRoomyRows ? 22 : hasModerateRows ? 19 : 17;
  const descriptionPreferredSize = hasRoomyRows ? 25 : hasModerateRows ? 22 : 20;
  const descriptionMinSize = hasRoomyRows ? 18 : hasModerateRows ? 15 : 13;
  const descriptionMaxCharacters = hasRoomyRows ? 37 : hasModerateRows ? 32 : 28;
  const titleY = hasRoomyRows ? 50 : hasModerateRows ? 42 : 38;
  const headerCenterY = hasRoomyRows ? 52 : hasModerateRows ? 44 : 40;
  const descriptionGap = hasRoomyRows ? 42 : hasModerateRows ? 26 : 20;
  const rowBottomPadding = hasRoomyRows ? 28 : hasModerateRows ? 18 : 14;
  const priceX = 880;
  const priceWidth = 176;
  const priceHeight = 70;
  const priceY = headerCenterY - priceHeight / 2;

  return items
    .map((item, index) => {
      const y = top + index * rowHeight;
      const titleLines = wrapText(item.name, titleMaxCharacters, { maxLines: titleMaxLines });
      const descriptionY = y + titleY + titleLines.length * titleLineHeight + descriptionGap;
      const rowBottom = y + rowHeight - rowBottomPadding;
      const description = fitTextBlock({
        value: item.description,
        baseMaxCharacters: descriptionMaxCharacters,
        preferredSize: descriptionPreferredSize,
        minSize: descriptionMinSize,
        maxHeight: rowBottom - descriptionY,
      });
      const price = formatPrice(item);
      const separator =
        index === 0
          ? ''
          : '<line x1="112" y1="' +
            (y - 18) +
            '" x2="968" y2="' +
            (y - 18) +
            '" stroke="rgba(228,201,149,0.22)" stroke-width="2"/>';

      return `
        ${separator}
        <circle cx="154" cy="${y + headerCenterY}" r="34" fill="#e4c995"/>
        <text x="154" y="${y + headerCenterY}" text-anchor="middle" dominant-baseline="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="34" font-weight="700" fill="#103F4D">${index + 1}</text>
        ${textBlock({
          x: 210,
          y: y + titleY,
          lines: titleLines,
          size: titleSize,
          lineHeight: titleLineHeight,
          color: '#f6e8c4',
          weight: 700,
          family: 'display',
        })}
        ${
          description.lines.length
            ? textBlock({
                x: 210,
                y: descriptionY,
                lines: description.lines,
                size: description.size,
                lineHeight: description.lineHeight,
                color: '#dce6e5',
                weight: 400,
              })
            : ''
        }
        <rect x="${priceX - priceWidth / 2}" y="${y + priceY}" width="${priceWidth}" height="${priceHeight}" rx="35" fill="#fbf4e3"/>
        <text x="${priceX}" y="${y + headerCenterY}" text-anchor="middle" dominant-baseline="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="32" font-weight="800" fill="#103F4D">${escapeXml(price)}</text>
      `;
    })
    .join('');
}

function buildSvg({ brand, business, items, logoBase64 }) {
  const offerDate = getStoryDate();
  const location = business.venueAddress || brand.location || 'Baska Voda';
  const footerLine = [business.phone, 'bistroputnik.com'].filter(Boolean).join(' | ');
  const itemRows = buildItemRows(items);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#082830"/>
        <stop offset="0.48" stop-color="#103F4D"/>
        <stop offset="1" stop-color="#2A6A78"/>
      </linearGradient>
      <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(255,255,255,0.12)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0.05)"/>
      </linearGradient>
      <pattern id="diagonal" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(24)">
        <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(255,255,255,0.055)" stroke-width="2"/>
      </pattern>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#041318" flood-opacity="0.28"/>
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#background)"/>
    <rect width="${width}" height="${height}" fill="url(#diagonal)" opacity="0.72"/>
    <path d="M0 1480 C220 1390 420 1505 650 1432 C850 1368 1010 1432 1080 1388 L1080 1920 L0 1920 Z" fill="#06252d" opacity="0.42"/>
    <path d="M0 1590 C275 1492 395 1648 665 1552 C870 1480 990 1542 1080 1510 L1080 1920 L0 1920 Z" fill="#e4c995" opacity="0.08"/>
    <rect x="64" y="72" width="12" height="1720" rx="6" fill="#e4c995"/>
    <rect x="94" y="636" width="892" height="1036" rx="36" fill="url(#panel)" stroke="rgba(228,201,149,0.34)" stroke-width="2" filter="url(#shadow)"/>

    <image href="data:image/png;base64,${logoBase64}" x="270" y="80" width="540" height="276" preserveAspectRatio="xMidYMid meet"/>

    <text x="540" y="432" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="27" font-weight="800" letter-spacing="8" fill="#f6e8c4">DAILY OFFER</text>
    <text x="540" y="538" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="112" font-weight="700" fill="#f6e8c4">MARENDA</text>
    <text x="540" y="596" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="28" font-weight="600" fill="#dce6e5">${escapeXml(offerDate)}</text>
    <text x="540" y="688" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5" fill="#e4c995">TODAY FROM THE KITCHEN</text>

    ${itemRows}

    <text x="540" y="1736" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="25" font-weight="700" fill="#f6e8c4">${escapeXml(brand.name || 'Bistro Putnik')}</text>
    <text x="540" y="1782" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="22" font-weight="500" fill="#dce6e5">${escapeXml(location)}</text>
    <text x="540" y="1828" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="22" font-weight="700" fill="#fbf4e3">${escapeXml(footerLine)}</text>
    <text x="540" y="1878" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="20" font-weight="600" fill="#b8c7c9">Available today or until the daily quantity is sold out.</text>
  </svg>`;
}

async function main() {
  const [marendaItemsBuffer, menuDataBuffer, logoBuffer] = await Promise.all([
    readFile(marendaItemsPath),
    readFile(menuDataPath),
    readFile(logoPath),
  ]);
  const marendaItems = JSON.parse(marendaItemsBuffer.toString('utf8'));
  const menuData = JSON.parse(menuDataBuffer.toString('utf8'));
  const items = Array.isArray(marendaItems.items)
    ? marendaItems.items.filter((item) => cleanText(item.name)).map(getLocalizedItem)
    : [];

  if (!items.length) {
    throw new Error(`No marenda items found in ${marendaItemsPath}.`);
  }

  const svg = buildSvg({
    brand: menuData.brand || {},
    business: menuData.business || {},
    items: items.slice(0, 6),
    logoBase64: logoBuffer.toString('base64'),
  });

  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(Buffer.from(svg)).resize(width, height, { fit: 'fill' }).png().toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();
  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(`Expected ${width}x${height}, got ${metadata.width}x${metadata.height}.`);
  }

  console.log(`Generated ${outputPath} (${metadata.width}x${metadata.height}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
