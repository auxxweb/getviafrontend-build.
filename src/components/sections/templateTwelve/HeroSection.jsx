import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN } from './constants.js'

const ctaClass =
  'mt-8 rounded-full px-10 py-3 text-[11px] font-bold tracking-[0.12em] text-white transition hover:opacity-95'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveHeroSection = memo(function TemplateTwelveHeroSection({ hero, id = 'top' }) {
  return (
    <section id={id} className={`mx-auto grid w-full max-w-[1080px] gap-10 px-5 py-14 lg:grid-cols-2 lg:items-center ${sectionScroll}`}>
      <div className="overflow-hidden rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
        <PlaceholderImage src={hero.image} alt="" label="Hero" className="h-[280px] w-full sm:h-[360px]" />
      </div>
      <div className="lg:pl-4">
        <h1 className="font-playfair text-[34px] font-semibold leading-[1.15] sm:text-[42px] lg:text-[46px]">{hero.title}</h1>
        <p className="mt-5 max-w-[440px] text-[13px] font-medium leading-[22px] text-ink/50">{hero.subtitle}</p>
        {hero.ctaLink ? (
          <a href={hero.ctaLink} className={`inline-block ${ctaClass}`} style={{ backgroundColor: TW_BROWN }}>
            {hero.cta}
          </a>
        ) : (
          <button type="button" className={ctaClass} style={{ backgroundColor: TW_BROWN }}>
            {hero.cta}
          </button>
        )}
      </div>
    </section>
  )
})
