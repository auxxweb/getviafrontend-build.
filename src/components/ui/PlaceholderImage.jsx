import { memo } from 'react'

export const PlaceholderImage = memo(function PlaceholderImage({
  className = '',
  label = 'Image',
  src,
  alt = '',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${className}`}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={`grid place-items-center bg-[linear-gradient(135deg,rgba(15,92,51,0.18),rgba(134,210,155,0.35))] text-ink/60 ring-1 ring-black/5 ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="px-3 text-center text-[11px] font-semibold">
        {label}
      </div>
    </div>
  )
})

