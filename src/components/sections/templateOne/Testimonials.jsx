import { memo, useMemo, useState } from 'react'
import { cn } from '../../../utils/cn.js'

function Dot({ active }) {
  return (
    <span
      className={cn(
        'inline-block size-[6px] rounded-full',
        active ? 'bg-black/60' : 'bg-black/15',
      )}
    />
  )
}

export const Testimonials = memo(function Testimonials({ items = [] }) {
  const [idx, setIdx] = useState(0)
  const active = useMemo(() => items[idx] ?? items[0], [items, idx])

  if (!items?.length) return null

  return (
    <section className="bg-white pb-14 pt-10">
      <div className="mx-auto w-full max-w-[1100px] px-5">
        <p className="text-[10px] font-bold tracking-[0.22em] text-black/35">
          TESTIMONIALS
        </p>

        <div className="mt-3 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="font-['Georgia',serif] text-[28px] font-extrabold leading-[1.05] text-[#1b2342] sm:text-[36px]">
              What People Say
              <br />
              About Us.
            </h3>
            <div className="mt-5 flex items-center gap-2">
              {items.slice(0, 3).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className="p-1"
                  aria-label={`Testimonial ${i + 1}`}
                >
                  <Dot active={i === idx} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[16px] bg-white p-5 shadow-[0px_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="flex items-start gap-3">
                <div className="size-[34px] overflow-hidden rounded-full bg-black/10" />
                <p className="text-[12px] font-medium leading-[18px] text-black/45">
                  {active?.quote}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[12px] font-bold text-[#1b2342]">{active?.name}</p>
                <p className="text-[10px] font-medium text-black/35">{active?.meta}</p>
              </div>
            </div>

            {/* faint stacked card behind */}
            <div className="pointer-events-none absolute -bottom-6 left-10 right-10 hidden rounded-[16px] bg-white/70 p-5 shadow-[0px_18px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5 sm:block">
              <p className="text-[10px] font-bold text-[#1b2342]">
                {items[(idx + 1) % items.length]?.name ?? ''}
              </p>
              <p className="mt-1 text-[9px] font-medium text-black/35">
                {items[(idx + 1) % items.length]?.meta ?? ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

