import { memo } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT5 } from '../components/sections/expandable/themePresets.js'

function SmallCard({ title, text, icon = '🏠' }) {
  return (
    <div className="rounded-[14px] bg-white p-4 shadow-[0px_12px_26px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <div className="grid size-[34px] place-items-center rounded-[10px] bg-[#eaf2ff] text-[#1b77be]">
        <span className="text-[14px] font-extrabold">{icon}</span>
      </div>
      <p className="mt-3 text-[12px] font-extrabold text-[#0b1c30]">{title}</p>
      <p className="mt-2 text-[10px] font-medium leading-[15px] text-black/45">{text}</p>
    </div>
  )
}

function PropertyCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0px_12px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="overflow-hidden">
        <PlaceholderImage src={item?.image} alt="" label="House" className="h-[120px] w-full" />
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-extrabold text-[#0b1c30]">{item?.title}</p>
            <p className="mt-1 truncate text-[10px] font-medium text-black/45">{item?.location}</p>
          </div>
          <p className="text-[11px] font-extrabold text-[#1b77be]">{item?.price}</p>
        </div>
        <div className="mt-3 flex items-center justify-between text-[9px] font-semibold text-black/45">
          <span>{item?.beds} Beds</span>
          <span>{item?.baths} Bath</span>
          <span>{item?.area}</span>
        </div>
      </div>
    </div>
  )
}

