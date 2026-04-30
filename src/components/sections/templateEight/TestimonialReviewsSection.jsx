import { memo, useState } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { t8GradientStyle } from './constants.js'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

function StarRow({ value, onChange, readOnly }) {
  const v = Math.min(5, Math.max(0, value ?? 0))
  if (readOnly) {
    return (
      <div className="flex gap-0.5 text-[16px] leading-none text-amber-400" aria-label={`${v} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= v ? 'text-amber-400' : 'text-white/15'} aria-hidden>
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
          <span className={n <= v ? 'text-amber-400' : 'text-white/15'} aria-hidden>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}

export const TemplateEightTestimonialReviewsSection = memo(function TemplateEightTestimonialReviewsSection({
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
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1020px] px-5">
        {items.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <h2 className="text-[12px] font-extrabold leading-tight text-white/90 sm:text-[14px]">{title}</h2>
              {items.length > 1 ? (
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i - 1 + items.length) % items.length)}
                    className="grid size-10 place-items-center rounded-full bg-white/5 text-lg font-bold text-white/50 ring-1 ring-white/10 hover:bg-white/10"
                    aria-label="Previous testimonial"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i + 1) % items.length)}
                    className="grid size-10 place-items-center rounded-full bg-white/5 text-lg font-bold text-white/50 ring-1 ring-white/10 hover:bg-white/10"
                    aria-label="Next testimonial"
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>
            {active ? (
              <div className={`relative p-5 ${glass}`}>
                <span className="pointer-events-none absolute right-4 top-2 text-[52px] font-serif font-bold leading-none text-white/10" aria-hidden>
                  “
                </span>
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15">
                    <PlaceholderImage src={active.image} alt="" label="Client" className="size-full" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-white">{active.name}</p>
                    <p className="mt-0.5 text-[10px] text-amber-400">★★★★★</p>
                  </div>
                </div>
                <p className="relative z-[1] mt-3 text-[10px] font-medium leading-[16px] text-white/50">{active.quote}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <h2 className="text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {reviews.map((r) => (
              <li key={r.id ?? `${r.author}-${r.text?.slice(0, 12)}`} className={`p-4 ${glass}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-extrabold text-white">{r.author}</p>
                  <StarRow value={r.rating ?? 5} readOnly />
                </div>
                {r.date ? <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-white/35">{r.date}</p> : null}
                <p className="mt-2 text-[9px] font-medium leading-[14px] text-white/50">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className={`p-4 ${glass}`}>
            <h3 className="text-[12px] font-extrabold text-white">{formTitle}</h3>
            <form className="mt-4 grid gap-3" onSubmit={handleSubmit} noValidate>
              <input
                id="t8-review-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[34px] w-full rounded-[12px] bg-white/5 px-3 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                placeholder="Your name"
                autoComplete="name"
              />
              <div>
                <p className="mb-1.5 text-[9px] font-bold text-white/45">Rating</p>
                <StarRow value={rating} onChange={setRating} />
              </div>
              <textarea
                id="t8-review-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="w-full rounded-[12px] bg-white/5 p-3 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                placeholder="Tell us about your visit…"
              />
              {touched && !canSubmit ? (
                <p className="text-[9px] font-medium text-red-400/90">Please add your name and review.</p>
              ) : null}
              <button
                type="submit"
                className="h-[36px] w-full rounded-[10px] text-[10px] font-bold text-white shadow-[0px_12px_26px_rgba(42,84,255,0.25)]"
                style={t8GradientStyle}
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
