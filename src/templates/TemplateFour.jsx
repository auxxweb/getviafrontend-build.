import { memo } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT4 } from '../components/sections/expandable/themePresets.js'

function ArrowMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BrandStrip({ brands = [] }) {
  return (
    <div id="brands" className="scroll-mt-[88px] bg-[#ebd96b]">
      <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-center justify-between gap-4 px-5 py-4 text-[12px] font-extrabold uppercase tracking-wide text-black/70">
        {brands.map((b, idx) => (
          <span key={b?.id ?? b?.name ?? idx} className="opacity-85">
            {b?.name ?? b}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProductCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="p-3">
        <div className="overflow-hidden rounded-[16px]">
          <PlaceholderImage src={item?.image} alt="" label="Item" className="h-[160px] w-full" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[12px] font-extrabold text-black">{item?.name}</p>
            <p className="mt-1 text-[10px] font-medium text-black/45">{item?.subtitle}</p>
          </div>
          <div className="grid size-[30px] place-items-center rounded-full bg-black/5 text-black/70">
            <ArrowMini />
          </div>
        </div>
      </div>
    </div>
  )
}

export const TemplateFour = memo(function TemplateFour({ businessData }) {
  const data = businessData?.template4 ?? {}
  const expanded = getExpandedData(businessData, { block: data })
  const brand = data.header?.brand ?? 'FASHION'
  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Brands', href: '#brands' },
      { label: 'New', href: '#arrivals' },
      { label: 'Sale', href: '#payday' },
      { label: 'Picks', href: '#favourites' },
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
        theme={expandableThemeT4}
        showHeaderAuth={false}
      />

      <section id="top" className="scroll-mt-[88px] bg-white pb-6">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid gap-6 overflow-hidden rounded-[24px] bg-[#f4f6f5] p-6 sm:grid-cols-[1.1fr_0.9fr] sm:p-8">
            <div>
              <h1 className="text-[28px] font-extrabold leading-[1.05] text-black sm:text-[40px]">
                <span className="block">{data.hero?.titleTop ?? "LET'S"}</span>
                <span className="mt-1 inline-block bg-[#ebd96b] px-2 py-1">
                  {data.hero?.titleMid ?? 'EXPLORE'}
                </span>
                <span className="mt-1 block">{data.hero?.titleBottom ?? 'UNIQUE CLOTHES.'}</span>
              </h1>
              <p className="mt-3 max-w-[420px] text-[10px] font-medium text-black/45">
                {data.hero?.subtitle ?? 'Live for Influential and Innovative fashion!'}
              </p>
              <button
                type="button"
                className="mt-5 h-[32px] rounded-[10px] bg-white px-5 text-[10px] font-semibold text-black/60 shadow-[0px_12px_26px_rgba(0,0,0,0.08)] ring-1 ring-black/10"
              >
                {data.hero?.cta ?? 'View More'}
              </button>
            </div>

            <div className="relative">
              <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[22px]">
                <PlaceholderImage
                  src={data.hero?.image}
                  alt=""
                  label="Hero model"
                  className="h-[220px] w-full sm:h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip brands={data.brands ?? ['HM', 'OBEY', 'SHOPIFY', 'LACOSTE', 'LEVIS', 'AMAZON']} />

      <section id="arrivals" className="scroll-mt-[88px] bg-white pb-8 pt-8">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <p className="text-[14px] font-extrabold tracking-wide text-black">NEW ARRIVALS</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {(data.newArrivals ?? []).slice(0, 3).map((it, idx) => (
              <ProductCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="payday" className="scroll-mt-[88px] bg-[#f9df56] py-8">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="overflow-hidden rounded-[22px] bg-white/20">
              <PlaceholderImage src={data.payday?.image} alt="" label="Payday" className="h-[220px] w-full" />
            </div>
            <div className="text-black">
              <p className="text-[26px] font-extrabold leading-[1.05] sm:text-[34px]">
                {data.payday?.title ?? 'PAYDAY SALE NOW'}
              </p>
              <p className="mt-2 text-[10px] font-medium text-black/60">
                {data.payday?.text ??
                  'Spend minimal $100 get 30% off voucher code for your next purchase'}
              </p>
              <p className="mt-3 text-[10px] font-extrabold">{data.payday?.date ?? '1 June - 10 June 2021'}</p>
              <p className="mt-1 text-[10px] font-medium text-black/60">
                {data.payday?.hint ?? '*Terms & Conditions apply'}
              </p>
              <button
                type="button"
                className="mt-4 h-[32px] rounded-[10px] bg-black px-5 text-[10px] font-semibold text-white"
              >
                {data.payday?.cta ?? 'SHOP NOW'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="favourites" className="scroll-mt-[88px] bg-white pb-10 pt-8">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <p className="text-[14px] font-extrabold tracking-wide text-black">Young&apos;s Favourite</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {(data.favourites ?? []).slice(0, 2).map((it, idx) => (
              <ProductCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT4}
        expanded={expanded}
        brand={brand}
        shareSubtitle={data.hero?.subtitle ?? ''}
        reviewNameInputId="t4-review-name"
        reviewTextInputId="t4-review-text"
      />

      <section className="bg-white pb-12 pt-4">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div>
              <p className="text-[18px] font-extrabold leading-[1.05] text-black">
                {data.download?.title ?? 'DOWNLOAD APP & GET THE VOUCHER!'}
              </p>
              <p className="mt-2 max-w-[360px] text-[10px] font-medium text-black/45">
                {data.download?.text ?? 'Get 30% off for first transaction using our app.'}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="inline-flex h-[28px] items-center justify-center rounded-[10px] bg-black px-3 text-[10px] font-semibold text-white">
                  Google Play
                </div>
                <div className="inline-flex h-[28px] items-center justify-center rounded-[10px] bg-black px-3 text-[10px] font-semibold text-white">
                  App Store
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[260px]">
              <div className="overflow-hidden rounded-[22px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                <PlaceholderImage src={data.download?.image} alt="" label="App" className="h-[240px] w-full" />
              </div>
              <div aria-hidden className="absolute -left-4 bottom-6 size-[10px] rounded-full bg-[#ebd96b]" />
              <div aria-hidden className="absolute -right-4 top-8 size-[10px] rounded-full bg-[#ebd96b]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebd96b] py-10">
        <div className="mx-auto w-full max-w-[980px] px-5 text-center text-black">
          <p className="mx-auto max-w-[620px] text-[18px] font-extrabold sm:text-[22px]">
            {data.join?.title ?? 'JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO'}
          </p>
          <p className="mt-2 text-[10px] font-medium text-black/60">
            {data.join?.subtitle ?? 'Type your email down below and be young wild generation'}
          </p>
          <div className="mx-auto mt-5 flex w-full max-w-[420px] overflow-hidden rounded-[12px] bg-white p-1 ring-1 ring-black/10">
            <input
              className="h-[34px] flex-1 bg-transparent px-4 text-[10px] outline-none"
              placeholder="Add your email here"
            />
            <button type="button" className="h-[34px] rounded-[10px] bg-black px-5 text-[10px] font-semibold text-white">
              SEND
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 text-white">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <p className="text-[14px] font-extrabold">{data.footer?.brand ?? 'FASHION'}</p>
              <p className="mt-3 max-w-[240px] text-[10px] font-medium text-white/70">
                {data.footer?.text ?? 'Complete your style with awesome clothes from us.'}
              </p>
              <div className="mt-4 flex items-center gap-2">
                {['f', 'ig', 'in', 'x'].map((s) => (
                  <div
                    key={s}
                    className="grid size-[22px] place-items-center rounded-[6px] bg-white/10 text-[10px] font-bold text-white/80"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {(data.footer?.columns ?? []).slice(0, 3).map((c, idx) => (
              <div key={idx}>
                <p className="text-[11px] font-extrabold text-white">{c?.title}</p>
                <div className="mt-3 grid gap-2 text-[10px] font-medium text-white/70">
                  {(c?.links ?? []).map((t) => (
                    <a key={t} href="#" className="hover:text-white">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[10px] font-medium text-white/50">
            {data.footer?.copyright ?? '© 2026. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})
