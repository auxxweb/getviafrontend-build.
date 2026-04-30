import { memo } from 'react'

const scroll = 'scroll-mt-[88px]'

export const TemplateTenMapSection = memo(function TemplateTenMapSection({
  id = 'map',
  title,
  locationUrl,
  address,
}) {
  const src =
    locationUrl ||
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  return (
    <section id={id} className={`py-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1040px] px-5">
        <h2 className="mb-6 text-center text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
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
          <p className="text-center text-[11px] text-black/45">Add address or location URL to show the map.</p>
        )}
      </div>
    </section>
  )
})
