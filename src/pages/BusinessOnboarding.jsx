import { memo, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'
import { AiGenerateModal } from '../components/ui/AiGenerateModal.jsx'
import { cn } from '../utils/cn.js'

const steps = [
  { id: 'business-details', label: 'Business Details' },
  { id: 'contact-details', label: 'Add Contact Details' },
  { id: 'categories', label: 'Select Business Categories' },
  { id: 'timing', label: 'Business Timing' },
  { id: 'description', label: 'Business Description' },
  { id: 'landing', label: 'Landing Page Details' },
  { id: 'core', label: 'Core Service Details' },
  { id: 'products', label: 'Product/Service Catalogue' },
  { id: 'gallery', label: 'Gallery' },
]

const imgLogoBlackT11 = 'https://www.figma.com/api/mcp/asset/3a466534-e84f-4c81-acc3-ea5f4b647742'
const imgEllipse1416 = 'https://www.figma.com/api/mcp/asset/2eef46fb-2a8c-4479-81b1-7307745e0704'
const imgDownload27RemovebgPreview1 = 'https://www.figma.com/api/mcp/asset/8789f7d2-3346-44ec-8171-fd387d574d91'
const imgFlatColorIconsPlus = 'https://www.figma.com/api/mcp/asset/bf860b5c-8549-477c-859c-6ab807d1e036'

function StepTitle({ title, accent }) {
  return (
    <h1 className="text-center font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#006e12] sm:text-[32px] sm:leading-[38px] lg:text-[36px] lg:leading-[44px]">
      {accent ? (
        <>
          {title.split(accent)[0]}
          <span className="text-[#b3e718]">{accent}</span>
          {title.split(accent)[1] ?? ''}
        </>
      ) : (
        title
      )}
    </h1>
  )
}

function SaveNext({ onClick, label = 'Save & Next', disabled }) {
  return (
    <Button
      unstyled
      className={cn(
        'h-[44px] w-full rounded-[16px] bg-[#006e12] px-5 text-[14px] font-semibold text-white sm:h-[48px] sm:text-[15px] lg:h-[52px] lg:text-[16px]',
        disabled ? 'opacity-60' : '',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}

function Rail({ activeId }) {
  const activeIndex = Math.max(
    0,
    steps.findIndex((s) => s.id === activeId),
  )
  return (
    <aside className="hidden w-[558px] bg-[#fbf9ee] lg:block">
      <div className="px-[96px] pt-[51px]">
        <img
          src={imgLogoBlackT11}
          alt="Getvia"
          className="h-[26px] w-auto object-contain"
          loading="eager"
        />
      </div>

      <div className="px-[96px] pt-[90px]">
        <div className="grid gap-5">
          <div className="flex items-center gap-4">
            <div className="grid size-[23px] place-items-center rounded-full bg-[#b3e718] text-white">
              <span className="text-[14px] font-bold leading-none">✓</span>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] font-semibold text-black">
              Authentication Details
            </p>
          </div>

          {steps.map((s, idx) => {
            const done = idx < activeIndex
            const active = s.id === activeId
            return (
              <div key={s.id} className="flex items-center gap-4">
                <div
                  className={cn(
                    'grid size-[23px] place-items-center rounded-full',
                    active ? 'bg-[#b3e718]' : done ? 'bg-[#b3e718]/70' : 'bg-[#8bc34a]',
                  )}
                >
                  {done ? (
                    <span className="text-[14px] font-bold leading-none text-white">
                      ✓
                    </span>
                  ) : (
                    <span className="text-[12px] font-bold leading-none text-white">
                      {idx + 1}
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "font-['Inter:Semi_Bold',sans-serif] text-[20px] font-semibold",
                    active ? 'text-black' : 'text-black',
                  )}
                >
                  {s.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

function MobileProgress({ activeId }) {
  const activeIndex = Math.max(
    0,
    steps.findIndex((s) => s.id === activeId),
  )
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <img src="/getvia-logo.png" alt="Getvia" className="h-[24px] w-auto" />
        <div className="text-[12px] font-semibold text-black/70">
          Step {activeIndex + 1} / {steps.length}
        </div>
      </div>
      <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full bg-[#006e12]"
          style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
        />
      </div>
      <p className="mt-3 text-[14px] font-semibold text-[#003314]">
        {steps[activeIndex]?.label}
      </p>
    </div>
  )
}

function CardShell({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute inset-0 rounded-[50px] bg-[#fbf9ee] blur-[2px]" aria-hidden />
      <div className="relative rounded-[50px] border border-black/10 bg-[#fbf9ee] p-6 sm:p-10">
        {children}
      </div>
    </div>
  )
}

function countWords(s) {
  return (s ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function clampWords(value, limit) {
  const parts = (value ?? '').trim().split(/\s+/).filter(Boolean)
  if (parts.length <= limit) return value
  return parts.slice(0, limit).join(' ')
}

function fakeGenerate(stepId, prompt, ctx) {
  const name = ctx?.businessName?.trim() ? ctx.businessName.trim() : 'your business'
  const city = ctx?.city?.trim() ? ctx.city.trim() : 'your city'

  if (stepId === 'description') {
    return `About ${name}\n\n${prompt}\n\nWe proudly serve customers in ${city}. Our focus is quality, transparency, and a great customer experience. Contact us to learn more.`
  }
  if (stepId === 'landing') {
    return `Welcome to ${name}.\n\n${prompt}\n\nWe’re based in ${city}. Explore our services and reach out anytime.`
  }
  if (stepId === 'core') {
    return `Core services for ${name}:\n- ${prompt}\n- Reliable support\n- Great results\n\nServing ${city} with care and consistency.`
  }
  if (stepId === 'products') {
    return `Catalogue highlights for ${name}:\n- ${prompt}\n- Premium options\n- Custom packages\n\nAvailable in ${city}.`
  }
  if (stepId === 'contact-details') {
    return `Suggested contact block for ${name} in ${city}: address line, phone, WhatsApp, and email. ${prompt}`
  }
  return `${prompt}\n\nGenerated for ${name}.`
}

function SectionNumber({ n }) {
  return (
    <span className="grid size-[14px] place-items-center rounded-full bg-[#006e12] text-[10px] font-bold leading-none text-white">
      {n}
    </span>
  )
}

function UploadCard({ label, helper, onPick, previewUrl }) {
  return (
    <button
      type="button"
      onClick={onPick}
      className="flex w-full items-center gap-4 rounded-[10px] bg-white px-4 py-4 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
    >
      <div className="grid size-[34px] place-items-center rounded-[8px] bg-[#eaf4ee] text-[#006e12] ring-1 ring-[#006e12]/10">
        {/* image + plus icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 5.5C4 4.67157 4.67157 4 5.5 4H15.5C16.3284 4 17 4.67157 17 5.5V6.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 8.5C4 7.67157 4.67157 7 5.5 7H18.5C19.3284 7 20 7.67157 20 8.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9.2 13.3L7.2 15.6C6.9 15.95 7.15 16.5 7.62 16.5H16.7C17.16 16.5 17.42 15.96 17.13 15.6L14.8 12.7C14.6 12.45 14.22 12.45 14.02 12.7L12.6 14.5C12.4 14.75 12.02 14.75 11.82 14.5L10.0 12.1C9.8 11.85 9.41 11.85 9.2 12.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 4V9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.5 6.5H21.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex-1 text-left">
        <p className="text-[14px] font-semibold text-black">{label}</p>
        <p className="mt-0.5 text-[11px] font-medium text-black/50">{helper}</p>
      </div>

      {previewUrl ? (
        <div className="ml-2 hidden h-[44px] w-[68px] overflow-hidden rounded-[8px] ring-1 ring-black/10 sm:block">
          <img alt="" src={previewUrl} className="size-full object-cover" />
        </div>
      ) : null}
    </button>
  )
}

export const BusinessOnboarding = memo(function BusinessOnboarding() {
  const params = useParams()
  const navigate = useNavigate()
  const activeId =
    params.stepId && steps.some((s) => s.id === params.stepId) ? params.stepId : steps[0].id
  const activeIndex = Math.max(0, steps.findIndex((s) => s.id === activeId))

  const bannerInputRef = useRef(null)
  const welcomeInputRef = useRef(null)
  const coreImageInputRefs = useRef({})
  const productsImageInputRefs = useRef({})

  const [form, setForm] = useState({
    businessName: '',
    // Contact details (screen: contact-details)
    contactName: '',
    buildingName: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    phones: ['', '', ''],
    email: '',
    website: '',
    categories: [],
    workingDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    opening: '09:00 AM',
    closing: '10:00 PM',
    description: '',
    landingTitle: '',
    landingSubtitle: '',
    landingCtaLabel: '',
    landingCtaUrl: '',
    landingAbout: '',
    landingPrimaryColor: '#E05A00',
    landingSecondaryColor: '#1E73BE',
    landingBannerTitle: '',
    landingBannerDescription: '',
    landingWelcomeTitle: '',
    landingWelcomeDescription: '',
    landingBannerImageUrl: '',
    landingWelcomeImageUrl: '',
    corePageTitle: '',
    corePageDescription: '',
    coreCards: [
      {
        id: 'core-1',
        title: '',
        description: '',
        links: '',
        imageUrl: '',
      },
    ],
    productsPageTitle: '',
    productsPageDescription: '',
    productsCards: [
      {
        id: 'prod-1',
        title: '',
        description: '',
        priceOrLabel: '',
        links: '',
        imageUrl: '',
      },
    ],
    coreService: '',
    products: '',
  })

  const [ai, setAi] = useState({ open: false, stepId: '', target: '' })
  const [aiPreview, setAiPreview] = useState({})

  const openAi = (stepId, target) => setAi({ open: true, stepId, target })
  const closeAi = () => setAi({ open: false, stepId: '', target: '' })

  const next = () => {
    const nextStep = steps[activeIndex + 1]
    if (nextStep) navigate(`/auth/onboarding/${nextStep.id}`)
    else navigate('/auth/plans')
  }

  const back = () => {
    const prevStep = steps[activeIndex - 1]
    if (prevStep) navigate(`/auth/onboarding/${prevStep.id}`)
  }

  const heading = useMemo(() => {
    if (activeId === 'business-details') return { title: 'Enter Your Business Details', accent: 'Business' }
    if (activeId === 'timing') return { title: 'Business Timing', accent: 'Timing' }
    if (activeId === 'landing') return { title: 'Landing Page Details', accent: 'Landing' }
    if (activeId === 'core') return { title: 'Core Services Details', accent: 'Services' }
    if (activeId === 'products')
      return { title: 'Product/Service Catalogue', accent: 'Catalogue' }
    if (activeId === 'gallery') return { title: 'Gallery Details', accent: 'Gallery' }
    return { title: steps[activeIndex]?.label ?? 'Business Details' }
  }, [activeId, activeIndex])

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <Rail activeId={activeId} />

        <main className="flex-1">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-8 sm:py-10 lg:px-10">
            <MobileProgress activeId={activeId} />

            <div className="mt-8">
              <StepTitle title={heading.title} accent={heading.accent} />
              {activeId === 'timing' ? (
                <p className="mt-2 text-center font-['Inter:Extra_Light',sans-serif] text-[14px] font-extralight text-black/70">
                  Select your availability for customers
                </p>
              ) : activeId === 'landing' || activeId === 'core' ? (
                <p className="mt-2 text-center font-['Inter:Extra_Light',sans-serif] text-[12px] font-extralight text-black/40">
                  Customize your landing page content and appearance.
                </p>
              ) : null}
            </div>

            <div className="mt-8">
              <CardShell>
                {/* AI button + lightweight preview (every step) */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-[200px]">
                    {aiPreview?.[activeId] ? (
                      <p className="text-[12px] font-medium text-black/55">
                        Preview: {String(aiPreview[activeId]).slice(0, 80)}
                        {String(aiPreview[activeId]).length > 80 ? '…' : ''}
                      </p>
                    ) : (
                      <p className="text-[12px] font-medium text-black/40">
                        You can generate content with AI for this step.
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => openAi(activeId, 'primary')}
                    className="inline-flex h-[34px] items-center justify-center rounded-[10px] bg-[#006e12] px-4 text-[12px] font-semibold text-white"
                  >
                    Generate with AI
                  </button>
                </div>

                {activeId === 'business-details' ? (
                  <div className="grid gap-6">
                    <div className="mx-auto grid w-[200px] place-items-center">
                      <div className="relative size-[99px]">
                        <img alt="" src={imgEllipse1416} className="absolute inset-0 size-full" />
                        <div className="absolute left-[4px] top-[4px] size-[92px] overflow-hidden rounded-full">
                          <img
                            alt=""
                            src={imgDownload27RemovebgPreview1}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="absolute left-[66px] top-[66px] size-[24px]">
                          <img alt="" src={imgFlatColorIconsPlus} className="size-full" />
                        </div>
                      </div>
                      <p className="mt-2 text-[12px] font-semibold text-[#006e12]/90">
                        Add Business Logo
                      </p>
                    </div>

                    <Input
                      inputClassName="h-[64px] w-full rounded-[12px] border border-[#006e12]/10 bg-white/60 px-6 text-[16px] font-semibold text-[#006e12]/60 shadow-[1px_0px_8.8px_0px_rgba(0,0,0,0.25)] outline-none"
                      value={form.businessName}
                      onChange={(e) => setForm((f) => ({ ...f, businessName: e.target.value }))}
                      placeholder="Enter Your Business Name"
                    />

                    <div className="mx-auto w-full max-w-[360px]">
                      <SaveNext onClick={next} disabled={!form.businessName.trim()} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'contact-details' ? (
                  <div className="mx-auto w-full max-w-[520px] rounded-[18px] bg-[#fbf9ee]/55 p-4 ring-1 ring-black/5 sm:p-5">
                    <div className="grid gap-2">
                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.contactName}
                        onChange={(e) => setForm((f) => ({ ...f, contactName: e.target.value }))}
                        placeholder="Name"
                      />
                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.buildingName}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, buildingName: e.target.value }))
                        }
                        placeholder="Building Name"
                      />
                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.street}
                        onChange={(e) => setForm((f) => ({ ...f, street: e.target.value }))}
                        placeholder="Street"
                      />
                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.landmark}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, landmark: e.target.value }))
                        }
                        placeholder="LandMark"
                      />

                      <div className="grid gap-2 sm:grid-cols-2">
                        <Input
                          inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                          value={form.city}
                          onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                          placeholder="City"
                        />
                        <Input
                          inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                          value={form.state}
                          onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
                          placeholder="State"
                        />
                      </div>

                      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                        <Input
                          inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                          value={form.pincode}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, pincode: e.target.value }))
                          }
                          placeholder="Pincode"
                          inputMode="numeric"
                        />
                        <button
                          type="button"
                          className="inline-flex h-[30px] items-center justify-center gap-2 rounded-[6px] bg-[#006e12] px-4 text-[11px] font-semibold text-white"
                        >
                          <span className="grid size-[16px] place-items-center rounded-full bg-white/15">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                d="M12 5V19"
                                stroke="white"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M5 12H19"
                                stroke="white"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          Add Location
                        </button>
                      </div>

                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[44px_1fr] items-center gap-2"
                        >
                          <div className="grid h-[30px] place-items-center rounded-[6px] border border-[#e6efe6] bg-white text-[11px] font-semibold text-[#006e12]">
                            +91
                          </div>
                          <Input
                            inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                            value={form.phones[i] ?? ''}
                            onChange={(e) => {
                              const v = e.target.value
                              setForm((f) => {
                                const nextPhones = [...(f.phones ?? ['', '', ''])]
                                nextPhones[i] = v
                                return { ...f, phones: nextPhones }
                              })
                            }}
                            placeholder="Phone Number"
                            inputMode="numeric"
                          />
                        </div>
                      ))}

                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="Email"
                        type="email"
                      />
                      <Input
                        inputClassName="h-[30px] w-full rounded-[6px] border border-[#e6efe6] bg-white px-3 text-[11px] text-[#006e12] outline-none placeholder:text-[#006e12]/55"
                        value={form.website}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, website: e.target.value }))
                        }
                        placeholder="Website"
                      />
                    </div>

                    <div className="mt-5 flex justify-center">
                      <SaveNext onClick={next} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'categories' ? (
                  <div className="grid gap-4">
                    <p className="text-[14px] font-semibold text-black/70">
                      Pick categories (multi-select).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Dental Clinic',
                        'Ayurveda',
                        'Restaurant',
                        'Education',
                        'Grocery',
                        'Salon',
                      ].map((c) => {
                        const selected = form.categories.includes(c)
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                categories: selected
                                  ? f.categories.filter((x) => x !== c)
                                  : [...f.categories, c],
                              }))
                            }
                            className={cn(
                              'h-[44px] rounded-[12px] border px-4 text-[14px] font-semibold',
                              selected
                                ? 'border-[#006e12] bg-[#006e12] text-white'
                                : 'border-black/15 bg-white text-black',
                            )}
                          >
                            {c}
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <Button variant="ghost" size="lg" className="w-full" onClick={back}>
                        Back
                      </Button>
                      <SaveNext onClick={next} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'timing' ? (
                  <div className="grid gap-6">
                    <div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-black">
                        Select Working Days
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => {
                          const selected = form.workingDays.includes(d)
                          const weekend = d === 'Sat' || d === 'Sun'
                          return (
                            <button
                              key={d}
                              type="button"
                              onClick={() =>
                                setForm((f) => ({
                                  ...f,
                                  workingDays: selected
                                    ? f.workingDays.filter((x) => x !== d)
                                    : [...f.workingDays, d],
                                }))
                              }
                              className={cn(
                                'h-[42px] min-w-[64px] rounded-[10px] border px-3 text-[14px] font-medium',
                                selected
                                  ? 'border-[#006e12] bg-[#006e12] text-white'
                                  : weekend
                                    ? 'border-[rgba(166,208,44,0.24)] bg-white text-[#b3e718]'
                                    : 'border-[rgba(166,208,44,0.24)] bg-white text-[#b3e718]',
                              )}
                            >
                              {d}
                            </button>
                          )
                        })}
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-[13px]">
                        <input
                          type="checkbox"
                          checked={form.workingDays.length === 7}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              workingDays: e.target.checked
                                ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            }))
                          }
                          className="size-[16px] accent-[#006e12]"
                        />
                        <span className="text-[#006e12]">Select All</span>
                      </div>
                    </div>

                    <div>
                      <p className="font-['Inter:Medium',sans-serif] text-[16px] font-medium text-black">
                        Select Daily Timing
                      </p>
                      <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[13px] bg-white p-4 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.25)]">
                          <p className="text-[15px]">Opening Time</p>
                          <Input
                            inputClassName="mt-3 h-[50px] w-full rounded-[9px] border border-black/15 bg-white px-4 text-[16px] font-medium outline-none"
                            value={form.opening}
                            onChange={(e) => setForm((f) => ({ ...f, opening: e.target.value }))}
                          />
                        </div>
                        <div className="rounded-[13px] bg-white p-4 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.25)]">
                          <p className="text-[15px]">Closing Time</p>
                          <Input
                            inputClassName="mt-3 h-[50px] w-full rounded-[9px] border border-black/15 bg-white px-4 text-[16px] font-medium outline-none"
                            value={form.closing}
                            onChange={(e) => setForm((f) => ({ ...f, closing: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button variant="ghost" size="lg" className="w-full" onClick={back}>
                        Back
                      </Button>
                      <SaveNext onClick={next} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'landing' ? (
                  <div className="mx-auto w-full max-w-[610px]">
                    {/* 1) Color Theme */}
                    <div className="flex items-center gap-2">
                      <SectionNumber n={1} />
                      <p className="text-[12px] font-semibold text-[#006e12]">
                        Color Theme
                      </p>
                    </div>

                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[8px] bg-white px-4 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                        <p className="text-[10px] font-medium text-black/70">Primary Color</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="h-[10px] w-full rounded-full bg-black/10">
                            <div
                              className="h-[10px] w-[72%] rounded-full"
                              style={{ backgroundColor: form.landingPrimaryColor }}
                            />
                          </div>
                          <input
                            type="color"
                            value={form.landingPrimaryColor}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, landingPrimaryColor: e.target.value }))
                            }
                            className="h-[26px] w-[34px] cursor-pointer rounded-[6px] border border-black/10 bg-white p-0"
                            aria-label="Pick primary color"
                          />
                        </div>
                      </div>

                      <div className="rounded-[8px] bg-white px-4 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                        <p className="text-[10px] font-medium text-black/70">Secondary Color</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="h-[10px] w-full rounded-full bg-black/10">
                            <div
                              className="h-[10px] w-[72%] rounded-full"
                              style={{ backgroundColor: form.landingSecondaryColor }}
                            />
                          </div>
                          <input
                            type="color"
                            value={form.landingSecondaryColor}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, landingSecondaryColor: e.target.value }))
                            }
                            className="h-[26px] w-[34px] cursor-pointer rounded-[6px] border border-black/10 bg-white p-0"
                            aria-label="Pick secondary color"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 2) Landing Page Banner */}
                    <div className="mt-5 flex items-center gap-2">
                      <SectionNumber n={2} />
                      <p className="text-[12px] font-semibold text-[#006e12]">
                        Add Landing Page Banner
                      </p>
                    </div>

                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Title (8 Words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <input
                            value={form.landingBannerTitle}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                landingBannerTitle: clampWords(e.target.value, 8),
                              }))
                            }
                            placeholder="Enter attractive title"
                            className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.landingBannerTitle)}/8
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Description (50 words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <textarea
                            value={form.landingBannerDescription}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                landingBannerDescription: clampWords(e.target.value, 50),
                              }))
                            }
                            placeholder="Enter short description about your business...."
                            className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.landingBannerDescription)}/50
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="mb-1 text-[10px] font-medium text-black/70">
                        Banner Image
                      </p>
                      <input
                        ref={bannerInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          const url = URL.createObjectURL(file)
                          setForm((f) => ({ ...f, landingBannerImageUrl: url }))
                        }}
                      />
                      <UploadCard
                        label="Upload Banner Image"
                        helper="Recommended ratio 16 : 9"
                        previewUrl={form.landingBannerImageUrl}
                        onPick={() => bannerInputRef.current?.click()}
                      />
                    </div>

                    {/* 3) Welcome Part */}
                    <div className="mt-5 flex items-center gap-2">
                      <SectionNumber n={3} />
                      <p className="text-[12px] font-semibold text-[#006e12]">
                        Add Welcome Part
                      </p>
                    </div>

                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Title (8 Words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <input
                            value={form.landingWelcomeTitle}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                landingWelcomeTitle: clampWords(e.target.value, 8),
                              }))
                            }
                            placeholder="Enter welcome title"
                            className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.landingWelcomeTitle)}/8
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Description (50 words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <textarea
                            value={form.landingWelcomeDescription}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                landingWelcomeDescription: clampWords(e.target.value, 50),
                              }))
                            }
                            placeholder="Enter welcome description"
                            className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.landingWelcomeDescription)}/50
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="mb-1 text-[10px] font-medium text-black/70">
                        Welcome Image
                      </p>
                      <input
                        ref={welcomeInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          const url = URL.createObjectURL(file)
                          setForm((f) => ({ ...f, landingWelcomeImageUrl: url }))
                        }}
                      />
                      <UploadCard
                        label="Upload welcome Image"
                        helper="Recommended ratio 7 : 5"
                        previewUrl={form.landingWelcomeImageUrl}
                        onPick={() => welcomeInputRef.current?.click()}
                      />
                    </div>

                    <div className="mt-6 flex justify-center">
                      <SaveNext onClick={next} disabled={!form.landingBannerTitle.trim()} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'core' ? (
                  <div className="mx-auto w-full max-w-[610px]">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Title (8 Words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <input
                            value={form.corePageTitle}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                corePageTitle: clampWords(e.target.value, 10),
                              }))
                            }
                            placeholder="Enter attractive title"
                            className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.corePageTitle)}/10
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Description (50 words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <textarea
                            value={form.corePageDescription}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                corePageDescription: clampWords(e.target.value, 50),
                              }))
                            }
                            placeholder="Enter welcome description"
                            className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.corePageDescription)}/50
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-[12px] font-semibold text-[#006e12]">
                      Core Services Cards
                    </p>

                    <div className="mt-2 rounded-[12px] bg-white/40 p-3 ring-1 ring-black/5">
                      {(form.coreCards ?? []).map((card, idx) => (
                        <div key={card.id} className={idx === 0 ? '' : 'mt-4'}>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <p className="mb-1 text-[10px] font-medium text-black/70">
                                Title (8 Words)
                              </p>
                              <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                                <input
                                  value={card.title}
                                  onChange={(e) => {
                                    const v = clampWords(e.target.value, 10)
                                    setForm((f) => ({
                                      ...f,
                                      coreCards: f.coreCards.map((c) =>
                                        c.id === card.id ? { ...c, title: v } : c,
                                      ),
                                    }))
                                  }}
                                  placeholder="Enter attractive title"
                                  className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                                />
                                <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                                  {countWords(card.title)}/10
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="mb-1 text-[10px] font-medium text-black/70">
                                Description (50 words)
                              </p>
                              <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                                <textarea
                                  value={card.description}
                                  onChange={(e) => {
                                    const v = clampWords(e.target.value, 50)
                                    setForm((f) => ({
                                      ...f,
                                      coreCards: f.coreCards.map((c) =>
                                        c.id === card.id ? { ...c, description: v } : c,
                                      ),
                                    }))
                                  }}
                                  placeholder="Enter welcome description"
                                  className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                                />
                                <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                                  {countWords(card.description)}/50
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="mb-1 text-[10px] font-medium text-black/70">
                              Links
                            </p>
                            <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                              <input
                                value={card.links}
                                onChange={(e) => {
                                  const v = e.target.value
                                  setForm((f) => ({
                                    ...f,
                                    coreCards: f.coreCards.map((c) =>
                                      c.id === card.id ? { ...c, links: v } : c,
                                    ),
                                  }))
                                }}
                                placeholder=""
                                className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                              />
                            </div>
                          </div>

                          <div className="mt-3">
                            <input
                              ref={(el) => {
                                if (el) coreImageInputRefs.current[card.id] = el
                              }}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (!file) return
                                const url = URL.createObjectURL(file)
                                setForm((f) => ({
                                  ...f,
                                  coreCards: f.coreCards.map((c) =>
                                    c.id === card.id ? { ...c, imageUrl: url } : c,
                                  ),
                                }))
                              }}
                            />
                            <UploadCard
                              label="Upload  Image"
                              helper="Recommended ratio 3 : 4"
                              previewUrl={card.imageUrl}
                              onPick={() => coreImageInputRefs.current[card.id]?.click()}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            coreCards: [
                              ...(f.coreCards ?? []),
                              {
                                id: `core-${(f.coreCards?.length ?? 0) + 1}`,
                                title: '',
                                description: '',
                                links: '',
                                imageUrl: '',
                              },
                            ],
                          }))
                        }
                        className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px] bg-[#5aa06b] px-6 text-[12px] font-semibold text-white shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)]"
                      >
                        <span className="grid size-[18px] place-items-center rounded-full bg-white/20">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 5V19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 12H19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Add More Service Cards
                      </button>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <SaveNext onClick={next} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'products' ? (
                  <div className="mx-auto w-full max-w-[610px]">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Title (8 Words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <input
                            value={form.productsPageTitle}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                productsPageTitle: clampWords(e.target.value, 10),
                              }))
                            }
                            placeholder="Enter attractive title"
                            className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.productsPageTitle)}/10
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-[10px] font-medium text-black/70">
                          Description (50 words)
                        </p>
                        <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                          <textarea
                            value={form.productsPageDescription}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                productsPageDescription: clampWords(e.target.value, 50),
                              }))
                            }
                            placeholder="Enter welcome description"
                            className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                          />
                          <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                            {countWords(form.productsPageDescription)}/50
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-[12px] font-semibold text-[#006e12]">
                      Product/Service Catalogue Cards
                    </p>

                    <div className="mt-2 rounded-[12px] bg-white/40 p-3 ring-1 ring-black/5">
                      {(form.productsCards ?? []).map((card, idx) => (
                        <div key={card.id} className={idx === 0 ? '' : 'mt-4'}>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <p className="mb-1 text-[10px] font-medium text-black/70">
                                Title (8 Words)
                              </p>
                              <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                                <input
                                  value={card.title}
                                  onChange={(e) => {
                                    const v = clampWords(e.target.value, 10)
                                    setForm((f) => ({
                                      ...f,
                                      productsCards: f.productsCards.map((c) =>
                                        c.id === card.id ? { ...c, title: v } : c,
                                      ),
                                    }))
                                  }}
                                  placeholder="Enter attractive title"
                                  className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                                />
                                <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                                  {countWords(card.title)}/10
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="mb-1 text-[10px] font-medium text-black/70">
                                Description (50 words)
                              </p>
                              <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                                <textarea
                                  value={card.description}
                                  onChange={(e) => {
                                    const v = clampWords(e.target.value, 50)
                                    setForm((f) => ({
                                      ...f,
                                      productsCards: f.productsCards.map((c) =>
                                        c.id === card.id ? { ...c, description: v } : c,
                                      ),
                                    }))
                                  }}
                                  placeholder="Enter welcome description"
                                  className="min-h-[66px] w-full resize-none bg-transparent text-[12px] outline-none placeholder:text-black/35"
                                />
                                <div className="mt-2 text-right text-[10px] font-medium text-black/35">
                                  {countWords(card.description)}/50
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="mb-1 text-[10px] font-medium text-black/70">
                              Price / Label
                            </p>
                            <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                              <input
                                value={card.priceOrLabel ?? ''}
                                onChange={(e) => {
                                  const v = e.target.value
                                  setForm((f) => ({
                                    ...f,
                                    productsCards: f.productsCards.map((c) =>
                                      c.id === card.id ? { ...c, priceOrLabel: v } : c,
                                    ),
                                  }))
                                }}
                                placeholder="Enter price or label"
                                className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                              />
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="mb-1 text-[10px] font-medium text-black/70">
                              Links
                            </p>
                            <div className="rounded-[8px] bg-white px-3 py-3 shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                              <input
                                value={card.links}
                                onChange={(e) => {
                                  const v = e.target.value
                                  setForm((f) => ({
                                    ...f,
                                    productsCards: f.productsCards.map((c) =>
                                      c.id === card.id ? { ...c, links: v } : c,
                                    ),
                                  }))
                                }}
                                placeholder=""
                                className="w-full bg-transparent text-[12px] outline-none placeholder:text-black/35"
                              />
                            </div>
                          </div>

                          <div className="mt-3">
                            <input
                              ref={(el) => {
                                if (el) productsImageInputRefs.current[card.id] = el
                              }}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (!file) return
                                const url = URL.createObjectURL(file)
                                setForm((f) => ({
                                  ...f,
                                  productsCards: f.productsCards.map((c) =>
                                    c.id === card.id ? { ...c, imageUrl: url } : c,
                                  ),
                                }))
                              }}
                            />
                            <UploadCard
                              label="Upload  Image"
                              helper="Recommended ratio 3 : 4"
                              previewUrl={card.imageUrl}
                              onPick={() => productsImageInputRefs.current[card.id]?.click()}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            productsCards: [
                              ...(f.productsCards ?? []),
                              {
                                id: `prod-${(f.productsCards?.length ?? 0) + 1}`,
                                title: '',
                                description: '',
                                priceOrLabel: '',
                                links: '',
                                imageUrl: '',
                              },
                            ],
                          }))
                        }
                        className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px] bg-[#5aa06b] px-6 text-[12px] font-semibold text-white shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)]"
                      >
                        <span className="grid size-[18px] place-items-center rounded-full bg-white/20">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 5V19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 12H19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Add More Catalogue Cards
                      </button>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <SaveNext onClick={next} />
                    </div>
                  </div>
                ) : null}

                {activeId === 'gallery' ? (
                  <div className="mx-auto w-full max-w-[610px]">
                    <div className="rounded-[20px] bg-[#fbf9ee]/60 p-5 ring-1 ring-black/5">
                      <div className="mx-auto w-full max-w-[520px]">
                        <UploadCard
                          label="Upload  Image"
                          helper="Recommended ratio 3 : 4"
                          previewUrl={undefined}
                          onPick={() => {}}
                        />

                        <div className="mt-4 flex justify-center">
                          <button
                            type="button"
                            className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px] bg-[#5aa06b] px-6 text-[12px] font-semibold text-white shadow-[0px_4px_12.5px_0px_rgba(0,0,0,0.12)]"
                          >
                            <span className="grid size-[18px] place-items-center rounded-full bg-white/20">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M12 5V19"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M5 12H19"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                            Add More Products
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                      <SaveNext onClick={() => navigate('/auth/plans')} label="Select Plan" />
                    </div>
                  </div>
                ) : null}

                {['description'].includes(activeId) ? (
                  <div className="grid gap-4">
                    <textarea
                      value={
                        activeId === 'description'
                          ? form.description
                          : ''
                      }
                      onChange={(e) => {
                        const v = e.target.value
                        setForm((f) => ({
                          ...f,
                          description: activeId === 'description' ? v : f.description,
                        }))
                      }}
                      className="min-h-[160px] w-full rounded-[12px] border border-black/15 bg-white p-4 text-[14px] outline-none"
                      placeholder="Type here..."
                    />

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button variant="ghost" size="lg" className="w-full" onClick={back}>
                        Back
                      </Button>
                      <SaveNext
                        onClick={next}
                        label="Save & Next"
                      />
                    </div>
                  </div>
                ) : null}
              </CardShell>
            </div>
          </div>
        </main>
      </div>

      <AiGenerateModal
        open={ai.open}
        title="Generate with AI"
        initialPrompt={
          activeId === 'landing'
            ? 'Write banner + welcome text for my landing page.'
            : activeId === 'description'
              ? 'Write a short business description.'
              : activeId === 'core'
                ? 'Write core services card content.'
                : activeId === 'products'
                  ? 'Write a catalogue card description.'
                  : 'Generate content for this step.'
        }
        generateText={async (prompt) => {
          // Simulated generation delay
          await new Promise((r) => setTimeout(r, 900))
          return fakeGenerate(ai.stepId || activeId, prompt, form)
        }}
        onApply={(text) => {
          setAiPreview((p) => ({ ...p, [ai.stepId || activeId]: text }))

          const stepId = ai.stepId || activeId
          if (stepId === 'description') {
            setForm((f) => ({ ...f, description: text }))
          } else if (stepId === 'landing') {
            setForm((f) => ({
              ...f,
              landingBannerDescription: clampWords(text, 50),
              landingWelcomeDescription: clampWords(text, 50),
            }))
          } else if (stepId === 'core') {
            setForm((f) => ({
              ...f,
              corePageDescription: clampWords(text, 50),
              coreCards: (f.coreCards ?? []).map((c, i) =>
                i === 0 ? { ...c, description: clampWords(text, 50) } : c,
              ),
            }))
          } else if (stepId === 'products') {
            setForm((f) => ({
              ...f,
              productsPageDescription: clampWords(text, 50),
              productsCards: (f.productsCards ?? []).map((c, i) =>
                i === 0 ? { ...c, description: clampWords(text, 50) } : c,
              ),
            }))
          }

          closeAi()
        }}
        onClose={closeAi}
      />
    </div>
  )
})

