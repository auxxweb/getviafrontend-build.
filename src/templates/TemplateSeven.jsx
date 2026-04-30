import { memo } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT7 } from '../components/sections/expandable/themePresets.js'

function PrimaryButton({ children }) {
  return (
    <button
      type="button"
      className="h-[30px] rounded-[10px] bg-[#b40f0f] px-5 text-[10px] font-semibold text-white shadow-[0px_12px_26px_rgba(180,15,15,0.20)]"
    >
      {children}
    </button>
  )
}

function OutlineButton({ children }) {
  return (
    <button
      type="button"
      className="h-[30px] rounded-[10px] border border-black/10 bg-white px-5 text-[10px] font-semibold text-black/60"
    >
      {children}
    </button>
  )
}

function DishChip({ item }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="size-[44px] overflow-hidden rounded-full bg-white ring-2 ring-white shadow-[0px_12px_26px_rgba(0,0,0,0.10)]">
        <PlaceholderImage src={item?.image} alt="" label="Dish" className="size-full" />
      </div>
      <p className="text-[9px] font-semibold text-white/70">{item?.name}</p>
    </div>
  )
}

function LocationCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="p-3">
        <div className="overflow-hidden rounded-[14px]">
          <PlaceholderImage src={item?.image} alt="" label="Location" className="h-[120px] w-full" />
        </div>
        <p className="mt-3 text-[11px] font-extrabold text-[#1a1c19]">{item?.title}</p>
        <p className="mt-2 text-[10px] font-medium leading-[15px] text-black/45">{item?.text}</p>
        <div className="mt-3 flex items-center gap-3">
          <PrimaryButton>{item?.cta ?? 'View Menu'}</PrimaryButton>
          <p className="text-[9px] font-semibold text-black/45">{item?.meta ?? ''}</p>
        </div>
      </div>
    </div>
  )
}

function MediaCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <div className="p-3">
        <div className="overflow-hidden rounded-[14px]">
          <PlaceholderImage src={item?.image} alt="" label="Media" className="h-[120px] w-full" />
        </div>
        <p className="mt-3 text-[11px] font-extrabold text-[#1a1c19]">{item?.title}</p>
        <p className="mt-2 text-[10px] font-medium leading-[15px] text-black/45">{item?.text}</p>
      </div>
    </div>
  )
}

