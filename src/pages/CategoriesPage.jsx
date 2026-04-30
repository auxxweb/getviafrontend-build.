import { memo, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { cn } from '../utils/cn.js'
import {
  IconChipAuto,
  IconChipBeauty,
  IconChipFood,
  IconChipHealth,
  IconChipHomeLiving,
  IconChipRealEstate,
  IconChipTravel,
} from '../components/ui/Icons.jsx'

// Category card images (Figma assets)
const imgCardAyurveda =
  'https://www.figma.com/api/mcp/asset/40874cf4-a696-4a15-a687-022b7c71aee8'
const imgCardDental =
  'https://www.figma.com/api/mcp/asset/5062f802-1e84-4198-960b-216a4b9dc73c'
const imgCardWellness =
  'https://www.figma.com/api/mcp/asset/7e273166-607d-403d-88df-ba42b4dac952'
const imgCardHospital =
  'https://www.figma.com/api/mcp/asset/0231c5f1-30ee-4ada-bf8c-7eaf58d1227a'
const imgCardOpticals =
  'https://www.figma.com/api/mcp/asset/d393c2f1-eb59-438a-9232-7722a2967e0e'
const imgCardSalon =
  'https://www.figma.com/api/mcp/asset/eb06d8da-cbdd-42ff-86e8-a21444c5b879'
const imgCardHair =
  'https://www.figma.com/api/mcp/asset/2711875f-ad10-4df9-965e-e87ee8506b2a'
const imgCardBoutique =
  'https://www.figma.com/api/mcp/asset/5875cc7f-d925-43be-9f94-d9b6c8a9f05f'
const imgCardWaterproof =
  'https://www.figma.com/api/mcp/asset/23b569c9-5a8b-4d1c-923e-05a64aa7ebae'
const imgCardRealEstate =
  'https://www.figma.com/api/mcp/asset/f8279daf-99b3-4a03-8f5a-9e200ba0e5d7'
const imgCardFurniture =
  'https://www.figma.com/api/mcp/asset/e9ac11b1-6223-40d2-953d-55116b55c7df'
const imgCardElectronics =
  'https://www.figma.com/api/mcp/asset/d620b059-9c88-4646-97c1-0ef6b6f9cf93'
const imgCardFallback =
  'https://www.figma.com/api/mcp/asset/e1c1a719-78d8-42e9-aeeb-3459d80adfa4'

const Chip = memo(function Chip({
  active,
  label,
  icon: Icon,
  widthClass,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'shrink-0 h-[55px] rounded-[10px] px-4',
        widthClass,
        active
          ? 'bg-[#b3e718]'
          : label === 'Health Care'
            ? 'bg-gradient-to-r from-[rgba(23,112,67,0.2)] to-[rgba(115,115,115,0.2)]'
            : 'bg-[rgba(217,217,217,0.2)]',
      )}
    >
      <span className="flex h-full items-center justify-center gap-3">
        {Icon ? (
          <span className="relative size-[22px] shrink-0">
            <Icon className="absolute inset-0 block size-full text-black" />
          </span>
        ) : null}
        <span
          className={cn(
            "text-[16px] text-black whitespace-nowrap",
            active
              ? "font-['Inter:Bold',sans-serif] font-bold"
              : "font-['Inter:Regular',sans-serif] font-normal",
          )}
        >
          {label}
        </span>
      </span>
    </button>
  )
})

const CategoryCard = memo(function CategoryCard({ title, listings, image, to }) {
  return (
    <Link
      to={to}
      className="relative block w-full rounded-[30.051px] bg-white outline-none ring-1 ring-black/5 sm:max-w-[210.358px]"
    >
      <div className="aspect-[210.358/131.474] w-full overflow-hidden rounded-[30.051px]">
        <PlaceholderImage
          src={image || imgCardFallback}
          alt={title}
          label={`${title} image`}
          className="h-full w-full pointer-events-none"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-[14px] pb-[14px] pt-[12px]">
        <p className="min-w-0 truncate font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-[18.782px] text-black">
          {title}
        </p>
        <p className="shrink-0 font-['Inter:Regular',sans-serif] text-[10.33px] font-normal leading-[18.782px] text-[#177043]">
          {listings}
        </p>
      </div>
    </Link>
  )
})

