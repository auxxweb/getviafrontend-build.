import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categories } from '../data/homeData.js'
import { TEMPLATE_PROFILE_DEMOS, demoToListingCardItem } from '../data/templateProfileDemos.js'
import { Navbar } from '../components/layout/Navbar.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Button } from '../components/ui/Button.jsx'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { ListingCard } from '../components/listings/ListingCard.jsx'
import { cn } from '../utils/cn.js'

const imgPromo = 'https://www.figma.com/api/mcp/asset/2763765b-57b7-4bde-a945-fa632ec45326'

export default memo(function CategoryProfiles() {
  const { categoryId } = useParams()
  const category = categories.find((c) => c.id === categoryId)
  const categoryTitle = category?.title ?? (categoryId ? categoryId.replace(/-/g, ' ') : 'Category')
  const [openFilter, setOpenFilter] = useState(null) // 'Budget' | null
  const [selectedBudget, setSelectedBudget] = useState('Rs 1001-2000')
  const [selectedSort, setSelectedSort] = useState('Featured')
  const [selectedStarMin, setSelectedStarMin] = useState(0)
  const [selectedHotelView, setSelectedHotelView] = useState(null)
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [listingsShowAll, setListingsShowAll] = useState(false)
  const budgetPopoverRef = useRef(null)

  const listings = useMemo(
    () => TEMPLATE_PROFILE_DEMOS.map(demoToListingCardItem),
    [],
  )

  const listingsVisible = listingsShowAll ? listings : listings.slice(0, 6)

  const filters = useMemo(
    () => [
      { label: 'Sort by: Featured', active: true },
      { label: 'Star Rating' },
      { label: 'Budget' },
      { label: 'Hotel View' },
      { label: 'Amenities' },
    ],
    [],
  )

  useEffect(() => {
    if (!openFilter) return

    function onKeyDown(e) {
      if (e.key === 'Escape') setOpenFilter(null)
    }

    function onPointerDown(e) {
      const el = budgetPopoverRef.current
      if (!el) return
      if (!el.contains(e.target)) setOpenFilter(null)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openFilter])

  const hotelViewOptions = useMemo(() => {
    const t = (categoryTitle ?? '').toLowerCase()
    if (t.includes('hotel') || t.includes('resort') || t.includes('stay')) {
      return ['Sea View', 'Mountain View', 'City View', 'Garden View']
    }
    return ['City View', 'Premium View', 'Standard View']
  }, [categoryTitle])

  const amenitiesOptions = useMemo(
    () => [
      'WiFi',
      'Parking',
      'AC',
      'Breakfast',
      'Pool',
      'Gym',
      'Pet Friendly',
      '24/7 Support',
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      <main className="bg-paper">
        <section className="bg-paper pb-section pt-6 md:pt-8">
          <div className="container-page">
            <div className="grid gap-5 lg:grid-cols-[560px_1fr] lg:gap-8">
              <div className="rounded-[30px] bg-[rgba(217,217,217,0.2)] p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[24px]">
                  <PlaceholderImage
                    className="h-[220px] w-full sm:h-[260px]"
                    label={`${categoryTitle} hero`}
                    src={category?.image}
                    alt={categoryTitle}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/0 to-black/0" />
                  <p className="absolute bottom-5 right-6 text-4xl font-semibold italic text-white drop-shadow sm:text-5xl">
                    {categoryTitle}
                  </p>
                </div>
              </div>

              <div className="rounded-[44px] bg-[rgba(217,217,217,0.2)] p-4 sm:p-6">
                <div className="relative overflow-hidden rounded-[21px]">
                  <PlaceholderImage
                    src={imgPromo}
                    alt=""
                    label="Promo banner"
                    className="h-[260px] w-full sm:h-[288px]"
                  />
                  <div className="absolute inset-0 bg-white/75" />
                  <div className="absolute inset-0 p-5 sm:p-8">
                    <p className="text-2xl font-bold text-black sm:text-[32px]">
                      Flat 30% Off On Skincare
                    </p>
                    <p className="mt-2 text-sm font-medium text-black/60 sm:text-base">
                      Limited time offer, shop the best skincare product now
                    </p>
                    <Button
                      type="button"
                      unstyled
                      className="mt-10 rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white sm:text-base"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {filters.map((f) => {
                  const isSort = f.label === 'Sort by: Featured'
                  const isStar = f.label === 'Star Rating'
                  const isBudget = f.label === 'Budget'
                  const isHotelView = f.label === 'Hotel View'
                  const isAmenities = f.label === 'Amenities'
                  const isDropdown = isSort || isStar || isBudget || isHotelView || isAmenities
                  const isOpen = openFilter === f.label
                  const popAlign = isHotelView || isAmenities ? 'right-0' : 'left-0'

                  return (
                    <div key={f.label} className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          if (!isDropdown) return
                          setOpenFilter((cur) => (cur === f.label ? null : f.label))
                        }}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-[12px] font-semibold sm:text-[13px]',
                          f.active
                            ? 'border-[#005dac] bg-brand-700 text-white'
                            : 'border-[#c1c7d4] bg-white text-[#414752]',
                        )}
                      >
                        {f.label}
                        <span className="inline-block size-1.5 rotate-45 border-b-2 border-r-2 border-current opacity-80" />
                      </button>

                      {isDropdown && isOpen ? (
                        <div
                          ref={budgetPopoverRef}
                          className={cn(
                            'absolute top-[44px] z-50 w-[290px] max-w-[calc(100vw-2rem)] rounded-[12px] bg-white p-4 shadow-[0px_10px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/10',
                            popAlign,
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-[14px] font-semibold text-black">
                              {isBudget
                                ? 'Budget'
                                : isSort
                                  ? 'Sort by'
                                  : isStar
                                    ? 'Star Rating'
                                    : isHotelView
                                      ? 'Hotel View'
                                      : 'Amenities'}
                            </p>
                            <button
                              type="button"
                              aria-label="Close budget filter"
                              onClick={() => setOpenFilter(null)}
                              className="grid size-[28px] place-items-center rounded-lg hover:bg-black/5"
                            >
                              <span className="text-[16px] leading-none">×</span>
                            </button>
                          </div>

                          {isBudget ? (
                            <div className="mt-3 grid grid-cols-2 gap-2">
                              {[
                                'Rs 501-1000',
                                'Rs 1001-2000',
                                'Rs 2001-3000',
                                'Rs 3001-4000',
                                'Rs 4001-5000',
                                'Rs 5001-6000',
                                'Rs 6001-7000',
                                'Rs 7001-8000',
                                'Rs 8001 & Above',
                              ].map((opt) => {
                                const active = selectedBudget === opt
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setSelectedBudget(opt)}
                                    className={cn(
                                      'rounded-lg border px-3 py-2 text-left text-[12px] font-semibold',
                                      active
                                        ? 'border-[#006e12] bg-[rgba(0,110,18,0.08)] text-[#006e12]'
                                        : 'border-black/10 bg-white text-[#1a1c19]',
                                    )}
                                  >
                                    {opt}
                                  </button>
                                )
                              })}
                            </div>
                          ) : null}

                          {isSort ? (
                            <div className="mt-3 grid gap-2">
                              {['Featured', 'Verified'].map((opt) => {
                                const active = selectedSort === opt
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setSelectedSort(opt)}
                                    className={cn(
                                      'rounded-lg border px-3 py-2 text-left text-[12px] font-semibold',
                                      active
                                        ? 'border-[#006e12] bg-[rgba(0,110,18,0.08)] text-[#006e12]'
                                        : 'border-black/10 bg-white text-[#1a1c19]',
                                    )}
                                  >
                                    {opt}
                                  </button>
                                )
                              })}
                            </div>
                          ) : null}

                          {isStar ? (
                            <div className="mt-3 grid grid-cols-3 gap-2">
                              {[0, 1, 2, 3, 4, 5].map((n) => {
                                const active = selectedStarMin === n
                                return (
                                  <button
                                    key={n}
                                    type="button"
                                    onClick={() => setSelectedStarMin(n)}
                                    className={cn(
                                      'rounded-lg border px-3 py-2 text-center text-[12px] font-semibold',
                                      active
                                        ? 'border-[#006e12] bg-[rgba(0,110,18,0.08)] text-[#006e12]'
                                        : 'border-black/10 bg-white text-[#1a1c19]',
                                    )}
                                  >
                                    {n}★
                                  </button>
                                )
                              })}
                            </div>
                          ) : null}

                          {isHotelView ? (
                            <div className="mt-3 grid gap-2">
                              {hotelViewOptions.map((opt) => {
                                const active = selectedHotelView === opt
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setSelectedHotelView(opt)}
                                    className={cn(
                                      'rounded-lg border px-3 py-2 text-left text-[12px] font-semibold',
                                      active
                                        ? 'border-[#006e12] bg-[rgba(0,110,18,0.08)] text-[#006e12]'
                                        : 'border-black/10 bg-white text-[#1a1c19]',
                                    )}
                                  >
                                    {opt}
                                  </button>
                                )
                              })}
                            </div>
                          ) : null}

                          {isAmenities ? (
                            <div className="mt-3 grid grid-cols-2 gap-2">
                              {amenitiesOptions.map((opt) => {
                                const active = selectedAmenities.includes(opt)
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() =>
                                      setSelectedAmenities((cur) =>
                                        cur.includes(opt)
                                          ? cur.filter((x) => x !== opt)
                                          : [...cur, opt],
                                      )
                                    }
                                    className={cn(
                                      'rounded-lg border px-3 py-2 text-left text-[12px] font-semibold',
                                      active
                                        ? 'border-[#006e12] bg-[rgba(0,110,18,0.08)] text-[#006e12]'
                                        : 'border-black/10 bg-white text-[#1a1c19]',
                                    )}
                                  >
                                    {opt}
                                  </button>
                                )
                              })}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>

              <div className="flex items-center justify-between gap-4">
                <button type="button" className="text-[12px] font-bold text-brand-700">
                  View All Filters
                </button>
                <button type="button" className="text-[13px] font-medium text-[#181c22]">
                  Get Top Hotels List
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {listingsVisible.map((l) => (
                <ListingCard key={l.id} item={l} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              {!listingsShowAll && listings.length > 6 ? (
                <button
                  type="button"
                  onClick={() => setListingsShowAll(true)}
                  className="rounded-[13px] border border-brand-700 bg-white px-10 py-3 text-[14px] font-semibold text-black"
                >
                  View More
                </button>
              ) : null}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
})

