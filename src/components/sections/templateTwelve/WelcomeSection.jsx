import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveWelcomeSection = memo(function TemplateTwelveWelcomeSection({ welcome, id = 'about' }) {
  return (
    <section id={id} className={`mx-auto grid w-full max-w-[1080px] gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center ${sectionScroll}`}>
      <div className="flex justify-center lg:justify-start">
        <div className="size-[260px] overflow-hidden rounded-full shadow-[0px_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] sm:size-[300px]">
          <PlaceholderImage src={welcome.image} alt="" label="About" className="size-full" />
        </div>
      </div>
      <div>
        <h2 className="font-playfair text-[30px] font-semibold sm:text-[34px]">{welcome.title}</h2>
        <p className="mt-4 text-[13px] font-medium leading-[22px] text-ink/55">
          <span className="text-ink/80">{welcome.lead}</span> {welcome.text}
        </p>
        {welcome.ctaLink ? (
          <a
            href={welcome.ctaLink}
            className="mt-8 inline-block rounded-full border-2 px-8 py-2.5 text-[10px] font-bold tracking-[0.15em]"
            style={{ borderColor: TW_BROWN, color: TW_BROWN }}
          >
            {welcome.cta}
          </a>
        ) : (
          <button
            type="button"
            className="mt-8 rounded-full border-2 px-8 py-2.5 text-[10px] font-bold tracking-[0.15em]"
            style={{ borderColor: TW_BROWN, color: TW_BROWN }}
          >
            {welcome.cta}
          </button>
        )}
      </div>
    </section>
  )
})
