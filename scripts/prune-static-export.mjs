import { readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs';
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
    return 0;
  }

  const locale = getLocaleForFile(filePath);
  const html = readFileSync(filePath, 'utf8');
  const nextHtml = html.replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);

  if (nextHtml === html) {
    return 0;
  }

  writeFileSync(filePath, nextHtml);
  return 1;
}

function pruneDirectory(directory) {
  let removedFiles = 0;
  let removedBytes = 0;
  let updatedLangFiles = 0;

  for (const entry of readdirSync(directory)) {
    const filePath = join(directory, entry);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      const childResult = pruneDirectory(filePath);
      removedFiles += childResult.removedFiles;
      removedBytes += childResult.removedBytes;
      updatedLangFiles += childResult.updatedLangFiles;
      continue;
    }

    if (stats.isFile() && isNextRoutePayload(filePath)) {
      removedFiles += 1;
      removedBytes += stats.size;
      rmSync(filePath);
      continue;
    }

    if (stats.isFile()) {
      updatedLangFiles += updateHtmlLang(filePath);
    }
  }

  return { removedFiles, removedBytes, updatedLangFiles };
}

const result = pruneDirectory(outDir);
const removedMiB = (result.removedBytes / 1024 / 1024).toFixed(2);

console.log(
  `Pruned ${result.removedFiles} Next route payload files from ${outDir} (${removedMiB} MiB).`
);
console.log(`Updated lang attributes in ${result.updatedLangFiles} static HTML files.`);
