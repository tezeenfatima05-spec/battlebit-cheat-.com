/**
 * Cloudflare Pages static upload — use ONLY if your project requires a custom deploy command.
 * Preferred: leave Deploy command empty in the dashboard; set Build output directory to `dist`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const distIndex = 'dist/index.html';
if (!fs.existsSync(distIndex)) {
  console.error('Missing dist/index.html. Run npm run build before deploy.');
  process.exit(1);
}

const projectName =
  process.env.CF_PAGES_PROJECT_NAME?.trim() ||
  process.env.WRANGLER_PAGES_PROJECT?.trim() ||
  'battlebit-cheat';

const wranglerArgs = [
  'pages',
  'deploy',
  'dist',
  '--project-name',
  projectName,
  '--commit-dirty=true',
];

const branch = process.env.CF_PAGES_BRANCH?.trim();
if (branch) {
  wranglerArgs.push('--branch', branch);
}

console.log(`Uploading dist/ to Cloudflare Pages project "${projectName}"…`);

execFileSync('npx', ['wrangler', ...wranglerArgs], { stdio: 'inherit', shell: true });
