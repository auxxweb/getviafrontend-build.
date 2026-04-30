import { memo, useEffect, useId, useState } from 'react'
import { cn } from '../../../utils/cn.js'
import { useDocumentHash } from '../../../hooks/useDocumentHash.js'
import { isHashNavActive } from '../../../utils/hashNav.js'
import { T8_BG, t8GradientStyle } from './constants.js'

export const TemplateEightTopNav = memo(function TemplateEightTopNav({
  brand,
  nav,
  headerLogin,
  headerSignup,
  headerLoginHref = '#contact',
  headerSignupHref = '#contact',
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const docHash = useDocumentHash()

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

  const ghostBtn =
    'inline-flex h-[32px] shrink-0 items-center justify-center rounded-[10px] bg-white/5 px-3 text-[10px] font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 sm:px-4'
  const solidBtn =
    'inline-flex h-[32px] shrink-0 items-center justify-center rounded-[10px] px-3 text-[10px] font-semibold text-white shadow-[0px_12px_26px_rgba(42,84,255,0.25)] transition hover:opacity-95 sm:px-4'

  const mobileLinkClass =
    'block border-b border-white/10 px-5 py-3.5 text-left text-[13px] font-semibold text-white/90 transition hover:bg-white/5'

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ backgroundColor: `${T8_BG}ee` }}
    >
      <div className="relative">
        <div className="relative z-30 mx-auto flex max-w-[1020px] items-center justify-between gap-3 px-5 py-4">
          <a href="#top" className="min-w-0 shrink-0 hover:opacity-90" onClick={() => setOpen(false)}>
            <p className="truncate text-[12px] font-extrabold tracking-wide text-white/90">{brand}</p>
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-5">
            <nav className="hidden items-center gap-4 text-[10px] font-semibold text-white/55 md:flex" aria-label="Primary">
              {(nav ?? []).map((item) => (
                <a
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={cn(
                    'whitespace-nowrap hover:text-white',
                    isHashNavActive(item.href, docHash) && 'font-bold text-white',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={headerLoginHref}
                className={cn(ghostBtn, 'hidden sm:inline-flex')}
                onClick={() => setOpen(false)}
              >
                {headerLogin}
              </a>
              <a
                href={headerSignupHref}
                className={cn(solidBtn, 'hidden sm:inline-flex')}
                style={t8GradientStyle}
                onClick={() => setOpen(false)}
              >
                {headerSignup}
              </a>
              <button
                type="button"
                className="relative grid size-10 shrink-0 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 md:hidden"
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
              className="fixed inset-0 z-10 bg-black/50 md:hidden"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <div
              id={menuId}
              className="absolute left-0 right-0 top-full z-20 max-h-[min(72vh,calc(100dvh-5rem))] overflow-y-auto border-t border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:hidden"
              style={{ backgroundColor: T8_BG }}
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
                      isHashNavActive(item.href, docHash) && 'bg-white/15 font-bold text-white',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-2 border-t border-white/10 px-5 py-4">
                  <a href={headerLoginHref} className={cn(ghostBtn, 'flex-1')} onClick={() => setOpen(false)}>
                    {headerLogin}
                  </a>
                  <a
                    href={headerSignupHref}
                    className={cn(solidBtn, 'flex-1')}
                    style={t8GradientStyle}
                    onClick={() => setOpen(false)}
                  >
                    {headerSignup}
                  </a>
                </div>
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  )
})
