import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'battlebit-remastered': [
    'battlebit-cheat-setup',
    'battlebit-aimbot-guide',
    'battlebit-esp-wallhack',
    'battlebit-no-recoil-spread',
  ],
  'cloud-dma': ['battlebit-cloud-dma-setup', 'battlebit-cheat-setup', 'battlebit-stream-proof'],
  'hwid-spoofer': ['battlebit-cheat-setup', 'battlebit-cloud-dma-setup'],
};

const productBase = '/products/battlebit-remastered-cheats/';
const gameplay = '/images/gameplay';

const galleryRaw = {
  visuals: {
    src: `${gameplay}/battlebit-1-visuals.webp`,
    alt: 'BattleBit Remastered player ESP box and skeleton overlay',
    caption: 'Player ESP',
    captionDesc: 'Enemy boxes, skeleton, health, and distance in a large-map firefight.',
  },
  aimbot: {
    src: `${gameplay}/battlebit-2-aimbot.webp`,
    alt: 'BattleBit Remastered aimbot FOV and target settings',
    caption: 'Aimbot modules',
    captionDesc: 'Magic aimbot, bind aim, and shoot-trigger options in the menu.',
  },
  misc: {
    src: `${gameplay}/battlebit-3-misc.webp`,
    alt: 'BattleBit Remastered misc FOV and exploit settings',
    caption: 'Misc & exploits',
    captionDesc: 'FOV override, no recoil, speed hack, and instant ADS toggles.',
  },
  world: {
    src: `${gameplay}/battlebitremastered-2-world.webp`,
    alt: 'BattleBit Remastered long-range ESP distance cap',
    caption: 'Distance ESP',
    captionDesc: 'Maximum distance sliders keep overlays readable on big maps.',
  },
  dmMisc: {
    src: `${gameplay}/battlebitremastered-4-misc.webp`,
    alt: 'BattleBit Remastered Cloud DMA radar misc panel',
    caption: 'DMA workflow',
    captionDesc: 'Two-PC DMA pairing with radar overlay layout.',
  },
};

function slide(...keys: (keyof typeof galleryRaw)[]): ProductSlide[] {
  return keys.map((k) => galleryRaw[k]);
}

const battlebitFeatures = [
  'Aimbot at Shoot',
  'Magic Aimbot',
  'Bind Aimbot',
  'Enable ESP',
  'Enemy Only',
  'Box',
  'Box Outline',
  'Health',
  'Skeleton',
  'Maximum Distance',
  'Player Info',
  'Override FOV',
  'FOV',
  'Speed Hack',
  'Instant Hit',
  'Instant ADS',
  'Unlock Fire Modes',
  'No Spread',
  'No Recoil',
  'No Boltcatch',
  'No Ballistic',
  'DPI',
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on battlebitcheat.com and Discord #status before purchase—especially after a BattleBit update.',
  },
  {
    num: '02',
    title: 'Choose your product',
    desc: 'Pick BattleBit Remastered cheats, Cloud DMA, or HWID Spoofer based on your setup. Review the feature list before checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use the operator portal and setup guide. Test in a private match, load presets, then jump into multiplayer.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'BattleBit Remastered receives frequent updates. Confirm module availability on the live status panel at battlebitcheat.com before you purchase or launch. Overlay behavior may differ between lobbies and live servers after patches.';

const sharedLimitations =
  'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility and availability can change after game or Windows updates without notice.';

const battlebitSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current BattleBit Remastered client via Steam with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets BattleBit Remastered published hardware requirements.' },
];

const productContent: Record<
  string,
  Pick<
    ProductPage,
    | 'images'
    | 'overview'
    | 'goodToKnow'
    | 'limitations'
    | 'fullFeatures'
    | 'systemRequirements'
  >
