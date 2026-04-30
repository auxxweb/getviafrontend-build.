import { memo } from 'react'
import { T11_GREEN_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateElevenSocialSection = memo(function TemplateElevenSocialSection({
  id = 'social',
  title,
  socialLinks,
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
    <section id={id} className={`border-t border-black/[0.04] bg-[#fafafa] py-14 ${scroll}`}>
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 text-center">
        <h2 className="text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        <p className="mt-2 max-w-[480px] text-[12px] font-medium text-black/45">
          Connect for tips, offers, and service updates.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {display.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border-2 px-6 py-2.5 text-[11px] font-bold transition hover:bg-black/[0.02]"
              style={{ borderColor: T11_GREEN_DARK, color: T11_GREEN_DARK }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
