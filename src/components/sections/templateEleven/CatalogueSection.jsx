import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T11_GREEN, T11_GREEN_DARK } from './constants.js'

const scroll = 'scroll-mt-[88px]'

export const TemplateElevenCatalogueSection = memo(function TemplateElevenCatalogueSection({
  id = 'catalogue',
  title,
  items,
}) {
  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white py-16 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1100px] px-5">
        <h2 className="text-center text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? []).map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-[#fafafa] shadow-[0px_12px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.06]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[200px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[16px] font-extrabold text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-black/45">{p.description}</p>
                {p.price ? (
                  <p className="mt-3 text-[17px] font-extrabold" style={{ color: T11_GREEN }}>
                    {p.price}
                  </p>
                ) : null}
                <a
                  href={p.link}
                  className="mt-4 inline-flex text-[11px] font-bold"
                  style={{ color: T11_GREEN_DARK }}
                >
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
