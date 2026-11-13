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

## Deploy (important)

The live site **must** publish the **`dist/`** folder after `npm run build`.  
Do **not** point hosting at the repo root or `public/` only — CSS and layout will break.

| Platform | Build command | Output directory |
|----------|----------------|------------------|
| Cloudflare Pages | `npm run build` | `dist` |
| GitHub Pages | use `.github/workflows/deploy-static.yml` | artifact `dist` |
| Node (Railway, etc.) | `npm run build` then `npm run start` | serves `dist/` |

Local production preview: `npm run build && npm run preview`
