import { Footer } from '../components/layout/Footer.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { OfferCard } from '../components/offers/OfferCard.jsx'
import { ALL_OFFERS } from '../data/offersCatalog.js'

export default function OffersPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-[1440px] bg-white">
        <section className="bg-white">
          <div className="container-page py-10 sm:py-12 lg:py-12">
            <h1 className="font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#003314] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px]">
              All offers
            </h1>
            <p className="mt-3 max-w-[720px] font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#3d4a39] lg:text-[16px] lg:leading-[24px]">
              Browse every trending deal in one place. Open a card to view the
              listing or category.
            </p>

            <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3 xl:grid-cols-4">
              {ALL_OFFERS.map((o) => (
                <OfferCard
                  key={o.id}
                  to={o.to}
                  badgeText={o.badgeText}
                  title={o.title}
                  imageSrc={o.imageSrc}
                  className="h-[220px] w-full max-w-[320px] sm:max-w-none"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
