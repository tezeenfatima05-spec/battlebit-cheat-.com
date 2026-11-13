import type { BlogPostFull } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../../config/checkout';
import { PRODUCT_BASE } from '../../config/site';

const productBase = PRODUCT_BASE;
const productHub = productBase.endsWith('/') ? productBase : `${productBase}/`;

const IMG_AIMBOT =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619443060-ur2mos-levo-battlebitremastered-3-aimbot.webp';
const IMG_WORLD =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619442356-ebhcyl-levo-battlebitremastered-2-world.webp';
const IMG_VISUALS =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619441356-8i8jqc-levo-battlebitremastered-1-visuals.webp';
const IMG_DMA_MISC =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619439535-anr1nb-levo-battlebit-3-misc.webp';
const IMG_AIMBOT_ALT =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619438678-02z3px-levo-battlebit-2-aimbot.webp';
const IMG_VISUALS_ALT =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619437760-fnvpx5-levo-battlebit-1-visuals.webp';

// Correct misc image URL from brief
const IMG_MISC_CORRECT =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/battlebit-remastered/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619443793-te4j4w-levo-battlebitremastered-4-misc.webp';

export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Setup',
    title: 'BattleBit Remastered aimbot guide: smooth aim and FOV tuning',
    slug: 'battlebit-aimbot-guide',
    image: IMG_AIMBOT,
    desc: 'Configure BattleBit Remastered aimbot on PC—FOV, smoothing, bone selection, and humanized delays before live matches.',
    date: 'Nov 10, 2026',
    readTime: '9 min read',
    featured: true,
    body: [
      {
        type: 'p',
        text: `BattleBit Remastered firefights are fast, low-poly, and chaotic. A well-tuned aimbot helps you track pixel-scale heads without snapping like a rage clip. This guide walks through portal presets for [BattleBit Remastered cheats](${productHub}battlebit-remastered/) on Steam PC—start conservative, then tighten after you read the live status banner on battlebitcheat.com.`,
      },
      { type: 'h2', text: 'Start with aimbot off in the training range' },
      {
        type: 'p',
        text: 'Launch the external loader, open the Aimbot tab, and enable only crosshair assistance first. Pick a single weapon class (AR or LMG) so recoil patterns stay consistent while you tune. Avoid max FOV on day one; wide circles look obvious in killcam replays.',
      },
      {
        type: 'p',
        text: `Load the default ranked-safe profile from your operator portal, then jump into a low-pop server. If you need the full module list, see the [complete setup walkthrough](/blog/battlebit-cheat-setup/) and cross-check [no recoil settings](/blog/battlebit-no-recoil-spread/).`,
      },
      { type: 'h2', text: 'FOV, smoothing, and target selection' },
      {
        type: 'p',
        text: 'FOV caps how far from your crosshair the aimbot may pull. Keep FOV under your natural flick range so corrections feel like muscle memory. Smoothing adds inertia—raise it until flicks stop looking linear, then back off one notch.',
      },
      {
        type: 'ul',
        items: [
          'Bone priority: head for CQB, chest for mid-range tap fire',
          'Visibility check: only aim at targets your ESP marks as on-screen',
          'Team filter: hard-lock friendly fire off before queueing',
          'Hotkey: hold-to-aim keeps full control for map reads',
        ],
      },
      { type: 'h2', text: 'Pair aimbot with ESP, not max rage' },
      {
        type: 'p',
        text: `Aimbot without [player ESP](/blog/battlebit-esp-wallhack/) means guessing behind cover. Run a light box ESP and name tags so your aim key only engages when you already made a conscious push. For movement-heavy flanks, review [speed hack limits](/blog/battlebit-speed-hack/) so you are not outrunning your own aim smoothing.`,
      },
      { type: 'h2', text: 'Patch days and config backup' },
      {
        type: 'p',
        text: 'After every BattleBit update, reload the loader build from the portal and re-import cloud presets. Do not copy old slider files from Discord DMs. Join Discord #status for build notes, or open a support ticket with your order email if smoothing feels off after a patch.',
      },
      {
        type: 'cta',
        title: 'Get BattleBit aimbot',
        text: 'Full aimbot, ESP, and misc modules for BattleBit Remastered on Steam PC.',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        type: 'p',
        text: `More guides live on the [blog index](/blog/)—ESP wallhack, stream-proof capture, and [Cloud DMA setup](/blog/battlebit-cloud-dma-setup/) for hardware-isolated rigs.`,
      },
    ],
  },
  {
    tag: 'Features',
    title: 'BattleBit ESP and wallhack: players, vehicles, and distance',
    slug: 'battlebit-esp-wallhack',
    image: IMG_WORLD,
    desc: 'BattleBit Remastered ESP setup—player boxes, health, weapon icons, vehicle tags, and distance caps for readable overlays.',
    date: 'Nov 9, 2026',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: `ESP is the information layer for BattleBit Remastered: who is holding an angle, which rooftop still has bodies, and whether that jeep is occupied. This article explains how to configure wallhack overlays from [BattleBit Cheats](${productHub}) without turning your screen into a Christmas tree.`,
      },
      { type: 'h2', text: 'Core player ESP toggles' },
      {
        type: 'p',
        text: 'Enable boxes, skeletons, or corner brackets—not all three. Add HP bars and distance text only after you confirm readability at 1080p. Color by team so friendlies never blend into terrain shaders.',
      },
      {
        type: 'p',
        text: 'BattleBit maps mix verticality and destruction; keep max distance under what your GPU can draw at stable FPS. Drop opacity on distant players so close-range threats pop.',
      },
      { type: 'h2', text: 'Vehicle and gadget awareness' },
      {
        type: 'p',
        text: 'Vehicle ESP tags tanks, transports, and boats separately from infantry. Pair with name tags when pushing objectives in Frontline so you do not waste rockets on empty shells.',
      },
      { type: 'h2', text: 'World ESP and objective lines' },
      {
        type: 'p',
        text: 'Objective markers, spawn hints, and ammo crate highlights belong in a second profile for Conquest—not your TDM scrim preset. Save mode-specific profiles in the portal so you are not re-tuning mid-match.',
      },
      { type: 'h2', text: 'Stream-proof and capture checks' },
      {
        type: 'p',
        text: `Creators should read [stream-proof setup](/blog/battlebit-stream-proof/) before enabling ESP on a broadcast PC. ESP helps you play; stream-proof hides overlays from OBS so viewers see clean footage.`,
      },
      {
        type: 'p',
        text: `Combine ESP with tuned [aimbot sliders](/blog/battlebit-aimbot-guide/) when you are ready to click heads—not before you understand spacing on Steam PC matches.`,
      },
      {
        type: 'cta',
        title: 'Unlock BattleBit ESP',
        text: 'Player, vehicle, and world overlays maintained every BattleBit patch.',
        href: PRIMARY_CHECKOUT_PATH,
      },
    ],
  },
  {
    tag: 'Features',
    title: 'No recoil and spread control for BattleBit Remastered',
    slug: 'battlebit-no-recoil-spread',
    image: IMG_VISUALS,
    desc: 'Reduce recoil and weapon spread on BattleBit Remastered—per-gun profiles, ADS tuning, and burst limits that stay human.',
    date: 'Nov 8, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Recoil control is the difference between laser beams and believable tap fire. BattleBit Remastered guns kick hard on full auto; our no-recoil and spread modules pull angles back while you keep input authority. Configure them inside [BattleBit Remastered](${productHub}battlebit-remastered/) from battlebitcheat.com.`,
      },
      { type: 'h2', text: 'Per-weapon recoil profiles' },
      {
        type: 'p',
        text: 'Clone the portal default, rename it after your main AR, and tune vertical pull first. Horizontal correction comes next—BattleBit weapons drift sideways on long sprays.',
      },
      {
        type: 'ul',
        items: [
          'ADS-only mode for mid-range peek fights',
          'Recoil scale slider—start at 60% strength',
          'Spread reduction separate from view punch',
          'RPM cap to avoid infinite mag lasers',
        ],
      },
      { type: 'h2', text: 'Combine with aimbot carefully' },
      {
        type: 'p',
        text: `No recoil fixes the reticle; [aimbot](/blog/battlebit-aimbot-guide/) picks the target. Running both at max early stacks reports. Stagger strength: medium recoil assist, light aim hold key.`,
      },
      { type: 'h2', text: 'Testing without speeding gameplay' },
      {
        type: 'p',
        text: `Do not pair max recoil removal with aggressive [speed hack](/blog/battlebit-speed-hack/) values. Movement cheats plus zero kick reads as blatant in killcam. Test in an empty server, then upload the profile to cloud backup.`,
      },
      {
        type: 'p',
        text: `Return to the [blog](/blog/) for ESP and DMA articles, or finish [full cheat setup](/blog/battlebit-cheat-setup/) before ranked-style community servers.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'BattleBit speed hack: movement limits and safe defaults',
    slug: 'battlebit-speed-hack',
    image: IMG_AIMBOT_ALT,
    desc: 'Speed and movement exploits for BattleBit Remastered—sprint multipliers, slide tuning, and when to leave defaults alone.',
    date: 'Nov 7, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Speed hacks in BattleBit Remastered let you reposition faster than intended—but obvious teleporting gets you reported fast. This guide covers movement multipliers bundled with [BattleBit cheats](${productHub}) and how operators stay under suspicion.`,
      },
      { type: 'h2', text: 'What speed modules actually change' },
      {
        type: 'p',
        text: 'Sprint speed, slide distance, and climb velocity are separate toggles. Bump sprint by small percentages (5–12%) before trying double-speed memes. BattleBit netcode punishes rubber-banding if you spike too high.',
      },
      { type: 'h2', text: 'When to disable movement cheats' },
      {
        type: 'p',
        text: 'Disable speed assists during spectator-rich events or clan scrims. Use ESP and [no recoil](/blog/battlebit-no-recoil-spread/) only when you need subtle advantage.',
      },
      { type: 'h2', text: 'Sync with aim and ESP' },
      {
        type: 'p',
        text: `Faster movement shrinks reaction time—lower [aimbot FOV](/blog/battlebit-aimbot-guide/) when you crank sprint. [ESP distance](/blog/battlebit-esp-wallhack/) should extend slightly so you see fights before you dash in.`,
      },
      {
        type: 'cta',
        title: 'Get movement modules',
        text: 'Movement, aim, and ESP in one BattleBit Remastered package.',
        href: PRIMARY_CHECKOUT_PATH,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Cloud DMA setup for BattleBit Remastered on PC',
    slug: 'battlebit-cloud-dma-setup',
    image: IMG_DMA_MISC,
    desc: 'Hardware DMA workflow for BattleBit—second PC, radar overlay, portal pairing, and when Cloud DMA beats software-only ESP.',
    date: 'Nov 6, 2026',
    readTime: '10 min read',
    body: [
      {
        type: 'p',
        text: `Cloud DMA routes game memory reads through dedicated hardware so your main BattleBit Remastered rig stays clean of injected overlays. Operators pair DMA radar with software modules from [BattleBit Cheats](${productHub}) or run [Cloud DMA utility](${productHub}cloud-dma/) standalone.`,
      },
      { type: 'h2', text: 'Hardware layout' },
      {
        type: 'p',
        text: 'Game PC runs Steam and BattleBit only. Radar PC or laptop displays ESP web view fed by the DMA card. Both machines need stable LAN—Wi-Fi adds latency that desyncs player positions.',
      },
      { type: 'h2', text: 'Portal pairing steps' },
      {
        type: 'p',
        text: 'After checkout, open the Cloud DMA section in your operator portal. Flash the supplied firmware, enter the pairing code, and load the BattleBit Remastered memory profile. Wait for green status before launching the game.',
      },
      { type: 'h2', text: 'When DMA vs software ESP' },
      {
        type: 'p',
        text: `DMA excels for streamers and competitive stacks that ban software hooks. Software [ESP](/blog/battlebit-esp-wallhack/) is simpler for solo players on one monitor. Compare workflows on the [products hub](${productHub}).`,
      },
      {
        type: 'p',
        text: `Need a traditional loader path? Read [BattleBit cheat setup](/blog/battlebit-cheat-setup/). Hardware swaps may require [HWID Spoofer](${productHub}hwid-spoofer/)—follow the product guide before rebinding licenses.`,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Stream-proof overlays for BattleBit Remastered creators',
    slug: 'battlebit-stream-proof',
    image: IMG_VISUALS_ALT,
    desc: 'Hide BattleBit ESP and aimbot HUD from OBS, Game Bar, and capture cards while keeping overlays on your monitor.',
    date: 'Nov 5, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Stream-proof mode keeps BattleBit Remastered overlays visible to you but invisible to capture software. Essential for Twitch or YouTube operators running [BattleBit Remastered cheats](${productHub}) privately while broadcasting clean gameplay.`,
      },
      { type: 'h2', text: 'Enable stream-proof in the loader' },
      {
        type: 'p',
        text: 'Toggle stream-proof per module—ESP, aimbot FOV circle, and misc radar. Reload overlays after switching so the capture hook applies.',
      },
      { type: 'h2', text: 'OBS test workflow' },
      {
        type: 'p',
        text: 'Record 30 seconds with your live scene. Playback must show no boxes, snap lines, or radar widgets. Test game capture and display capture separately on multi-monitor setups.',
      },
      { type: 'h2', text: 'Gameplay discipline' },
      {
        type: 'p',
        text: `Stream-proof hides pixels—it does not hide callouts. Avoid narrating exact player counts you only know from [ESP](/blog/battlebit-esp-wallhack/). Pair with conservative [aimbot](/blog/battlebit-aimbot-guide/) so on-stream aim matches your voice comms.`,
      },
      {
        type: 'p',
        text: `More setup topics: [full cheat install](/blog/battlebit-cheat-setup/) and [blog](/blog/) patch notes.`,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'BattleBit Remastered cheat setup from checkout to first match',
    slug: 'battlebit-cheat-setup',
    image: IMG_MISC_CORRECT,
    desc: 'Step-by-step BattleBit cheat install on Steam PC—loader download, module order, cloud presets, and status checks.',
    date: 'Nov 4, 2026',
    readTime: '11 min read',
    body: [
      {
        type: 'p',
        text: `This walkthrough covers the full path from secure checkout to your first BattleBit Remastered match with aimbot, ESP, exploits, and misc tools enabled safely. Everything links to [BattleBit Cheats](${productHub}battlebit-remastered/) on battlebitcheat.com.`,
      },
      { type: 'h2', text: 'Step 1 — Portal access and loader' },
      {
        type: 'p',
        text: 'Complete checkout, sign into the operator portal, and download the latest Windows loader build. Disable conflicting overlays (RTSS, Afterburner OSD) before first launch.',
      },
      { type: 'h2', text: 'Step 2 — Module load order' },
      {
        type: 'p',
        text: `Enable ESP first, then no recoil, then aimbot on a hold key. Add movement exploits last. Detailed tuning lives in [ESP](/blog/battlebit-esp-wallhack/), [aimbot](/blog/battlebit-aimbot-guide/), [recoil](/blog/battlebit-no-recoil-spread/), and [speed](/blog/battlebit-speed-hack/) guides.`,
      },
      { type: 'h2', text: 'Step 3 — Verify status and launch Steam' },
      {
        type: 'p',
        text: 'Confirm the homepage status banner and Discord #status show online. Start BattleBit Remastered through Steam, join a low-pop server, and verify overlays track players correctly.',
      },
      { type: 'h2', text: 'Step 4 — Save cloud profile' },
      {
        type: 'p',
        text: 'When settings feel stable, push the profile to cloud backup. After patches, re-download the loader and pull the same preset instead of rebuilding sliders.',
      },
      { type: 'h2', text: 'DMA and utility products' },
      {
        type: 'p',
        text: `Hardware operators should follow [Cloud DMA setup](/blog/battlebit-cloud-dma-setup/). If you replaced hardware, read [HWID Spoofer](${productHub}hwid-spoofer/) docs before rebinding your license.`,
      },
      {
        type: 'cta',
        title: 'Start BattleBit setup',
        text: 'Aimbot, ESP, exploits, and misc—maintained for Steam PC.',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        type: 'p',
        text: `Browse all [BattleBit guides](/blog/) for stream-proof capture, DMA, and feature deep-dives.`,
      },
    ],
  },
];
