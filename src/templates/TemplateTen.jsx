import { memo, useState } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { TemplateTenCatalogueSection } from '../components/sections/templateTen/CatalogueSection.jsx'
import { TemplateTenFeedSection } from '../components/sections/templateTen/FeedSection.jsx'
import { TemplateTenFloatingButtons } from '../components/sections/templateTen/FloatingButtons.jsx'
import { TemplateTenMapSection } from '../components/sections/templateTen/MapSection.jsx'
import { TemplateTenOffersSection } from '../components/sections/templateTen/OffersSection.jsx'
import { resolveTemplateTenData } from '../components/sections/templateTen/resolveTemplateTenData.js'
import { TemplateTenSocialSection } from '../components/sections/templateTen/SocialSection.jsx'
import { TemplateTenTestimonialReviewsSection } from '../components/sections/templateTen/TestimonialReviewsSection.jsx'
import { TemplateTenTopNav } from '../components/sections/templateTen/TopNav.jsx'
import { TemplateTenWorkingHoursSection } from '../components/sections/templateTen/WorkingHoursSection.jsx'
import { T10_BLUE, T10_BLUE_DARK, T10_BLUE_SOFT } from '../components/sections/templateTen/constants.js'
import { cn } from '../utils/cn.js'

const blue = T10_BLUE
const blueDark = T10_BLUE_DARK
const blueSoft = T10_BLUE_SOFT

