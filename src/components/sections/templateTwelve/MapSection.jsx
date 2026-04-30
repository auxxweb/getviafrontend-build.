import { memo } from 'react'

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveMapSection = memo(function TemplateTwelveMapSection({
  title,
  locationUrl,
  address,
  id = 'map',
}) {
  const src =
    locationUrl ||
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="mb-6 text-center font-playfair text-[24px] font-semibold sm:text-[26px]">{title}</h2>
        {src ? (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[16px] ring-1 ring-black/[0.06] sm:aspect-[21/9]">
            <iframe
              title={title}
              src={src}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <p className="text-center text-[12px] text-ink/45">Add address or locationUrl to show the map.</p>
        )}
      </div>
    </section>
  )
})
