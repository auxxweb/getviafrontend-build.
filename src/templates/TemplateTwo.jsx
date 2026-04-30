import { memo } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT2 } from '../components/sections/expandable/themePresets.js'

export const TemplateTwo = memo(function TemplateTwo({ businessData }) {
  const t = businessData?.template2 ?? {}
  const hero = t.hero ?? {}
  const featured = t.featured ?? []
  const promos = t.promos ?? []
  const promise = t.promise ?? []

  const expanded = getExpandedData(businessData, { block: t })
  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Fresh picks', href: '#featured' },
      { label: 'Deals', href: '#promos' },
      { label: 'Promise', href: '#promise' },
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
    <div className="min-h-screen scroll-smooth bg-[#eef6ee] pb-24">
      <ExpandableTopNav
        brand={businessData?.name ?? 'Fresh Garden'}
        nav={nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT2}
        showHeaderAuth={false}
      />

      <section id="top" className="scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-[980px] px-4 pt-2">
          <div className="relative overflow-hidden rounded-[18px]">
            <PlaceholderImage
              src={hero?.image}
              alt=""
              label="Hero"
              className="h-[180px] w-full sm:h-[220px]"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 grid place-items-center p-6 text-center">
              <div className="max-w-[520px]">
                <h1 className="text-[22px] font-extrabold leading-[1.05] text-white sm:text-[28px]">
                  {hero?.title ?? 'Why Choose Fresh Garden ?'}
                </h1>
                <p className="mt-2 text-[11px] font-medium leading-[16px] text-white/80">
                  {hero?.subtitle ??
                    'Make your day healthier with fresh organic fruits and vegetables.'}
                </p>
                <button
                  type="button"
                  className="mt-4 h-[32px] rounded-[999px] bg-[#2d7a49] px-6 text-[11px] font-semibold text-white"
                >
                  {hero?.cta ?? 'View Plan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-[980px] px-4 pb-4 pt-6">
          <div className="rounded-[16px] bg-[#dff1df] p-4">
            <p className="text-[13px] font-extrabold text-[#1a1c19]">Featured Freshness</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {featured.map((it, idx) => (
                <div
                  key={it?.id ?? idx}
                  className="rounded-[14px] bg-white p-3 shadow-[0px_12px_26px_rgba(0,0,0,0.10)]"
                >
                  <div className="overflow-hidden rounded-[12px]">
                    <PlaceholderImage src={it?.image} alt="" label="Item" className="h-[70px] w-full" />
                  </div>
                  <p className="mt-2 text-[11px] font-semibold text-[#1a1c19]">{it?.name}</p>
                  <p className="mt-1 text-[10px] font-medium text-black/45">{it?.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="promos" className="scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-[980px] px-4 pb-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {promos.slice(0, 2).map((p, idx) => (
              <div key={idx} className="rounded-[16px] bg-[#dff1df] p-4">
                <p className="text-[12px] font-extrabold text-[#1a1c19]">{p?.title}</p>
                <p className="mt-1 text-[10px] font-medium text-black/45">{p?.subtitle}</p>
                <button
                  type="button"
                  className="mt-3 h-[28px] rounded-[999px] bg-[#2d7a49] px-4 text-[10px] font-semibold text-white"
                >
                  {p?.cta ?? 'Shop Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="promise" className="scroll-mt-[88px]">
        <div className="mx-auto w-full max-w-[980px] px-4 pb-6 pt-2">
          <div className="rounded-[16px] bg-[#dff1df] p-4">
            <p className="text-center text-[13px] font-extrabold text-[#1a1c19]">Our Promise</p>
            <p className="mt-1 text-center text-[10px] font-medium text-black/45">
              {t.promiseSubtitle ?? 'We are committed to deliver safe, fresh and healthy food.'}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {promise.slice(0, 3).map((it, idx) => (
                <div
                  key={idx}
                  className="rounded-[14px] bg-white p-4 text-center shadow-[0px_12px_26px_rgba(0,0,0,0.08)]"
                >
                  <div className="mx-auto grid size-[34px] place-items-center rounded-full bg-[#dff1df] text-[#2d7a49]">
                    <span className="text-[14px] font-extrabold">{it?.icon ?? '✓'}</span>
                  </div>
                  <p className="mt-2 text-[11px] font-extrabold text-[#1a1c19]">{it?.title}</p>
                  <p className="mt-1 text-[10px] font-medium text-black/45">{it?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT2}
        expanded={expanded}
        brand={businessData?.name ?? 'Fresh Garden'}
        shareSubtitle={hero?.subtitle ?? ''}
        reviewNameInputId="t2-review-name"
        reviewTextInputId="t2-review-text"
      />

      <footer className="bg-[#2d7a49]">
        <div className="mx-auto w-full max-w-[980px] px-4 py-6 text-white">
          <div className="grid gap-4 sm:grid-cols-4">
            {(t.footerColumns ?? []).slice(0, 4).map((c, idx) => (
              <div key={idx}>
                <p className="text-[11px] font-extrabold">{c?.title}</p>
                <div className="mt-2 grid gap-1 text-[10px] font-medium text-white/85">
                  {(c?.links ?? []).map((x) => (
                    <a key={x} href="#" className="hover:text-white">
                      {x}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[10px] font-medium text-white/80">
            {t.copyright ?? 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})
