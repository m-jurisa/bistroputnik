import { createReadStream, existsSync, statSync } from 'fs';
import { createServer } from 'http';
import { extname, join, normalize, resolve, sep } from 'path';

const port = Number(process.env.PORT || 3000);
const staticDir = resolve(process.env.STATIC_DIR || 'out');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

function isInsideStaticDir(filePath) {
  return filePath === staticDir || filePath.startsWith(`${staticDir}${sep}`);
}

function resolveFilePath(pathname) {
  const decodedPath = decodeURIComponent(pathname.split('?')[0] || '/');
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = resolve(join(staticDir, normalizedPath));

  if (!isInsideStaticDir(requestedPath)) {
    return null;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  const indexPath = join(requestedPath, 'index.html');
  if (existsSync(indexPath) && statSync(indexPath).isFile()) {
    return indexPath;
  }

  const htmlPath = `${requestedPath}.html`;
  if (existsSync(htmlPath) && statSync(htmlPath).isFile()) {
    return htmlPath;
  }

  return null;
}

function sendFile(response, filePath, statusCode = 200) {
  response.writeHead(statusCode, {
    'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}

createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method Not Allowed');
    return;
  }

  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const filePath = resolveFilePath(requestUrl.pathname);

  if (filePath) {
    sendFile(response, filePath);
    return;
  }

  const notFoundPath = join(staticDir, '404.html');
  if (existsSync(notFoundPath)) {
    sendFile(response, notFoundPath, 404);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Not Found');
}).listen(port, () => {
  console.log(`Serving ${staticDir} on http://localhost:${port}`);
});
