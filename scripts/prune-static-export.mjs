import { existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs';
import { basename, join, relative, resolve, sep } from 'path';

const outDir = resolve(process.env.STATIC_DIR || 'out');
const defaultLocale = 'en';
const supportedLocales = ['hr', 'en', 'de', 'sv', 'fi', 'no', 'pl', 'da', 'hu'];
const localeSet = new Set(supportedLocales);

function isNextRoutePayload(filePath) {
  const name = basename(filePath);
  return name === 'index.txt' || (name.startsWith('__next.') && name.endsWith('.txt'));
}

function getLocaleForFile(filePath) {
  const [firstSegment] = relative(outDir, filePath).split(sep);
  return localeSet.has(firstSegment) ? firstSegment : defaultLocale;
}

function updateHtmlLang(filePath) {
  if (!filePath.endsWith('.html')) {
    return { updated: 0, removedBytes: 0 };
  }

  const locale = getLocaleForFile(filePath);
  const html = readFileSync(filePath, 'utf8');
  let removedBytes = 0;
  let nextHtml = html.replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);

  nextHtml = nextHtml.replace(/<link\b[^>]*>/g, (tag) => {
    const isNextScriptPreload =
      /rel="preload"/.test(tag) &&
      /as="script"/.test(tag) &&
      /href="\/_next\/static\/chunks\//.test(tag);

    if (!isNextScriptPreload) {
      return tag;
    }

    removedBytes += tag.length;
    return '';
  });

  nextHtml = nextHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, (tag) => {
    const isNextRuntimeScript =
      /src="\/_next\/static\/chunks\//.test(tag) ||
      /__next_f/.test(tag);

    if (!isNextRuntimeScript) {
      return tag;
    }

    removedBytes += tag.length;
    return '';
  });

  nextHtml = nextHtml.replace(/<meta name="next-size-adjust" content=""\/>/g, (tag) => {
    removedBytes += tag.length;
    return '';
  });

  nextHtml = nextHtml.replace(/<div hidden=""><!--\$--><!--\/\$--><\/div>/g, (tag) => {
    removedBytes += tag.length;
    return '';
  });

  nextHtml = nextHtml.replace(/<!--\$--><!--\/\$-->/g, (tag) => {
    removedBytes += tag.length;
    return '';
  });

  if (nextHtml === html) {
    return { updated: 0, removedBytes };
  }

  writeFileSync(filePath, nextHtml);
  return { updated: 1, removedBytes };
}

function getDirectorySize(directory) {
  if (!existsSync(directory)) {
    return 0;
  }

  let bytes = 0;

  for (const entry of readdirSync(directory)) {
    const filePath = join(directory, entry);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      bytes += getDirectorySize(filePath);
      continue;
    }

    if (stats.isFile()) {
      bytes += stats.size;
    }
  }

  return bytes;
}

function pruneDirectory(directory) {
  let removedFiles = 0;
  let removedBytes = 0;
  let updatedLangFiles = 0;
  let strippedHtmlBytes = 0;

  for (const entry of readdirSync(directory)) {
    const filePath = join(directory, entry);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      const childResult = pruneDirectory(filePath);
      removedFiles += childResult.removedFiles;
      removedBytes += childResult.removedBytes;
      updatedLangFiles += childResult.updatedLangFiles;
      strippedHtmlBytes += childResult.strippedHtmlBytes;
      continue;
    }

    if (stats.isFile() && isNextRoutePayload(filePath)) {
      removedFiles += 1;
      removedBytes += stats.size;
      rmSync(filePath);
      continue;
    }

    if (stats.isFile()) {
      const htmlResult = updateHtmlLang(filePath);
      updatedLangFiles += htmlResult.updated;
      strippedHtmlBytes += htmlResult.removedBytes;
    }
  }

  return { removedFiles, removedBytes, updatedLangFiles, strippedHtmlBytes };
}

const result = pruneDirectory(outDir);
// An old locally generated social story must not be copied into a new public build.
const unusedStory = join(outDir, 'marenda-story.png');
if (existsSync(unusedStory)) rmSync(unusedStory);
const chunksDir = join(outDir, '_next', 'static', 'chunks');
const removedChunkBytes = getDirectorySize(chunksDir);

if (removedChunkBytes) {
  rmSync(chunksDir, { recursive: true, force: true });
}

const removedMiB = (result.removedBytes / 1024 / 1024).toFixed(2);
const strippedHtmlMiB = (result.strippedHtmlBytes / 1024 / 1024).toFixed(2);
const removedChunksMiB = (removedChunkBytes / 1024 / 1024).toFixed(2);

console.log(
  `Pruned ${result.removedFiles} Next route payload files from ${outDir} (${removedMiB} MiB).`
);
console.log(`Stripped Next runtime scripts from static HTML (${strippedHtmlMiB} MiB).`);
console.log(`Removed unreferenced Next JS chunks (${removedChunksMiB} MiB).`);
console.log(`Updated lang attributes in ${result.updatedLangFiles} static HTML files.`);
