import { memo, useState } from 'react'
import { TW_CREAM } from '../components/sections/templateTwelve/constants.js'
import { resolveTemplateTwelveData } from '../components/sections/templateTwelve/resolveTemplateTwelveData.js'
import { ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT12 } from '../components/sections/expandable/themePresets.js'
import { TemplateTwelveHeroSection } from '../components/sections/templateTwelve/HeroSection.jsx'
import { TemplateTwelveWelcomeSection } from '../components/sections/templateTwelve/WelcomeSection.jsx'
import { TemplateTwelveServicesSection } from '../components/sections/templateTwelve/ServicesSection.jsx'
import { TemplateTwelveOffersSection } from '../components/sections/templateTwelve/OffersSection.jsx'
import { TemplateTwelveProductCatalogueSection } from '../components/sections/templateTwelve/ProductCatalogueSection.jsx'
import { TemplateTwelveFeedSection } from '../components/sections/templateTwelve/FeedSection.jsx'
import { TemplateTwelveTestimonialReviewsSection } from '../components/sections/templateTwelve/TestimonialReviewsSection.jsx'
import { TemplateTwelveSocialLinksSection } from '../components/sections/templateTwelve/SocialLinksSection.jsx'
import { TemplateTwelveMapSection } from '../components/sections/templateTwelve/MapSection.jsx'
import { TemplateTwelveContactSection } from '../components/sections/templateTwelve/ContactSection.jsx'
import { TemplateTwelveWorkingHoursSection } from '../components/sections/templateTwelve/WorkingHoursSection.jsx'
import { TemplateTwelveFloatingButtons } from '../components/sections/templateTwelve/FloatingButtons.jsx'

export const TemplateTwelve = memo(function TemplateTwelve({ businessData }) {
  const d = resolveTemplateTwelveData(businessData ?? {})
  const expanded = getExpandedData(businessData ?? {}, { block: businessData?.template12 ?? {} })
  const [addedReviews, setAddedReviews] = useState([])
  const reviews = [...d.reviews, ...addedReviews]

  return (
    <div className="min-h-screen scroll-smooth pb-24 font-sans text-[#2C2C2C]" style={{ backgroundColor: TW_CREAM }}>
      <ExpandableTopNav
        brand={d.brand}
        nav={expanded.navItems ?? d.nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT12}
        showHeaderAuth={false}
      />

      <TemplateTwelveHeroSection hero={d.hero} />

      <TemplateTwelveWelcomeSection welcome={d.welcome} />

      <TemplateTwelveServicesSection title={d.servicesTitle} services={d.services} />

      <TemplateTwelveOffersSection title={d.offersTitle} offers={d.offers} />

      <TemplateTwelveProductCatalogueSection title={d.catalogueTitle} items={d.catalogue} />

      <TemplateTwelveFeedSection title={d.feedTitle} items={d.feed} />

      <TemplateTwelveTestimonialReviewsSection
        title={d.testimonialsTitle}
        quotes={d.testimonialQuotes}
        reviews={reviews}
        formTitle={d.reviewsFormTitle}
        submitLabel={d.reviewsSubmitLabel}
        onAddReview={(r) => setAddedReviews((prev) => [r, ...prev])}
      />

      <TemplateTwelveSocialLinksSection title={d.socialTitle} socialLinks={d.socialLinks} />

      <TemplateTwelveMapSection title={d.mapTitle} locationUrl={d.locationUrl} address={d.address} />

      <TemplateTwelveContactSection
        findTitle={d.contact.findTitle}
        formTitle={d.contact.formTitle}
        submitCta={d.contact.submitCta}
        phone={d.phone}
        email={d.email}
        address={d.address}
      />

      <TemplateTwelveWorkingHoursSection title={d.hoursTitle} workingHours={d.workingHours} />

      <footer className="border-t border-black/[0.06] py-8 text-center">
        <p className="font-playfair text-[14px] font-semibold text-ink/70">{d.brand}</p>
        <p className="mt-2 text-[10px] font-medium text-ink/40">© {new Date().getFullYear()} {d.brand}</p>
      </footer>

      <TemplateTwelveFloatingButtons
        phone={d.phone}
        whatsapp={d.whatsapp}
        shareTitle={d.brand}
        shareText={d.hero?.subtitle ?? ''}
      />
    </div>
  )
})
