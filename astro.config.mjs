import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { DEV_HOST, DEV_PORT } from './scripts/dev-server.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://battlebitcheat.com',
  server: {
    host: DEV_HOST,
    port: DEV_PORT,
  },
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/battlebit-remastered-cheats/',
    '/cheats/lite/': '/products/battlebit-remastered-cheats/',
    '/cheats/pro/': '/products/battlebit-remastered-cheats/',
    '/cheats/elite/': '/products/battlebit-remastered-cheats/battlebit-remastered/',
    '/products/dota-2-cheats/': '/products/battlebit-remastered-cheats/',
    '/products/dota-2-cheats/elite/': '/products/battlebit-remastered-cheats/battlebit-remastered/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
