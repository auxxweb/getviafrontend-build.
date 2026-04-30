import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveOffersSection = memo(function TemplateTwelveOffersSection({ title, offers, id = 'offers' }) {
  return (
    <section id={id} className={`border-b border-black/[0.06] bg-white/25 py-14 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="text-center font-playfair text-[26px] font-semibold sm:text-[30px]">{title}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article
              key={o.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white/90 shadow-[0px_12px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05]"
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage src={o.image} alt="" label={o.title} className="h-[180px] w-full" />
                {o.tag ? (
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: TW_BROWN }}
                  >
                    {o.tag}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-playfair text-[17px] font-semibold text-[#0f172a]">{o.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-ink/50">{o.description}</p>
                <div className="mt-4 flex flex-wrap items-baseline gap-2">
                  {o.priceActual ? (
                    <span className="text-[13px] font-medium text-ink/35 line-through">{o.priceActual}</span>
                  ) : null}
                  {o.priceOffer ? (
                    <span className="text-[16px] font-bold" style={{ color: TW_BROWN }}>
                      {o.priceOffer}
                    </span>
                  ) : null}
                  {!o.priceOffer && o.priceActual ? (
                    <span className="text-[16px] font-bold" style={{ color: TW_BROWN }}>
                      {o.priceActual}
                    </span>
                  ) : null}
                </div>
                <a
                  href={o.link}
                  className="mt-4 inline-flex text-[11px] font-bold tracking-wide"
                  style={{ color: TW_BROWN }}
                >
                  {o.linkLabel} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
