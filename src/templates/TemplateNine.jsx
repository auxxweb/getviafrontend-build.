import { memo, useState } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { TemplateNineCatalogueSection } from '../components/sections/templateNine/CatalogueSection.jsx'
import { TemplateNineFeedSection } from '../components/sections/templateNine/FeedSection.jsx'
import { TemplateNineFloatingButtons } from '../components/sections/templateNine/FloatingButtons.jsx'
import { TemplateNineMapSection } from '../components/sections/templateNine/MapSection.jsx'
import { TemplateNineOffersSection } from '../components/sections/templateNine/OffersSection.jsx'
import { resolveTemplateNineData } from '../components/sections/templateNine/resolveTemplateNineData.js'
import { TemplateNineSocialSection } from '../components/sections/templateNine/SocialSection.jsx'
import { TemplateNineTestimonialReviewsSection } from '../components/sections/templateNine/TestimonialReviewsSection.jsx'
import { TemplateNineTopNav } from '../components/sections/templateNine/TopNav.jsx'
import { TemplateNineWorkingHoursSection } from '../components/sections/templateNine/WorkingHoursSection.jsx'
import { T9_FOOTER_BG, T9_NAVY, T9_TEAL } from '../components/sections/templateNine/constants.js'
import { cn } from '../utils/cn.js'

const navy = T9_NAVY
const teal = T9_TEAL

const sectionScroll = 'scroll-mt-[88px]'

function PrimaryBtn({ children, className = '', type = 'button', ...rest }) {
  return (
    <button
      type={type}
      className={cn(
        'h-[32px] rounded-[10px] px-5 text-[10px] font-semibold text-white shadow-[0px_10px_24px_rgba(13,58,92,0.22)]',
        className,
      )}
      style={{ backgroundColor: navy }}
      {...rest}
    >
      {children}
    </button>
  )
}

function DeptCard({ item }) {
  return (
    <div className="rounded-[14px] bg-white p-4 shadow-[0px_12px_32px_rgba(13,58,92,0.08)] ring-1 ring-black/[0.04]">
      <div
        className="grid size-[40px] place-items-center rounded-[12px] text-[18px]"
        style={{ backgroundColor: `${teal}18` }}
      >
        {item?.icon ?? '❤'}
      </div>
      <p className="mt-3 text-[11px] font-extrabold" style={{ color: navy }}>
        {item?.title}
      </p>
    </div>
  )
}

function SpecialistCard({ doc }) {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0px_14px_36px_rgba(13,58,92,0.10)] ring-1 ring-black/[0.05]">
      <PlaceholderImage src={doc?.image} alt="" label="Doctor" className="h-[140px] w-full" />
      <div className="p-4">
        <p className="text-[11px] font-extrabold text-[#1a2744]">{doc?.name}</p>
        <span
          className="mt-2 inline-block rounded-full px-2.5 py-0.5 text-[9px] font-semibold text-white"
          style={{ backgroundColor: teal }}
        >
          {doc?.specialty}
        </span>
        <p className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          {doc?.status ?? 'Available Now'}
        </p>
        <PrimaryBtn className="mt-4 w-full">{doc?.cta ?? 'Book Appointment'}</PrimaryBtn>
      </div>
    </div>
  )
}

function CheckRow({ item }) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full text-[14px]"
        style={{ backgroundColor: `${teal}22`, color: teal }}
        aria-hidden
      >
        {item?.icon ?? '✓'}
      </span>
      <div>
        <p className="text-[11px] font-extrabold text-[#1a2744]">{item?.title}</p>
        <p className="mt-1 text-[10px] font-medium leading-[15px] text-black/45">{item?.text}</p>
      </div>
    </div>
  )
}