function AgentCard({ item }) {
  return (
    <div className="rounded-[16px] bg-white p-4 text-center shadow-[0px_12px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="mx-auto size-[56px] overflow-hidden rounded-full bg-black/10">
        <PlaceholderImage src={item?.avatar} alt="" label="Agent" className="size-full" />
      </div>
      <p className="mt-3 text-[11px] font-extrabold text-[#0b1c30]">{item?.name}</p>
      <p className="mt-1 text-[9px] font-medium text-black/40">{item?.role}</p>
      <div className="mt-3 flex items-center justify-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-[10px] text-[#f0a12b]">
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

export const TemplateFive = memo(function TemplateFive({ businessData }) {
  const t = businessData?.template5 ?? {}
  const expanded = getExpandedData(businessData, { block: t })
  const brand = t.brand ?? 'HOMYZ'
  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Stats', href: '#stats' },
      { label: 'Why us', href: '#why' },
      { label: 'Listings', href: '#properties' },
      { label: 'Deals', href: '#deals' },
      { label: 'Agents', href: '#agents' },
      { label: 'Partners', href: '#partners' },
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
        theme={expandableThemeT5}
        showHeaderAuth={false}
      />

      <section id="top" className="scroll-mt-[88px] bg-[#eaf2ff] pb-8 pt-6">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <div className="grid gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
            <div>
              <h1 className="text-[22px] font-extrabold leading-[1.1] text-[#0b1c30] sm:text-[28px]">
                {t.hero?.title ?? "Find a perfect home you'll love"}
              </h1>
              <p className="mt-3 max-w-[420px] text-[10px] font-medium leading-[16px] text-black/45">
                {t.hero?.subtitle ??
                  'We help you find your dream home with modern listings and verified agents.'}
              </p>

              <div className="mt-5 rounded-[12px] bg-white p-2 shadow-[0px_12px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                <div className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
                  <input
                    className="h-[32px] rounded-[10px] bg-[#f6f8ff] px-3 text-[10px] outline-none"
                    placeholder="Location"
                  />
                  <input
                    className="h-[32px] rounded-[10px] bg-[#f6f8ff] px-3 text-[10px] outline-none"
                    placeholder="Property Type"
                  />
                  <input
                    className="h-[32px] rounded-[10px] bg-[#f6f8ff] px-3 text-[10px] outline-none"
                    placeholder="Budget"
                  />
                  <button
                    type="button"
                    className="h-[32px] rounded-[10px] bg-[#0b1c30] px-4 text-[10px] font-semibold text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <PlaceholderImage
                src={t.hero?.image}
                alt=""
                label="Hero house"
                className="h-[200px] w-full sm:h-[240px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="scroll-mt-[88px] bg-white">
        <div className="mx-auto w-full max-w-[1020px] px-4 py-6">
          <p className="text-center text-[10px] font-semibold text-[#1b77be]">Explore property listed services</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {(t.stats ?? [
              { value: '300+', label: 'Listings' },
              { value: '200+', label: 'Clients' },
              { value: '120+', label: 'Agents' },
              { value: '50+', label: 'Awards' },
            ]).map((s, idx) => (
              <SmallCard key={idx} title={s.value} text={s.label} icon={s.icon ?? '✓'} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-[88px] bg-white pb-8">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <PlaceholderImage src={t.best?.image} alt="" label="Illustration" className="h-[200px] w-full" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#1b77be]">WHY</p>
              <h2 className="mt-2 text-[18px] font-extrabold leading-[1.1] text-[#0b1c30] sm:text-[22px]">
                {t.best?.title ?? 'We are the best in the housing market'}
              </h2>
              <p className="mt-3 text-[10px] font-medium leading-[16px] text-black/45">
                {t.best?.text ??
                  'We provide trusted listings, transparent pricing, and professional support.'}
              </p>
              <button
                type="button"
                className="mt-4 h-[30px] rounded-[10px] bg-[#eaf2ff] px-4 text-[10px] font-semibold text-[#1b77be] ring-1 ring-[#1b77be]/20"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="scroll-mt-[88px] bg-white pb-8">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <p className="text-center text-[14px] font-extrabold text-[#0b1c30]">
            {t.properties?.title ?? "We've got properties for everyone"}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-4">
            {(t.properties?.items ?? []).slice(0, 4).map((it, idx) => (
              <PropertyCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="calc" className="scroll-mt-[88px] bg-white pb-10">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div>
              <p className="text-[12px] font-extrabold text-[#0b1c30]">
                {t.calc?.title ?? 'Calculate the cost of your property'}
              </p>
              <p className="mt-2 text-[10px] font-medium leading-[16px] text-black/45">
                {t.calc?.text ?? 'Use our calculator to estimate monthly payments.'}
              </p>
              <button
                type="button"
                className="mt-3 h-[30px] rounded-[10px] bg-[#1b77be] px-4 text-[10px] font-semibold text-white"
              >
                Try Calculator
              </button>
            </div>
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <PlaceholderImage src={t.calc?.image} alt="" label="Calc" className="h-[200px] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="deals" className="scroll-mt-[88px] bg-white pb-10">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <p className="text-center text-[14px] font-extrabold text-[#0b1c30]">
            {t.deals?.title ?? 'We always offer best deals'}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {(t.deals?.items ?? []).slice(0, 3).map((it, idx) => (
              <PropertyCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="scroll-mt-[88px] bg-white pb-10">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <p className="text-center text-[14px] font-extrabold text-[#0b1c30]">
            {t.agents?.title ?? 'Top real estate agents'}
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-4">
            {(t.agents?.items ?? []).slice(0, 4).map((it, idx) => (
              <AgentCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-[88px] bg-white pb-10">
        <div className="mx-auto w-full max-w-[1020px] px-4">
          <p className="text-center text-[12px] font-extrabold text-[#0b1c30]">Our Partners</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] font-extrabold text-black/35">
            {(t.partners ?? ['CARS', 'BUILD', 'WORLD', 'CHAIN', 'PORTAL']).map((p, idx) => (
              <span key={idx}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT5}
        expanded={expanded}
        brand={brand}
        shareSubtitle={t.hero?.subtitle ?? ''}
        reviewNameInputId="t5-review-name"
        reviewTextInputId="t5-review-text"
      />

      <footer className="bg-[#0b1c30] text-white">
        <div className="mx-auto w-full max-w-[1020px] px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <p className="text-[12px] font-extrabold">{brand}</p>
              <p className="mt-3 max-w-[240px] text-[10px] font-medium leading-[15px] text-white/70">
                {t.footer?.about ?? 'Helping you find the perfect home with trusted agents.'}
              </p>
            </div>
            {(t.footer?.columns ?? []).slice(0, 3).map((c, idx) => (
              <div key={idx}>
                <p className="text-[11px] font-extrabold">{c?.title}</p>
                <div className="mt-3 grid gap-2 text-[10px] font-medium text-white/70">
                  {(c?.links ?? []).map((x) => (
                    <a key={x} href="#" className="hover:text-white">
                      {x}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[14px] bg-white/5 p-4">
            <p className="text-center text-[11px] font-extrabold">Download Our Mobile App</p>
          </div>
          <p className="mt-8 text-center text-[10px] font-medium text-white/50">
            {t.footer?.copyright ?? '© 2026. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})
