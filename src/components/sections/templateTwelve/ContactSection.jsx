import { memo } from 'react'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveContactSection = memo(function TemplateTwelveContactSection({
  id = 'contact',
  findTitle,
  formTitle,
  submitCta,
  phone,
  email,
  address,
}) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white/30 py-16 ${sectionScroll}`}>
      <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-playfair text-[22px] font-semibold">{findTitle}</h2>
          <ul className="mt-6 grid gap-4">
            <li className="flex gap-3 text-[13px] font-medium text-ink/55">
              <span className="text-[16px]" aria-hidden>
                📞
              </span>
              {phone || '—'}
            </li>
            <li className="flex gap-3 text-[13px] font-medium text-ink/55">
              <span className="text-[16px]" aria-hidden>
                ✉
              </span>
              {email || '—'}
            </li>
            <li className="flex gap-3 text-[13px] font-medium text-ink/55">
              <span className="text-[16px]" aria-hidden>
                📍
              </span>
              {address || '—'}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-playfair text-[22px] font-semibold">{formTitle}</h2>
          <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="h-[44px] rounded-[10px] border border-black/10 px-4 text-[12px] outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              className="h-[44px] rounded-[10px] border border-black/10 px-4 text-[12px] outline-none"
              placeholder="Email"
            />
            <textarea
              rows={4}
              className="rounded-[10px] border border-black/10 px-4 py-3 text-[12px] outline-none placeholder:text-black/35"
              placeholder="Message"
            />
            <button
              type="submit"
              className="h-[44px] w-fit rounded-full px-8 text-[11px] font-bold tracking-[0.1em] text-white"
              style={{ backgroundColor: TW_BROWN }}
            >
              {submitCta}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})
