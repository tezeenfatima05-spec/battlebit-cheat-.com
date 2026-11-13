import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const battlebit = link('BattleBit Remastered', productPath('battlebit-remastered'));
const productsHub = link('BattleBit products', ROUTES.products);
const cloudDma = link('Cloud DMA', productPath('cloud-dma'));
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if BattleBit cheats are online?',
    a: a('The live status banner is on battlebitcheat.com and in Discord #status. Always check after a BattleBit Remastered update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide, and config library via secure checkout. Follow the guide before launching BattleBit on Steam.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party BattleBit cheats?',
    a: a('Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('BattleBit Remastered via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your license terms.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${battlebit}, ${cloudDma}, and ${hwid} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is BattleBit ESP / wallhack?',
    a: `ESP shows players, vehicles, and objectives through the map—boxes, HP, weapons, and distance. Included in ${battlebit} with stream-proof modes.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP is information only—it does not move your crosshair. Aimbot assists aim when you hold the hotkey. Both ship in ${battlebit}; tune them separately.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Do I need a separate product for ESP only?',
    a: `ESP, world overlays, and vehicle tags are bundled in ${battlebit}. Disable aimbot and exploits in the loader if you want awareness-only play.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Where is aimbot configured?',
    a: `Aimbot, trigger, FOV, and smoothing live in the combat tab of ${battlebit}. Start with conservative FOV and hold-to-aim before ranked-style servers.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Are there multiple cheat tiers?',
    a: `${battlebit} is a single full suite—aimbot, ESP, no recoil, exploits, and misc. Utilities like ${cloudDma} and ${hwid} are optional add-ons.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Is access limited?',
    a: a('Slot limits may apply during heavy patch cycles to keep update speed fast. Check the status banner before checkout.'),
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode in ${battlebit} hides overlays from OBS and most capture software. Record a local test clip before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected BattleBit cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aimbot?',
    a: a('ESP can be quieter than obvious aim snaps, but it is still a cheat. Reports and anti-cheat do not ignore overlays because aimbot is off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Steam logins fail on one PC but work elsewhere—hardware enforcement. Use portal HWID reset first for normal license moves.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'cloud-dma-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is Cloud DMA?',
    a: `${cloudDma} routes BattleBit memory reads through DMA hardware so radar can run on a second PC. Software ESP in ${battlebit} remains the simpler one-PC path.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Steam folder?',
    a: `BattleBit Cheats runs external with cloud config sync—no files injected into the BattleBit directory. Risk still applies. See ${productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog guides the same as the cheat package?',
    a: `Blog articles explain tuning workflows and link to ${battlebit}. The product page feature list is authoritative for what ships in the loader.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to ${productsHub} and secure checkout—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare utilities?',
    a: `The ${faqPage} collects product, cheat, and blog answers. Compare ${battlebit} vs ${cloudDma} on each product page.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should use ESP-only configs?',
    a: `Players who want map awareness without aim assist—disable aimbot and movement exploits in ${battlebit} and run ESP plus stream-proof only.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should enable aimbot?',
    a: `Operators comfortable with hold-to-aim and conservative FOV on ${battlebit}. Pair with no recoil tuning before maxing smoothing.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'When do movement exploits make sense?',
    a: `Use small sprint multipliers in ${battlebit} when you understand netcode limits—disable for scrims and streams.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a game update?',
    a: a('Check battlebitcheat.com status and Discord #status. Do not launch until the banner shows online. Reload cloud presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Join Discord after purchase with your order email, Windows version, and BattleBit build. Staff walk through loader and DMA setup live.'),
  },
  {
    id: 'turbo-ranked',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do modules work in all BattleBit modes?',
    a: `Yes—save separate Frontline, Conquest, and TDM profiles in the portal for ${battlebit}. Tune ESP distance per mode.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Is there a zoom or camera hack?',
    a: `Misc modules in ${battlebit} include FOV and camera tweaks where supported—check the product feature list for current options.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Does the package include triggerbot?',
    a: `Trigger and aim modules are configurable in ${battlebit}. Use hold keys and visibility checks instead of full-auto firing.`,
    scopes: ['battlebit-remastered'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private BattleBit cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. BattleBit Cheats ships portal delivery for ESP, aimbot, and utilities.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat, and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter cheat features, ESP, aimbot, products, setup, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'vac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I max all modules on day one?',
      a: a('No. Enable ESP first, then recoil and aimbot on a hold key. Movement exploits last—match the cheat setup guide order.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `Feature guides apply to ${battlebit}. DMA articles may also reference ${cloudDma}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test on a quiet server first?',
      a: a('Yes. Load conservative presets on a low-pop server before Frontline or Conquest. Tune ESP distance over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
  Features: [
    {
      id: 'blog-feat-tune',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Can I use only one module from this guide?',
      a: `Yes—disable unrelated tabs in the loader. ${battlebit} lets you run ESP-only or aim-off profiles.`,
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${battlebit}, ${cloudDma}, and ${productsHub}. Product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Join Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every BattleBit update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${battlebit} includes player, vehicle, and world ESP with stream-proof options.`,
    });
  }
  if (slug.includes('aimbot')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes aimbot from this article?',
      a: `${battlebit} ships aimbot, smoothing, and trigger options in the combat tab.`,
    });
  }
  if (slug.includes('dma') || slug.includes('hwid')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace DMA or HWID products?',
      a: `Hardware guides complement ${cloudDma} and ${hwid}—read product pages for scope and setup steps.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Vehicle ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'World & objective ESP', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot & smoothing', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'No recoil & spread', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Trigger / hold-to-aim', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'Movement exploits', icon: 'compareOrbwalker' as const, lite: true, pro: true, elite: true },
  { feature: 'Misc radar & crosshair', icon: 'compareTargetSelector' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud DMA pairing', icon: 'compareActivator' as const, lite: false, pro: false, elite: true },
  { feature: 'HWID Spoofer utility', icon: 'compareAbilityRadius' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: true, pro: true, elite: true },
  { feature: 'Discord operator support', icon: 'compareDevSupport' as const, lite: true, pro: true, elite: true },
];
