import { memo, useState } from 'react'
import { TW_BROWN } from './constants.js'

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

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveTestimonialReviewsSection = memo(function TemplateTwelveTestimonialReviewsSection({
  id = 'testimonials',
  title,
  quotes,
  reviews,
  formTitle,
  submitLabel,
  onAddReview,
}) {
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [touched, setTouched] = useState(false)

  const safeQuotes = quotes?.length ? quotes : [{ text: '', author: '' }]
  const q = safeQuotes[quoteIdx % safeQuotes.length]
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
    <section id={id} className={`border-t border-black/[0.04] bg-white/35 py-16 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <h2 className="text-center font-playfair text-[28px] font-semibold sm:text-[32px]">{title}</h2>

        {q.text ? (
          <div className="mx-auto mt-10 max-w-[720px] text-center">
            <blockquote className="font-playfair text-[17px] font-normal italic leading-[1.65] text-ink/75 sm:text-[19px]">
              “{q.text}”
            </blockquote>
            <p className="mt-4 text-[12px] font-semibold tracking-wide text-ink/50">{q.author}</p>
            {safeQuotes.length > 1 ? (
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuoteIdx((i) => (i - 1 + safeQuotes.length) % safeQuotes.length)}
                  className="grid size-10 place-items-center rounded-full border border-black/10 text-lg text-ink/40 hover:bg-black/[0.03]"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteIdx((i) => (i + 1) % safeQuotes.length)}
                  className="grid size-10 place-items-center rounded-full border border-black/10 text-lg text-ink/40 hover:bg-black/[0.03]"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <ul className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <li
                key={r.id ?? `${r.author}-${r.text?.slice(0, 12)}`}
                className="rounded-[16px] bg-white/90 p-5 shadow-[0px_12px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.05]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-playfair text-[15px] font-semibold text-[#0f172a]">{r.author}</p>
                  <StarRow value={r.rating ?? 5} readOnly />
                </div>
                {r.date ? <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-ink/40">{r.date}</p> : null}
                <p className="mt-3 text-[12px] font-medium leading-[18px] text-ink/55">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-[16px] bg-white/90 p-6 ring-1 ring-black/[0.06]">
            <h3 className="font-playfair text-[18px] font-semibold">{formTitle}</h3>
            <form className="mt-5 grid gap-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="t12-review-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="t12-review-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[44px] w-full rounded-[10px] border border-black/10 px-4 text-[12px] outline-none placeholder:text-black/35"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold text-ink/50">Rating</p>
                <StarRow value={rating} onChange={setRating} />
              </div>
              <div>
                <label htmlFor="t12-review-text" className="sr-only">
                  Your review
                </label>
                <textarea
                  id="t12-review-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="w-full rounded-[10px] border border-black/10 px-4 py-3 text-[12px] outline-none placeholder:text-black/35"
                  placeholder="Write your experience…"
                />
              </div>
              {touched && !canSubmit ? (
                <p className="text-[11px] font-medium text-red-600/90">Please add your name and review.</p>
              ) : null}
              <button
                type="submit"
                className="h-[44px] w-full rounded-full text-[11px] font-bold tracking-[0.1em] text-white"
                style={{ backgroundColor: TW_BROWN }}
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
