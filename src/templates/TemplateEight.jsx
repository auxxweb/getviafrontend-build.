import { memo, useState } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { TemplateEightCatalogueSection } from '../components/sections/templateEight/CatalogueSection.jsx'
import { TemplateEightFeedSection } from '../components/sections/templateEight/FeedSection.jsx'
import { TemplateEightFloatingButtons } from '../components/sections/templateEight/FloatingButtons.jsx'
import { TemplateEightMapSection } from '../components/sections/templateEight/MapSection.jsx'
import { TemplateEightOffersSection } from '../components/sections/templateEight/OffersSection.jsx'
import { resolveTemplateEightData } from '../components/sections/templateEight/resolveTemplateEightData.js'
import { TemplateEightSocialSection } from '../components/sections/templateEight/SocialSection.jsx'
import { TemplateEightTestimonialReviewsSection } from '../components/sections/templateEight/TestimonialReviewsSection.jsx'
import { TemplateEightTopNav } from '../components/sections/templateEight/TopNav.jsx'
import { TemplateEightWorkingHoursSection } from '../components/sections/templateEight/WorkingHoursSection.jsx'
import { T8_BG, t8GradientStyle } from '../components/sections/templateEight/constants.js'
import { cn } from '../utils/cn.js'

const sectionScroll = 'scroll-mt-[88px]'

