import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T9_NAVY, T9_TEAL, T9_SECTION_SOFT } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateNineCatalogueSection = memo(function TemplateNineCatalogueSection({
  id = 'catalogue',
  title,
  items,
}) {
  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: T9_SECTION_SOFT }}>
      <div className="mx-auto w-full max-w-[1000px] px-5">
        <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
          {title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? []).map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-[14px] bg-white ring-1 ring-black/[0.05] shadow-[0px_12px_32px_rgba(13,58,92,0.08)]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[180px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[12px] font-extrabold text-[#1a2744]">{p.title}</h3>
                <p className="mt-2 flex-1 text-[10px] font-medium leading-[15px] text-black/45">{p.description}</p>
                {p.price ? (
                  <p className="mt-2 text-[14px] font-extrabold" style={{ color: T9_NAVY }}>
                    {p.price}
                  </p>
                ) : null}
                <a href={p.link} className="mt-2 inline-flex text-[10px] font-bold" style={{ color: T9_TEAL }}>
                  {p.linkLabel ?? 'View'} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
