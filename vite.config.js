import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)), 'utf-8'),
)
const repoBase = `/${pkg.name}/`

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub project pages live at /<repo>/; keep '/' in dev for normal local URLs.
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
}))
