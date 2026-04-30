import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T11_GREEN_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateElevenFeedSection = memo(function TemplateElevenFeedSection({ id = 'feed', title, items }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-[#fafafa] py-16 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1100px] px-5">
        <h2 className="text-center text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white ring-1 ring-black/[0.06] shadow-[0px_12px_32px_rgba(0,0,0,0.05)]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[160px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                {item.date ? (
                  <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">{item.date}</p>
                ) : null}
                <h3 className="mt-1 text-[15px] font-extrabold leading-snug text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-black/45">{item.description}</p>
                <a href={item.link} className="mt-4 inline-flex text-[11px] font-bold" style={{ color: T11_GREEN_DARK }}>
                  {item.linkLabel ?? 'Read more'} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
