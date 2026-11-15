// Her sayfa icin hazir HTML uretir: dist/<yol>/index.html + sitemap.xml
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://yufixuz.com';
const dist = path.resolve('dist');
const { render, ROUTES, NOT_FOUND } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const tpl = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(r, out) {
  const url = SITE + (r.path === '/' ? '/' : r.path);
  const img = SITE + (r.image || '/og-image.png');
  let h = tpl
    .replace(/<title>.*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(r.desc)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(r.title)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(r.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(r.desc)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(r.desc)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, `$1${r.type || 'website'}`)
    .replace('<div id="root"></div>', `<div id="root">${render(r.path)}</div>`);
  if (r.image) h = h.replace(/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*/g, `$1${img}`);
  if (r === NOT_FOUND) h = h.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex" />');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, h);
}

for (const r of ROUTES) page(r, r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path.slice(1), 'index.html'));
page(NOT_FOUND, path.join(dist, '404.html'));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r) => `  <url><loc>${SITE}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`);
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });
console.log(`prerender: ${ROUTES.length} sayfa + 404 + sitemap.xml`);
