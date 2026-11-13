# BattleBit Cheats — `battlebitcheat.com`

Astro site for **BattleBit Remastered** cheats, utilities, blog, and support.

## Configuration

Game-specific values live in:

- `src/config/site.ts` — domain, product base path, Discord, keywords
- `src/config/checkout-redirects.mjs` — checkout URLs (`/go/*/` pages)
- `src/config/pageSeo.ts` — per-route titles and descriptions
- `src/i18n/en.ts` — visible copy, features, blog cards

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/` with optimized images, `sitemap.xml`, and pruned assets.
