import { memo, useCallback, useEffect, useId, useState } from 'react'
import { PlaceholderImage } from '../../ui/PlaceholderImage.jsx'
import { cn } from '../../../utils/cn.js'
import { useDocumentHash } from '../../../hooks/useDocumentHash.js'
import { isHashNavActive } from '../../../utils/hashNav.js'

const scroll = 'scroll-mt-[88px]'

const DAY_LABELS = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
}

function digitsOnly(s) {
  return String(s ?? '').replace(/\D/g, '')
}

export const ExpandableTopNav = memo(function ExpandableTopNav({
  brand,
  nav,
  headerLogin,
  headerSignup,
  headerLoginHref = '#contact',
  headerSignupHref = '#contact',
  theme,
  showHeaderAuth = true,
  showHeaderLogin,
  showHeaderSignup,
}) {
  const th = theme
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const docHash = useDocumentHash()

  const authRowEnabled = showHeaderAuth !== false
  const showLoginBtn = authRowEnabled && showHeaderLogin !== false
  const showSignupBtn = authRowEnabled && showHeaderSignup !== false
  const showAnyHeaderBtn = showLoginBtn || showSignupBtn

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const mobileLink =
    'block border-b border-black/10 px-5 py-3.5 text-left text-[13px] font-semibold text-[#1a2744] transition hover:bg-black/[0.03]'

  return (
    <header className={cn('sticky top-0 z-50', th.stickyHeader)}>
      <div className="relative">
        <div className={cn('relative z-30 mx-auto flex items-center justify-between gap-3 px-5 py-4', th.maxW)}>
          <a href="#top" className="min-w-0 shrink-0 hover:opacity-90" onClick={() => setOpen(false)}>
            <p className={cn('truncate', th.brandClass)}>{brand}</p>
          </a>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-5">
            <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
              {(nav ?? []).map((item) => (
                <a
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={cn(
                    'whitespace-nowrap',
                    th.navLink,
                    isHashNavActive(item.href, docHash) && 'font-bold text-[#006e12]',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {showLoginBtn ? (
                <a href={headerLoginHref} className={th.loginBtn} onClick={() => setOpen(false)}>
                  {headerLogin}
                </a>
              ) : null}
              {showSignupBtn ? (
                <a href={headerSignupHref} className={th.signupBtn} onClick={() => setOpen(false)}>
                  {headerSignup}
                </a>
              ) : null}
              <button
                type="button"
                className="relative grid size-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white/80 md:hidden"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((o) => !o)}
              >
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-black/70 transition-transform duration-200 ${open ? 'translate-y-0 rotate-45' : '-translate-y-2'}`}
                />
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-black/70 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute h-0.5 w-[18px] rounded-full bg-black/70 transition-transform duration-200 ${open ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`}
                />
              </button>
            </div>
          </div>
        </div>
        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-10 bg-black/20 md:hidden"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <div
              id={menuId}
              className={cn(
                'absolute left-0 right-0 top-full z-20 max-h-[min(72vh,calc(100dvh-5rem))] overflow-y-auto border-t border-black/10 shadow-lg md:hidden',
                th.mobileNavBg,
              )}
              role="dialog"
              aria-modal="true"
            >
              <nav className="py-1" aria-label="Mobile">
                {(nav ?? []).map((item) => (
                  <a
                    key={`m-${item.href}-${item.label}`}
                    href={item.href}
                    className={cn(
                      mobileLink,
                      isHashNavActive(item.href, docHash) &&
                        'bg-[rgba(0,110,18,0.1)] font-bold text-[#006e12]',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {showAnyHeaderBtn ? (
                  <div className="flex gap-2 border-t border-black/10 px-5 py-4">
                    {showLoginBtn ? (
                      <a
                        href={headerLoginHref}
                        className={cn(th.loginBtn, showSignupBtn ? 'flex-1 justify-center' : 'w-full justify-center')}
                        onClick={() => setOpen(false)}
                      >
                        {headerLogin}
                      </a>
                    ) : null}
                    {showSignupBtn ? (
                      <a
                        href={headerSignupHref}
                        className={cn(th.signupBtn, showLoginBtn ? 'flex-1 justify-center' : 'w-full justify-center')}
                        onClick={() => setOpen(false)}
                      >
                        {headerSignup}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  )
})

function StarRow({ value, onChange, readOnly, activeClass = 'text-amber-500', emptyClass = 'text-black/15' }) {
  const v = Math.min(5, Math.max(0, value ?? 0))
  if (readOnly) {
    return (
      <div className="flex gap-0.5 text-[14px] leading-none" aria-label={`${v} stars`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= v ? activeClass : emptyClass} aria-hidden>
            ★
          </span>
        ))}
      </div>
    )
  }
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => onChange?.(n)} className="text-[16px] leading-none">
          <span className={n <= v ? activeClass : emptyClass} aria-hidden>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}

export const ExpandableFloatingButtons = memo(function ExpandableFloatingButtons({
  phone,
  whatsapp,
  shareTitle,
  shareText,
  theme,
}) {
  const th = theme
  const tel = digitsOnly(phone)
  const wa = digitsOnly(whatsapp || phone)
  const [hint, setHint] = useState(null)

  const fabShell =
    th.fabShell ??
    'grid size-12 place-items-center rounded-full text-[18px] shadow-lg ring-1 ring-black/10 sm:size-14'

  const handleShare = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = shareTitle || (typeof document !== 'undefined' ? document.title : '') || 'Page'
    const text = shareText ?? ''
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url })
        setHint(null)
        return
      } catch (e) {
        if (e?.name === 'AbortError') return
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url)
        setHint('copied')
        window.setTimeout(() => setHint(null), 2000)
        return
      } catch {
        /* noop */
      }
    }
    window.prompt('Copy this link:', url)
  }, [shareTitle, shareText])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {hint ? (
        <span
          className={
            th.fabHint ??
            'rounded-[10px] bg-white px-3 py-2 text-[11px] font-semibold shadow-lg ring-1 ring-black/10'
          }
        >
          Link copied
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <button type="button" onClick={handleShare} className={cn(fabShell, th.fabOutline)} aria-label="Share">
          ↗
        </button>
        {wa ? (
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noreferrer"
            className={cn(fabShell, th.fabFill)}
            aria-label="WhatsApp"
          >
            💬
          </a>
        ) : null}
        {tel ? (
          <a href={`tel:${tel}`} className={cn(fabShell, th.fabFill2)} aria-label="Call">
            📞
          </a>
        ) : null}
      </div>
    </div>
  )
})

export const ExpandableSections = memo(function ExpandableSections({
  theme,
  expanded: d,
  brand = '',
  shareSubtitle = '',
  reviewNameInputId = 'exp-review-name',
  reviewTextInputId = 'exp-review-text',
}) {
  const th = theme
  const [added, setAdded] = useState([])
  const reviews = [...d.reviews, ...added]
  const [tIdx, setTIdx] = useState(0)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [touched, setTouched] = useState(false)
  const items = d.testimonialCarousel ?? []
  const active = items.length ? items[tIdx % items.length] : null
  const canSubmit = name.trim() && text.trim()
  const starActive = th.starActive ?? 'text-amber-500'
  const starEmpty = th.starEmpty ?? 'text-black/15'
  const cardTitleCls = th.cardTitle ?? 'text-[13px] font-extrabold text-[#1a1c19]'
  const contactHeadingCls = th.contactHeading ?? 'text-[16px] font-extrabold text-[#1a1c19]'
  const inputCls =
    th.input ??
    'h-[40px] rounded-[10px] border border-black/10 px-3 text-[12px] outline-none focus:ring-2 focus:ring-black/10'
  const textareaCls =
    th.textarea ??
    'rounded-[10px] border border-black/10 px-3 py-2 text-[12px] outline-none focus:ring-2 focus:ring-black/10'
  const contactFormBtnCls = th.contactFormBtn ?? th.submitBtn
  const mapContainerCls =
    th.mapContainer ??
    'mt-6 aspect-[16/9] overflow-hidden rounded-[16px] ring-1 ring-black/10 sm:aspect-[21/9]'
  const carouselBtnCls =
    th.carouselBtn ??
    'grid size-10 place-items-center rounded-full border border-black/10 bg-white text-lg text-black/40'
  const testimonialTitleCls =
    th.testimonialTitle ?? 'text-left text-[16px] font-extrabold text-[#1a1c19] sm:text-[18px]'
  const reviewFormTitleCls = th.reviewFormTitle ?? 'text-[14px] font-extrabold text-[#1a1c19]'
  const dateMetaCls = th.dateMeta ?? 'text-[9px] font-bold uppercase text-black/40'
  const hoursDayCls = th.hoursDay ?? 'text-black/55'
  const hoursValueCls = th.hoursValue ?? 'text-[#1a1c19]'
  const avatarRingCls = th.avatarRing ?? 'ring-2 ring-black/10'
  const reviewAuthorCls = th.reviewAuthor ?? 'text-[12px] font-extrabold text-[#1a1c19]'
  const socialHeadingCls = th.socialHeading ?? th.sectionTitle
  const socialSubtitleCls = th.socialSubtitle ?? th.bodyMuted

  function handleReviewSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!canSubmit) return
    setAdded((prev) => [
      {
        id: `r-${Date.now()}`,
        author: name.trim(),
        rating,
        text: text.trim(),
        date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
      },
      ...prev,
    ])
    setName('')
    setText('')
    setRating(5)
    setTouched(false)
  }

  return (
    <>
      <section id="offers" className={cn('py-12', scroll, th.offersSection ?? th.altBand)}>
        <div className={cn('mx-auto px-5', th.maxW)}>
          <h2 className={cn(th.sectionTitle, th.offersTitleExtra)}>{d.offersTitle}</h2>
          <div className={cn('mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3', th.offersGrid)}>
            {d.offers.map((o) => (
              <article key={o.id} className={cn('overflow-hidden', th.card, th.offerCard)}>
                <div className="relative">
                  <PlaceholderImage src={o.image} alt="" label={o.title} className="h-[160px] w-full" />
                  {o.tag ? (
                    <span className={cn('absolute left-3 top-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase', th.offerTag)}>
                      {o.tag}
                    </span>
                  ) : null}
                </div>
                <div className="p-4">
                  <h3 className={cardTitleCls}>{o.title}</h3>
                  <p className={cn('mt-2', th.bodyMuted)}>{o.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {o.priceActual ? <span className="text-[11px] text-black/35 line-through">{o.priceActual}</span> : null}
                    {o.priceOffer ? <span className={cn('text-[14px]', th.priceAccent)}>{o.priceOffer}</span> : null}
                  </div>
                  <a href={o.link} className={cn('mt-2 inline-block', th.linkAccent)}>
                    {o.linkLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue" className={cn('py-12', scroll, th.catalogueSection ?? 'bg-white')}>
        <div className={cn('mx-auto px-5', th.maxW, th.catalogueInner)}>
          <h2 className={cn(th.sectionTitle, th.catalogueTitleExtra)}>{d.catalogueTitle}</h2>
          <div className={cn('mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3', th.catalogueGrid)}>
            {d.catalogue.map((p) => (
              <article key={p.id} className={cn('overflow-hidden', th.card, th.catalogueCard)}>
                <PlaceholderImage src={p.image} alt="" label={p.title} className="h-[180px] w-full" />
                <div className="p-4">
                  <h3 className={cardTitleCls}>{p.title}</h3>
                  <p className={cn('mt-2', th.bodyMuted)}>{p.description}</p>
                  {p.price ? <p className={cn('mt-2 text-[15px]', th.priceAccent)}>{p.price}</p> : null}
                  <a href={p.link} className={cn('mt-2 inline-block', th.linkAccent)}>
                    {p.linkLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={cn('py-12', scroll, th.contactSection ?? th.altBand)}>
        <div className={cn('mx-auto grid gap-8 px-5 lg:grid-cols-2', th.maxW, th.contactGrid)}>
          <div className={th.contactDetailsWrap}>
            <h2 className={contactHeadingCls}>{d.contact.findTitle}</h2>
            <ul className="mt-5 grid gap-3">
              {d.contactItems.map((c, i) => (
                <li key={i} className={cn('flex gap-2', th.bodyMuted, th.contactListItem)}>
                  <span aria-hidden>{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={th.contactFormWrap}>
            <h2 className={contactHeadingCls}>{d.contact.formTitle}</h2>
            <form className={cn('mt-5 grid gap-3', th.contactForm)} onSubmit={(e) => e.preventDefault()}>
              <input className={inputCls} placeholder="Name" />
              <input type="email" className={inputCls} placeholder="Email" />
              <textarea rows={4} className={textareaCls} placeholder="Message" />
              <button
                type="submit"
                className={cn('inline-flex h-[40px] items-center justify-center px-6 text-[12px] font-semibold', contactFormBtnCls)}
              >
                {d.contact.submitCta}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="map" className={cn('py-12', scroll, th.mapSection ?? 'bg-white')}>
        <div className={cn('mx-auto px-5', th.maxW)}>
          <h2 className={cn(th.sectionTitle, th.mapTitleExtra)}>{d.mapTitle}</h2>
          {d.locationUrl || d.address ? (
            <div className={mapContainerCls}>
              <iframe
                title={d.mapTitle}
                src={d.locationUrl || `https://maps.google.com/maps?q=${encodeURIComponent(d.address)}&output=embed`}
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <p className={cn('mt-4 text-center', th.bodyMuted)}>Add an address to show the map.</p>
          )}
        </div>
      </section>

      <section id="social" className={cn('py-12', scroll, th.socialSection ?? th.socialBand)}>
        <div className={cn('mx-auto flex flex-col items-center px-5 text-center', th.maxW)}>
          <h2 className={socialHeadingCls}>{d.socialTitle}</h2>
          <p className={cn('mt-2 max-w-md', socialSubtitleCls)}>Connect for updates and offers.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {(
              [
                d.socialLinks?.facebook ? { href: d.socialLinks.facebook, label: 'Facebook' } : null,
                d.socialLinks?.instagram ? { href: d.socialLinks.instagram, label: 'Instagram' } : null,
                d.socialLinks?.twitter ? { href: d.socialLinks.twitter, label: 'Twitter' } : null,
                d.socialLinks?.linkedin ? { href: d.socialLinks.linkedin, label: 'LinkedIn' } : null,
                d.socialLinks?.youtube ? { href: d.socialLinks.youtube, label: 'YouTube' } : null,
              ].filter(Boolean).length
                ? [
                    d.socialLinks?.facebook ? { href: d.socialLinks.facebook, label: 'Facebook' } : null,
                    d.socialLinks?.instagram ? { href: d.socialLinks.instagram, label: 'Instagram' } : null,
                    d.socialLinks?.twitter ? { href: d.socialLinks.twitter, label: 'Twitter' } : null,
                    d.socialLinks?.linkedin ? { href: d.socialLinks.linkedin, label: 'LinkedIn' } : null,
                    d.socialLinks?.youtube ? { href: d.socialLinks.youtube, label: 'YouTube' } : null,
                  ].filter(Boolean)
                : [
                    { href: '#', label: 'Facebook' },
                    { href: '#', label: 'Instagram' },
                  ]
            ).map((x) => (
              <a
                key={x.label}
                href={x.href}
                target={x.href.startsWith('http') ? '_blank' : undefined}
                rel={x.href.startsWith('http') ? 'noreferrer' : undefined}
                className={th.socialBtn}
              >
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className={cn('py-12', scroll, th.hoursSection ?? th.hoursBand)}>
        <div className={cn('mx-auto max-w-[520px] px-5', th.maxW, th.hoursInner)}>
          <h2 className={cn(th.sectionTitle, th.hoursTitleExtra)}>{d.hoursTitle}</h2>
          <ul className={cn('mt-6 grid gap-2', th.hoursList)}>
            {Object.entries(d.workingHours ?? {}).map(([k, v]) => (
              <li key={k} className={cn('flex justify-between border-b pb-2 text-[12px] font-semibold', th.hoursRow)}>
                <span className={hoursDayCls}>{DAY_LABELS[k] ?? k}</span>
                <span className={hoursValueCls}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="testimonials" className={cn('py-12', scroll, th.testimonialsSection ?? th.testimonialBand)}>
        <div className={cn('mx-auto px-5', th.maxW)}>
          {items.length > 0 ? (
            <div className={cn('grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center', th.testimonialCarouselLayout)}>
              <div>
                <h2 className={cn(testimonialTitleCls, th.testimonialsTitleExtra)}>{d.testimonialsTitle}</h2>
                {items.length > 1 ? (
                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTIdx((i) => (i - 1 + items.length) % items.length)}
                      className={carouselBtnCls}
                      aria-label="Prev"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => setTIdx((i) => (i + 1) % items.length)}
                      className={carouselBtnCls}
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>
                ) : null}
              </div>
              {active ? (
                <div className={cn('relative p-5', th.reviewCard, th.testimonialSpotlight)}>
                  <div className="flex items-center gap-3">
                    <div className={cn('size-12 overflow-hidden rounded-full', avatarRingCls)}>
                      <PlaceholderImage src={active.image} alt="" label="Client" className="size-full" />
                    </div>
                    <div>
                      <p className={cardTitleCls}>{active.name}</p>
                      <p className={cn('text-[11px]', starActive)}>★★★★★</p>
                    </div>
                  </div>
                  <p className={cn('mt-3', th.bodyMuted)}>{active.quote}</p>
                </div>
              ) : null}
            </div>
          ) : (
            <h2 className={cn(th.sectionTitle, th.testimonialsTitleExtra)}>{d.testimonialsTitle}</h2>
          )}

          <div className={cn('mt-10 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-start', th.reviewsGrid)}>
            <ul className={cn('grid gap-3 sm:grid-cols-2', th.reviewList)}>
              {reviews.map((r) => (
                <li key={r.id} className={cn(th.reviewCard, th.reviewListCard)}>
                  <div className="flex items-center justify-between gap-2">
                    <p className={reviewAuthorCls}>{r.author}</p>
                    <StarRow value={r.rating} readOnly activeClass={starActive} emptyClass={starEmpty} />
                  </div>
                  {r.date ? <p className={cn('mt-1', dateMetaCls)}>{r.date}</p> : null}
                  <p className={cn('mt-2', th.bodyMuted)}>{r.text}</p>
                </li>
              ))}
            </ul>
            <div className={cn(th.reviewCard, th.reviewFormCard)}>
              <h3 className={reviewFormTitleCls}>{d.reviewsFormTitle}</h3>
              <form className={cn('mt-4 grid gap-3', th.reviewForm)} onSubmit={handleReviewSubmit} noValidate>
                <input
                  id={reviewNameInputId}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                  placeholder="Your name"
                />
                <div>
                  <p className={cn('mb-1 text-[10px] font-bold', th.reviewRatingLabel ?? 'text-black/50')}>Rating</p>
                  <StarRow
                    value={rating}
                    onChange={setRating}
                    activeClass={starActive}
                    emptyClass={starEmpty}
                  />
                </div>
                <textarea
                  id={reviewTextInputId}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  className={textareaCls}
                  placeholder="Your review…"
                />
                {touched && !canSubmit ? <p className="text-[11px] text-red-600">Add name and review.</p> : null}
                <button type="submit" className={th.submitBtn}>
                  {d.reviewsSubmitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="feed" className={cn('py-12', scroll, th.feedSection ?? th.altBand)}>
        <div className={cn('mx-auto px-5', th.maxW)}>
          <h2 className={cn(th.sectionTitle, th.feedTitleExtra)}>{d.feedTitle}</h2>
          <div className={cn('mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3', th.feedGrid)}>
            {d.feed.map((item) => (
              <article key={item.id} className={cn('overflow-hidden', th.card, th.feedCard)}>
                <PlaceholderImage src={item.image} alt="" label={item.title} className="h-[140px] w-full" />
                <div className="p-4">
                  {item.date ? <p className={cn(dateMetaCls, th.feedDate)}>{item.date}</p> : null}
                  <h3 className={cardTitleCls}>{item.title}</h3>
                  <p className={cn('mt-2', th.bodyMuted)}>{item.description}</p>
                  <a href={item.link} className={cn('mt-2 inline-block', th.linkAccent)}>
                    {item.linkLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExpandableFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={brand || 'Page'}
        shareText={shareSubtitle}
        theme={th}
      />
    </>
  )
})
