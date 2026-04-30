import { memo } from 'react'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT1 } from '../components/sections/expandable/themePresets.js'
import { TemplateOneHero } from '../components/sections/templateOne/TemplateOneHero.jsx'
import { TemplateOneWelcome } from '../components/sections/templateOne/TemplateOneWelcome.jsx'
import { TopDestinations } from '../components/sections/templateOne/TopDestinations.jsx'
import { TemplateOneFooter } from '../components/sections/templateOne/TemplateOneFooter.jsx'

export const TemplateOne = memo(function TemplateOne({ businessData, onEnquiry }) {
  const block = businessData?.template1 ?? {}
  const expanded = getExpandedData(businessData, { block })
  const brand = businessData?.name ? businessData.name.slice(0, 12).toUpperCase() : 'LOGO'
  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Welcome', href: '#welcome' },
      { label: 'Trips', href: '#destinations' },
      ...buildStandardExpandedNav({
        prefix: [],
        offers: expanded.offers,
        catalogue: expanded.catalogue,
        feed: expanded.feed,
        address: expanded.address,
        locationUrl: expanded.locationUrl,
        workingHours: expanded.workingHours,
        catalogueNavLabel: expanded.catalogueNavLabel,
        feedLabel: expanded.feedNavLabel,
      }),
    ]

  return (
    <div className="min-h-screen scroll-smooth bg-white pb-24">
      <ExpandableTopNav
        brand={brand}
        nav={nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT1}
      />
      <main className="bg-white">
        <section id="top" className="scroll-mt-[88px]">
          <TemplateOneHero
            eyebrow={businessData?.category ?? 'BEST DESTINATIONS AROUND THE WORLD'}
            titleLines={
              businessData?.hero?.titleLines ?? ['Travel, enjoy', 'and live a new', 'and full life']
            }
            description={businessData?.description ?? ''}
            ctaLabel={businessData?.hero?.ctaLabel ?? 'Find out more'}
            onCta={onEnquiry}
            heroImage={businessData?.hero?.image ?? businessData?.images?.[0]}
            socialLinks={businessData?.socialLinks ?? {}}
          />
        </section>

        <section id="welcome" className="scroll-mt-[88px]">
          <TemplateOneWelcome
            eyebrow={block.welcome?.eyebrow ?? 'WELCOME'}
            title={block.welcome?.title ?? 'Plan journeys that feel effortless'}
            text={
              block.welcome?.text ??
              'From curated itineraries to trusted local partners, we help you travel with confidence — so you can focus on the moments that matter.'
            }
            ctaLabel={block.welcome?.ctaLabel ?? 'Browse destinations'}
            ctaHref={block.welcome?.ctaHref ?? '#destinations'}
            image={
              block.welcome?.image ??
              businessData?.images?.[1] ??
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=60'
            }
          />
        </section>

        <section id="destinations" className="scroll-mt-[88px]">
          <TopDestinations items={businessData?.destinations ?? businessData?.gallery ?? []} />
        </section>

        <ExpandableSections
          theme={expandableThemeT1}
          expanded={expanded}
          brand={businessData?.name ?? brand}
          shareSubtitle={businessData?.description ?? ''}
          reviewNameInputId="t1-review-name"
          reviewTextInputId="t1-review-text"
        />
      </main>
      <TemplateOneFooter
        brand={businessData?.footer?.brand}
        columns={businessData?.footer?.columns}
        socialLinks={businessData?.footer?.socialLinks ?? businessData?.socialLinks}
        appText={businessData?.footer?.appText}
        copyright={businessData?.footer?.copyright}
      />
    </div>
  )
})
