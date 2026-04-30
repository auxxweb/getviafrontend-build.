/**
 * Whether a hash nav `<a href="#section">` matches the current document hash.
 * `#top`, `#`, or empty href counts as the “top” route (active when hash is empty).
 */
export function isHashNavActive(href, currentHash) {
  const target = normalizeHashHref(href)
  const h = (currentHash || '').trim()

  if (target === '#top' || target === '#' || target === '') {
    return !h || h === '#top' || h === '#'
  }
  return h === target
}

function normalizeHashHref(href) {
  if (href == null) return ''
  const s = String(href).trim()
  if (s.startsWith('#')) return s
  const i = s.indexOf('#')
  return i >= 0 ? s.slice(i) : s
}
