import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../ui/PlaceholderImage.jsx'
import { IconStar } from '../ui/Icons.jsx'

/** @typedef {{ profileId: string; name: string; category: string; role: string; rating: string; reviews: string; image: string; phone: string; whatsappHref: string }} VerifiedPartnerProfile */

export const VerifiedPartnerCard = memo(function VerifiedPartnerCard({
  profile,
  className = '',
  /** When true, card spans the grid cell (e.g. full /recent page). When false, fixed 320px width for horizontal scroll rows. */
  stretch = false,
  /** One row: three actions share width equally with fixed gap; card grows with container instead of wrapping. */
  uniformActionRow = false,
}) {
  const p = profile
  const widthCls = stretch
    ? 'mx-auto w-full min-w-0 max-w-[360px] sm:max-w-none'
    : 'mx-auto w-full max-w-[360px] sm:mx-0 sm:w-[320px] sm:shrink-0 sm:max-w-none'

  return (
    <div
      className={`rounded-[24px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] ${widthCls} ${className}`.trim()}
    >
      <Link
        to={`/profile/${p.profileId}`}
        className="block rounded-t-[24px] p-4 transition-colors hover:bg-black/[0.02]"
      >
        <div className="flex gap-4">
          <div className="size-[88px] shrink-0 overflow-hidden rounded-[16px]">
            <PlaceholderImage
              src={p.image}
              alt=""
              label={p.name}
              className="h-full w-full"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-['Manrope:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-[#1a1c19]">
                  {p.name}
                </p>
                <p className="truncate font-['Manrope:Bold',sans-serif] text-[16px] font-bold leading-[28px] text-[#1a1c19]">
                  {p.category}
                </p>
                <p className="mt-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[12px] font-semibold uppercase tracking-[0.7px] text-[#3d4a39]">
                  {p.role}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className="flex items-center justify-end gap-1 text-[#177043]">
                  <div className="relative h-[14.25px] w-[15px]">
                    <IconStar className="absolute inset-0 block size-full text-[#177043]" />
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[28px]">
                    {p.rating}
                  </p>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] leading-[20px] text-[#3d4a39]">
                  {p.reviews}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div
        className={
          uniformActionRow
            ? 'flex min-w-0 flex-nowrap gap-3 px-4 pb-4'
            : 'flex flex-wrap gap-3 px-4 pb-4'
        }
      >
        <a
          href={p.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={
            uniformActionRow
              ? "inline-flex h-[44px] min-h-[44px] min-w-0 flex-1 basis-0 items-center justify-center rounded-[12px] bg-[#177043] px-2 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-[#f8e9d1] sm:px-3"
              : "inline-flex h-[44px] min-w-[120px] flex-1 items-center justify-center rounded-[12px] bg-[#177043] px-3 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-[#f8e9d1] sm:flex-initial sm:px-4"
          }
        >
          WhatsApp
        </a>
        <a
          href={`tel:${p.phone}`}
          className={
            uniformActionRow
              ? "inline-flex h-[44px] min-h-[44px] min-w-0 flex-1 basis-0 items-center justify-center rounded-[12px] border border-[#177043] bg-white px-2 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-[#177043] sm:px-3"
              : "inline-flex h-[44px] min-w-[120px] flex-1 items-center justify-center rounded-[12px] border border-[#177043] bg-white px-3 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-[#177043] sm:flex-initial sm:px-4"
          }
        >
          Call
        </a>
        <Link
          to={`/profile/${p.profileId}`}
          className={
            uniformActionRow
              ? "inline-flex h-[44px] min-h-[44px] min-w-0 flex-1 basis-0 items-center justify-center rounded-[12px] border border-[#177043] bg-white px-2 font-['Manrope:Bold',sans-serif] text-[16px] font-bold text-[#177043] sm:px-3"
              : "inline-flex h-[44px] min-w-[120px] flex-1 items-center justify-center rounded-[12px] border border-[#177043] bg-white px-3 font-['Manrope:Bold',sans-serif] text-[16px] font-bold text-[#177043] sm:flex-initial sm:px-4"
          }
        >
          View
        </Link>
      </div>
    </div>
  )
})
