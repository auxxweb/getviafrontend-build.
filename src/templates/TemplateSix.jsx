import { memo, useState } from 'react'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { cn } from '../utils/cn.js'
import { ExpandableSections, ExpandableTopNav } from '../components/sections/expandable/ExpandableLayout.jsx'
import { buildStandardExpandedNav, getExpandedData } from '../components/sections/expandable/getExpandedData.js'
import { expandableThemeT6 } from '../components/sections/expandable/themePresets.js'

function ServiceCard({ item }) {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="p-3">
        <div className="overflow-hidden rounded-[14px]">
          <PlaceholderImage src={item?.image} alt="" label="Service" className="h-[150px] w-full" />
        </div>
        <p className="mt-3 text-[11px] font-extrabold text-[#1a1c19]">{item?.title}</p>
        <p className="mt-2 text-[10px] font-medium leading-[15px] text-black/45">{item?.text}</p>
      </div>
    </div>
  )
}

export const TemplateSix = memo(function TemplateSix({ businessData }) {
  const data = businessData?.template6 ?? {}
  const expanded = getExpandedData(businessData, { block: data })
  const brand = data.brand ?? 'ElegantInteriors'
  const [tIdx, setTIdx] = useState(0)

  const nav =
    expanded.navItems ??
    [
      { label: 'Home', href: '#top' },
      { label: 'Services', href: '#services' },
      { label: 'Demo', href: '#demo' },
      { label: 'Start', href: '#cta' },
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

  const heroTitle = data.hero?.title ?? 'Sophisticated Designs\nfor Modern Living'
  const heroLines = String(heroTitle).split('\n')

  return (
    <div className="min-h-screen scroll-smooth bg-[#fbf7f1] pb-24">
      <ExpandableTopNav
        brand={brand}
        nav={nav}
        headerLogin={expanded.headerLogin}
        headerSignup={expanded.headerSignup}
        headerLoginHref={expanded.headerLoginHref}
        headerSignupHref={expanded.headerSignupHref}
        theme={expandableThemeT6}
        showHeaderLogin={false}
      />

      <section id="top" className="scroll-mt-[88px] bg-[#fbf7f1] pb-10 pt-4">
        <div className="mx-auto w-full max-w-[980px] px-5 text-center">
          <h1 className="text-[22px] font-extrabold leading-[1.1] text-[#1a1c19] sm:text-[28px]">
            {heroLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < heroLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-3 max-w-[520px] text-[10px] font-medium leading-[16px] text-black/45">
            {data.hero?.subtitle ??
              'Transform your space with premium interior design solutions crafted to your lifestyle.'}
          </p>
          <button
            type="button"
            className="mt-4 h-[30px] rounded-[999px] bg-[#b8903a] px-5 text-[10px] font-semibold text-white shadow-[0px_12px_26px_rgba(184,144,58,0.25)]"
          >
            {data.hero?.cta ?? 'Learn More'}
          </button>

          <div className="relative mx-auto mt-8 grid w-full max-w-[720px] gap-3 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <PlaceholderImage src={data.hero?.imageLeft} alt="" label="Interior" className="h-[170px] w-full" />
            </div>
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5 sm:-translate-y-6">
              <PlaceholderImage src={data.hero?.imageRight} alt="" label="Interior" className="h-[170px] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-[88px] bg-[#fbf7f1] pb-10">
        <div className="mx-auto w-full max-w-[980px] px-5 text-center">
          <p className="text-[12px] font-extrabold text-[#1a1c19]">{data.servicesTitle ?? 'Our Services'}</p>
          <p className="mx-auto mt-2 max-w-[520px] text-[10px] font-medium text-black/45">
            {data.servicesSubtitle ?? 'Curated services designed for modern living.'}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(data.services ?? []).slice(0, 3).map((s, idx) => (
              <ServiceCard key={idx} item={s} />
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-[88px] bg-[#fbf7f1] pb-10">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <p className="text-center text-[12px] font-extrabold text-[#1a1c19]">
            {data.demoTitle ?? 'Watch Our Demo for Confirmation'}
          </p>

          <div className="mt-6 grid gap-4 rounded-[18px] bg-white p-4 shadow-[0px_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:grid-cols-[0.9fr_1.1fr] sm:items-start sm:p-6">
            <div className="relative overflow-hidden rounded-[16px] bg-black/5">
              <PlaceholderImage src={data.demo?.image} alt="" label="Video" className="h-[170px] w-full" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-[46px] place-items-center rounded-full bg-white/80 shadow-[0px_12px_26px_rgba(0,0,0,0.10)]">
                  <div className="ml-1 size-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-black/70" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-[#1a1c19]">{data.demo?.title ?? 'facebook'}</p>
              <p className="mt-2 text-[10px] font-medium leading-[16px] text-black/45">
                {data.demo?.text ??
                  'See how we approach modern interiors with clean lines, warm textures, and functional layouts.'}
              </p>
              <div className="mt-4 flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setTIdx(i)}
                    className={cn('size-[6px] rounded-full', i === tIdx ? 'bg-black/50' : 'bg-black/15')}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="scroll-mt-[88px] bg-[#fbf7f1] pb-12">
        <div className="mx-auto w-full max-w-[980px] px-5">
          <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div>
              <p className="text-[12px] font-extrabold text-[#1a1c19]">
                {data.cta?.title ?? 'Ready to start your design journey?'}
              </p>
              <p className="mt-2 text-[10px] font-medium leading-[16px] text-black/45">
                {data.cta?.text ?? 'Get in touch with our designers and begin your transformation.'}
              </p>
              <button
                type="button"
                className="mt-4 h-[30px] rounded-[999px] bg-[#4b4b79] px-5 text-[10px] font-semibold text-white"
              >
                {data.cta?.button ?? 'Get Started'}
              </button>
            </div>
            <div className="relative">
              <div className="absolute right-0 top-0 hidden h-[220px] w-[420px] rounded-bl-[140px] bg-[#e6d6bf]/70 sm:block" />
              <div className="relative overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                <PlaceholderImage src={data.cta?.image} alt="" label="Chair" className="h-[200px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpandableSections
        theme={expandableThemeT6}
        expanded={expanded}
        brand={brand}
        shareSubtitle={data.hero?.subtitle ?? ''}
        reviewNameInputId="t6-review-name"
        reviewTextInputId="t6-review-text"
      />

      <footer className="bg-white">
        <div className="mx-auto w-full max-w-[980px] px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <p className="text-[11px] font-extrabold text-[#1a1c19]">{brand}</p>
              <p className="mt-3 max-w-[240px] text-[10px] font-medium leading-[15px] text-black/45">
                {data.footer?.text ?? 'Modern interior solutions for homes and offices.'}
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
              <p className="text-[11px] font-extrabold text-[#1a1c19]">Subscribe Us</p>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="h-[30px] w-full rounded-[999px] border border-black/10 bg-[#fbf7f1] px-4 text-[10px] outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="h-[30px] shrink-0 rounded-[999px] bg-[#b8903a] px-4 text-[10px] font-semibold text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-[10px] font-medium text-black/35">
            {data.footer?.copyright ?? '© 2026. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
})
