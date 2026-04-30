import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T10_BLUE, T10_BLUE_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateTenCatalogueSection = memo(function TemplateTenCatalogueSection({
  id = 'catalogue',
  title,
  items,
}) {
  return (
    <section id={id} className={`border-t border-black/[0.04] py-14 ${scroll}`} style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto w-full max-w-[1040px] px-5">
        <h2 className="text-center text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? []).map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white ring-1 ring-black/[0.06] shadow-[0px_12px_32px_rgba(15,23,42,0.05)]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[200px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[14px] font-extrabold text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 flex-1 text-[11px] font-medium leading-[17px] text-black/45">{p.description}</p>
                {p.price ? (
                  <p className="mt-3 text-[16px] font-extrabold" style={{ color: T10_BLUE }}>
                    {p.price}
                  </p>
                ) : null}
                <a href={p.link} className="mt-3 inline-flex text-[11px] font-bold" style={{ color: T10_BLUE_DARK }}>
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