export default memo(function CategoriesPage() {
  const chips = useMemo(
    () => [
      { label: 'All', icon: null, widthClass: 'min-w-[76px]' },
      {
        label: 'Health Care',
        icon: IconChipHealth,
        widthClass: 'min-w-[176px]',
      },
      {
        label: 'Beauty & Personal Care',
        icon: IconChipBeauty,
        widthClass: 'min-w-[228px]',
      },
      {
        label: 'Home & Living',
        icon: IconChipHomeLiving,
        widthClass: 'min-w-[176px]',
      },
      {
        label: 'Construction & Real Estate',
        icon: IconChipRealEstate,
        widthClass: 'min-w-[192px]',
      },
      {
        label: 'Automotive & Transport',
        icon: IconChipAuto,
        widthClass: 'min-w-[176px]',
      },
      {
        label: 'Food & Dining',
        icon: IconChipFood,
        widthClass: 'min-w-[176px]',
      },
      {
        label: 'Travel & Hospitality',
        icon: IconChipTravel,
        widthClass: 'min-w-[176px]',
      },
    ],
    [],
  )

  const [activeChip, setActiveChip] = useState('All')

  const cards = useMemo(
    () => [
      { title: 'Ayurveda', listings: '420+ Listings', image: imgCardAyurveda, to: '/categories/cat-2' },
      { title: 'Dental Clinic', listings: '180+ Listings', image: imgCardDental, to: '/categories/cat-1' },
      { title: 'Health and Wellness', listings: '420+ Listings', image: imgCardWellness, to: '/categories/health-and-wellness' },
      { title: 'Hospitals & Clinics', listings: '420+ Listings', image: imgCardHospital, to: '/categories/hospitals-and-clinics' },
      { title: 'Opticals & Eye Care', listings: '180+ Listings', image: imgCardOpticals, to: '/categories/opticals-and-eye-care' },
      { title: 'Salon', listings: '420+ Listings', image: imgCardSalon, to: '/categories/cat-3' },
      { title: 'Hair Extension', listings: '420+ Listings', image: imgCardHair, to: '/categories/hair-extension' },
      { title: 'Boutique & Design', listings: '420+ Listings', image: imgCardBoutique, to: '/categories/boutique-and-design' },
      { title: 'Water Proofing', listings: '420+ Listings', image: imgCardWaterproof, to: '/categories/water-proofing' },
      { title: 'Real estate', listings: '420+ Listings', image: imgCardRealEstate, to: '/categories/real-estate' },
      { title: 'furniture and fixtures', listings: '420+ Listings', image: imgCardFurniture, to: '/categories/furniture-and-fixtures' },
      { title: 'Electronics', listings: '180+ Listings', image: imgCardElectronics, to: '/categories/electronics' },
    ],
    [],
  )

  const visibleCards = activeChip === 'All' ? cards : cards

  return (
    <div className="bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-[1440px] bg-white">
        <div className="relative pb-10">
          <div className="pt-[58px]" />

          <div className="no-scrollbar flex w-full items-center gap-4 overflow-x-auto overflow-y-clip px-4 py-6 sm:px-6 md:px-[96px]">
            {chips.map((c) => (
              <Chip
                key={c.label}
                active={activeChip === c.label}
                label={c.label}
                icon={c.icon}
                widthClass={c.widthClass}
                onClick={() => setActiveChip(c.label)}
              />
            ))}
          </div>

          <div className="px-4 sm:px-6 md:px-[96px]">
            <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 xl:grid-cols-6">
              {visibleCards.map((c) => (
                <CategoryCard
                  key={c.title}
                  title={c.title}
                  listings={c.listings}
                  image={c.image}
                  to={c.to}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
})

