import { memo, useState } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { TemplateElevenCatalogueSection } from '../components/sections/templateEleven/CatalogueSection.jsx'
import { TemplateElevenFeedSection } from '../components/sections/templateEleven/FeedSection.jsx'
import { TemplateElevenFloatingButtons } from '../components/sections/templateEleven/FloatingButtons.jsx'
import { TemplateElevenMapSection } from '../components/sections/templateEleven/MapSection.jsx'
import { TemplateElevenOffersSection } from '../components/sections/templateEleven/OffersSection.jsx'
import { resolveTemplateElevenData } from '../components/sections/templateEleven/resolveTemplateElevenData.js'
import { TemplateElevenSocialSection } from '../components/sections/templateEleven/SocialSection.jsx'
import { TemplateElevenTestimonialReviewsSection } from '../components/sections/templateEleven/TestimonialReviewsSection.jsx'
import { TemplateElevenTopNav } from '../components/sections/templateEleven/TopNav.jsx'
import { TemplateElevenWorkingHoursSection } from '../components/sections/templateEleven/WorkingHoursSection.jsx'
import { T11_CHARCOAL, T11_GREEN_DARK } from '../components/sections/templateEleven/constants.js'
import { cn } from '../utils/cn.js'

const greenDark = T11_GREEN_DARK
const charcoal = T11_CHARCOAL

function LeafIcon({ className = '' }) {
  return (
    <span className={cn('inline-flex text-[18px]', className)} aria-hidden>
      🌿
    </span>
  )
}

function BtnPrimary({ children, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      className={cn(
        'h-[38px] rounded-[10px] px-5 text-[11px] font-bold text-white shadow-[0px_10px_24px_rgba(34,197,94,0.35)]',
        className,
      )}
      style={{ backgroundColor: greenDark }}
    >
      {children}
    </button>
  )
}

function BtnOutline({ children, className = '' }) {
  return (
    <button
      type="button"
      className={cn(
        'h-[38px] rounded-[10px] border-2 bg-white px-5 text-[11px] font-bold transition hover:bg-black/[0.02]',
        className,
      )}
      style={{ borderColor: greenDark, color: greenDark }}
    >
      {children}
    </button>
  )
}

