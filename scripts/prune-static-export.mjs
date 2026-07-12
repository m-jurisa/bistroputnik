import { readdirSync, rmSync, statSync } from 'fs';
import { basename, join, resolve } from 'path';

const outDir = resolve(process.env.STATIC_DIR || 'out');

function isNextRoutePayload(filePath) {
  const name = basename(filePath);
  return name === 'index.txt' || (name.startsWith('__next.') && name.endsWith('.txt'));
}

function pruneDirectory(directory) {
  let removedFiles = 0;
  let removedBytes = 0;

  for (const entry of readdirSync(directory)) {
    const filePath = join(directory, entry);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      const childResult = pruneDirectory(filePath);
      removedFiles += childResult.removedFiles;
      removedBytes += childResult.removedBytes;
      continue;
    }

    if (stats.isFile() && isNextRoutePayload(filePath)) {
      removedFiles += 1;
      removedBytes += stats.size;
      rmSync(filePath);
    }
  }

  return { removedFiles, removedBytes };
}

const result = pruneDirectory(outDir);
const removedMiB = (result.removedBytes / 1024 / 1024).toFixed(2);

console.log(
  `Pruned ${result.removedFiles} Next route payload files from ${outDir} (${removedMiB} MiB).`
);
