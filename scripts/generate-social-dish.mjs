import { access, mkdir, readFile } from 'fs/promises';
import { dirname, extname, join, resolve } from 'path';
import sharp from 'sharp';

const rootDir = resolve();
const menuDataPath = join(rootDir, 'menu', 'menu-data.json');
const logoPath = join(rootDir, 'public', 'logo-primary.png');
const defaultImageDir = join(rootDir, 'social', 'assets', 'dishes');
const defaultOutputDir = join(rootDir, 'social', 'output');

const palette = {
  tealDark: '#082830',
  teal: '#103F4D',
  tealLight: '#2A6A78',
  sand: '#E4C995',
  cream: '#FBF4E3',
  mist: '#DCE6E5',
  muted: '#B8C7C9',
};

const formats = {
  square: {
    width: 1080,
    height: 1080,
    imageHeight: 560,
    bandY: 560,
    logo: { x: 62, y: 50, width: 248, height: 126 },
    noImageLogo: { x: 270, y: 112, width: 540, height: 276 },
    eyebrowY: 638,
    titleY: 728,
    descriptionY: 842,
    price: { x: 864, y: 654, width: 170, height: 68 },
    footerY: 1018,
  },
  story: {
    width: 1080,
    height: 1920,
    imageHeight: 940,
    bandY: 940,
    logo: { x: 68, y: 72, width: 286, height: 146 },
    noImageLogo: { x: 270, y: 104, width: 540, height: 276 },
    eyebrowY: 1058,
    titleY: 1192,
    descriptionY: 1372,
    price: { x: 838, y: 1052, width: 190, height: 76 },
    footerY: 1794,
  },
};

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