function ServiceCard({ item }) {
  return (
    <div className="rounded-[16px] bg-white p-3 ring-1 ring-black/[0.06] shadow-[0px_12px_32px_rgba(0,0,0,0.06)]">
      <div className="overflow-hidden rounded-[12px]">
        <PlaceholderImage src={item?.image} alt="" label="Service" className="h-[140px] w-full" />
      </div>
      <p className="mt-4 text-[13px] font-extrabold text-[#0f172a]">{item?.title}</p>
      <p className="mt-2 text-[11px] font-medium leading-[17px] text-black/45">{item?.text}</p>
      <button type="button" className="mt-3 text-[11px] font-bold" style={{ color: greenDark }}>
        Read More →
      </button>
    </div>
  )
}

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateEleven = memo(function TemplateEleven({ businessData }) {
  const d = resolveTemplateElevenData(businessData ?? {})
  const [addedReviews, setAddedReviews] = useState([])
  const reviews = [...d.reviews, ...addedReviews]
  const data = d

  return (
    <div className="min-h-screen scroll-smooth bg-white pb-24 text-[#0f172a]">
      <TemplateElevenTopNav brand={d.brand} nav={d.nav} headerCta={d.headerCta} headerCtaHref={d.headerCtaHref} />

      {/* 1. Landing / Hero */}
      <section
        id="top"
        className={`relative overflow-hidden py-12 sm:py-16 ${sectionScroll}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.94)), url(${
            data.hero?.bgImage ??
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=60'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative mx-auto grid w-full max-w-[1100px] gap-10 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-[28px] font-extrabold leading-[1.15] sm:text-[36px] lg:text-[40px]">
              {data.hero?.title ?? 'Specialized, efficient, and thorough cleaning services.'}
            </h1>
            <p className="mt-4 max-w-[520px] text-[12px] font-medium leading-[19px] text-black/45">
              {data.hero?.subtitle ??
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnPrimary>{data.hero?.primaryCta ?? 'Get started'}</BtnPrimary>
              <BtnOutline>{data.hero?.secondaryCta ?? 'Learn more'}</BtnOutline>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[20px] shadow-[0px_24px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.06]">
              <PlaceholderImage
                src={
                  data.hero?.image ??
                  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=60'
                }
                alt=""
                label="Cleaning team"
                className="h-[280px] w-full max-w-[480px] sm:h-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome / About */}
      <section id="about" className={`border-t border-black/[0.04] bg-[#fafafa] py-16 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[320px] sm:h-[380px]">
            <div className="absolute left-0 top-4 w-[78%] overflow-hidden rounded-[18px] shadow-xl ring-1 ring-black/[0.06]">
              <PlaceholderImage
                src={
                  data.welcome?.imageLarge ??
                  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=60'
                }
                alt=""
                label="Team"
                className="h-[240px] w-full sm:h-[280px]"
              />
            </div>
            <div className="absolute bottom-4 right-0 w-[48%] overflow-hidden rounded-[14px] shadow-xl ring-4 ring-white">
              <PlaceholderImage
                src={
                  data.welcome?.imageSmall ??
                  'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=60'
                }
                alt=""
                label="Detail clean"
                className="h-[140px] w-full sm:h-[160px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[22px] font-extrabold sm:text-[26px]">
              {data.welcome?.title ?? 'Welcome To Our Pro-cleaning Company!'}
            </h2>
            <p className="mt-4 text-[12px] font-medium leading-[19px] text-black/45">
              {data.welcome?.text ??
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {(data.welcome?.features ?? []).map((f, i) => (
                <div key={i} className="flex gap-2 text-[11px] font-semibold text-[#0f172a]">
                  <span className="text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnPrimary>{data.welcome?.primaryCta ?? 'Read More'}</BtnPrimary>
              <button
                type="button"
                className="h-[38px] rounded-[10px] border border-black/10 bg-white px-5 text-[11px] font-bold text-[#0f172a]"
              >
                {data.welcome?.secondaryCta ?? 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Offers / Promotions */}
      <TemplateElevenOffersSection title={d.offersTitle} offers={d.offers} />

      {/* 4. Core Services */}
      <section id="services" className={`py-16 ${sectionScroll}`}>
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[520px] text-[22px] font-extrabold sm:text-[26px]">{d.servicesTitle}</h2>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full ring-1 ring-black/10"
                style={{ color: greenDark }}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full ring-1 ring-black/10"
                style={{ color: greenDark }}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.services.map((s, i) => (
              <ServiceCard key={`${s.title}-${i}`} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Catalogue with pricing */}
      <TemplateElevenCatalogueSection title={d.catalogueTitle} items={d.catalogue} />

      {/* 6. Contact */}
      <section id="contact" className={`border-t border-black/[0.04] py-16 ${sectionScroll}`}>
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-[20px] font-extrabold">{data.contact?.findTitle ?? 'Find us'}</h2>
            <ul className="mt-6 grid gap-4">
              {d.contactItems.map((c, i) => (
                <li key={i} className="flex gap-3 text-[12px] font-medium text-black/55">
                  <span className="text-[16px]" aria-hidden>
                    {c.icon}
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] font-extrabold">{data.contact?.formTitle ?? 'Keep in Touch'}</h2>
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
              <BtnPrimary className="w-fit" type="submit">
                {data.contact?.submitCta ?? 'Get Started'}
              </BtnPrimary>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Map */}
      <TemplateElevenMapSection title={d.mapTitle} locationUrl={d.locationUrl} address={d.address} />

      {/* 8. Social */}
      <TemplateElevenSocialSection title={d.socialTitle} socialLinks={d.socialLinks} />

      {/* 9. Hours */}
      <TemplateElevenWorkingHoursSection title={d.hoursTitle} workingHours={d.workingHours} />

      {/* 13. Testimonials */}
      <TemplateElevenTestimonialReviewsSection
        title={data.testimonials?.title ?? 'Feedback About Their Experience With Us'}
        carouselItems={data.testimonialCarousel}
        reviews={reviews}
        formTitle={d.reviewsFormTitle}
        submitLabel={d.reviewsSubmitLabel}
        onAddReview={(r) => setAddedReviews((prev) => [r, ...prev])}
      />

      {/* 14. Feed */}
      <TemplateElevenFeedSection title={d.feedTitle} items={d.feed} />

      {/* 11. Footer */}
      <footer style={{ backgroundColor: charcoal }}>
        <div className="mx-auto w-full max-w-[1100px] px-5 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-white">
                <LeafIcon className="text-[20px]" />
                <span className="text-[15px] font-extrabold">{data.brand ?? 'Pro-Cleaning'}</span>
              </div>
              <p className="mt-4 text-[11px] font-medium leading-[18px] text-white/55">
                {data.footer?.about ??
                  'Professional residential and commercial cleaning with eco-friendly products and trained staff.'}
              </p>
              <div className="mt-5 flex gap-2">
                {(data.footer?.social ?? ['f', '📷', 'in']).map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid size-9 place-items-center rounded-full bg-white/10 text-[11px] hover:bg-white/20"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-extrabold text-white">{data.footer?.companyTitle ?? 'Company'}</p>
              <div className="mt-4 grid gap-2 text-[11px] font-medium text-white/55">
                {(data.footer?.company ?? ['About', 'Careers', 'Press', 'Partners']).map((x) => (
                  <a key={x} href="#" className="hover:text-white">
                    {x}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-extrabold text-white">{data.footer?.quickTitle ?? 'Quick Links'}</p>
              <div className="mt-4 grid gap-2 text-[11px] font-medium text-white/55">
                {(data.footer?.quick ?? ['Services', 'Offers', 'Catalogue', 'Contact']).map((x) => (
                  <a key={x} href="#" className="hover:text-white">
                    {x}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-extrabold text-white">{data.footer?.newsletterTitle ?? 'Newsletter'}</p>
              <p className="mt-2 text-[11px] font-medium text-white/50">
                {data.footer?.newsletterText ?? 'Subscribe for tips and offers.'}
              </p>
              <form className="mt-4 flex rounded-full bg-white/10 p-1 ring-1 ring-white/15" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  readOnly
                  placeholder="Email"
                  className="min-w-0 flex-1 rounded-full border-0 bg-transparent px-4 text-[11px] text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  className="grid size-9 shrink-0 place-items-center rounded-full text-white"
                  style={{ backgroundColor: greenDark }}
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-black py-4">
          <p className="text-center text-[10px] font-medium text-white/45">
            {data.footer?.copyright ?? '© 2026 Pro-Cleaning. All rights reserved.'}
          </p>
        </div>
      </footer>

      {/* 12. Floating actions */}
      <TemplateElevenFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={d.brand}
        shareText={data.hero?.subtitle ?? ''}
      />
    </div>
  )
})