function Glass({ className = '', children }) {
  return (
    <div
      className={cn(
        'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex h-[18px] items-center rounded-full bg-white/10 px-2 text-[9px] font-semibold text-white/70 ring-1 ring-white/10">
      {children}
    </span>
  )
}

function PrimaryButton({ children, type = 'button', className = '', ...rest }) {
  return (
    <button
      type={type}
      className={cn(
        'h-[32px] rounded-[10px] px-5 text-[10px] font-semibold text-white shadow-[0px_12px_26px_rgba(42,84,255,0.25)]',
        className,
      )}
      style={t8GradientStyle}
      {...rest}
    >
      {children}
    </button>
  )
}

function GhostButton({ children }) {
  return (
    <button
      type="button"
      className="h-[32px] rounded-[10px] bg-white/5 px-5 text-[10px] font-semibold text-white/70 ring-1 ring-white/10"
    >
      {children}
    </button>
  )
}

function InventoryCard({ item }) {
  return (
    <Glass className="overflow-hidden p-3">
      <div className="overflow-hidden rounded-[14px]">
        <PlaceholderImage src={item?.image} alt="" label="Car" className="h-[110px] w-full" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-extrabold text-white">{item?.name}</p>
          <p className="mt-1 text-[9px] font-medium text-white/45">{item?.meta}</p>
        </div>
        <p className="text-[11px] font-extrabold text-white">{item?.price}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {(item?.tags ?? []).slice(0, 3).map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <button
        type="button"
        className="mt-3 h-[30px] w-full rounded-[12px] bg-white/5 text-[10px] font-semibold text-white/70 ring-1 ring-white/10"
      >
        View Details
      </button>
    </Glass>
  )
}

function FeatureTile({ item }) {
  return (
    <Glass className="p-4 text-center">
      <div className="mx-auto grid size-[34px] place-items-center rounded-[12px] bg-white/5 text-white/80 ring-1 ring-white/10">
        <span className="text-[12px] font-extrabold">{item?.icon ?? '⚡'}</span>
      </div>
      <p className="mt-3 text-[11px] font-extrabold text-white">{item?.title}</p>
      <p className="mt-2 text-[9px] font-medium leading-[14px] text-white/45">{item?.text}</p>
    </Glass>
  )
}

export const TemplateEight = memo(function TemplateEight({ businessData }) {
  const d = resolveTemplateEightData(businessData ?? {})
  const [addedReviews, setAddedReviews] = useState([])
  const reviews = [...d.reviews, ...addedReviews]

  const heroTitle = d.hero?.title ?? 'Find Your Perfect\nPre-Owned Car'
  const heroTitleLines = String(heroTitle).split('\n')

  return (
    <div className="min-h-screen scroll-smooth pb-24 text-white" style={{ backgroundColor: T8_BG }}>
      <TemplateEightTopNav
        brand={d.brand}
        nav={d.nav}
        headerLogin={d.headerLogin}
        headerSignup={d.headerSignup}
        headerLoginHref={d.headerLoginHref}
        headerSignupHref={d.headerSignupHref}
      />

      {/* Hero */}
      <section id="top" className={`pb-10 pt-4 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <div className="text-center">
            <h1 className="text-[22px] font-extrabold leading-[1.15] text-white sm:text-[28px]">
              {heroTitleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < heroTitleLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-3 max-w-[620px] text-[10px] font-medium leading-[16px] text-white/45">
              {d.hero?.subtitle}
            </p>
          </div>

          <div className="mt-6">
            <Glass className="overflow-hidden p-4">
              <div className="overflow-hidden rounded-[16px]">
                <PlaceholderImage
                  src={d.hero?.image}
                  alt=""
                  label="Hero car"
                  className="h-[210px] w-full sm:h-[260px]"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
                {(d.hero?.filters ?? []).map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="h-[32px] rounded-[12px] bg-white/5 px-4 text-[10px] font-semibold text-white/70 ring-1 ring-white/10"
                  >
                    {f}
                  </button>
                ))}
                <PrimaryButton>{d.hero?.cta}</PrimaryButton>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* Featured inventory */}
      <section id="inventory" className={`pb-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-extrabold text-white/90">{d.inventoryTitle}</p>
            <a href="#catalogue" className="text-[10px] font-semibold text-white/55 hover:text-white">
              {d.inventoryViewAll}
            </a>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {d.inventory.slice(0, 3).map((it) => (
              <InventoryCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>

      {/* About / performance */}
      <section id="about" className={`pb-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
            <Glass className="overflow-hidden p-3">
              <div className="overflow-hidden rounded-[14px]">
                <PlaceholderImage
                  src={d.performance?.image}
                  alt=""
                  label="Showroom"
                  className="h-[190px] w-full"
                />
              </div>
            </Glass>
            <Glass className="p-5">
              <p className="text-[9px] font-semibold tracking-[0.18em] text-white/40">{d.performance?.eyebrow}</p>
              <h2 className="mt-2 text-[16px] font-extrabold leading-[1.15] text-white sm:text-[18px]">
                {String(d.performance?.title ?? '')
                  .split('\n')
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
              </h2>
              <p className="mt-3 text-[10px] font-medium leading-[16px] text-white/45">{d.performance?.text}</p>
              <div className="mt-4 grid gap-2">
                {(d.performance?.bullets ?? []).slice(0, 3).map((b, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-[12px] bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="grid size-[26px] place-items-center rounded-[10px] bg-white/5 text-white/80 ring-1 ring-white/10">
                      ✓
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-extrabold text-white">{b?.title}</p>
                      <p className="mt-1 text-[9px] font-medium text-white/45">{b?.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>
      </section>

      <TemplateEightOffersSection title={d.offersTitle} offers={d.offers} />

      {/* Feature tiles */}
      <section id="services" className={`pb-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5 text-center">
          <p className="text-[10px] font-semibold text-white/45">{d.featuresEyebrow}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {d.features.slice(0, 4).map((it, idx) => (
              <FeatureTile key={idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <TemplateEightCatalogueSection title={d.catalogueTitle} items={d.catalogue} />

      {/* Sell */}
      <section id="sell" className={`pb-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <Glass className="p-5 sm:max-w-[480px]">
            <p className="text-[12px] font-extrabold text-white">Sell Your Car</p>
            <p className="mt-2 text-[10px] font-medium text-white/45">{d.sell?.text}</p>
            <div className="mt-4 grid gap-2">
              <input
                className="h-[34px] rounded-[12px] bg-white/5 px-4 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                placeholder="Car model"
              />
              <input
                className="h-[34px] rounded-[12px] bg-white/5 px-4 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                placeholder="Year"
              />
            </div>
            <div className="mt-4">
              <GhostButton>Request estimate</GhostButton>
            </div>
          </Glass>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`pb-12 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Glass className="p-5">
              <p className="text-[12px] font-extrabold text-white">{d.contact?.findTitle}</p>
              <p className="mt-2 text-[10px] font-medium text-white/45">{d.contact?.text}</p>
              <ul className="mt-4 grid gap-3">
                {d.contactItems.map((c, i) => (
                  <li key={i} className="flex gap-2 text-[10px] font-medium text-white/55">
                    <span aria-hidden>{c.icon}</span>
                    {c.text}
                  </li>
                ))}
              </ul>
            </Glass>

            <Glass className="p-5">
              <p className="text-[12px] font-extrabold text-white">{d.contact?.formTitle}</p>
              <form
                className="mt-4 grid gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <input
                  className="h-[34px] rounded-[12px] bg-white/5 px-4 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                  placeholder="Name"
                />
                <input
                  className="h-[34px] rounded-[12px] bg-white/5 px-4 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-[90px] rounded-[12px] bg-white/5 p-4 text-[10px] text-white/80 outline-none ring-1 ring-white/10 placeholder:text-white/35"
                  placeholder="Message"
                />
                <div className="mt-2">
                  <PrimaryButton type="submit">{d.contact?.submitCta}</PrimaryButton>
                </div>
              </form>
            </Glass>
          </div>
        </div>
      </section>

      <TemplateEightMapSection title={d.mapTitle} locationUrl={d.locationUrl} address={d.address} />

      <TemplateEightSocialSection title={d.socialTitle} socialLinks={d.socialLinks} />

      <TemplateEightWorkingHoursSection title={d.hoursTitle} workingHours={d.workingHours} />

      <TemplateEightTestimonialReviewsSection
        title={d.testimonials?.title}
        carouselItems={d.testimonialCarousel}
        reviews={reviews}
        formTitle={d.reviewsFormTitle}
        submitLabel={d.reviewsSubmitLabel}
        onAddReview={(r) => setAddedReviews((prev) => [r, ...prev])}
      />

      <TemplateEightFeedSection title={d.feedTitle} items={d.feed} />

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto w-full max-w-[1020px] px-5">
          <div className="h-px w-full bg-white/10" />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[10px] font-medium text-white/45">
            <p>{d.footer?.copyright}</p>
            <div className="flex items-center gap-4">
              {(d.footer?.links ?? []).map((t) => (
                <a key={t} href="#" className="hover:text-white/70">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <TemplateEightFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={d.brand}
        shareText={d.hero?.subtitle ?? ''}
      />
    </div>
  )
})
