// Pre-renders every page to static HTML after `vite build`, then writes
// sitemap.xml and robots.txt. Run via `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, headHtml, pages, sitemapXml, robotsTxt, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--app-head--> or <div id="root"></div> placeholder.');
}

for (const page of pages) {
  const html = template
    .replace('<!--app-head-->', headHtml(page.path))
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const out = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`  pre-rendered ${page.path} → ${path.relative(root, out)}`);
}

// GitHub Pages serves 404.html for unknown URLs: the home page, marked noindex.
const notFound = fs
  .readFileSync(path.join(dist, 'index.html'), 'utf8')
  .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex" />')
  .replace(/<link rel="canonical"[^>]*>\s*/, '');
fs.writeFileSync(path.join(dist, '404.html'), notFound);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemapXml(today));
fs.writeFileSync(path.join(dist, 'robots.txt'), robotsTxt());
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`  wrote sitemap.xml and robots.txt for ${SITE_URL}`);
