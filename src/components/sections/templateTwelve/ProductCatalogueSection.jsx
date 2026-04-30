import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN, TW_BROWN_LIGHT } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveProductCatalogueSection = memo(function TemplateTwelveProductCatalogueSection({
  id = 'catalogue',
  title,
  items,
}) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white/25 py-16 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="text-center font-playfair text-[28px] font-semibold sm:text-[32px]">{title}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? []).map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white/90 shadow-[0px_12px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.05]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[200px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-playfair text-[16px] font-semibold text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-ink/45">{p.description}</p>
                {p.price ? (
                  <p className="mt-3 text-[15px] font-bold" style={{ color: TW_BROWN_LIGHT }}>
                    {p.price}
                  </p>
                ) : null}
                <a
                  href={p.link}
                  className="mt-4 inline-flex text-[11px] font-bold tracking-wide"
                  style={{ color: TW_BROWN }}
                >
                  {p.linkLabel} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
