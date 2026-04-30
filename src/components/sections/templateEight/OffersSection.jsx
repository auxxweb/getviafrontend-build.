import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { t8GradientStyle } from './constants.js'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

export const TemplateEightOffersSection = memo(function TemplateEightOffersSection({ id = 'offers', title, offers }) {
  return (
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1020px] px-5">
        <h2 className="text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article key={o.id} className={`overflow-hidden ${glass}`}>
              <div className="relative overflow-hidden p-3 pb-0">
                <div className="overflow-hidden rounded-[14px]">
                  <PlaceholderImage src={o.image} alt="" label={o.title} className="h-[140px] w-full sm:h-[160px]" />
                </div>
                {o.tag ? (
                  <span
                    className="absolute left-5 top-5 rounded-full bg-white/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20"
                  >
                    {o.tag}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-4 pt-3">
                <h3 className="text-[11px] font-extrabold text-white">{o.title}</h3>
                <p className="mt-2 flex-1 text-[9px] font-medium leading-[14px] text-white/45">{o.description}</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  {o.priceActual ? (
                    <span className="text-[10px] font-medium text-white/35 line-through">{o.priceActual}</span>
                  ) : null}
                  {o.priceOffer ? (
                    <span className="text-[12px] font-extrabold text-white">{o.priceOffer}</span>
                  ) : null}
                </div>
                <a
                  href={o.link}
                  className="mt-3 inline-flex w-fit rounded-[10px] px-3 py-1.5 text-[9px] font-bold text-white"
                  style={t8GradientStyle}
                >
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
