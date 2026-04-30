import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { t8GradientStyle } from './constants.js'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

export const TemplateEightCatalogueSection = memo(function TemplateEightCatalogueSection({
  id = 'catalogue',
  title,
  items,
}) {
  return (
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1020px] px-5">
        <h2 className="text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? []).map((p) => (
            <article key={p.id} className={`overflow-hidden p-3 ${glass}`}>
              <div className="overflow-hidden rounded-[14px]">
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[120px] w-full sm:h-[130px]" />
              </div>
              <div className="mt-3 min-w-0">
                <p className="text-[11px] font-extrabold text-white">{p.title}</p>
                <p className="mt-1 text-[9px] font-medium text-white/45">{p.description}</p>
              </div>
              {p.price ? (
                <p className="mt-2 text-[11px] font-extrabold text-white">{p.price}</p>
              ) : null}
              <a
                href={p.link}
                className="mt-3 flex h-[30px] w-full items-center justify-center rounded-[12px] text-[10px] font-semibold text-white"
                style={t8GradientStyle}
              >
                {p.linkLabel ?? 'View'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
