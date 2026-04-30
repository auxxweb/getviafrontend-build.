import { memo, useState } from 'react'
import { PlaceholderImage } from '../../../components/ui/PlaceholderImage.jsx'
import { T11_GREEN_DARK } from './constants.js'

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

export const TemplateElevenTestimonialReviewsSection = memo(function TemplateElevenTestimonialReviewsSection({
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
  const greenDark = T11_GREEN_DARK

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
    <section id={id} className={`border-t border-black/[0.04] py-16 ${scroll}`}>
      <div className="mx-auto w-full max-w-[1100px] px-5">
        {items.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-[22px] font-extrabold leading-tight sm:text-[26px]">{title}</h2>
              {items.length > 1 ? (
                <div className="mt-8 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i - 1 + items.length) % items.length)}
                    className="grid size-11 place-items-center rounded-full border border-black/10 text-lg font-bold text-black/40 hover:bg-black/[0.03]"
                    aria-label="Previous testimonial"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestimonialIdx((i) => (i + 1) % items.length)}
                    className="grid size-11 place-items-center rounded-full border border-black/10 text-lg font-bold text-black/40 hover:bg-black/[0.03]"
                    aria-label="Next testimonial"
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>
            {active ? (
              <div className="relative rounded-[20px] bg-white p-8 shadow-[0px_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06]">
                <span
                  className="pointer-events-none absolute right-6 top-4 text-[72px] font-serif font-bold leading-none opacity-[0.12]"
                  style={{ color: greenDark }}
                  aria-hidden
                >
                  “
                </span>
                <div className="flex items-center gap-4">
                  <div className="size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-100">
                    <PlaceholderImage src={active.image} alt="" label="Client" className="size-full" />
                  </div>
                  <div>
                    <p className="text-[14px] font-extrabold">{active.name}</p>
                    <p className="mt-0.5 text-[12px] text-amber-500">★★★★★</p>
                  </div>
                </div>
                <p className="relative z-[1] mt-5 text-[12px] font-medium leading-[20px] text-black/50">{active.quote}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <h2 className="text-center text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <ul className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <li
                key={r.id ?? `${r.author}-${r.text?.slice(0, 12)}`}
                className="rounded-[16px] bg-white p-5 shadow-[0px_12px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[15px] font-extrabold text-[#0f172a]">{r.author}</p>
                  <StarRow value={r.rating ?? 5} readOnly />
                </div>
                {r.date ? (
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-black/40">{r.date}</p>
                ) : null}
                <p className="mt-3 text-[12px] font-medium leading-[18px] text-black/50">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-[16px] bg-[#fafafa] p-6 ring-1 ring-black/[0.06]">
            <h3 className="text-[18px] font-extrabold">{formTitle}</h3>
            <form className="mt-5 grid gap-4" onSubmit={handleSubmit} noValidate>
              <input
                id="t11-review-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[44px] w-full rounded-[10px] border border-black/10 bg-white px-4 text-[12px] outline-none placeholder:text-black/35"
                placeholder="Your name"
                autoComplete="name"
              />
              <div>
                <p className="mb-2 text-[11px] font-bold text-black/50">Rating</p>
                <StarRow value={rating} onChange={setRating} />
              </div>
              <textarea
                id="t11-review-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-[12px] outline-none placeholder:text-black/35"
                placeholder="Write your experience…"
              />
              {touched && !canSubmit ? (
                <p className="text-[11px] font-medium text-red-600/90">Please add your name and review.</p>
              ) : null}
              <button
                type="submit"
                className="h-[44px] w-full rounded-[10px] text-[11px] font-bold text-white shadow-[0px_10px_24px_rgba(34,197,94,0.35)]"
                style={{ backgroundColor: greenDark }}
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