function slugify(value) {
  return cleanText(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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
  lineHeightRatio = 1.18,
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

function parseArgs(argv) {
  const args = {
    dish: '',
    language: 'en',
    outputDir: defaultOutputDir,
    imagePath: '',
    variant: 'both',
    list: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else if (arg === '--list') {
      args.list = true;
    } else if (arg === '--dish' || arg === '-d') {
      args.dish = next || '';
      index += 1;
    } else if (arg.startsWith('--dish=')) {
      args.dish = arg.slice('--dish='.length);
    } else if (arg === '--lang' || arg === '--language' || arg === '-l') {
      args.language = next || 'en';
      index += 1;
    } else if (arg.startsWith('--lang=')) {
      args.language = arg.slice('--lang='.length);
    } else if (arg === '--image' || arg === '-i') {
      args.imagePath = next ? resolve(next) : '';
      index += 1;
    } else if (arg.startsWith('--image=')) {
      args.imagePath = resolve(arg.slice('--image='.length));
    } else if (arg === '--output' || arg === '-o') {
      args.outputDir = next ? resolve(next) : defaultOutputDir;
      index += 1;
    } else if (arg.startsWith('--output=')) {
      args.outputDir = resolve(arg.slice('--output='.length));
    } else if (arg === '--variant') {
      args.variant = next || 'both';
      index += 1;
    } else if (arg.startsWith('--variant=')) {
      args.variant = arg.slice('--variant='.length);
    }
  }

  return args;
}

function usage() {
  return `
Generate social PNGs for one menu dish.

Usage:
  npm run generate:social-dish -- --dish salata-od-hobotnice
  npm run generate:social-dish -- --dish "Octopus salad" --image social/assets/dishes/octopus.jpg

Options:
  --dish, -d       Dish id or name to render
  --lang, -l       Language code, defaults to en
  --image, -i      Optional image path
  --output, -o     Output folder, defaults to social/output
  --variant        square, story, or both
  --list           Print available dish ids
`;
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

function getLocalizedValue(entity, key, language) {
  return entity.translations?.[language]?.[key] || entity[key] || '';
}

function collectDishes(menuData, language) {
  const dishes = [];

  for (const page of menuData.pages || []) {
    for (const section of page.sections || []) {
      for (const item of section.items || []) {
        const name = getLocalizedValue(item, 'name', language);
        const fallbackName = item.name || '';
        const description = getLocalizedValue(item, 'description', language);
        const sectionTitle = getLocalizedValue(section, 'title', language);

        dishes.push({
          ...item,
          id: item.id,
          slug: slugify(item.id || name || fallbackName),
          name,
          fallbackName,
          description,
          sectionTitle,
          priceDisplay: formatPrice(item),
        });
      }
    }
  }

  return dishes;
}

function findDish(dishes, query) {
  const normalizedQuery = slugify(query);
  const exactMatches = dishes.filter(
    (dish) =>
      dish.id === query ||
      dish.slug === normalizedQuery ||
      slugify(dish.name) === normalizedQuery ||
      slugify(dish.fallbackName) === normalizedQuery
  );

  if (exactMatches.length === 1) {
    return exactMatches[0];
  }

  if (exactMatches.length > 1) {
    throw new Error(
      `Dish query "${query}" matched multiple dishes: ${exactMatches
        .slice(0, 8)
        .map((dish) => dish.id)
        .join(', ')}. Use an exact id.`
    );
  }

  const partialMatches = dishes.filter((dish) => {
    const haystack = [dish.id, dish.slug, dish.name, dish.fallbackName].map(slugify).join(' ');
    return haystack.includes(normalizedQuery);
  });

  if (partialMatches.length === 1) {
    return partialMatches[0];
  }

  if (partialMatches.length > 1) {
    throw new Error(
      `Dish query "${query}" matched multiple dishes: ${partialMatches
        .slice(0, 8)
        .map((dish) => `${dish.id} (${dish.name})`)
        .join(', ')}. Use an exact id.`
    );
  }

  const suggestions = dishes
    .filter((dish) => slugify(dish.name).includes(normalizedQuery.slice(0, 5)))
    .slice(0, 8)
    .map((dish) => `${dish.id} (${dish.name})`);

  throw new Error(
    [`Dish "${query}" was not found.`, suggestions.length ? `Possible matches: ${suggestions.join(', ')}` : 'Run with --list to see dish ids.'].join(
      ' '
    )
  );
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function findAutomaticImage(dishId) {
  for (const extension of ['.jpg', '.jpeg', '.png', '.webp']) {
    const candidate = join(defaultImageDir, `${dishId}${extension}`);

    if (await fileExists(candidate)) {
      return candidate;
    }
  }

  return '';
}

async function imageToDataUri(imagePath) {
  if (!imagePath) {
    return '';
  }

  const buffer = await sharp(imagePath).rotate().jpeg({ quality: 88 }).toBuffer();

  return `data:image/jpeg;base64,${buffer.toString('base64')}`;
}

function priceBadge({ x, y, width, height, price }) {
  return `
    <rect x="${x - width / 2}" y="${y - height / 2}" width="${width}" height="${height}" rx="${height / 2}" fill="${palette.cream}"/>
    <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="${Math.round(
      height * 0.43
    )}" font-weight="800" fill="${palette.teal}">${escapeXml(price)}</text>
  `;
}

function background({ width, height, withImage }) {
  const noImageAccent =
    withImage
      ? ''
      : `
        <path d="M0 ${Math.round(height * 0.73)} C${Math.round(width * 0.22)} ${Math.round(
          height * 0.66
        )} ${Math.round(width * 0.4)} ${Math.round(height * 0.82)} ${Math.round(width * 0.62)} ${Math.round(
          height * 0.72
        )} C${Math.round(width * 0.78)} ${Math.round(height * 0.65)} ${Math.round(width * 0.92)} ${Math.round(
          height * 0.72
        )} ${width} ${Math.round(height * 0.68)} L${width} ${height} L0 ${height} Z" fill="#06252d" opacity="0.42"/>
        <path d="M0 ${Math.round(height * 0.82)} C${Math.round(width * 0.24)} ${Math.round(
          height * 0.76
        )} ${Math.round(width * 0.42)} ${Math.round(height * 0.9)} ${Math.round(width * 0.66)} ${Math.round(
          height * 0.8
        )} C${Math.round(width * 0.82)} ${Math.round(height * 0.74)} ${Math.round(width * 0.94)} ${Math.round(
          height * 0.79
        )} ${width} ${Math.round(height * 0.76)} L${width} ${height} L0 ${height} Z" fill="${palette.sand}" opacity="0.08"/>
      `;

  return `
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${palette.tealDark}"/>
        <stop offset="0.5" stop-color="${palette.teal}"/>
        <stop offset="1" stop-color="${palette.tealLight}"/>
      </linearGradient>
      <linearGradient id="imageShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#041318" stop-opacity="0.14"/>
        <stop offset="0.68" stop-color="#041318" stop-opacity="0.12"/>
        <stop offset="1" stop-color="#041318" stop-opacity="0.64"/>
      </linearGradient>
      <pattern id="diagonal" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(24)">
        <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(255,255,255,0.055)" stroke-width="2"/>
      </pattern>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#background)"/>
    <rect width="${width}" height="${height}" fill="url(#diagonal)" opacity="0.72"/>
    ${noImageAccent}
  `;
}

function buildPhotoLayer({ format, imageDataUri }) {
  if (!imageDataUri) {
    return '';
  }

  return `
    <image href="${imageDataUri}" x="0" y="0" width="${format.width}" height="${format.imageHeight}" preserveAspectRatio="xMidYMid slice"/>
    <rect x="0" y="0" width="${format.width}" height="${format.imageHeight}" fill="url(#imageShade)"/>
  `;
}

function fitTitle(name, variant) {
  if (variant === 'story') {
    return fitTextBlock({
      value: name,
      baseMaxCharacters: 17,
      preferredSize: 88,
      minSize: 42,
      maxHeight: 250,
      lineHeightRatio: 1.02,
      maxLines: 3,
    });
  }

  return fitTextBlock({
    value: name,
    baseMaxCharacters: 19,
    preferredSize: 68,
    minSize: 36,
    maxHeight: 200,
    lineHeightRatio: 1.04,
    maxLines: 3,
  });
}

function fitDescription(description, variant) {
  if (variant === 'story') {
    return fitTextBlock({
      value: description,
      baseMaxCharacters: 34,
      preferredSize: 36,
      minSize: 25,
      maxHeight: 260,
      lineHeightRatio: 1.32,
      maxLines: 6,
    });
  }

  return fitTextBlock({
    value: description,
    baseMaxCharacters: 39,
    preferredSize: 30,
    minSize: 21,
    maxHeight: 150,
    lineHeightRatio: 1.32,
    maxLines: 4,
  });
}

function renderSocialSvg({ dish, brand, business, logoBase64, imageDataUri, variant }) {
  const format = formats[variant];
  const hasImage = Boolean(imageDataUri);
  const title = fitTitle(dish.name, variant);
  const description = fitDescription(dish.description, variant);
  const location = business.venueAddress || brand.location || 'Baška Voda';
  const website = business.website === 'epiphany-tsc.hr' ? 'bistroputnik.com' : business.website || 'bistroputnik.com';
  const sectionLabel = cleanText(dish.sectionTitle || 'From our menu').toUpperCase();
  const footerLine = [business.phone, website].filter(Boolean).join(' | ');
  const contentX = variant === 'story' ? 96 : 72;
  const contentWidth = variant === 'story' ? 888 : 936;
  const titleLines = textBlock({
    x: contentX,
    y: format.titleY,
    lines: title.lines,
    size: title.size,
    lineHeight: title.lineHeight,
    color: palette.cream,
    weight: 700,
    family: 'display',
  });
  const descriptionLines = textBlock({
    x: contentX,
    y: format.descriptionY,
    lines: description.lines,
    size: description.size,
    lineHeight: description.lineHeight,
    color: palette.mist,
    weight: 500,
  });
  const logo = hasImage ? format.logo : format.noImageLogo;
  const textBandFill = hasImage ? '#082830' : 'rgba(255,255,255,0.075)';
  const textBandOpacity = hasImage ? 0.95 : 1;
  const headerLogoOpacity = hasImage ? 1 : 0.9;
  const detailY = variant === 'story' ? 1668 : 952;
  const footerSize = variant === 'story' ? 28 : 24;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${format.width}" height="${format.height}" viewBox="0 0 ${format.width} ${format.height}">
    ${background({ width: format.width, height: format.height, withImage: hasImage })}
    ${buildPhotoLayer({ format, imageDataUri })}

    <image href="data:image/png;base64,${logoBase64}" x="${logo.x}" y="${logo.y}" width="${logo.width}" height="${logo.height}" preserveAspectRatio="xMidYMid meet" opacity="${headerLogoOpacity}"/>

    <rect x="0" y="${format.bandY}" width="${format.width}" height="${format.height - format.bandY}" fill="${textBandFill}" opacity="${textBandOpacity}"/>
    <rect x="${contentX}" y="${format.bandY + 42}" width="${contentWidth}" height="2" fill="${palette.sand}" opacity="0.78"/>

    <text x="${contentX}" y="${format.eyebrowY}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="${variant === 'story' ? 27 : 22}" font-weight="800" letter-spacing="7" fill="${palette.sand}">${escapeXml(sectionLabel)}</text>
    ${titleLines}
    ${descriptionLines}
    ${priceBadge({
      x: format.price.x,
      y: format.price.y,
      width: format.price.width,
      height: format.price.height,
      price: dish.priceDisplay,
    })}

    <text x="${contentX}" y="${detailY}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="${footerSize}" font-weight="700" fill="${palette.cream}">${escapeXml(
      brand.name || 'Bistro Putnik'
    )}</text>
    <text x="${contentX}" y="${detailY + footerSize + 16}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="${Math.round(
      footerSize * 0.82
    )}" font-weight="500" fill="${palette.mist}">${escapeXml(location)}</text>
    <text x="${contentX}" y="${format.footerY}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="${Math.round(
      footerSize * 0.82
    )}" font-weight="800" fill="${palette.cream}">${escapeXml(footerLine)}</text>
  </svg>`;
}

async function renderPng({ dish, brand, business, logoBase64, imageDataUri, variant, outputPath }) {
  const format = formats[variant];
  const svg = renderSocialSvg({ dish, brand, business, logoBase64, imageDataUri, variant });

  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(Buffer.from(svg)).resize(format.width, format.height, { fit: 'fill' }).png().toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();

  if (metadata.width !== format.width || metadata.height !== format.height) {
    throw new Error(`Expected ${format.width}x${format.height}, got ${metadata.width}x${metadata.height}.`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(usage().trim());
    return;
  }

  const [menuDataBuffer, logoBuffer] = await Promise.all([readFile(menuDataPath), readFile(logoPath)]);
  const menuData = JSON.parse(menuDataBuffer.toString('utf8'));
  const dishes = collectDishes(menuData, args.language);

  if (args.list) {
    for (const dish of dishes) {
      console.log(`${dish.id}\t${dish.name}\t${dish.priceDisplay}`);
    }
    return;
  }

  if (!args.dish) {
    throw new Error(`Missing --dish.\n\n${usage().trim()}`);
  }

  if (!['square', 'story', 'both'].includes(args.variant)) {
    throw new Error('--variant must be square, story, or both.');
  }

  const dish = findDish(dishes, args.dish);
  const automaticImagePath = args.imagePath || (await findAutomaticImage(dish.id));
  const imageDataUri = automaticImagePath ? await imageToDataUri(automaticImagePath) : '';
  const outputDir = join(args.outputDir, dish.id);
  const selectedVariants = args.variant === 'both' ? ['square', 'story'] : [args.variant];
  const outputs = [];

  for (const variant of selectedVariants) {
    const outputPath = join(outputDir, `${dish.id}-${args.language}-${variant}.png`);
    await renderPng({
      dish,
      brand: menuData.brand || {},
      business: menuData.business || {},
      logoBase64: logoBuffer.toString('base64'),
      imageDataUri,
      variant,
      outputPath,
    });
    outputs.push(outputPath);
  }

  console.log(`Generated social material for ${dish.name} (${dish.id}).`);
  console.log(`Image source: ${automaticImagePath || 'none'}`);
  for (const output of outputs) {
    console.log(output);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
