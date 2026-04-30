import { memo, useEffect, useId, useState } from 'react'
import { cn } from '../../../utils/cn.js'
import { useDocumentHash } from '../../../hooks/useDocumentHash.js'
import { isHashNavActive } from '../../../utils/hashNav.js'
import { T11_GREEN_DARK } from './constants.js'

function LeafIcon({ className = '' }) {
  return (
    <span className={cn('inline-flex text-[18px]', className)} aria-hidden>
      🌿
    </span>
  )
}

export const TemplateElevenTopNav = memo(function TemplateElevenTopNav({
  brand,
  nav,
  headerCta,
  headerCtaHref = '#contact',
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const docHash = useDocumentHash()
  const greenDark = T11_GREEN_DARK

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const ctaClass =
    'inline-flex h-[36px] shrink-0 items-center justify-center rounded-[10px] px-3 text-[10px] font-bold text-white shadow-[0px_10px_24px_rgba(34,197,94,0.35)] transition hover:opacity-95 sm:h-[38px] sm:px-5 sm:text-[11px]'

  const mobileLinkClass =
    'block border-b border-black/[0.06] px-5 py-3.5 text-left text-[13px] font-semibold text-[#0f172a] transition hover:bg-black/[0.03]'

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="relative">
        <div className="relative z-30 mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-5 py-3.5">
          <a
            href="#top"
            className="flex min-w-0 shrink-0 items-center gap-2 hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            <LeafIcon />
            <span className="truncate text-[14px] font-extrabold text-[#0f172a] sm:text-[15px]">{brand}</span>
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-5 md:gap-8">
            <nav className="hidden items-center gap-5 text-[11px] font-semibold text-black/50 md:flex" aria-label="Primary">
              {(nav ?? []).map((item) => (
                <a key={`${item.href}-${item.label}`} href={item.href} className="whitespace-nowrap hover:text-[#0f172a]">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={headerCtaHref}
                className={ctaClass}
                style={{ backgroundColor: greenDark }}
                onClick={() => setOpen(false)}
              >
                {headerCta}
              </a>
              <button
                type="button"
                className="relative grid size-10 shrink-0 place-items-center rounded-full border border-black/10 md:hidden"
                style={{ color: greenDark }}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((o) => !o)}
              >
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-current transition-transform duration-200 ${open ? 'translate-y-0 rotate-45' : '-translate-y-2'}`}
                  aria-hidden
                />
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
                  aria-hidden
                />
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-current transition-transform duration-200 ${open ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`}
                  aria-hidden
                />
              </button>
            </div>
          </div>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-10 bg-black/20 md:hidden"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <div
              id={menuId}
              className="absolute left-0 right-0 top-full z-20 max-h-[min(72vh,calc(100dvh-5rem))] overflow-y-auto border-t border-black/[0.08] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site sections"
            >
              <nav className="py-1" aria-label="Primary mobile">
                {(nav ?? []).map((item) => (
                  <a
                    key={`${item.href}-${item.label}-m`}
                    href={item.href}
                    className={cn(
                      mobileLinkClass,
                      isHashNavActive(item.href, docHash) &&
                        'bg-[rgba(34,197,94,0.12)] font-bold text-[#0f172a]',
                    )}
                    style={
                      isHashNavActive(item.href, docHash) ? { color: greenDark } : undefined
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  )
})
