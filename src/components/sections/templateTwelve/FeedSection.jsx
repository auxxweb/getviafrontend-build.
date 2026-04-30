import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveFeedSection = memo(function TemplateTwelveFeedSection({ title, items, id = 'feed' }) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white/30 py-16 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="text-center font-playfair text-[28px] font-semibold sm:text-[32px]">{title}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white/90 ring-1 ring-black/[0.05]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[160px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                {item.date ? (
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/40">{item.date}</p>
                ) : null}
                <h3 className="mt-1 font-playfair text-[16px] font-semibold leading-snug text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-ink/45">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-flex text-[11px] font-bold tracking-wide"
                  style={{ color: TW_BROWN }}
                >
                  {item.linkLabel} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
