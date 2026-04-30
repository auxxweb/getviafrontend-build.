import { memo, useState } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T9_NAVY } from './constants.js'
import { T9_SECTION_SOFT } from './constants.js'

const scroll = 'scroll-mt-[88px]'

function StarRow({ value, onChange, readOnly }) {
  const v = Math.min(5, Math.max(0, value ?? 0))
  if (readOnly) {
    return (
      <div className="flex gap-0.5 text-[16px] leading-none text-amber-500" aria-label={`${v} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= v ? 'text-amber-500' : 'text-black/15'} aria-hidden>
            ★
          </span>
        ))}
      </div>
    )
  }
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange?.(n)}
          className="text-[18px] leading-none hover:opacity-90"
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          aria-pressed={v >= n}
        >
          <span className={n <= v ? 'text-amber-500' : 'text-black/15'} aria-hidden>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}

export const TemplateNineTestimonialReviewsSection = memo(function TemplateNineTestimonialReviewsSection({
  id = 'testimonials',
  title,
  carouselItems,
  reviews,
  formTitle,
  submitLabel,
  onAddReview,
}) {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [touched, setTouched] = useState(false)

  const items = carouselItems?.length ? carouselItems : []
  const active = items[testimonialIdx % items.length]
  const canSubmit = name.trim().length > 0 && text.trim().length > 0
  const accent = T9_NAVY

  function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!canSubmit) return
    onAddReview?.({
      id: `r-${Date.now()}`,
      author: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
    })
    setName('')
    setText('')
    setRating(5)
    setTouched(false)
  }

  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: T9_SECTION_SOFT }}>
      <div className="mx-auto w-full max-w-[1000px] px-5">
        {items.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <h2 className="text-[16px] font-extrabold leading-tight sm:text-[18px]" style={{ color: T9_NAVY }}>
                {title}
              </h2>
              {items.length > 1 ? (
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i - 1 + items.length) % items.length)}
                    className="grid size-10 place-items-center rounded-full border border-black/10 text-lg font-bold text-black/40 hover:bg-black/[0.03]"
                    aria-label="Previous testimonial"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i + 1) % items.length)}
                    className="grid size-10 place-items-center rounded-full border border-black/10 text-lg font-bold text-black/40 hover:bg-black/[0.03]"
                    aria-label="Next testimonial"
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>
            {active ? (
              <div className="relative rounded-[16px] bg-white p-5 shadow-[0px_16px_40px_rgba(13,58,92,0.10)] ring-1 ring-black/[0.05]">
                <span
                  className="pointer-events-none absolute right-4 top-2 text-[56px] font-serif font-bold leading-none opacity-[0.12]"
                  style={{ color: accent }}
                  aria-hidden
                >
                  “
                </span>
                <div className="flex items-center gap-3">
                  <div className="size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#00A3AD]/35">
                    <PlaceholderImage src={active.image} alt="" label="Client" className="size-full" />
                  </div>
                  <div>
                    <p className="text-[12px] font-extrabold text-[#1a2744]">{active.name}</p>
                    <p className="mt-0.5 text-[11px] text-amber-500">★★★★★</p>
                  </div>
                </div>
                <p className="relative z-[1] mt-3 text-[10px] font-medium leading-[16px] text-black/50">{active.quote}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
            {title}
          </h2>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {reviews.map((r) => (
              <li
                key={r.id ?? `${r.author}-${r.text?.slice(0, 12)}`}
                className="rounded-[14px] bg-white p-4 shadow-[0px_12px_32px_rgba(13,58,92,0.08)] ring-1 ring-black/[0.04]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[12px] font-extrabold text-[#1a2744]">{r.author}</p>
                  <StarRow value={r.rating ?? 5} readOnly />
                </div>
                {r.date ? (
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-black/40">{r.date}</p>
                ) : null}
                <p className="mt-2 text-[10px] font-medium leading-[15px] text-black/50">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-[14px] bg-white p-5 ring-1 ring-black/[0.05]">
            <h3 className="text-[14px] font-extrabold text-[#1a2744]">{formTitle}</h3>
            <form className="mt-4 grid gap-3" onSubmit={handleSubmit} noValidate>
              <input
                id="t9-review-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[36px] w-full rounded-[10px] border border-black/10 px-3 text-[10px] outline-none placeholder:text-black/35"
                placeholder="Your name"
                autoComplete="name"
              />
              <div>
                <p className="mb-1.5 text-[10px] font-bold text-black/50">Rating</p>
                <StarRow value={rating} onChange={setRating} />
              </div>
              <textarea
                id="t9-review-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="w-full rounded-[10px] border border-black/10 px-3 py-2 text-[10px] outline-none placeholder:text-black/35"
                placeholder="Write your experience…"
              />
              {touched && !canSubmit ? (
                <p className="text-[10px] font-medium text-red-600/90">Please add your name and review.</p>
              ) : null}
              <button
                type="submit"
                className="h-[36px] w-full rounded-[10px] text-[10px] font-bold text-white shadow-[0px_10px_24px_rgba(13,58,92,0.22)]"
                style={{ backgroundColor: accent }}
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
})
