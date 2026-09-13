import { mkdir, readFile } from 'fs/promises';
import { dirname, join, resolve } from 'path';
import sharp from 'sharp';

const rootDir = resolve();
const menuDataPath = join(rootDir, 'menu', 'menu-data.json');
const logoPath = join(rootDir, 'public', 'logo-primary.png');
const outputDir = join(rootDir, 'social', 'output', 'carousels');
const width = 1080;
const height = 1080;
const language = 'en';

const palette = {
  tealDark: '#082830',
  teal: '#103F4D',
  tealLight: '#2A6A78',
  sand: '#E4C995',
  cream: '#FBF4E3',
  mist: '#DCE6E5',
  muted: '#B8C7C9',
};

const carouselDefinitions = [
  {
    id: 'croatian-traditional-dishes',
    slides: [
      {
        layout: 'cover',
        eyebrow: 'Croatian Food Guide',
        title: 'Croatian Traditional Dishes',
        body:
          'A simple guide to coastal flavors, slow cooking and grill culture at Bistro Putnik in Baška Voda.',
      },
      {
        layout: 'left',
        eyebrow: 'The Dalmatian Table',
        title: 'Coast, Fire and Slow Cooking',
        body:
          'Olive oil, wine, herbs, seafood and slow-cooked meat shape many traditional dishes along the Croatian coast.',
      },
      {
        layout: 'right',
        eyebrow: 'Two Rhythms',
        title: 'From Grill to Pot',
        body:
          'Some classics are cooked quickly over fire. Others, like pašticada, build flavor slowly through sauce and time.',
      },
      {
        layout: 'dish',
        eyebrow: 'On Our Menu',
        title: 'Taste the Tradition',
        body:
          'Look for Dalmatian pašticada, grilled fish, ćevapi and Slavonian grill sausage on our English menu.',
      },
    ],
  },
  {
    id: 'cevapi',
    dishId: 'cevapi-uz-dollar-chips-i-vrhnje',
    slides: [
      {
        layout: 'cover',
        eyebrow: 'Croatian Grill',
        title: 'What Are Ćevapi?',
        body:
          'Ćevapi are small grilled minced-meat rolls, loved for a juicy bite and smoky grill flavor.',
      },
      {
        layout: 'right',
        eyebrow: 'Why People Order Them',
        title: 'Simple, Direct, Satisfying',
        body:
          'The appeal is clear: grilled meat, crisp potatoes and a creamy side. It is relaxed food with strong grill character.',
      },
      {
        layout: 'dish',
        eyebrow: 'At Bistro Putnik',
        titleFromDish: true,
        body: 'Served with dollar chips and sour cream.',
        priceFromDish: true,
      },
      {
        layout: 'left',
        eyebrow: 'Good To Know',
        title: 'A Grill Plate For Any Day',
        body:
          'Choose ćevapi when you want something familiar, hearty and easy to share after the beach.',
      },
    ],
  },
  {
    id: 'dalmatian-pasticada',
    dishId: 'dalmatinska-pasticada',
    slides: [
      {
        layout: 'cover',
        eyebrow: 'Dalmatian Classic',
        title: 'What Is Pašticada?',
        body:
          'Pašticada is a traditional Dalmatian beef dish known for slow cooking, deep sauce and a festive home-style feel.',
      },
      {
        layout: 'left',
        eyebrow: 'The Flavor',
        title: 'Built Slowly',
        body:
          'Its depth comes from time: beef, wine, vegetables, aromatics and a rich sauce cooked until everything comes together.',
      },
      {
        layout: 'dish',
        eyebrow: 'At Bistro Putnik',
        titleFromDish: true,
        bodyFromDish: true,
        priceFromDish: true,
      },
      {
        layout: 'right',
        eyebrow: 'Best For',
        title: 'A Croatian Comfort Dish',
        body:
          'Order pašticada when you want a classic Croatian plate with more depth than a quick grill dish.',
      },
    ],
  },
  {
    id: 'croatian-grilled-sausages',
    dishId: 'dvije-kobasice-uz-krumpir-s-povrcem',
    slides: [
      {
        layout: 'cover',
        eyebrow: 'Croatian Grill',
        title: 'Croatian Grilled Sausages',
        body:
          'A hearty grill classic, often connected with inland Croatian and Slavonian flavors.',
      },
      {
        layout: 'left',
        eyebrow: 'What Makes Them Good',
        title: 'Hot Grill, Clear Flavor',
        body:
          'Good sausage needs balanced seasoning, a hot grill and a side that keeps the plate simple.',
      },
      {
        layout: 'dish',
        eyebrow: 'At Bistro Putnik',
        titleFromDish: true,
        body: 'A Slavonian-style grill plate served with a side dish.',
        priceFromDish: true,
      },
      {
        layout: 'right',
        eyebrow: 'For Grill Lovers',
        title: 'Local Character Without Heavy Sauce',
        body:
          'Choose grilled sausage when you want a direct, satisfying plate with Croatian grill character.',
      },
    ],
  },
];

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

