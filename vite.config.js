import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)), 'utf-8'),
)

function repoSlugFromGitRemote() {
  try {
    const url = execSync('git config --get remote.origin.url', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    const m = url.match(/[:/]([^/]+)\/([^/.]+?)(?:\.git)?$/i)
    const slug = m?.[2]
    if (!slug) return ''
    if (slug.endsWith('.github.io')) return ''
    return slug
  } catch {
    return ''
  }
}

/** GitHub Pages path: `/` for user/organization sites, `/<repo>/` for project pages. */
function productionBase() {
  const explicit = process.env.GITHUB_PAGES_BASE?.trim()
  if (explicit === '/' || explicit === '') return '/'
  if (explicit) return explicit.endsWith('/') ? explicit : `${explicit}/`

  const slug = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
  if (slug.endsWith('.github.io')) return '/'
  if (slug) return `/${slug}/`

  const fromGit = repoSlugFromGitRemote()
  if (fromGit) return `/${fromGit}/`
  return `/${pkg.name}/`
}

const figmaMcpUrl =
  /https:\/\/www\.figma\.com\/api\/mcp\/asset\/[0-9a-fA-F-]+/g

const figmaMcpPlaceholderPlugin = () => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e8e6dd"/></svg>'
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`

  return {
    name: 'figma-mcp-public-placeholder',
    apply: 'build',
    transform(code, id) {
      const path = id.replace(/\\/g, '/')
      if (!path.includes('/src/')) return null
      if (!code.includes('figma.com/api/mcp/asset')) return null
      return code.replace(figmaMcpUrl, dataUrl)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub project pages live at /<repo>/; keep '/' in dev for normal local URLs.
  base: mode === 'production' ? productionBase() : '/',
  plugins: [react(), figmaMcpPlaceholderPlugin()],
}))
