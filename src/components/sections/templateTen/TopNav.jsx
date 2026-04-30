import { memo, useEffect, useId, useState } from 'react'
import { cn } from '../../../utils/cn.js'
import { useDocumentHash } from '../../../hooks/useDocumentHash.js'
import { isHashNavActive } from '../../../utils/hashNav.js'
import { T10_BLUE, T10_BLUE_DARK } from './constants.js'

export const TemplateTenTopNav = memo(function TemplateTenTopNav({
  brand,
  nav,
  headerLogin,
  headerSignup,
  headerLoginHref = '#contact',
  headerSignupHref = '#contact',
  showHeaderAuth = true,
  showHeaderLogin,
  showHeaderSignup,
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const docHash = useDocumentHash()

  const authRowEnabled = showHeaderAuth !== false
  const showLoginBtn = authRowEnabled && showHeaderLogin !== false
  const showSignupBtn = authRowEnabled && showHeaderSignup !== false
  const showAnyHeaderBtn = showLoginBtn || showSignupBtn

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

  const outlineBtn =
    'inline-flex h-[32px] shrink-0 items-center justify-center rounded-[10px] border-2 bg-white px-3 text-[10px] font-semibold transition hover:bg-black/[0.02] sm:px-4'
  const solidBtn =
    'inline-flex h-[32px] shrink-0 items-center justify-center rounded-[10px] px-3 text-[10px] font-semibold text-white shadow-[0px_10px_24px_rgba(37,99,235,0.35)] transition hover:opacity-95 sm:px-4'

  const mobileLinkClass =
    'block border-b border-black/[0.06] px-5 py-3.5 text-left text-[13px] font-semibold text-[#0f172a] transition hover:bg-black/[0.03]'

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white">
      <div className="relative">
        <div className="relative z-30 mx-auto flex max-w-[1040px] items-center justify-between gap-3 px-5 py-4">
          <a href="#top" className="min-w-0 shrink-0 hover:opacity-90" onClick={() => setOpen(false)}>
            <p className="truncate text-[15px] font-extrabold tracking-tight" style={{ color: T10_BLUE }}>
              {brand}
            </p>
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4 md:gap-6">
            <nav className="hidden items-center gap-5 text-[11px] font-semibold text-black/50 md:flex" aria-label="Primary">
              {(nav ?? []).map((item) => {
                const active = isHashNavActive(item.href, docHash)
                return (
                  <a
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className={cn('whitespace-nowrap hover:text-[#0f172a]', active && 'font-bold')}
                    style={{ color: active ? T10_BLUE : undefined }}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <div className="flex items-center gap-2">
              {showLoginBtn ? (
                <a
                  href={headerLoginHref}
                  className={cn(outlineBtn, 'hidden sm:inline-flex')}
                  style={{ borderColor: T10_BLUE, color: T10_BLUE }}
                  onClick={() => setOpen(false)}
                >
                  {headerLogin}
                </a>
              ) : null}
              {showSignupBtn ? (
                <a
                  href={headerSignupHref}
                  className={cn(solidBtn, 'hidden sm:inline-flex')}
                  style={{ backgroundColor: T10_BLUE }}
                  onClick={() => setOpen(false)}
                >
                  {headerSignup}
                </a>
              ) : null}
              <button
                type="button"
                className="relative grid size-10 shrink-0 place-items-center rounded-full border border-black/10 md:hidden"
                style={{ color: T10_BLUE_DARK }}
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
                        'bg-[rgba(37,99,235,0.1)] font-bold text-[#0f172a]',
                    )}
                    style={
                      isHashNavActive(item.href, docHash) ? { color: T10_BLUE } : undefined
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {showAnyHeaderBtn ? (
                  <div className="flex gap-2 border-t border-black/[0.06] px-5 py-4">
                    {showLoginBtn ? (
                      <a
                        href={headerLoginHref}
                        className={cn(outlineBtn, showSignupBtn ? 'flex-1' : 'w-full')}
                        style={{ borderColor: T10_BLUE, color: T10_BLUE }}
                        onClick={() => setOpen(false)}
                      >
                        {headerLogin}
                      </a>
                    ) : null}
                    {showSignupBtn ? (
                      <a
                        href={headerSignupHref}
                        className={cn(solidBtn, showLoginBtn ? 'flex-1' : 'w-full')}
                        style={{ backgroundColor: T10_BLUE }}
                        onClick={() => setOpen(false)}
                      >
                        {headerSignup}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  )
})
