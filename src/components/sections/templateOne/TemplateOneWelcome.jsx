import { memo } from 'react'
import { PlaceholderImage } from '../../ui/PlaceholderImage.jsx'

export const TemplateOneWelcome = memo(function TemplateOneWelcome({
  eyebrow = 'WELCOME',
  title = 'Plan journeys that feel effortless',
  text = '',
  ctaLabel = 'Learn more',
  ctaHref = '#destinations',
  image,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10 sm:py-14">
        <p className="text-[10px] font-bold tracking-[0.22em] text-[#e78b77]">{eyebrow}</p>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="relative order-2 overflow-hidden rounded-[24px] lg:order-1">
            <PlaceholderImage
              src={image}
              alt=""
              label="Welcome"
              className="h-[220px] w-full sm:h-[280px] lg:h-[320px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-['Georgia',serif] text-[28px] font-extrabold leading-[1.08] text-[#1b2342] sm:text-[36px]">
              {title}
            </h2>
            {text ? (
              <p className="mt-4 max-w-[480px] text-[12px] font-medium leading-[18px] text-black/45">
                {text}
              </p>
            ) : null}
            {ctaLabel ? (
              <a
                href={ctaHref}
                className="mt-6 inline-flex h-[38px] items-center justify-center rounded-[8px] border border-[#f0a12b]/40 bg-[#fbf7f1] px-5 text-[12px] font-semibold text-[#1b2342] shadow-[0px_8px_20px_rgba(0,0,0,0.06)] transition hover:bg-[#f5d9b7]/40"
              >
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
})
