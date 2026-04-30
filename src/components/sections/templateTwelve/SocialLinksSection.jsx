import { memo } from 'react'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveSocialLinksSection = memo(function TemplateTwelveSocialLinksSection({
  title,
  socialLinks,
  id = 'social',
}) {
  const items = [
    socialLinks?.facebook ? { href: socialLinks.facebook, label: 'Facebook' } : null,
    socialLinks?.instagram ? { href: socialLinks.instagram, label: 'Instagram' } : null,
    socialLinks?.twitter ? { href: socialLinks.twitter, label: 'Twitter' } : null,
    socialLinks?.linkedin ? { href: socialLinks.linkedin, label: 'LinkedIn' } : null,
    socialLinks?.youtube ? { href: socialLinks.youtube, label: 'YouTube' } : null,
  ].filter(Boolean)

  const display =
    items.length > 0
      ? items
      : [
          { href: '#', label: 'Facebook' },
          { href: '#', label: 'Instagram' },
          { href: '#', label: 'Twitter' },
        ]

  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white/25 py-12 ${sectionScroll}`}>
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center px-5 text-center">
        <h2 className="font-playfair text-[24px] font-semibold sm:text-[26px]">{title}</h2>
        <p className="mt-2 max-w-[480px] text-[12px] font-medium text-ink/45">
          Connect with us for launches, tips, and behind-the-scenes updates.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {display.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border-2 px-6 py-2.5 text-[11px] font-bold tracking-wide transition hover:bg-black/[0.03]"
              style={{ borderColor: TW_BROWN, color: TW_BROWN }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
