import { memo } from 'react'
import { cn } from '../../../utils/cn.js'

function SocialCircle({ variant = 'plain', href = '#', children, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'grid size-[34px] place-items-center rounded-full',
        variant === 'gradient'
          ? 'bg-gradient-to-br from-[#ff7a00] via-[#ff2a9b] to-[#7b61ff] text-white shadow-[0px_12px_30px_rgba(0,0,0,0.12)]'
          : 'bg-white text-black shadow-[0px_12px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5',
      )}
    >
      {children}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.86.24-1.45 1.47-1.45H16.7V5.1c-.3-.04-1.35-.12-2.57-.12-2.54 0-4.28 1.55-4.28 4.4V11H7.3v3h2.55v8h3.65Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.5 3h3l-6.6 7.5L22 21h-5.7l-4.5-5.9L6.6 21H3.5l7.1-8.1L2 3h5.8l4.1 5.3L18.5 3Zm-1 16h1.7L7.3 5H5.5l12 14Z" />
    </svg>
  )
}

function StoreBadge({ label }) {
  return (
    <div className="inline-flex h-[28px] items-center justify-center rounded-[10px] bg-black px-3 text-[10px] font-semibold text-white">
      {label}
    </div>
  )
}

export const TemplateOneFooter = memo(function TemplateOneFooter({
  brand = { name: 'Jadoo.', tagline: 'Book your trip in minute, get full Control for much longer.' },
  columns = [
    { title: 'Company', links: ['About', 'Careers', 'Mobile'] },
    { title: 'Contact', links: ['Help/FAQ', 'Press', 'Affiliates'] },
    { title: 'More', links: ['Airlinefees', 'Airline', 'Low fare tips'] },
  ],
  socialLinks = { facebook: '#', instagram: '#', twitter: '#' },
  appText = 'Discover our app',
  copyright = 'All rights reserved@jadoo.co',
}) {
  return (
    <footer className="bg-[#fbf7f1]">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr_1.1fr] lg:items-start">
          <div>
            <p className="font-['Georgia',serif] text-[26px] font-extrabold text-[#1b2342]">
              {brand?.name}
            </p>
            <p className="mt-3 max-w-[220px] text-[11px] font-medium leading-[16px] text-black/45">
              {brand?.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns?.slice(0, 3).map((col) => (
              <div key={col.title}>
                <p className="text-[12px] font-extrabold text-[#1b2342]">{col.title}</p>
                <div className="mt-4 grid gap-2 text-[11px] font-semibold text-black/45">
                  {col.links?.map((t) => (
                    <a key={t} href="#" className="hover:text-black/70">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-center gap-3">
              <SocialCircle href={socialLinks.facebook} label="Facebook">
                <FacebookIcon />
              </SocialCircle>
              <SocialCircle variant="gradient" href={socialLinks.instagram} label="Instagram">
                <InstagramIcon />
              </SocialCircle>
              <SocialCircle href={socialLinks.twitter} label="Twitter">
                <TwitterIcon />
              </SocialCircle>
            </div>

            <p className={cn('text-[12px] font-semibold text-black/55', 'lg:text-right')}>
              {appText}
            </p>
            <div className="flex items-center gap-3">
              <StoreBadge label="GET IT ON Google Play" />
              <StoreBadge label="Available on the App Store" />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-[11px] font-medium text-black/35">
          {copyright}
        </p>
      </div>

      <div aria-hidden className="h-[84px] bg-[#f5d9b7]/70" />
    </footer>
  )
})