function SpecialistCard({ item }) {
  const featured = item?.featured
  return (
    <div
      className={cn(
        'rounded-[16px] p-5 ring-1 transition',
        featured
          ? 'text-white shadow-[0px_14px_36px_rgba(37,99,235,0.35)] ring-transparent'
          : 'bg-white text-[#1e293b] ring-black/[0.06]',
      )}
      style={featured ? { backgroundColor: blue } : undefined}
    >
      <div
        className={cn(
          'grid size-11 place-items-center rounded-[14px] text-[20px]',
          featured ? 'bg-white/15' : 'bg-[#EFF6FF]',
        )}
      >
        {item?.icon ?? '●'}
      </div>
      <p className={cn('mt-4 text-[12px] font-extrabold', featured ? 'text-white' : 'text-[#0f172a]')}>
        {item?.title}
      </p>
      <p className={cn('mt-2 text-[10px] font-medium leading-[16px]', featured ? 'text-white/85' : 'text-black/45')}>
        {item?.text}
      </p>
    </div>
  )
}

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTen = memo(function TemplateTen({ businessData }) {
  const d = resolveTemplateTenData(businessData ?? {})
  const [addedReviews, setAddedReviews] = useState([])
  const reviews = [...d.reviews, ...addedReviews]

  const stats = d.hero?.stats ?? ['24/7 Online Support', '100+ Doctors', '1M+ Active Patients']

  return (
    <div className="min-h-screen scroll-smooth bg-white pb-24 text-[#0f172a]">
      <TemplateTenTopNav
        brand={d.brand}
        nav={d.nav}
        headerLogin={d.headerLogin}
        headerSignup={d.headerSignup}
        headerLoginHref={d.headerLoginHref}
        headerSignupHref={d.headerSignupHref}
        showHeaderAuth={false}
      />

      {/* Hero */}
      <section id="top" className={`relative overflow-hidden bg-white pb-0 pt-8 sm:pt-10 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1040px] gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h1 className="text-[26px] font-extrabold leading-[1.15] sm:text-[34px] lg:text-[38px]">
              <span>{d.hero?.titleBefore ?? 'Find & Search Your '}</span>
              <span style={{ color: blueDark }}>{d.hero?.titleHighlight ?? 'Favourite'}</span>
              <span>{d.hero?.titleAfter ?? ' Doctor'}</span>
            </h1>
            <p className="mt-4 max-w-[480px] text-[11px] font-medium leading-[18px] text-black/45">
              {d.hero?.subtitle ??
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                readOnly
                placeholder={d.hero?.doctorPlaceholder ?? 'Doctor Name'}
                className="h-[44px] w-full rounded-full border border-black/10 bg-white px-4 text-[11px] outline-none ring-1 ring-black/[0.04] placeholder:text-black/35 sm:max-w-[200px]"
              />
              <input
                readOnly
                placeholder={d.hero?.locationPlaceholder ?? 'Location'}
                className="h-[44px] w-full rounded-full border border-black/10 bg-white px-4 text-[11px] outline-none ring-1 ring-black/[0.04] placeholder:text-black/35 sm:max-w-[200px]"
              />
              <button
                type="button"
                className="grid size-11 shrink-0 place-items-center rounded-full text-white shadow-[0px_10px_24px_rgba(37,99,235,0.4)]"
                style={{ backgroundColor: blue }}
                aria-label="Search"
              >
                <span className="text-[16px]" aria-hidden>
                  🔍
                </span>
              </button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute left-1/2 top-1/2 size-[min(100%,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
              style={{ background: `radial-gradient(circle, ${blueSoft} 0%, ${blueSoft} 45%, transparent 46%)` }}
              aria-hidden
            />
            <div className="relative w-full max-w-[340px]">
              <PlaceholderImage
                src={
                  d.hero?.image ??
                  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16f?auto=format&fit=crop&w=800&q=60'
                }
                alt=""
                label="Doctor"
                className="relative z-[1] h-[280px] w-full object-contain sm:h-[320px]"
              />
            </div>
          </div>
        </div>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 px-5 py-4 text-center text-[10px] font-semibold text-white sm:gap-10 sm:text-[11px]"
          style={{ backgroundColor: blue }}
        >
          {stats.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </section>

      {/* Welcome / About */}
      <section id="about" className={`border-t border-black/[0.04] bg-white py-14 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1040px] gap-10 px-5 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[18px] shadow-[0px_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.06]">
            <PlaceholderImage
              src={d.why?.image}
              alt=""
              label="Medical team"
              className="h-[240px] w-full sm:h-[280px]"
            />
          </div>
          <div>
            <h2 className="text-[20px] font-extrabold sm:text-[22px]">{d.why?.title ?? 'Why You Choose Us?'}</h2>
            <ul className="mt-6 grid gap-4">
              {(d.why?.bullets ?? []).map((line, i) => (
                <li key={i} className="flex gap-3 text-[11px] font-medium leading-[17px] text-black/55">
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: blue }}
                  >
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-1 text-[11px] font-bold" style={{ color: blue }}>
              {d.why?.learnMore ?? 'Learn More'}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <TemplateTenOffersSection title={d.offersTitle} offers={d.offers} />

      {/* Core Services (specialists) */}
      <section id="services" className={`py-14 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1040px] px-5">
          <h2 className="text-center text-[20px] font-extrabold sm:text-[22px]">{d.specialistsTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.specialists.map((s, i) => (
              <SpecialistCard key={`${s.title}-${i}`} item={s} />
            ))}
          </div>
        </div>
      </section>

      <TemplateTenCatalogueSection title={d.catalogueTitle} items={d.catalogue} />

      {/* Contact */}
      <section id="contact" className={`border-t border-black/[0.04] bg-white py-14 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1040px] gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-[18px] font-extrabold">{d.contact?.findTitle}</h2>
            <ul className="mt-6 grid gap-4">
              {d.contactItems.map((c, i) => (
                <li key={i} className="flex gap-3 text-[11px] font-medium text-black/55">
                  <span className="text-[16px]" aria-hidden>
                    {c.icon}
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[18px] font-extrabold">{d.contact?.formTitle}</h2>
            <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="h-[44px] rounded-[10px] border border-black/10 px-4 text-[12px] outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="h-[44px] rounded-[10px] border border-black/10 px-4 text-[12px] outline-none"
                placeholder="Email"
              />
              <textarea
                rows={4}
                className="rounded-[10px] border border-black/10 px-4 py-3 text-[12px] outline-none placeholder:text-black/35"
                placeholder="Message"
              />
              <button
                type="submit"
                className="h-[38px] w-fit rounded-[10px] px-5 text-[11px] font-semibold text-white shadow-[0px_10px_24px_rgba(37,99,235,0.35)]"
                style={{ backgroundColor: blue }}
              >
                {d.contact?.submitCta}
              </button>
            </form>
          </div>
        </div>
      </section>

      <TemplateTenMapSection title={d.mapTitle} locationUrl={d.locationUrl} address={d.address} />

      <TemplateTenSocialSection title={d.socialTitle} socialLinks={d.socialLinks} />

      <TemplateTenWorkingHoursSection title={d.hoursTitle} workingHours={d.workingHours} />

      <TemplateTenTestimonialReviewsSection
        title={d.testimonials?.title}
        carouselItems={d.testimonialCarousel}
        reviews={reviews}
        formTitle={d.reviewsFormTitle}
        submitLabel={d.reviewsSubmitLabel}
        onAddReview={(r) => setAddedReviews((prev) => [r, ...prev])}
      />

      <TemplateTenFeedSection title={d.feedTitle} items={d.feed} />

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: blue }}>
        <div className="mx-auto w-full max-w-[1040px] px-5 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-[16px] font-extrabold">{d.brand}</p>
              <p className="mt-3 text-[11px] font-medium leading-[18px] text-white/75">{d.footer?.about}</p>
              <div className="mt-5 flex gap-3">
                {(d.footer?.social ?? ['f', '📷', '𝕏']).map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid size-9 place-items-center rounded-full bg-white/15 text-[11px] font-bold hover:bg-white/25"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-extrabold">{d.footer?.linksTitle}</p>
              <div className="mt-4 grid gap-2 text-[11px] font-medium text-white/75">
                {(d.footer?.links ?? []).map((x) => (
                  <a key={x} href="#" className="hover:text-white">
                    {x}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-extrabold">{d.footer?.addressTitle}</p>
              <div className="mt-4 overflow-hidden rounded-[12px] bg-white/10 ring-1 ring-white/15">
                <PlaceholderImage src={d.footer?.mapImage} alt="" label="Map" className="h-[120px] w-full opacity-90" />
              </div>
              <p className="mt-3 text-[10px] font-medium leading-[15px] text-white/70">{d.footer?.address}</p>
            </div>
          </div>
          <p className="mt-10 border-t border-white/20 pt-6 text-center text-[10px] font-medium text-white/55">
            {d.footer?.copyright}
          </p>
        </div>
      </footer>

      <TemplateTenFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={d.brand}
        shareText={d.hero?.subtitle ?? ''}
      />
    </div>
  )
})
