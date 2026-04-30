import { memo } from 'react'
import { t8GradientStyle } from './constants.js'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

export const TemplateEightSocialSection = memo(function TemplateEightSocialSection({
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
          { href: '#', label: 'YouTube' },
        ]

  return (
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto flex w-full max-w-[1020px] flex-col items-center px-5 text-center">
        <div className={`w-full max-w-[560px] px-6 py-8 ${glass}`}>
          <h2 className="text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
          <p className="mt-2 text-[10px] font-medium text-white/45">New drops, events, and road-trip inspiration.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {display.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full px-4 py-2 text-[10px] font-bold text-white shadow-[0px_10px_24px_rgba(42,84,255,0.2)]"
                style={t8GradientStyle}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
