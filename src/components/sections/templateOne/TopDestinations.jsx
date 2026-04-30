import { memo, useMemo, useState } from 'react'
import { PlaceholderImage } from '../../ui/PlaceholderImage.jsx'
import { cn } from '../../../utils/cn.js'

function ArrowButton({ dir = 'left', onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'grid size-[34px] place-items-center rounded-full bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5',
        disabled ? 'opacity-40' : 'hover:bg-black/5',
      )}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d={dir === 'left' ? 'M14.5 5L7.5 12L14.5 19' : 'M9.5 5L16.5 12L9.5 19'}
          stroke="#1A1C19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

function DestinationCard({ item }) {
  return (
    <div className="w-[220px] shrink-0 rounded-[16px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
      <div className="overflow-hidden rounded-[16px] p-3">
        <div className="overflow-hidden rounded-[14px]">
          <PlaceholderImage
            src={item?.image}
            alt=""
            label="Destination"
            className="h-[160px] w-full"
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <p className="text-[11px] font-semibold text-black/65">{item?.place}</p>
          <p className="text-[11px] font-semibold text-black/65">{item?.priceLabel}</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-[10px] font-medium text-black/45">{item?.metaLeft}</p>
          <p className="text-[10px] font-medium text-black/45">{item?.metaRight}</p>
        </div>
      </div>
    </div>
  )
}

export const TopDestinations = memo(function TopDestinations({ items = [] }) {
  const visible = 3
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, items.length - visible)

  const page = useMemo(() => items.slice(index, index + visible), [items, index])

  if (!items?.length) return null

  return (
    <section className="bg-white pb-10 pt-6 sm:pb-14">
      <div className="mx-auto w-full max-w-[1100px] px-5">
        <h2 className="text-center font-['Georgia',serif] text-[26px] font-extrabold text-[#1b2342] sm:text-[32px]">
          Top Destinations
        </h2>

        <div className="relative mt-6">
          <div className="no-scrollbar flex w-full items-stretch justify-center gap-6 overflow-x-auto px-10 py-2 sm:overflow-visible sm:px-16">
            {page.map((it, i) => (
              <DestinationCard key={it?.id ?? `${it?.place}-${i}`} item={it} />
            ))}
          </div>

          {/* overlay arrows like the screenshot */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center sm:flex">
            <div className="pointer-events-auto">
              <ArrowButton
                dir="left"
                disabled={index <= 0}
                onClick={() => setIndex((v) => Math.max(0, v - 1))}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center sm:flex">
            <div className="pointer-events-auto">
              <ArrowButton
                dir="right"
                disabled={index >= maxIndex}
                onClick={() => setIndex((v) => Math.min(maxIndex, v + 1))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

