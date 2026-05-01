import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexHtml = path.join(root, 'dist', 'index.html')
const notFoundHtml = path.join(root, 'dist', '404.html')

if (!existsSync(indexHtml)) {
  console.error('copy-index-as-404: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

copyFileSync(indexHtml, notFoundHtml)
console.log('copy-index-as-404: dist/index.html -> dist/404.html')
