import { memo } from 'react'
import { T10_BLUE } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateTenSocialSection = memo(function TemplateTenSocialSection({
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
          { href: '#', label: 'Twitter' },
          { href: '#', label: 'Instagram' },
        ]

  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: '#EFF6FF' }}>
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-5 text-center">
        <h2 className="text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
        <p className="mt-2 max-w-[480px] text-[11px] font-medium text-black/45">Stay connected for health tips and updates.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {display.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border-2 px-5 py-2.5 text-[11px] font-bold transition hover:bg-white/80"
              style={{ borderColor: T10_BLUE, color: T10_BLUE }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
