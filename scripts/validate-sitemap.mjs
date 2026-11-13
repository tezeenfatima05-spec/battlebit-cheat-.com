/**
 * Pre/post deploy sitemap validation. Exit 1 on any error.
 * Usage: node scripts/validate-sitemap.mjs [--dist-only] [--live]
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const publicSitemap = path.join(root, 'public', 'sitemap.xml');
const distSitemap = path.join(dist, 'sitemap.xml');
const robotsTxt = path.join(root, 'public', 'robots.txt');
const PRODUCTION_ORIGIN = 'https://battlebitcheat.com';
const SITEMAP_PATH = '/sitemap.xml';

const args = new Set(process.argv.slice(2));
const errors = [];

function fail(msg) {
  errors.push(msg);
}

function pathnameFromLoc(loc) {
  const url = new URL(loc);
  let p = url.pathname;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

function distHtmlForPath(pathname) {
  if (pathname === '/') return path.join(dist, 'index.html');
  const trimmed = pathname.replace(/^\//, '').replace(/\/$/, '');
  return path.join(dist, trimmed, 'index.html');
}

function loadSitemapXml(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing sitemap file: ${filePath}`);
    return null;
  }
  const xml = fs.readFileSync(filePath, 'utf8');
  if (!xml.includes('<?xml')) fail(`Sitemap missing XML declaration: ${filePath}`);
  if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    fail(`Sitemap missing sitemaps.org namespace: ${filePath}`);
  }
  const openUrl = (xml.match(/<url>/g) ?? []).length;
  const closeUrl = (xml.match(/<\/url>/g) ?? []).length;
  if (openUrl !== closeUrl) fail(`Mismatched <url> tags (${openUrl} vs ${closeUrl})`);
  if (openUrl === 0) fail('Sitemap contains zero URLs');
  if (openUrl > 50_000) fail(`Sitemap exceeds 50,000 URLs (${openUrl})`);
  const bytes = Buffer.byteLength(xml, 'utf8');
  if (bytes > 50 * 1024 * 1024) fail(`Sitemap exceeds 50 MB (${bytes} bytes)`);

  const locs = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].trim());
  for (const loc of locs) {
    if (!loc) fail('Empty <loc> entry');
    if (loc !== loc.trim()) fail(`Whitespace in <loc>: ${loc}`);
    let parsed;
    try {
      parsed = new URL(loc);
    } catch {
      fail(`Invalid URL in <loc>: ${loc}`);
      continue;
    }
    if (parsed.origin !== PRODUCTION_ORIGIN) {
      fail(`Wrong origin (expected ${PRODUCTION_ORIGIN}): ${loc}`);
    }
    if (parsed.protocol !== 'https:') fail(`Non-HTTPS URL: ${loc}`);
    if (/workers\.dev|dotacheats|localhost|127\.0\.0\.1|github\.com|pages\.dev/i.test(loc)) {
      fail(`Forbidden URL pattern in sitemap: ${loc}`);
    }
    if (loc.includes('/404') || loc.includes('/go/')) {
      fail(`Non-indexable URL in sitemap: ${loc}`);
    }
    if (loc.includes('/products/dota-2-cheats')) {
      fail(`Legacy redirect URL in sitemap: ${loc}`);
    }
  }

  const dupes = locs.filter((u, i) => locs.indexOf(u) !== i);
  if (dupes.length) {
    fail(`Duplicate sitemap URLs: ${[...new Set(dupes)].join(', ')}`);
  }

  return { xml, locs };
}

function validateDistPages(locs) {
  for (const loc of locs) {
    const pathname = pathnameFromLoc(loc);
    const htmlPath = distHtmlForPath(pathname);
    if (!fs.existsSync(htmlPath)) {
      fail(`Sitemap URL has no built page: ${loc} (expected ${htmlPath})`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    if (html.includes('noindex')) {
      fail(`Sitemap includes noindex page: ${loc}`);
    }
    const canonMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    if (!canonMatch) {
      fail(`Missing canonical on page: ${loc}`);
    } else {
      const canonical = canonMatch[1];
      const expected = loc;
      if (canonical !== expected) {
        fail(`Canonical mismatch on ${loc}: got ${canonical}`);
      }
    }
  }
}

function validateRobots() {
  if (!fs.existsSync(robotsTxt)) {
    fail('Missing public/robots.txt');
    return;
  }
  const robots = fs.readFileSync(robotsTxt, 'utf8');
  const expected = `Sitemap: ${PRODUCTION_ORIGIN}${SITEMAP_PATH}`;
  if (!robots.includes(expected)) {
    fail(`robots.txt must contain: ${expected}`);
  }
  if (/workers\.dev|dotacheats|localhost/i.test(robots)) {
    fail('robots.txt contains forbidden domain reference');
  }
}

async function validateLive() {
  const liveUrl = `${PRODUCTION_ORIGIN}${SITEMAP_PATH}`;
  let res;
  try {
    res = await fetch(liveUrl, { redirect: 'follow' });
  } catch (e) {
    fail(`Live sitemap fetch failed: ${e.message}`);
    return;
  }
  if (res.status !== 200) {
    fail(`Live sitemap HTTP ${res.status}: ${liveUrl}`);
    return;
  }
  const ct = res.headers.get('content-type') ?? '';
  if (!/xml/i.test(ct)) {
    fail(`Live sitemap wrong Content-Type: ${ct || '(none)'}`);
  }
  const xml = await res.text();
  const tempPath = path.join(root, '.sitemap-live-check.xml');
  fs.writeFileSync(tempPath, xml, 'utf8');
  const result = loadSitemapXml(tempPath);
  fs.unlinkSync(tempPath);
  if (!result) return;

  for (const loc of result.locs) {
    let pageRes;
    try {
      pageRes = await fetch(loc, { redirect: 'manual' });
    } catch (e) {
      fail(`Live URL fetch failed ${loc}: ${e.message}`);
      continue;
    }
    if (pageRes.status === 404) fail(`Live sitemap URL 404: ${loc}`);
    if (pageRes.status >= 500) fail(`Live sitemap URL server error ${pageRes.status}: ${loc}`);
    if (pageRes.status >= 300 && pageRes.status < 400) {
      const dest = pageRes.headers.get('location') ?? '';
      fail(`Live sitemap URL redirects (${pageRes.status}): ${loc} → ${dest}`);
    }
  }
}

// --- run ---
const sitemapPath = fs.existsSync(distSitemap) ? distSitemap : publicSitemap;
const parsed = loadSitemapXml(sitemapPath);
if (parsed && !args.has('--live-only')) {
  if (fs.existsSync(dist)) {
    validateDistPages(parsed.locs);
  } else if (!args.has('--skip-dist')) {
    fail('dist/ missing — run npm run build before validating page coverage');
  }
}
validateRobots();

if (args.has('--live')) {
  await validateLive();
}

if (errors.length) {
  console.error(`Sitemap validation FAILED (${errors.length} error(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

const count = parsed?.locs.length ?? 0;
console.log(`Sitemap validation OK — ${count} URLs, domain ${PRODUCTION_ORIGIN}`);
if (args.has('--live')) console.log('Live production sitemap check passed.');
