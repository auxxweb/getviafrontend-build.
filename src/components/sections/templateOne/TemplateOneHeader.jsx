import { memo } from 'react'
import { cn } from '../../../utils/cn.js'

export const TemplateOneHeader = memo(function TemplateOneHeader({
  logoText = 'LOGO',
  navItems = [{ label: 'Services', href: '#services' }],
  rightActionLabel = 'Edit',
  languageLabel = 'EN',
  className = '',
}) {
  return (
    <header className={cn('bg-[#fbf7f1]', className)}>
      <div className="mx-auto w-full max-w-[1100px] px-5 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-[18px] font-extrabold tracking-wide text-black">
            {logoText}
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 text-[12px] font-semibold text-black/70 sm:flex">
              {navItems.map((it) => (
                <a key={it.label} href={it.href} className="hover:text-black">
                  {it.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="hidden h-[28px] items-center justify-center rounded-[6px] border border-black/15 bg-white px-4 text-[12px] font-semibold text-black/70 shadow-[0px_10px_24px_rgba(0,0,0,0.06)] sm:inline-flex"
            >
              {rightActionLabel}
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-black/70"
            >
              {languageLabel}
              <span className="inline-block size-1.5 rotate-45 border-b-2 border-r-2 border-current opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
})

