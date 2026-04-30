import { memo } from 'react'

const scroll = 'scroll-mt-[88px]'

export const TemplateEightMapSection = memo(function TemplateEightMapSection({
  id = 'map',
  title,
  locationUrl,
  address,
}) {
  const src =
    locationUrl ||
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  return (
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1020px] px-5">
        <h2 className="mb-4 text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
        {src ? (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[16px] ring-1 ring-white/10 sm:aspect-[21/9]">
            <iframe
              title={title}
              src={src}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <p className="text-center text-[10px] text-white/45">Add address or location URL to show the map.</p>
        )}
      </div>
    </section>
  )
})
