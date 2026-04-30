import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { t8GradientStyle } from './constants.js'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

export const TemplateEightFeedSection = memo(function TemplateEightFeedSection({ id = 'feed', title, items }) {
  return (
    <section id={id} className={`pb-14 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1020px] px-5">
        <h2 className="text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className={`overflow-hidden ${glass}`}>
              <div className="overflow-hidden p-3 pb-0">
                <div className="overflow-hidden rounded-[14px]">
                  <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[120px] w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-3">
                {item.date ? (
                  <p className="text-[9px] font-bold uppercase tracking-wide text-white/40">{item.date}</p>
                ) : null}
                <h3 className="mt-1 text-[11px] font-extrabold leading-snug text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-[9px] font-medium leading-[14px] text-white/45">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-3 inline-flex w-fit rounded-[10px] px-3 py-1.5 text-[9px] font-bold text-white"
                  style={t8GradientStyle}
                >
                  {item.linkLabel ?? 'Read'} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