export const TemplateNine = memo(function TemplateNine({ businessData }) {
  const d = resolveTemplateNineData(businessData ?? {})
  const [addedReviews, setAddedReviews] = useState([])
  const reviews = [...d.reviews, ...addedReviews]

  const whyFeatures = d.why?.features ?? []

  return (
    <div className="min-h-screen scroll-smooth bg-white pb-24 text-[#1a2744]">
      <TemplateNineTopNav
        brand={d.brand}
        nav={d.nav}
        headerLogin={d.headerLogin}
        headerSignup={d.headerSignup}
        headerLoginHref={d.headerLoginHref}
        headerSignupHref={d.headerSignupHref}
        showHeaderAuth={false}
      />

      {/* Hero */}
      <section
        id="top"
        className={`relative overflow-hidden border-b border-black/[0.04] py-10 ${sectionScroll}`}
        style={{
          background: `linear-gradient(180deg, #F4F7F9 0%, #ffffff 55%), repeating-linear-gradient(90deg, rgba(0,51,78,0.05) 0 1px, transparent 1px 32px), repeating-linear-gradient(0deg, rgba(0,51,78,0.05) 0 1px, transparent 1px 32px)`,
        }}
      >
        <div className="mx-auto grid w-full max-w-[1000px] items-center gap-8 px-5 sm:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-[9px] font-semibold text-white"
              style={{ backgroundColor: teal }}
            >
              {d.hero?.eyebrow ?? 'Your Health is Our Priority'}
            </span>
            <h1 className="mt-4 text-[24px] font-extrabold leading-[1.12] sm:text-[30px]">
              {d.hero?.title ?? 'Professional Clinical Care for Your Family'}
            </h1>
            <p className="mt-3 max-w-[460px] text-[10px] font-medium leading-[16px] text-black/45">
              {d.hero?.subtitle ??
                'Comprehensive medical solutions with compassionate teams and the highest standards of safety, privacy, and clinical quality.'}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="search"
                placeholder={d.hero?.searchPlaceholder ?? 'Search for a doctor or service...'}
                className="h-[36px] w-full max-w-[320px] rounded-[10px] border border-black/10 bg-white px-3 text-[10px] outline-none ring-1 ring-black/[0.04] placeholder:text-black/35"
              />
              <PrimaryBtn className="sm:shrink-0">{d.hero?.searchCta ?? 'Find a Doctor'}</PrimaryBtn>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[20px] shadow-[0px_20px_50px_rgba(13,58,92,0.18)] ring-1 ring-black/[0.06]">
              <PlaceholderImage
                src={d.hero?.image}
                alt=""
                label="Clinical team"
                className="h-[220px] w-full sm:h-[260px]"
              />
            </div>
            <div className="absolute bottom-4 left-4 max-w-[220px] rounded-[12px] bg-white p-3 shadow-[0px_12px_28px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
              <p className="flex items-start gap-2 text-[9px] font-semibold leading-snug" style={{ color: navy }}>
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-[10px] text-[16px] text-white"
                  style={{ backgroundColor: navy }}
                  aria-hidden
                >
                  📞
                </span>
                <span>
                  {d.hero?.floatTitle ?? '24/7 Support'}
                  <span className="mt-0.5 block text-[8px] font-medium text-black/45">
                    {d.hero?.floatSubtitle ?? 'Care Point Health'}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`bg-[#F4F7F9] py-12 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1000px] gap-8 px-5 sm:grid-cols-[1fr_1fr] sm:items-center">
          <div className="relative overflow-hidden rounded-[18px] shadow-[0px_16px_40px_rgba(13,58,92,0.12)] ring-1 ring-black/[0.05]">
            <PlaceholderImage
              src={d.why?.videoImage}
              alt=""
              label="Care video"
              className="h-[200px] w-full sm:h-[240px]"
            />
            <button
              type="button"
              className="absolute inset-0 grid place-items-center bg-black/25 transition hover:bg-black/35"
              aria-label="Play video"
            >
              <span className="grid size-14 place-items-center rounded-full bg-white text-[20px] shadow-lg">
                ▶
              </span>
            </button>
          </div>
          <div>
            <h2 className="text-[16px] font-extrabold leading-tight sm:text-[18px]" style={{ color: navy }}>
              {d.why?.title ?? 'Why Choose CarePoint Health Center?'}
            </h2>
            <div className="mt-6 grid gap-5">
              {whyFeatures.map((f, i) => (
                <CheckRow key={i} item={f} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className={`py-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1000px] px-5 text-center">
          <h2 className="text-[16px] font-extrabold sm:text-[18px]" style={{ color: navy }}>
            {d.departmentsTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-[520px] text-[10px] font-medium text-black/45">{d.departmentsSubtitle}</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {d.departments.slice(0, 5).map((dep, i) => (
              <DeptCard key={`${dep.title}-${i}`} item={dep} />
            ))}
          </div>
        </div>
      </section>

      <TemplateNineOffersSection title={d.offersTitle} offers={d.offers} />

      {/* Service tiles */}
      <section id="services" className={`bg-[#F4F7F9] py-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: navy }}>
            {d.servicesTitle}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {d.serviceTiles.map((s, i) => {
              const isNavy = s.tone === 'navy'
              const isTeal = s.tone === 'teal'
              const isLight = s.tone === 'light'
              return (
                <div
                  key={i}
                  className={cn(
                    'rounded-[16px] p-5 ring-1',
                    isNavy && 'text-white ring-white/10',
                    isTeal && 'text-white ring-black/5',
                    isLight && 'bg-[#e8f2fc] text-[#1a2744] ring-black/[0.05]',
                    s.tone === 'white' && 'bg-white ring-black/[0.06]',
                  )}
                  style={
                    isNavy
                      ? { backgroundColor: navy }
                      : isTeal
                        ? { backgroundColor: teal }
                        : undefined
                  }
                >
                  {s.icon ? <p className="text-[22px]">{s.icon}</p> : null}
                  <p className="mt-2 text-[12px] font-extrabold">{s.title}</p>
                  <p
                    className={cn(
                      'mt-2 text-[10px] font-medium leading-[15px]',
                      isNavy || isTeal ? 'text-white/85' : 'text-black/45',
                    )}
                  >
                    {s.text}
                  </p>
                  {s.cta ? (
                    <button
                      type="button"
                      className={cn(
                        'mt-4 h-[30px] rounded-[10px] px-4 text-[10px] font-semibold',
                        isNavy
                          ? 'bg-white text-[#0d3a5c]'
                          : isTeal
                            ? 'bg-white/95 text-[#0d3a5c]'
                            : 'text-white',
                      )}
                      style={!isNavy && !isTeal ? { backgroundColor: navy } : undefined}
                    >
                      {s.cta}
                    </button>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section id="specialists" className={`py-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-[16px] font-extrabold sm:text-[18px]" style={{ color: navy }}>
                {d.specialistsTitle}
              </h2>
              <p className="mt-2 max-w-[480px] text-[10px] font-medium text-black/45">{d.specialistsSubtitle}</p>
            </div>
            <a href="#contact" className="text-[10px] font-semibold" style={{ color: teal }}>
              {d.specialistsLink} ›
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.doctors.slice(0, 4).map((doc, i) => (
              <SpecialistCard key={`${doc.name}-${i}`} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      <TemplateNineCatalogueSection title={d.catalogueTitle} items={d.catalogue} />

      {/* Contact */}
      <section id="contact" className={`border-t border-black/[0.04] bg-white py-12 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1000px] gap-8 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-[16px] font-extrabold" style={{ color: navy }}>
              {d.contact?.findTitle}
            </h2>
            <ul className="mt-6 grid gap-4">
              {d.contactItems.map((c, i) => (
                <li key={i} className="flex gap-3 text-[10px] font-medium text-black/55">
                  <span className="text-[16px]" aria-hidden>
                    {c.icon}
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[16px] font-extrabold" style={{ color: navy }}>
              {d.contact?.formTitle}
            </h2>
            <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="h-[36px] rounded-[10px] border border-black/10 px-3 text-[10px] outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="h-[36px] rounded-[10px] border border-black/10 px-3 text-[10px] outline-none"
                placeholder="Email"
              />
              <textarea
                rows={4}
                className="rounded-[10px] border border-black/10 px-3 py-2 text-[10px] outline-none placeholder:text-black/35"
                placeholder="Message"
              />
              <PrimaryBtn type="submit" className="h-[36px] w-fit px-5">
                {d.contact?.submitCta}
              </PrimaryBtn>
            </form>
          </div>
        </div>
      </section>

      <TemplateNineMapSection title={d.mapTitle} locationUrl={d.locationUrl} address={d.address} />

      <TemplateNineSocialSection title={d.socialTitle} socialLinks={d.socialLinks} />

      <TemplateNineWorkingHoursSection title={d.hoursTitle} workingHours={d.workingHours} />

      <TemplateNineTestimonialReviewsSection
        title={d.testimonials?.title}
        carouselItems={d.testimonialCarousel}
        reviews={reviews}
        formTitle={d.reviewsFormTitle}
        submitLabel={d.reviewsSubmitLabel}
        onAddReview={(r) => setAddedReviews((prev) => [r, ...prev])}
      />

      <TemplateNineFeedSection title={d.feedTitle} items={d.feed} />

      {/* Footer */}
      <footer className="border-t border-black/[0.06] text-white" style={{ backgroundColor: T9_FOOTER_BG }}>
        <div className="mx-auto w-full max-w-[1000px] px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[12px] font-extrabold">{d.brand}</p>
              <p className="mt-3 text-[10px] font-medium leading-[15px] text-white/65">{d.footer?.about}</p>
              <div className="mt-4 flex gap-3 text-[14px]">
                {(d.footer?.social ?? ['f', '𝕏', 'in', '▶']).map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid size-8 place-items-center rounded-full bg-white/10 text-[10px] font-bold hover:bg-white/20"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold">Location</p>
              <p className="mt-3 text-[10px] font-medium leading-[15px] text-white/65">{d.footer?.locationText}</p>
              <p className="mt-3 text-[10px] font-medium text-white/65">{d.footer?.hours}</p>
            </div>
            <div>
              <p className="text-[11px] font-extrabold">Quick Links</p>
              <div className="mt-3 grid gap-2 text-[10px] font-medium text-white/65">
                {(d.footer?.quick ?? ['About Us', 'Services', 'Contact', 'Careers']).map((x) => (
                  <a key={x} href="#" className="hover:text-white">
                    {x}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold">Legal & Policy</p>
              <div className="mt-3 grid gap-2 text-[10px] font-medium text-white/65">
                {(d.footer?.legal ?? ['Privacy Policy', 'Terms of Use', 'Accessibility']).map((x) => (
                  <a key={x} href="#" className="hover:text-white">
                    {x}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-center text-[10px] font-medium text-white/45">
            {d.footer?.copyright}
          </p>
        </div>
      </footer>

      <TemplateNineFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={d.brand}
        shareText={d.hero?.subtitle ?? ''}
      />
    </div>
  )
})
