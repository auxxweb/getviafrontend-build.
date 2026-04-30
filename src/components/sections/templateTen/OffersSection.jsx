import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T10_BLUE_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateTenOffersSection = memo(function TemplateTenOffersSection({ id = 'offers', title, offers }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white py-14 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1040px] px-5">
        <h2 className="text-center text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article
              key={o.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.06]"
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage src={o.image} alt="" label={o.title} className="h-[180px] w-full" />
                {o.tag ? (
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: T10_BLUE_DARK }}
                  >
                    {o.tag}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[14px] font-extrabold text-[#0f172a]">{o.title}</h3>
                <p className="mt-2 flex-1 text-[11px] font-medium leading-[17px] text-black/45">{o.description}</p>
                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  {o.priceActual ? (
                    <span className="text-[12px] font-medium text-black/35 line-through">{o.priceActual}</span>
                  ) : null}
                  {o.priceOffer ? (
                    <span className="text-[15px] font-extrabold" style={{ color: T10_BLUE_DARK }}>
                      {o.priceOffer}
                    </span>
                  ) : null}
                </div>
                <a href={o.link} className="mt-3 inline-flex text-[11px] font-bold" style={{ color: T10_BLUE_DARK }}>
                  {o.linkLabel ?? 'View'} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
