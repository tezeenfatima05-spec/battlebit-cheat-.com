/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'BattleBit Remastered Cheats — Aimbot, ESP & No Recoil',
    description:
      'Explore BattleBit Remastered cheats for PC featuring aimbot, player ESP, no recoil, speed hack, instant ADS, and Cloud DMA support at battlebitcheat.com.',
  },
  '/products/battlebit-remastered-cheats/': {
    title: 'BattleBit Products | Cloud DMA & HWID Spoofer',
    description:
      'Cloud DMA and HWID Spoofer utilities for BattleBit Remastered PC setups—compare features and checkout securely at battlebitcheat.com.',
  },
  '/products/battlebit-remastered-cheats/battlebit-remastered/': {
    title: 'BattleBit Remastered Cheats | Aimbot & ESP',
    description:
      'BattleBit Remastered cheats with aimbot, box ESP, skeleton, no recoil, no spread, speed hack, and exploit modules for Steam PC.',
  },
  '/products/battlebit-remastered-cheats/cloud-dma/': {
    title: 'BattleBit Cloud DMA | Two-PC Radar Setup',
    description:
      'Cloud DMA pairing for BattleBit Remastered with portal firmware, radar overlay, and operator setup guides.',
  },
  '/products/battlebit-remastered-cheats/hwid-spoofer/': {
    title: 'BattleBit HWID Spoofer | PC Recovery Tool',
    description:
      'HWID Spoofer utilities with compatibility scans and verification workflows before relaunching BattleBit on Steam.',
  },
  '/products/battlebit-remastered-cheats/utilities/': {
    title: 'Compare BattleBit Utilities | DMA & HWID',
    description:
      'Compare Cloud DMA and HWID Spoofer—when each utility fits your BattleBit Remastered setup.',
  },
  '/blog/': {
    title: 'BattleBit Remastered Cheats Guides',
    description:
      'Setup guides, aimbot tuning, ESP configuration, Cloud DMA notes, and patch-day checklists for BattleBit cheats.',
  },
  '/forum/': {
    title: 'BattleBit Community Forum',
    description: 'Discuss BattleBit Remastered configs, ESP tuning, DMA setups, and troubleshooting with the community.',
  },
  '/faq/': {
    title: 'FAQ | BattleBit Cheats & Setup',
    description:
      'Answers on BattleBit aimbot, ESP, Cloud DMA, HWID tools, checkout, and setup at battlebitcheat.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | BattleBit Cheats',
    description: 'Purchase terms, license use, and refund policy for products sold through battlebitcheat.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | BattleBit Cheats',
    description: 'How battlebitcheat.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About BattleBit Cheats',
    description:
      'What BattleBit Cheats publishes: Remastered cheat suite, utilities, guides, and status notes at battlebitcheat.com.',
  },
  '/support/': {
    title: 'Support | BattleBit Cheats',
    description: 'Get help with loader setup, HWID, Cloud DMA, and checkout for BattleBit Remastered products.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
