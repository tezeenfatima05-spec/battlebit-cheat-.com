import fs from 'node:fs';
import path from 'node:path';
import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

const SITEMAP_XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=3600',
} as const;

function readPublicSitemap(filename: string): string | null {
  const filePath = path.join(process.cwd(), 'public', filename);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const destination = resolveCheckoutPathRedirect(new URL(context.request.url).pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  const pathname = new URL(context.request.url).pathname;
  if (pathname === '/sitemap.xml' || pathname === '/sitemap-index.xml') {
    const filename = pathname.slice(1);
    const body = readPublicSitemap(filename);
    if (body) {
      return new Response(body, { status: 200, headers: SITEMAP_XML_HEADERS });
    }
  }

  const response = await next();
  if (
    response.status === 200 &&
    (pathname === '/sitemap.xml' || pathname === '/sitemap-index.xml')
  ) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/xml; charset=utf-8');
    return new Response(response.body, { status: response.status, headers });
  }

  return response;
});
