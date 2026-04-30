import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T9_NAVY, T9_TEAL } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateNineFeedSection = memo(function TemplateNineFeedSection({ id = 'feed', title, items }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white py-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1000px] px-5">
        <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
          {title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[14px] bg-[#F4F7F9] ring-1 ring-black/[0.05]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[140px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                {item.date ? (
                  <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: T9_TEAL }}>
                    {item.date}
                  </p>
                ) : null}
                <h3 className="mt-1 text-[12px] font-extrabold leading-snug text-[#1a2744]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[10px] font-medium leading-[15px] text-black/45">{item.description}</p>
                <a href={item.link} className="mt-2 inline-flex text-[10px] font-bold" style={{ color: T9_TEAL }}>
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
