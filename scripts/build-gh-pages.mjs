/**
 * Sets GITHUB_PAGES=1 so vite.config uses base "/<package.json name>/".
 * Use when deploying a GitHub *project* site from your machine.
 */
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const result = spawnSync(npm, ['run', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: '1' },
  shell: true,
})

process.exit(result.status ?? 1)
