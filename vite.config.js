import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pkgPath = fileURLToPath(new URL('./package.json', import.meta.url))

/**
 * Subpath hosts (e.g. https://user.github.io/repo/) must use base "/repo/" or
 * the browser requests /assets/*.js at the domain root → 404 → white screen.
 *
 * Priority:
 * 1. DEPLOY_BASE=/my-repo/ (any host)
 * 2. GITHUB_REPOSITORY (set in GitHub Actions) → /repo/
 * 3. GITHUB_PAGES=1 → /package.json "name"/ (local: npm run build:gh-pages)
 * 4. "/" (root sites: Netlify/Vercel/custom domain at /)
 */
function productionBase() {
  const explicit = process.env.DEPLOY_BASE?.trim()
  if (explicit === '/' || explicit === '') return '/'
  if (explicit) return explicit.endsWith('/') ? explicit : `${explicit}/`

  const slug = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
  if (slug.endsWith('.github.io')) return '/'
  if (slug) return `/${slug}/`

  if (process.env.GITHUB_PAGES === '1') {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
    const n = String(pkg.name || 'app').trim()
    if (n) return `/${n}/`
  }

  return '/'
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : productionBase(),
  plugins: [react()],
}))