> = {
  'battlebit-remastered': {
    images: slide('visuals', 'aimbot', 'misc', 'world'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: battlebitSystemRequirements,
    fullFeatures: battlebitFeatures,
    overview: {
      title: 'Built for BattleBit Remastered multiplayer on Steam',
      paragraphs: [
        'BattleBit Remastered cheats combine aimbot options, visual ESP, weapon exploits, and misc FOV tools in one menu. Aim at shoot, magic aimbot, and bind aimbot cover aggressive pushes while box ESP, skeleton, health, and player info keep situational awareness high on large maps.',
        'Exploit modules include speed hack, instant hit, instant ADS, fire-mode unlock, no spread, no recoil, and ballistic tweaks. Stream-proof capture modes help creators hide overlays from OBS while keeping ESP on the desktop.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('dmMisc', 'world', 'visuals'),
    goodToKnow:
      'Cloud DMA requires compatible firmware and a second PC. Run the portal compatibility scan before purchase and follow the wiring diagram exactly.',
    limitations:
      'DMA setups demand hardware skill and carry additional ban risk if misconfigured. We do not guarantee compatibility with every motherboard or capture card.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Two Windows 10 or 11 PCs on the same network segment.' },
      { icon: 'reqCpu', text: 'DMA card with supported firmware from the operator portal.' },
      { icon: 'reqWifi', text: 'Stable LAN for radar feed and firmware updates.' },
      { icon: 'reqSettings', text: 'Ability to follow portal wiring and BIOS notes.' },
    ],
    fullFeatures: [
      'Two-PC DMA radar layout',
      'Portal firmware pairing',
      'BattleBit memory profile',
      'Overlay on gaming PC',
      'Second-PC radar host',
      'Setup verification checklist',
      'Discord DMA support',
      'Patch-aligned firmware notes',
      'Capture-safe desktop workflow',
    ],
    overview: {
      title: 'Cloud DMA for BattleBit Remastered',
      paragraphs: [
        'Cloud DMA moves memory reads to dedicated hardware so the gaming PC runs a minimal overlay. Pair firmware through the portal, align the BattleBit profile, and display radar data on a second display.',
        'Use this path when you already operate DMA in other titles and want the same architecture for BattleBit Remastered firefights.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('misc', 'visuals', 'aimbot'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching BattleBit.',
    limitations:
      'Spoofing does not help account-only ban cases. Never stack two spoof tools. Shared or work PCs may not be suitable.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching BattleBit after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID recovery for BattleBit players',
      paragraphs: [
        'The HWID Spoofer helps when hardware IDs are flagged but your Steam account is still clean. Disk and MAC profile tools ship with restore checkpoints and verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only bans.',
      ],
    },
  },
};

const tierBodies: Record<string, { type: 'h2' | 'p'; text: string }[]> = {
  'battlebit-remastered': [
    {
      type: 'h2',
      text: 'BattleBit Remastered aimbot features',
    },
    {
      type: 'p',
      text: 'Configure aimbot at shoot, magic aimbot, and bind aimbot with FOV caps that match your role. Pair aim assistance with player ESP so you only engage targets you can see on screen.',
    },
    {
      type: 'h2',
      text: 'Visual ESP and wallhack',
    },
    {
      type: 'p',
      text: 'Enable enemy-only ESP with box, outline, health, skeleton, distance, and player info. Maximum distance sliders keep large maps readable without clutter.',
    },
  ],
};

const utilityBodies: Record<string, { type: 'h2' | 'p'; text: string }[]> = {
  'cloud-dma': [
    {
      type: 'h2',
      text: 'When Cloud DMA fits BattleBit',
    },
    {
      type: 'p',
      text: 'Choose DMA when you already run a two-PC radar stack and want BattleBit memory reads isolated from the game rig. Follow portal firmware notes after every patch.',
    },
  ],
  'hwid-spoofer': [
    {
      type: 'h2',
      text: 'HWID workflow before BattleBit',
    },
    {
      type: 'p',
      text: 'Spoof, verify identifiers, reboot cold, then load a conservative cheat profile. Open Discord if verification fails twice.',
    },
  ],
};

function slugFromHref(href: string): string {
  const trimmed = href.replace(productBase, '').replace(/\/$/, '');
  return trimmed || 'battlebit-remastered';
}

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items.map((product) => {
    const slug = slugFromHref(product.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'utility',
      badge: product.badge,
      category: product.category,
      name: product.title,
      title: product.title,
      subtitle: product.subtitle,
      desc: product.desc,
      features: product.features,
      more: product.more,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(product.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      body: utilityBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const catalogUtilityPages = productPages.filter((p) => p.kind === 'utility');

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('visuals', 'aimbot', 'misc', 'world', 'dmMisc');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'BattleBit Remastered cheats, Cloud DMA, and HWID Spoofer utilities for Steam on battlebitcheat.com.',
  buyUrl: checkoutPath('battlebit'),
};
