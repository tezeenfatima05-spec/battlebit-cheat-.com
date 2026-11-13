# Cloudflare — fix failing deploy

Your **build is OK**. Only the **Deploy command** in the dashboard is wrong.

## Do this in the dashboard

**Workers & Pages → your project → Settings → Builds**

| Field | Correct value |
|-------|----------------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Deploy command** | See options below |

### Option A (best)

Leave **Deploy command blank** / delete the field. Pages uploads `dist` automatically after a successful build.

### Option B

```text
npx wrangler pages deploy
```

(No `dist` needed — `wrangler.toml` sets `pages_build_output_dir = "dist"`.)

### Option C

```text
npm run deploy:pages
```

### Wrong (your current setting)

```text
npx wrangler deploy
```

That is for **Workers scripts**, not this static site. It fails with “Missing entry-point”.

`wrangler.toml` now includes `[assets]` so `wrangler deploy` can succeed in a pinch, but **Option A or B** is the right setup for Cloudflare **Pages**.

Save settings → **Retry deployment**.
