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

### Cloudflare Pages (fix `wrangler deploy` / missing entry-point)

The **build is fine**; the failure is the **deploy command**.

1. **Workers & Pages → your project → Settings → Builds**
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Deploy command:** leave **empty**, or set **`npx wrangler pages deploy`** — **not** `npx wrangler deploy`

See **[cloudflare-pages.md](./cloudflare-pages.md)** for copy-paste values.

`wrangler deploy` is for Workers with a script entry point. This repo is static HTML in `dist/`. The dashboard “Deploy command” must be cleared or changed — that field is **not** stored in git.

Local development (project-specific URL — not the live domain):

```bash
npm run dev
```

Open **http://127.0.0.1:5477/** (not port 4321/3000 used by other sites). Pages are `noindex` in dev.

After build: `npm run preview` (same **5477**) or `npm run start` (serves `dist/` on **http://127.0.0.1:5478/**).
