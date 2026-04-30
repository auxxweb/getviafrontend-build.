import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T10_BLUE_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateTenFeedSection = memo(function TemplateTenFeedSection({ id = 'feed', title, items }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white py-14 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1040px] px-5">
        <h2 className="text-center text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-[#F8FAFC] ring-1 ring-black/[0.06]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[160px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                {item.date ? (
                  <p className="text-[10px] font-bold uppercase tracking-wide text-blue-700/80">{item.date}</p>
                ) : null}
                <h3 className="mt-1 text-[14px] font-extrabold leading-snug text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[11px] font-medium leading-[17px] text-black/45">{item.description}</p>
                <a href={item.link} className="mt-3 inline-flex text-[11px] font-bold" style={{ color: T10_BLUE_DARK }}>
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