export const TemplateSeven = memo(function TemplateSeven({ businessData }) {
  const data = businessData?.template7 ?? {}
  const expanded = getExpandedData(businessData, { block: data })
  const brand = data.brand ?? 'Best Food'

  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Menu', href: '#menuStrip' },
      { label: 'Special', href: '#highlight' },
      { label: 'Order', href: '#menuPanel' },
      { label: 'Locations', href: '#locations' },
      { label: 'Press', href: '#media' },
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

  const heroTitleLines = String(data.hero?.title ?? 'Discover Restaurant\n& Delicious Food').split('\n')
  const highlightLines = String(data.highlight?.title ?? 'A moment of the\ngreat wings').split('\n')
  const quoteLines = String(
    data.quoteBanner?.title ??
      'An award-winning experience for family\nand special occasions alike',
  ).split('\n')

  return (
    <div className="min-h-screen scroll-smooth bg-white pb-24">
      <ExpandableTopNav
        brand={brand}
        nav={nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT7}
        showHeaderLogin={false}
      />

      <section id="top" className="scroll-mt-[88px] bg-white pb-6">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <div className="grid items-center gap-6 sm:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[9px] font-semibold text-black/35">{data.hero?.eyebrow ?? 'ENJOY GREAT FOOD'}</p>
              <h1 className="mt-2 text-[24px] font-extrabold leading-[1.1] text-[#1a1c19] sm:text-[30px]">
                {heroTitleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < heroTitleLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="mt-3 max-w-[420px] text-[10px] font-medium leading-[16px] text-black/45">
                {data.hero?.subtitle ?? 'Best food delivered to your door with fresh ingredients.'}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <PrimaryButton>{data.hero?.ctaPrimary ?? 'Order Now'}</PrimaryButton>
                <OutlineButton>{data.hero?.ctaSecondary ?? 'Reservation'}</OutlineButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <PlaceholderImage src={data.hero?.image} alt="" label="Burger" className="h-[200px] w-full sm:h-[240px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="menuStrip" className="scroll-mt-[88px] bg-black py-6">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <p className="text-center text-[12px] font-extrabold text-white/90">{data.stripTitle ?? 'Our Best Food Menu'}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
            {(data.menuChips ?? []).slice(0, 5).map((it, idx) => (
              <DishChip key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="highlight" className="scroll-mt-[88px] bg-white py-10">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <div className="grid gap-6 rounded-[18px] bg-[#f4f1ee] p-6 shadow-[0px_18px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="overflow-hidden rounded-[16px] bg-white">
              <PlaceholderImage src={data.highlight?.image} alt="" label="Wings" className="h-[180px] w-full" />
            </div>
            <div>
              <p className="text-[9px] font-semibold text-black/35">{data.highlight?.eyebrow ?? 'SPECIAL'}</p>
              <h2 className="mt-2 text-[16px] font-extrabold text-[#1a1c19] sm:text-[18px]">
                {highlightLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < highlightLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="mt-3 text-[10px] font-medium leading-[16px] text-black/45">
                {data.highlight?.text ?? 'Crispy, spicy and full of flavor. Try our signature wings today.'}
              </p>
              <div className="mt-4">
                <PrimaryButton>{data.highlight?.cta ?? 'Order Now'}</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black/80 py-12">
        <div className="absolute inset-0 opacity-25">
          <PlaceholderImage src={data.quoteBanner?.image} alt="" label="Banner" className="h-full w-full" />
        </div>
        <div className="relative mx-auto w-full max-w-[1000px] px-5 text-center text-white">
          <p className="text-[14px] font-extrabold">
            {quoteLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < quoteLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
          <p className="mt-2 text-[10px] font-medium text-white/70">{data.quoteBanner?.subtitle ?? 'Make Food, Not War'}</p>
        </div>
      </section>

      <section id="menuPanel" className="scroll-mt-[88px] bg-white py-10">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <div className="grid gap-6 rounded-[18px] bg-[#f7f2ee] p-6 ring-1 ring-black/5 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
            <div className="overflow-hidden rounded-[16px] bg-white">
              <PlaceholderImage src={data.menuPanel?.image} alt="" label="Menu panel" className="h-[200px] w-full" />
            </div>
            <div>
              <p className="text-[12px] font-extrabold text-[#1a1c19]">{data.menuPanel?.title ?? 'Make Food, Not War'}</p>
              <div className="mt-4 grid gap-3">
                {(data.menuPanel?.items ?? []).slice(0, 5).map((it, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 rounded-[12px] bg-white p-3 ring-1 ring-black/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-[34px] overflow-hidden rounded-full bg-black/10">
                        <PlaceholderImage src={it?.image} alt="" label="Item" className="size-full" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-[#1a1c19]">{it?.name}</p>
                        <p className="mt-1 text-[9px] font-medium text-black/35">{it?.meta}</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-extrabold text-[#b40f0f]">{it?.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <PrimaryButton>{data.menuPanel?.cta ?? 'Order Now'}</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="scroll-mt-[88px] bg-white pb-10">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <p className="text-center text-[14px] font-extrabold text-[#1a1c19]">{data.locationsTitle ?? 'Our Locations'}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(data.locations ?? []).slice(0, 3).map((it, idx) => (
              <LocationCard key={idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="scroll-mt-[88px] bg-white py-10">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <p className="text-center text-[12px] font-extrabold text-[#1a1c19]">{data.mediaTitle ?? 'Local Media'}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(data.media ?? []).slice(0, 3).map((m, idx) => (
              <MediaCard key={idx} item={m} />
            ))}
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT7}
        expanded={expanded}
        brand={brand}
        shareSubtitle={data.hero?.subtitle ?? ''}
        reviewNameInputId="t7-review-name"
        reviewTextInputId="t7-review-text"
      />

      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1000px] px-5 py-10">
          <p className="text-[12px] font-extrabold text-[#b40f0f]">{brand}</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-4">
            {(data.footer?.columns ?? []).slice(0, 4).map((c, idx) => (
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
          <p className="mt-8 text-center text-[10px] font-medium text-white/50">
            {data.footer?.copyright ?? '© 2026. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})
