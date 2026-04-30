import { memo } from 'react'
import { T9_NAVY } from './constants.js'
import { T9_SECTION_SOFT } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateNineSocialSection = memo(function TemplateNineSocialSection({
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
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: T9_SECTION_SOFT }}>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-5 text-center">
        <h2 className="text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
          {title}
        </h2>
        <p className="mt-2 max-w-[480px] text-[10px] font-medium text-black/45">
          Stay connected for health tips and campus updates.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {display.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border-2 px-4 py-2 text-[10px] font-bold transition hover:bg-white/90"
              style={{ borderColor: T9_NAVY, color: T9_NAVY }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
