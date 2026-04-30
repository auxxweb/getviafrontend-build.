import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../ui/PlaceholderImage.jsx'

function shellClass(active, className) {
  return `relative shrink-0 overflow-hidden rounded-[10px] bg-black/5 ring-1 ring-black/5 text-left ${
    active ? 'ring-2 ring-[#003314]' : ''
  } ${className}`.trim()
}

export function OfferCard({
  active = false,
  onClick,
  badgeText,
  title,
  imageSrc,
  imageAlt = '',
  to,
  className = 'h-[220px] w-[320px]',
}) {
  const inner = (
    <>
      <PlaceholderImage
        src={imageSrc}
        alt={imageAlt}
        label={title}
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      <div className="absolute left-4 top-4 rounded-[20px] bg-[#b3e718] px-3 py-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-black">
        {badgeText}
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-['Inter:Bold',sans-serif] text-[18px] font-extrabold text-white">
          {title}
        </p>
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} aria-label={title} className={`block ${shellClass(active, className)}`}>
        {inner}
      </Link>
    )
  }

  return (
    <button
      type="button"
      aria-label={title}
      onClick={onClick}
      className={shellClass(active, className)}
    >
      {inner}
    </button>
  )
}
