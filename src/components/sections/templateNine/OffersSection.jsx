import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T9_NAVY, T9_TEAL } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateNineOffersSection = memo(function TemplateNineOffersSection({ id = 'offers', title, offers }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white py-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1000px] px-5">
        <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
          {title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article
              key={o.id}
              className="flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0px_12px_32px_rgba(13,58,92,0.08)] ring-1 ring-black/[0.04]"
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage src={o.image} alt="" label={o.title} className="h-[160px] w-full sm:h-[180px]" />
                {o.tag ? (
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: T9_TEAL }}
                  >
                    {o.tag}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[12px] font-extrabold text-[#1a2744]">{o.title}</h3>
                <p className="mt-2 flex-1 text-[10px] font-medium leading-[15px] text-black/45">{o.description}</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  {o.priceActual ? (
                    <span className="text-[11px] font-medium text-black/35 line-through">{o.priceActual}</span>
                  ) : null}
                  {o.priceOffer ? (
                    <span className="text-[14px] font-extrabold" style={{ color: T9_NAVY }}>
                      {o.priceOffer}
                    </span>
                  ) : null}
                </div>
                <a href={o.link} className="mt-2 inline-flex text-[10px] font-bold" style={{ color: T9_TEAL }}>
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
