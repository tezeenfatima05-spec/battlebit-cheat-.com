export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, upvotes, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const guidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'battlebit-first-loader-launch',
    title: 'What order should I enable BattleBit modules on first launch?',
    upvotes: 52,
    excerpt: 'Enable ESP before aimbot and movement—matches the official setup guide sequence.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'BattleBit Remastered cheat setup',
    sourcePath: '/blog/battlebit-cheat-setup/',
    answer:
      'The setup guide recommends enabling ESP and readability options first, then no recoil, then aimbot on a hold key. Movement exploits come last after you confirm overlays track correctly.',
    detail:
      'Test in a low-population server before Frontline or Conquest stacks. Save the profile to cloud backup once positions match live players.',
    tip: 'If overlays drift after a patch, reload the loader from the portal before retuning sliders.',
  }),
  guideDiscussion({
    slug: 'battlebit-aimbot-fov-starting-point',
    title: 'What aimbot FOV should I start with on BattleBit?',
    upvotes: 41,
    excerpt: 'Keep FOV inside your natural flick range and pair with smoothing from the aimbot article.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'BattleBit aimbot guide',
    sourcePath: '/blog/battlebit-aimbot-guide/',
    answer:
      'There is no universal FOV value. The guide suggests starting below your normal mouse flick arc, then increasing only after smoothing feels natural in combat.',
    detail:
      'Use visibility checks so the aim key only engages on targets you already spotted with ESP or sound cues.',
    tip: 'Hold-to-aim hotkeys keep full mouse control for map awareness between fights.',
  }),
  guideDiscussion({
    slug: 'battlebit-esp-too-cluttered',
    title: 'My BattleBit ESP looks cluttered—what should I turn off?',
    upvotes: 36,
    excerpt: 'Pick one player highlight style and add HP or distance only after boxes feel clean.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'BattleBit ESP and wallhack',
    sourcePath: '/blog/battlebit-esp-wallhack/',
    answer:
      'Use boxes OR corner brackets—not both. Add skeletons only if you still read targets at range. Lower max distance so distant dots fade.',
    detail:
      'Team color separation prevents friendly clutter on rush-heavy maps. Vehicle ESP can use a separate profile from infantry.',
    tip: 'Streamers should confirm stream-proof before adding more ESP layers.',
  }),
  guideDiscussion({
    slug: 'battlebit-cloud-dma-basics',
    title: 'When does Cloud DMA make sense over software ESP?',
    upvotes: 33,
    excerpt: 'Two-PC DMA setups help operators who want radar off the game machine—see the DMA guide.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Cloud DMA setup for BattleBit',
    sourcePath: '/blog/battlebit-cloud-dma-setup/',
    answer:
      'DMA helps when you want memory reads on a second machine with no software hook on the game PC. Software ESP is simpler for single-PC players.',
    detail:
      'Stable wired LAN between game and radar PCs matters more than raw card specs. Pair the portal BattleBit profile after firmware flash.',
    tip: 'Read HWID Spoofer docs if you moved DMA hardware to a new rig.',
  }),
  guideDiscussion({
    slug: 'battlebit-no-recoil-vs-aimbot',
    title: 'Should I tune no recoil before or after aimbot?',
    upvotes: 28,
    excerpt: 'Recoil control first, light aim assist second—details in the no recoil guide.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'No recoil and spread control',
    sourcePath: '/blog/battlebit-no-recoil-spread/',
    answer:
      'Shape recoil and spread on a wall or empty target first. Introduce aimbot on a hold key only after the gun stays on target during full-auto bursts.',
    detail:
      'Separate ADS and hip-fire profiles because BattleBit weapons behave differently when aimed.',
    tip: 'Avoid max recoil removal plus high speed multipliers on the same profile.',
  }),
  guideDiscussion({
    slug: 'battlebit-stream-proof-obs-test',
    title: 'How do I verify stream-proof before going live?',
    upvotes: 22,
    excerpt: 'Record a local clip and inspect playback—outlined in the stream-proof guide.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Stream-proof overlays for BattleBit',
    sourcePath: '/blog/battlebit-stream-proof/',
    answer:
      'Record at least 30 seconds with your real OBS scene, then review the file for ESP boxes or aim circles. Preview alone is not enough.',
    detail:
      'Test game capture and display capture if you use multiple monitors. Toggle stream-proof per module after changes.',
    tip: 'Stream-proof hides pixels—it does not hide suspicious callouts based on hidden ESP info.',
  }),
  guideDiscussion({
    slug: 'battlebit-speed-hack-conservative',
    title: 'Are small speed multipliers safer than large ones?',
    upvotes: 19,
    excerpt: 'Small sprint bumps are easier to justify than double-speed—see the speed hack guide.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'BattleBit speed hack guide',
    sourcePath: '/blog/battlebit-speed-hack/',
    answer:
      'The guide recommends incremental sprint changes. Large multipliers increase rubber-banding and player reports on community servers.',
    detail:
      'Disable movement assists in high-visibility scrims; rely on ESP and recoil tuning instead.',
    tip: 'Lower aimbot FOV when you increase sprint so tracking stays believable.',
  }),
  guideDiscussion({
    slug: 'battlebit-after-game-update',
    title: 'What should I check after a BattleBit Remastered update?',
    upvotes: 45,
    excerpt: 'Status banner, loader reload, and a test server before main accounts—patch talk summary.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'BattleBit cheat setup',
    sourcePath: '/blog/battlebit-cheat-setup/',
    answer:
      'Read battlebitcheat.com status and Discord #status. Download the portal loader build aligned with the patch before joining competitive modes.',
    detail:
      'Re-import cloud presets instead of copying old local files. Run a quick ESP sanity check on foot and in vehicles.',
    tip: 'Stop playing with outdated builds when status shows updating or offline.',
  }),
  guideDiscussion({
    slug: 'battlebit-loader-troubleshooting',
    title: 'Loader will not attach after Steam update—first checks?',
    upvotes: 31,
    excerpt: 'Exit overlay tools, verify admin launch, confirm status online, then open Discord support.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'BattleBit cheat setup',
    sourcePath: '/blog/battlebit-cheat-setup/',
    answer:
      'Close RTSS, Discord hardware acceleration conflicts, and third-party injectors. Run the loader as administrator once after the game patch.',
    detail:
      'Include your order email, Windows build, and loader error text if you open a support ticket—avoid pasting license keys in public threads.',
    tip: 'Use only the portal download link; ignore random DM attachments.',
  }),
  guideDiscussion({
    slug: 'battlebit-hwid-new-pc',
    title: 'Moved to a new PC—what is the HWID workflow?',
    upvotes: 26,
    excerpt: 'Portal reset or HWID Spoofer utility depending on your case—see product pages.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'BattleBit products',
    sourcePath: '/products/battlebit-remastered-cheats/hwid-spoofer/',
    answer:
      'Start with the portal HWID reset flow for license moves. HWID Spoofer is for hardware fingerprint issues documented on the utility product page.',
    detail:
      'Do not stack multiple spoofing tools without reading compatibility notes. One change at a time makes support faster.',
    tip: 'Contact support@battlebitcheat.com with order email before aggressive system tweaks.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'battlebit-supported-platform',
    category: 'General',
    categoryTone: 'purple',
    title: 'Which platform does the BattleBit cheat package support?',
    excerpt: 'Steam BattleBit Remastered on Windows 10 and 11 64-bit—per the setup and FAQ pages.',
    author: 'guide_team',
    age: '5 hours ago',
    commentsCount: 0,
    upvotes: 61,
    flair: 'Guide Q&A',
    sourceTitle: 'BattleBit cheat setup',
    sourcePath: '/blog/battlebit-cheat-setup/',
    body: [
      'BattleBit Remastered via Steam on Windows 10/11 64-bit is the supported path. macOS and Linux clients are not supported for the loader.',
      'Check the live status banner on battlebitcheat.com before every session, especially after Steam or game updates.',
    ],
    comments: [],
  },
  {
    slug: 'battlebit-esp-vehicles-included',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Does ESP include vehicles and boats?',
    excerpt: 'Vehicle tags are covered in the ESP guide with separate toggles from infantry.',
    author: 'guide_team',
    age: '8 hours ago',
    commentsCount: 0,
    upvotes: 38,
    flair: 'Guide Q&A',
    sourceTitle: 'BattleBit ESP and wallhack',
    sourcePath: '/blog/battlebit-esp-wallhack/',
    body: [
      'Yes—vehicle ESP is a separate module from player boxes. Enable it when you run armor or transport-heavy modes.',
      'Keep vehicle name tags subtle on dense Conquest maps so infantry threats remain readable.',
    ],
    comments: [],
  },
  ...guidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