function wrapText(value, maxCharacters, { maxLines = Number.POSITIVE_INFINITY, truncate = true } = {}) {
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

function fitTextBlock({
  value,
  baseMaxCharacters,
  preferredSize,
  minSize,
  maxHeight,
  lineHeightRatio = 1.16,
  maxLines = Number.POSITIVE_INFINITY,
}) {
  const text = cleanText(value);

  if (!text || maxHeight <= 0) {
    return { lines: [], size: preferredSize, lineHeight: Math.ceil(preferredSize * lineHeightRatio) };
  }

  for (let size = preferredSize; size >= minSize; size -= 1) {
    const maxCharacters = Math.max(8, Math.floor((baseMaxCharacters * preferredSize) / size));
    const lineHeight = Math.ceil(size * lineHeightRatio);
    const allLines = wrapText(text, maxCharacters, { truncate: false });

    if (allLines.length <= maxLines && allLines.length * lineHeight <= maxHeight) {
      return { lines: allLines, size, lineHeight };
    }
  }

  const lineHeight = Math.ceil(minSize * lineHeightRatio);
  const fittedLines = Math.max(1, Math.min(maxLines, Math.floor(maxHeight / lineHeight)));
  const maxCharacters = Math.max(8, Math.floor((baseMaxCharacters * preferredSize) / minSize));

  return {
    lines: wrapText(text, maxCharacters, { maxLines: fittedLines }),
    size: minSize,
    lineHeight,
  };
}

function textBlock({
  x,
  y,
  lines,
  size,
  lineHeight,
  color,
  weight = 400,
  family = 'sans',
  anchor = 'start',
}) {
  const fontFamily =
    family === 'display' ? "Georgia, 'DejaVu Serif', serif" : "'DejaVu Sans', Arial, sans-serif";

  return lines
    .map((line, index) => {
      const dy = index * lineHeight;

      return `<text x="${x}" y="${y + dy}" text-anchor="${anchor}" font-family="${fontFamily}" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeXml(line)}</text>`;
    })
    .join('');
}

function getLocalizedValue(entity, key) {
  return entity.translations?.[language]?.[key] || entity[key] || '';
}

function formatPrice(item) {
  if (item.priceDisplay) {
    return cleanText(item.priceDisplay).replace(/\s*€$/, ' €');
  }

  if (typeof item.price === 'number') {
    return `${item.price} €`;
  }

  return cleanText(item.price);
}

function collectDishes(menuData) {
  const dishes = new Map();

  for (const page of menuData.pages || []) {
    for (const section of page.sections || []) {
      for (const item of section.items || []) {
        dishes.set(item.id, {
          ...item,
          name: getLocalizedValue(item, 'name'),
          description: getLocalizedValue(item, 'description'),
          sectionTitle: getLocalizedValue(section, 'title'),
          priceDisplay: formatPrice(item),
        });
      }
    }
  }

  return dishes;
}

function resolveSlide(slide, dish) {
  return {
    layout: slide.layout || 'left',
    eyebrow: slide.eyebrow,
    title: slide.titleFromDish ? dish?.name || '' : slide.title,
    body: slide.bodyFromDish ? dish?.description || '' : slide.body,
    price: slide.priceFromDish ? dish?.priceDisplay || '' : '',
  };
}

function background({ layout }) {
  const panel =
    layout === 'dish'
      ? '<rect x="60" y="292" width="960" height="614" rx="34" fill="url(#band)" stroke="rgba(228,201,149,0.36)" stroke-width="2"/>'
      : layout === 'cover'
        ? '<rect x="72" y="292" width="936" height="614" rx="34" fill="url(#band)" stroke="rgba(228,201,149,0.36)" stroke-width="2"/>'
        : layout === 'right'
          ? '<rect x="274" y="292" width="734" height="614" rx="34" fill="url(#band)" stroke="rgba(228,201,149,0.36)" stroke-width="2"/><rect x="72" y="292" width="150" height="614" rx="34" fill="rgba(228,201,149,0.11)" stroke="rgba(228,201,149,0.22)" stroke-width="2"/>'
          : '<rect x="72" y="292" width="734" height="614" rx="34" fill="url(#band)" stroke="rgba(228,201,149,0.36)" stroke-width="2"/><rect x="858" y="292" width="150" height="614" rx="34" fill="rgba(228,201,149,0.11)" stroke="rgba(228,201,149,0.22)" stroke-width="2"/>';

  return `
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${palette.tealDark}"/>
        <stop offset="0.5" stop-color="${palette.teal}"/>
        <stop offset="1" stop-color="${palette.tealLight}"/>
      </linearGradient>
      <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(255,255,255,0.12)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0.05)"/>
      </linearGradient>
      <pattern id="diagonal" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(24)">
        <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(255,255,255,0.055)" stroke-width="2"/>
      </pattern>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#background)"/>
    <rect width="${width}" height="${height}" fill="url(#diagonal)" opacity="0.72"/>
    ${panel}
  `;
}

function priceBadge(price, { x = 812, y = 812 } = {}) {
  if (!price) {
    return '';
  }

  return `
    <rect x="${x - 95}" y="${y - 37}" width="190" height="74" rx="37" fill="${palette.cream}"/>
    <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="34" font-weight="800" fill="${palette.teal}">${escapeXml(
      price
    )}</text>
  `;
}

function photoFrame() {
  return `
    <rect x="632" y="414" width="300" height="300" rx="30" fill="rgba(251,244,227,0.09)" stroke="${palette.sand}" stroke-width="3" stroke-dasharray="12 12"/>
    <line x1="662" y1="684" x2="902" y2="444" stroke="rgba(228,201,149,0.28)" stroke-width="2"/>
    <line x1="662" y1="444" x2="902" y2="684" stroke="rgba(228,201,149,0.28)" stroke-width="2"/>
  `;
}

function getLayoutSettings(layout, hasPrice) {
  if (layout === 'cover') {
    return {
      x: 132,
      y: 480,
      widthCharacters: 18,
      titlePreferred: 78,
      titleMin: 42,
      titleMaxHeight: 190,
      titleMaxLines: 2,
      bodyMaxHeight: 170,
      bodyCharacters: 36,
      bodyMaxLines: 4,
      anchor: 'middle',
      centerX: 540,
      maxBodyBottom: 820,
    };
  }

  if (layout === 'dish') {
    return {
      x: 112,
      y: 466,
      widthCharacters: 13,
      titlePreferred: 54,
      titleMin: 31,
      titleMaxHeight: 180,
      titleMaxLines: 3,
      bodyMaxHeight: 148,
      bodyCharacters: 23,
      bodyMaxLines: hasPrice ? 3 : 4,
      anchor: 'start',
      maxBodyBottom: hasPrice ? 760 : 820,
    };
  }

  if (layout === 'right') {
    return {
      x: 326,
      y: 464,
      widthCharacters: 20,
      titlePreferred: 68,
      titleMin: 38,
      titleMaxHeight: 212,
      titleMaxLines: 3,
      bodyMaxHeight: 210,
      bodyCharacters: 31,
      bodyMaxLines: hasPrice ? 4 : 5,
      anchor: 'start',
      maxBodyBottom: hasPrice ? 760 : 838,
    };
  }

  return {
    x: 112,
    y: 464,
    widthCharacters: 20,
    titlePreferred: 68,
    titleMin: 38,
    titleMaxHeight: 212,
    titleMaxLines: 3,
    bodyMaxHeight: 210,
    bodyCharacters: 31,
    bodyMaxLines: hasPrice ? 4 : 5,
    anchor: 'start',
    maxBodyBottom: hasPrice ? 760 : 838,
  };
}

function renderSlide({ carousel, slide, brand, business, logoBase64 }) {
  const layout = slide.layout || 'left';
  const settings = getLayoutSettings(layout, Boolean(slide.price));
  const titleY = settings.y;
  const title = fitTextBlock({
    value: slide.title,
    baseMaxCharacters: settings.widthCharacters,
    preferredSize: settings.titlePreferred,
    minSize: settings.titleMin,
    maxHeight: settings.titleMaxHeight,
    lineHeightRatio: 1.02,
    maxLines: settings.titleMaxLines,
  });
  const bodyY = titleY + title.lines.length * title.lineHeight + (layout === 'cover' ? 54 : 38);
  const bodyBottom = Math.min(settings.maxBodyBottom, bodyY + settings.bodyMaxHeight);
  const body = fitTextBlock({
    value: slide.body,
    baseMaxCharacters: settings.bodyCharacters,
    preferredSize: layout === 'cover' ? 33 : 30,
    minSize: 23,
    maxHeight: bodyBottom - bodyY,
    lineHeightRatio: 1.3,
    maxLines: settings.bodyMaxLines,
  });
  const footerLine = [business.phone, 'bistroputnik.com'].filter(Boolean).join(' | ');
  const eyebrowX = layout === 'right' ? 326 : 112;
  const ruleX1 = layout === 'right' ? 326 : 112;
  const ruleX2 = layout === 'left' ? 768 : layout === 'right' ? 968 : 968;
  const titleX = settings.anchor === 'middle' ? settings.centerX : settings.x;
  const bodyX = settings.anchor === 'middle' ? settings.centerX : settings.x;
  const price =
    layout === 'dish'
      ? priceBadge(slide.price, { x: 242, y: 814 })
      : priceBadge(slide.price, { x: layout === 'right' ? 838 : 684, y: 812 });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${background({ layout })}

    <image href="data:image/png;base64,${logoBase64}" x="382" y="72" width="316" height="162" preserveAspectRatio="xMidYMid meet"/>

    <text x="${eyebrowX}" y="354" font-family="'DejaVu Sans', Arial, sans-serif" font-size="22" font-weight="800" letter-spacing="6" fill="${palette.sand}">${escapeXml(
      slide.eyebrow.toUpperCase()
    )}</text>
    <line x1="${ruleX1}" y1="388" x2="${ruleX2}" y2="388" stroke="${palette.sand}" stroke-width="2" opacity="0.78"/>
    ${layout === 'dish' ? photoFrame() : ''}

    ${textBlock({
      x: titleX,
      y: titleY,
      lines: title.lines,
      size: title.size,
      lineHeight: title.lineHeight,
      color: palette.cream,
      weight: 700,
      family: 'display',
      anchor: settings.anchor,
    })}
    ${textBlock({
      x: bodyX,
      y: bodyY,
      lines: body.lines,
      size: body.size,
      lineHeight: body.lineHeight,
      color: palette.mist,
      weight: 500,
      anchor: settings.anchor,
    })}
    ${price}

    <text x="112" y="992" font-family="'DejaVu Sans', Arial, sans-serif" font-size="24" font-weight="800" fill="${palette.cream}">${escapeXml(
      brand.name || 'Bistro Putnik'
    )}</text>
    <text x="112" y="1028" font-family="'DejaVu Sans', Arial, sans-serif" font-size="21" font-weight="700" fill="${palette.cream}">${escapeXml(
      footerLine
    )}</text>
    <text x="968" y="1028" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="20" font-weight="700" fill="${palette.muted}">${escapeXml(
      carousel.id.replace(/-/g, ' ')
    )}</text>
  </svg>`;
}

async function renderPng({ svg, outputPath }) {
  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(Buffer.from(svg)).resize(width, height, { fit: 'fill' }).png().toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();

  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(`Expected ${width}x${height}, got ${metadata.width}x${metadata.height}.`);
  }
}

async function main() {
  const [menuDataBuffer, logoBuffer] = await Promise.all([readFile(menuDataPath), readFile(logoPath)]);
  const menuData = JSON.parse(menuDataBuffer.toString('utf8'));
  const dishes = collectDishes(menuData);
  const outputs = [];

  for (const carousel of carouselDefinitions) {
    const dish = carousel.dishId ? dishes.get(carousel.dishId) : null;

    if (carousel.dishId && !dish) {
      throw new Error(`Dish ${carousel.dishId} was not found.`);
    }

    for (const [slideIndex, slideDefinition] of carousel.slides.entries()) {
      const slide = resolveSlide(slideDefinition, dish);
      const svg = renderSlide({
        carousel,
        slide,
        brand: menuData.brand || {},
        business: menuData.business || {},
        logoBase64: logoBuffer.toString('base64'),
      });
      const outputPath = join(
        outputDir,
        carousel.id,
        `${String(slideIndex + 1).padStart(2, '0')}-${carousel.id}.png`
      );

      await renderPng({ svg, outputPath });
      outputs.push(outputPath);
    }
  }

  console.log(`Generated ${outputs.length} carousel slides.`);
  for (const output of outputs) {
    console.log(output);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
