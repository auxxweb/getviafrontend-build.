import { memo } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { cn } from '../utils/cn.js'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT3 } from '../components/sections/expandable/themePresets.js'

function SocialDot({ label }) {
  return (
    <div className="grid size-[16px] place-items-center rounded-full bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <span className="text-[9px] font-bold text-black/70">{label}</span>
    </div>
  )
}

function PillButton({ active, children }) {
  return (
    <button
      type="button"
      className={cn(
        'h-[28px] rounded-[999px] px-4 text-[10px] font-semibold',
        active ? 'bg-[#b8903a] text-white' : 'bg-white text-black/60 ring-1 ring-black/10',
      )}
    >
      {children}
    </button>
  )
}

function FoodCard({ item }) {
  return (
    <div className="rounded-[16px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="p-3">
        <div className="overflow-hidden rounded-[14px]">
          <PlaceholderImage src={item?.image} alt="" label="Food" className="h-[150px] w-full" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-[11px] font-extrabold text-[#1a1c19]">{item?.name}</p>
          <p className="text-[10px] font-semibold text-black/55">{item?.price}</p>
        </div>
        <p className="mt-1 text-[10px] font-medium text-black/35">{item?.meta}</p>
        <button
          type="button"
          className="mt-3 h-[28px] w-full rounded-[10px] bg-[#f3ece2] text-[10px] font-semibold text-black/55"
        >
          View
        </button>
      </div>
    </div>
  )
}

function FeatureCard({ item }) {
  return (
    <div className="rounded-[16px] bg-white p-4 shadow-[0px_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <div className="mx-auto grid size-[34px] place-items-center rounded-full bg-[#f6efe6] text-[#b8903a]">
        <span className="text-[12px] font-extrabold">{item?.icon ?? '★'}</span>
      </div>
      <p className="mt-3 text-center text-[11px] font-extrabold text-[#1a1c19]">{item?.title}</p>
      <p className="mt-2 text-center text-[10px] font-medium leading-[15px] text-black/45">{item?.text}</p>
    </div>
  )
}

export const TemplateThree = memo(function TemplateThree({ businessData }) {
  const data = businessData?.template3 ?? {}
  const expanded = getExpandedData(businessData, { block: data })
  const brandLabel = data.footer?.brand ?? 'Restaurant'
  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'Menu', href: '#menu' },
      { label: 'Why us', href: '#why' },
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
    <div className="min-h-screen scroll-smooth bg-[#fbefe6] pb-24">
      <ExpandableTopNav
        brand={brandLabel}
        nav={nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT3}
        showHeaderLogin={false}
      />

      <section id="top" className="scroll-mt-[88px] bg-[#fbefe6] pb-10 pt-10">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-[34px] font-extrabold leading-[1.05] text-[#1a1c19] sm:text-[44px]">
                <span className="block">{data.hero?.titleTop ?? 'We Serve'}</span>
                <span className="block text-[#d59a2a] italic">
                  {data.hero?.titleAccent ?? 'Delicious Food'}
                </span>
              </h1>
              <p className="mt-4 max-w-[420px] text-[11px] font-medium leading-[17px] text-black/45">
                {data.hero?.subtitle ??
                  'Indulge in a culinary journey where every plate is a canvas of sensory delight.'}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <PillButton active>{data.hero?.ctaPrimary ?? 'Order Now'}</PillButton>
                <PillButton>{data.hero?.ctaSecondary ?? 'Explore Menu'}</PillButton>
              </div>

              <div className="mt-4 flex items-center gap-2">
                {['f', 'ig', 'in', 'tw'].map((s) => (
                  <SocialDot key={s} label={s} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <PlaceholderImage
                  src={data.hero?.image}
                  alt=""
                  label="Hero food"
                  className="h-[220px] w-full sm:h-[240px]"
                />
              </div>
              <div className="absolute -right-2 top-2 grid size-[28px] place-items-center rounded-full bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <span className="text-[10px] font-bold">★</span>
              </div>
              <div className="absolute -left-2 bottom-2 grid size-[28px] place-items-center rounded-full bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <span className="text-[10px] font-bold">☺</span>
              </div>
            </div>
          </div>

          <div id="philosophy" className="mt-10 grid scroll-mt-[88px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <PlaceholderImage
                src={data.philosophy?.image}
                alt=""
                label="Dining"
                className="h-[180px] w-full sm:h-[200px]"
              />
            </div>
            <div>
              <p className="text-[9px] font-extrabold tracking-[0.18em] text-black/35">
                {data.philosophy?.eyebrow ?? 'OUR PHILOSOPHY'}
              </p>
              <h2 className="mt-2 text-[20px] font-extrabold leading-[1.1] text-[#1a1c19] sm:text-[26px]">
                {data.philosophy?.title ?? 'Experience the Art of Fine Dining'}
              </h2>
              <p className="mt-3 max-w-[520px] text-[10px] font-medium leading-[16px] text-black/45">
                {data.philosophy?.text ??
                  'At Restaurant, we believe food is more than sustenance—it’s a symphony of flavor, texture and visual artistry.'}
              </p>
              <button
                type="button"
                className="mt-4 h-[28px] rounded-[999px] bg-[#3a59c7] px-5 text-[10px] font-semibold text-white shadow-[0px_10px_24px_rgba(58,89,199,0.25)]"
              >
                {data.philosophy?.cta ?? 'View More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-[88px] bg-[#fbefe6] pb-10">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <h3 className="text-center text-[20px] font-extrabold text-[#1a1c19] sm:text-[24px]">
            {data.popular?.title ?? 'Most Popular Food'}
          </h3>
          <p className="mt-2 text-center text-[10px] font-medium text-black/35">
            {data.popular?.subtitle ?? 'Selected by our experts, loved by all.'}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(data.popular?.items ?? []).slice(0, 3).map((it, idx) => (
              <FoodCard key={it?.id ?? idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-[88px] bg-[#fbefe6] pb-10">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <h3 className="text-center text-[20px] font-extrabold text-[#1a1c19] sm:text-[24px]">
            {data.why?.title ?? 'Why choose our Food'}
          </h3>
          <p className="mt-2 text-center text-[10px] font-medium text-black/35">
            {data.why?.subtitle ?? 'Because we keep it fresh and delicious.'}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(data.why?.items ?? []).slice(0, 3).map((it, idx) => (
              <FeatureCard key={idx} item={it} />
            ))}
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT3}
        expanded={expanded}
        brand={brandLabel}
        shareSubtitle={data.hero?.subtitle ?? ''}
        reviewNameInputId="t3-review-name"
        reviewTextInputId="t3-review-text"
      />

      <footer className="bg-[#f6efe6]">
        <div className="mx-auto w-full max-w-[980px] px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <p className="text-[12px] font-extrabold text-[#1a1c19]">{data.footer?.brand ?? 'Pixelspark'}</p>
              <p className="mt-3 text-[10px] font-medium leading-[15px] text-black/45">
                {data.footer?.brandText ?? 'Delivering the best experience through great food.'}
              </p>
            </div>
            {(data.footer?.columns ?? []).slice(0, 3).map((c, idx) => (
              <div key={idx}>
                <p className="text-[11px] font-extrabold text-[#1a1c19]">{c?.title}</p>
                <div className="mt-3 grid gap-2 text-[10px] font-medium text-black/45">
                  {(c?.links ?? []).map((t) => (
                    <a key={t} href="#" className="hover:text-black/70">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-[11px] font-extrabold text-[#1a1c19]">SUBSCRIBE US</p>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="h-[30px] w-full rounded-[999px] border border-black/10 bg-white px-4 text-[10px] outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="h-[30px] shrink-0 rounded-[999px] bg-[#b8903a] px-4 text-[10px] font-semibold text-white"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-[10px] font-medium text-black/35">
            <p>{data.footer?.copyright ?? '© 2026. All rights reserved.'}</p>
            <div className="flex items-center gap-4">
              {(data.footer?.bottomLinks ?? ['Privacy Policy', 'Terms', 'Contact']).map((t) => (
                <a key={t} href="#" className="hover:text-black/55">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
})
