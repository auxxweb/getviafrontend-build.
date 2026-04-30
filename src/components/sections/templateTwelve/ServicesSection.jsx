import { memo } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { TW_BROWN } from './constants.js'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveServicesSection = memo(function TemplateTwelveServicesSection({
  title,
  services,
  id = 'services',
}) {
  return (
    <section id={id} className={`border-b border-black/[0.06] bg-white/40 py-14 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="text-center font-playfair text-[26px] font-semibold sm:text-[30px]">{title}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white/90 shadow-[0px_12px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05]"
            >
              <div className="overflow-hidden">
                <PlaceholderImage src={s.image} alt="" label={s.title} className="h-[160px] w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-playfair text-[16px] font-semibold leading-snug text-[#0f172a]">{s.title}</h3>
                <p className="mt-2 flex-1 text-[12px] font-medium leading-[18px] text-ink/50">{s.description}</p>
                <a
                  href={s.link}
                  className="mt-4 inline-flex text-[11px] font-bold tracking-wide"
                  style={{ color: TW_BROWN }}
                >
                  {s.linkLabel} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})
