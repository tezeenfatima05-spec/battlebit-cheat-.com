import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distSitemap = path.join(root, 'dist', 'sitemap.xml');
const publicSitemap = path.join(root, 'public', 'sitemap.xml');
const distIndex = path.join(root, 'dist', 'sitemap-index.xml');
const publicIndex = path.join(root, 'public', 'sitemap-index.xml');

if (fs.existsSync(distSitemap)) {
  fs.copyFileSync(distSitemap, publicSitemap);
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, publicIndex);
  }
} else if (!fs.existsSync(publicSitemap)) {
  console.warn('sync-sitemap-public: no dist/sitemap.xml — run npm run build to generate the sitemap.');
}
