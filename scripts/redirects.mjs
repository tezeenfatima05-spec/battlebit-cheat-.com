/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/battlebit-remastered-cheats/'],
  ['/cheats/', '/products/battlebit-remastered-cheats/'],
  ['/cheats/lite', '/products/battlebit-remastered-cheats/'],
  ['/cheats/lite/', '/products/battlebit-remastered-cheats/'],
  ['/cheats/pro', '/products/battlebit-remastered-cheats/'],
  ['/cheats/pro/', '/products/battlebit-remastered-cheats/'],
  ['/cheats/elite', '/products/battlebit-remastered-cheats/battlebit-remastered/'],
  ['/cheats/elite/', '/products/battlebit-remastered-cheats/battlebit-remastered/'],
  ['/cheats/compare', '/products/battlebit-remastered-cheats/utilities/'],
  ['/cheats/compare/', '/products/battlebit-remastered-cheats/utilities/'],
  ['/products/dota-2-cheats', '/products/battlebit-remastered-cheats/'],
  ['/products/dota-2-cheats/', '/products/battlebit-remastered-cheats/'],
  ['/products/dota-2-cheats/utilities', '/products/battlebit-remastered-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/battlebit-remastered-cheats/utilities/'],
  ['/products/battlebit-remastered-cheats/utilities', '/products/battlebit-remastered-cheats/utilities/'],
  ['/products/battlebit-remastered-cheats', '/products/battlebit-remastered-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
