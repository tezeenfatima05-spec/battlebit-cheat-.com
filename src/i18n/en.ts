import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;
const DISCORD_INVITE = 'https://discord.com/invite/wmFY3xVtwm';

export const en: Translations = {
  site: {
    name: 'BattleBit Cheats',
    domain: 'battlebitcheat.com',
    title: 'BattleBit Remastered Cheats — Aimbot, ESP & No Recoil',
    description:
      'Explore BattleBit Remastered cheats for PC featuring aimbot, player ESP, no recoil, movement exploits, stream-proof overlays, and Cloud DMA utilities—updated for Steam with setup guides at battlebitcheat.com.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'BattleBit Remastered — build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'BattleBit Remastered',
    titleLine2: 'Cheats for PC',
    subtitle:
      'BattleBit Remastered cheats with aimbot, player ESP, no recoil, exploits, and misc tools for Steam on Windows—portal presets, Cloud DMA options, and live Discord support at battlebitcheat.com.',
    ctaPrimary: 'VIEW PRODUCTS',
    ctaDiscord: 'BUY NOW',
    modesLabel: 'Game modes',
    modes: ['Frontline', 'Conquest', 'Rush', 'Team Deathmatch'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Aimbot, ESP, exploits, and misc in one suite',
    subtitle: 'Organized modules for BattleBit Remastered firefights—tuned for Steam PC and maintained every patch.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Track. Lead. Tap.',
        desc: 'Smooth aim assist with FOV caps, bone priority, visibility checks, and hold-to-aim for believable gunfights.',
        bullets: [
          'FOV and smoothing sliders with humanized delay',
          'Head, chest, and nearest-bone target modes',
          'Visibility and team filters before queue',
          'Per-weapon strength profiles in the portal',
          'Pairs with no recoil instead of max rage defaults',
        ],
        tags: ['battlebit aimbot', 'smooth aim', 'fov aimbot'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See angles before you peek.',
        desc: 'Boxes, skeletons, HP, weapon icons, and distance—readable during 254-player chaos.',
        bullets: [
          'Team color and name tags',
          'Distance fade so far targets do not clutter',
          'Snapline and off-screen indicator toggles',
        ],
        tags: ['battlebit esp', 'player wallhack', 'battlebit wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'World & vehicle ESP',
        subtitle: 'Objectives and armor.',
        desc: 'Vehicles, boats, objectives, and loot highlights separate from infantry overlays.',
        bullets: ['Vehicle occupancy hints', 'Objective and spawn markers', 'Ammo and gadget highlights'],
        tags: ['vehicle esp', 'world esp', 'objective esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'No recoil & spread',
        subtitle: 'Controlled bursts.',
        desc: 'Per-gun recoil compensation and spread reduction with ADS-only modes.',
        bullets: ['Vertical and horizontal pull scales', 'RPM caps to avoid laser sprays', 'Hip-fire vs ADS profiles'],
        tags: ['no recoil', 'spread control', 'weapon profile'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Exploits',
        subtitle: 'Movement on your terms.',
        desc: 'Sprint, slide, and climb multipliers with conservative defaults—disable when subtle play matters.',
        bullets: [
          'Incremental speed sliders—not teleport memes',
          'Separate movement profile from combat modules',
          'Speed-off preset for scrims and streams',
        ],
        tags: ['speed hack', 'movement exploit', 'battlebit speed'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Misc toolkit',
        subtitle: 'Quality-of-life toggles.',
        desc: 'Crosshair, radar, night tweaks, and match info widgets grouped for quick mid-round changes.',
        bullets: [
          'Custom crosshair and hit indicators',
          'Compact radar and compass overlays',
          'FPS-friendly misc toggles',
        ],
        tags: ['battlebit misc', 'radar overlay', 'crosshair'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream proof',
        subtitle: 'Creators stay safe.',
        desc: 'Hide ESP and aim HUD from OBS, Game Bar, and most capture cards while you see full overlays.',
        bullets: ['Per-module stream-proof switches', 'Local recording test checklist', 'Multi-monitor capture notes'],
        tags: ['stream proof', 'obs safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Cloud DMA ready',
        subtitle: 'Hardware radar option.',
        desc: 'Pair software modules with Cloud DMA for two-PC setups—radar off the game machine.',
        bullets: ['Portal pairing for DMA firmware', 'Works alongside software ESP profiles', 'Documented in setup guides'],
        tags: ['cloud dma', 'dma radar', 'two pc setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud config & updates',
        subtitle: 'Patch day ready.',
        desc: 'Backup presets to the portal and pull new loader builds within hours of BattleBit updates.',
        bullets: ['Cloud sync for slider profiles', 'Status banner and Discord #status', 'Auto updater when online'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'BattleBit tooling backed by patches—not promises',
    subtitle:
      'Most cheat shops ship stale loaders and copy-paste support. battlebitcheat.com focuses on patch-day delivery, humanized aim settings, and live operators who play BattleBit Remastered.',
    usLabel: 'BattleBit Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Builds pushed within hours of BattleBit Remastered updates—check Discord #status before you queue.',
      },
      {
        title: 'Humanized aim & recoil',
        desc: 'Conservative FOV, smoothing, and recoil scales mimic solid PC aim—not instant snap clips that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Engineers for loader setup, ESP layouts, DMA pairing, and HWID resets—24/7 coverage, not bot tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with capture-safe modes—no injecting into the BattleBit process like legacy tools still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Frontline, Conquest, and solo profiles backup to the portal—same sliders on any gaming PC.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'Portal resets and HWID Spoofer docs when you swap hardware—handled through support, not forum guesswork.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a compatible loader after major BattleBit or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord staff on shift for setup, configs, DMA, and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running BattleBit aimbot, ESP, and utilities on battlebitcheat.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in',
    titleHighlight: 'three simple steps',
    intro:
      'Follow the operator portal to download the loader, import presets, and launch BattleBit Remastered on Steam—with Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest Windows loader for BattleBit Remastered.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Enable ESP, no recoil, then aimbot on a hold key. Tune exploits last and save a cloud profile.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & play',
        desc: 'Confirm the status banner, launch Steam, join a test server, then queue your main modes with synced presets.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching BattleBit after updates.',
    items: [
      'Windows 10 & 11',
      'Steam',
      'BattleBit Remastered',
      'Auto updater',
      'Config cloud sync',
      'Discord support',
      'HWID reset',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Main package',
    title: 'BattleBit Remastered cheats',
    subtitle: 'Full aimbot, ESP, no recoil, exploits, and misc—stream-proof overlays and portal cloud sync.',
    viewAll: 'View cheat details',
    explore: 'Explore',
    items: [
      {
        badge: 'Popular',
        tier: 'Full suite',
        name: 'Remastered',
        title: 'BattleBit Remastered Cheats',
        desc: 'Private BattleBit Remastered build with aimbot, player ESP, no recoil, movement exploits, misc tools, and stream-proof capture modes.',
        features: ['Aimbot & trigger modules', 'Player and vehicle ESP', 'No recoil & spread', 'Movement exploits', 'Stream proof', 'Cloud config backup'],
        more: 24,
        href: `${productBase}battlebit-remastered/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'BattleBit utilities',
    subtitle: 'BattleBit Remastered cheat package plus Cloud DMA and HWID tools for advanced PC setups.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Hardware utility',
        title: 'Cloud DMA',
        subtitle: 'Radar on a second PC',
        desc: 'DMA pairing for BattleBit Remastered—memory reads on dedicated hardware with portal firmware and radar overlay workflow.',
        features: ['Two-PC radar layout', 'Portal firmware pairing', 'BattleBit memory profile', 'Setup docs and support'],
        more: 8,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID workflow for disk serials, MAC addresses, and GPU IDs—follow the portal guide before relaunching BattleBit on Steam.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Aimbot tuning, ESP setup, DMA, stream-proof capture, and patch-day checks for BattleBit Remastered.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Setup',
        title: 'BattleBit Remastered aimbot guide: smooth aim and FOV tuning',
        slug: 'battlebit-aimbot-guide',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619443060-ur2mos-levo-battlebitremastered-3-aimbot.webp',
        desc: 'Configure BattleBit Remastered aimbot on PC—FOV, smoothing, bone selection, and humanized delays.',
        date: 'Nov 10, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Features',
        title: 'BattleBit ESP and wallhack: players, vehicles, and distance',
        slug: 'battlebit-esp-wallhack',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619442356-ebhcyl-levo-battlebitremastered-2-world.webp',
        desc: 'BattleBit Remastered ESP setup—player boxes, health, vehicles, and distance caps.',
        date: 'Nov 9, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'No recoil and spread control for BattleBit Remastered',
        slug: 'battlebit-no-recoil-spread',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619441356-8i8jqc-levo-battlebitremastered-1-visuals.webp',
        desc: 'Reduce recoil and weapon spread—per-gun profiles, ADS tuning, and burst limits.',
        date: 'Nov 8, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'BattleBit speed hack: movement limits and safe defaults',
        slug: 'battlebit-speed-hack',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619438678-02z3px-levo-battlebit-2-aimbot.webp',
        desc: 'Speed and movement exploits—sprint multipliers, slide tuning, and conservative defaults.',
        date: 'Nov 7, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Cloud DMA setup for BattleBit Remastered on PC',
        slug: 'battlebit-cloud-dma-setup',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619439535-anr1nb-levo-battlebit-3-misc.webp',
        desc: 'Hardware DMA workflow—second PC, radar overlay, and portal pairing for BattleBit.',
        date: 'Nov 6, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-proof overlays for BattleBit Remastered creators',
        slug: 'battlebit-stream-proof',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619437760-fnvpx5-levo-battlebit-1-visuals.webp',
        desc: 'Hide ESP and aim HUD from OBS and capture cards while keeping on-screen overlays.',
        date: 'Nov 5, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'BattleBit Remastered cheat setup from checkout to first match',
        slug: 'battlebit-cheat-setup',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619443793-te4j4w-levo-battlebitremastered-4-misc.webp',
        desc: 'Step-by-step install on Steam PC—loader, module order, cloud presets, and status checks.',
        date: 'Nov 4, 2026',
        readTime: '11 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Modules grouped by Aimbot, ESP, Exploits, and Misc so you tune mid-round without hunting tabs.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Aim that stays believable', desc: 'FOV, smoothing, bone priority, and hold-to-aim in one combat tab.' },
      { num: '02', label: 'ESP', title: 'Players you can read', desc: 'Boxes, HP, weapons, and team colors with distance fade.' },
      { num: '03', label: 'World', title: 'Vehicles and objectives', desc: 'Armor tags, boats, and objective markers separate from infantry.' },
      { num: '04', label: 'Recoil', title: 'Per-gun control', desc: 'No recoil and spread sliders with ADS-only toggles.' },
      { num: '05', label: 'Exploits', title: 'Movement when needed', desc: 'Sprint and slide multipliers with a quick disable preset.' },
      { num: '06', label: 'Misc', title: 'Radar and crosshair', desc: 'Hit indicators, compass widgets, and FPS-friendly extras.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a BattleBit profile you reuse every Steam session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Read the banner on battlebitcheat.com before you buy or launch BattleBit.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Unlock your portal',
        desc: 'Secure checkout unlocks the loader, setup guide, and cloud preset library.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable ESP then aimbot, and test on a quiet server.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'Push Frontline, Conquest, or TDM presets to the cloud when settings feel right.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how BattleBit plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Build notes hit Discord and the portal after BattleBit updates—check before large-scale modes.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with light aimbot and ESP, then tune up—not max everything in your first match.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or DMA? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'BattleBit Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about features and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID, DMA, and account issues.",
        linkLabel: 'support@battlebitcheat.com',
        href: 'mailto:support@battlebitcheat.com',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans, and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Join the community',
        desc: 'Discord engineers on shift 24/7 for setup and patch notes.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on battlebitcheat.com or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam BattleBit Remastered on Windows 10 or 11—and your game build.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, risk, and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if BattleBit cheats are online?',
        a: 'The live status banner is on battlebitcheat.com and in Discord #status. Always check after a BattleBit Remastered update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via secure checkout. Follow the guide before launching BattleBit on Steam.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party BattleBit cheats?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'BattleBit Remastered via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your license terms.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'BattleBit Remastered cheats, Cloud DMA, and HWID Spoofer live under Products on battlebitcheat.com with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'BattleBit Remastered cheats — aimbot, ESP, and tools for Steam PC. battlebitcheat.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}battlebit-remastered/`, label: 'BattleBit Remastered', ariaLabel: 'Main cheat package' },
      { href: productBase, label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read setup guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About BattleBit Cheats',
      description:
        'BattleBit Cheats provides BattleBit Remastered software, utility tools, and PC support resources at battlebitcheat.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'BattleBit Cheats is a PC-focused resource for BattleBit Remastered players exploring aimbot, ESP, no recoil, movement exploits, and DMA workflows. We publish setup guides and live status notes so you can evaluate tools before checkout.',
            'BattleBit Remastered is a trademark of its respective owners; our site is not affiliated with the game developers.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers the BattleBit Remastered cheat package, Cloud DMA utility, and HWID Spoofer. Blog articles explain ESP tuning, aimbot defaults, patch-day checks, and stream-proof capture.',
            'Content updates when BattleBit patches land or loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and support@battlebitcheat.com. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How BattleBit Cheats handles analytics, cookies, and contact data when you use battlebitcheat.com.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on battlebitcheat.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Purchase, license, refund, and use terms for BattleBit Cheats products and battlebitcheat.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using battlebitcheat.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to the BattleBit Remastered cheat package and utility tools (Cloud DMA, HWID Spoofer) delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when BattleBit Remastered or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. battlebitcheat.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching BattleBit.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your license and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam BattleBit on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page with order email, Windows version, game build, and loader screenshots.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for BattleBit Remastered can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not play ranked community modes while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'BattleBit Cheats Support',
      description: 'Get support for loader, DMA, HWID, and checkout questions at battlebitcheat.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'BattleBit Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Buy BattleBit Cheats',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
