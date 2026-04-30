import { memo } from 'react'
import { PlaceholderImage } from '../../ui/PlaceholderImage.jsx'
import { cn } from '../../../utils/cn.js'

function SocialIcon({ type }) {
  const common = 'size-[16px] text-[#1a1c19]'
  if (type === 'fb')
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.86.24-1.45 1.47-1.45H16.7V5.1c-.3-.04-1.35-.12-2.57-.12-2.54 0-4.28 1.55-4.28 4.4V11H7.3v3h2.55v8h3.65Z" />
      </svg>
    )
  if (type === 'ig')
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    )
  if (type === 'in')
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 21h3V9H3v12ZM9 9h2.9v1.6h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.66 2 3.66 4.7V21h-3v-5.6c0-1.33-.03-3.04-1.9-3.04-1.9 0-2.2 1.45-2.2 2.95V21H9V9Z" />
      </svg>
    )
  if (type === 'tw')
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.5 3h3l-6.6 7.5L22 21h-5.7l-4.5-5.9L6.6 21H3.5l7.1-8.1L2 3h5.8l4.1 5.3L18.5 3Zm-1 16h1.7L7.3 5H5.5l12 14Z" />
      </svg>
    )
  return null
}

export const TemplateOneHero = memo(function TemplateOneHero({
  eyebrow = 'BEST DESTINATIONS AROUND THE WORLD',
  titleLines = ['Travel, enjoy', 'and live a new', 'and full life'],
  description = '',
  ctaLabel = 'Find out more',
  onCta,
  heroImage,
  socialLinks = {},
}) {
  return (
    <section className="bg-[#fbf7f1]">
      <div className="relative mx-auto w-full max-w-[1100px] px-5 pb-10 pt-6 sm:pb-14">
        {/* right blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden h-[260px] w-[420px] rounded-bl-[140px] bg-[#f5d9b7]/60 sm:block"
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#e78b77]">
              {eyebrow}
            </p>

            <h1 className="mt-4 font-['Georgia',serif] text-[44px] font-extrabold leading-[1.03] text-[#1b2342] sm:text-[58px]">
              {titleLines.map((l, idx) => (
                <span key={idx} className="block">
                  {l}
                  {idx === 0 ? (
                    <span className="ml-2 inline-block h-[4px] w-[120px] translate-y-[-6px] bg-[#e86c5a]" />
                  ) : null}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-[420px] text-[12px] font-medium leading-[18px] text-black/45">
              {description}
            </p>

            <button
              type="button"
              onClick={onCta}
              className="mt-6 inline-flex h-[38px] items-center justify-center rounded-[8px] bg-[#f0a12b] px-5 text-[12px] font-semibold text-white shadow-[0px_10px_24px_rgba(240,161,43,0.35)]"
            >
              {ctaLabel}
            </button>

            <div className="mt-5 flex items-center gap-3">
              {[
                ['fb', socialLinks.facebook],
                ['ig', socialLinks.instagram],
                ['in', socialLinks.linkedin],
                ['tw', socialLinks.twitter],
              ].map(([k, href]) =>
                href ? (
                  <a
                    key={k}
                    href={href}
                    className="grid size-[18px] place-items-center rounded-full bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
                  >
                    <SocialIcon type={k} />
                  </a>
                ) : null,
              )}
            </div>
          </div>

          <div className={cn('relative mx-auto w-full max-w-[360px]')}>
            <div className="absolute -right-4 -top-6 hidden size-[220px] rounded-bl-[120px] bg-[#f5d9b7]/70 sm:block" />
            <div className="relative overflow-hidden rounded-[28px]">
              <PlaceholderImage
                src={typeof heroImage === 'string' ? heroImage : heroImage?.src}
                alt=""
                label="Hero"
                className="h-[320px] w-full sm:h-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

