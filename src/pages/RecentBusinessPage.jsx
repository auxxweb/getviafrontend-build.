import { memo, useMemo } from 'react'
import { Navbar } from '../components/layout/Navbar.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { VerifiedPartnerCard } from '../components/partners/VerifiedPartnerCard.jsx'
import {
  getDemosOrderedByProfileIds,
  RECENT_BUSINESS_PROFILE_IDS,
} from '../data/savedAndRecent.js'

export default memo(function RecentBusinessPage() {
  const profiles = useMemo(
    () => getDemosOrderedByProfileIds(RECENT_BUSINESS_PROFILE_IDS),
    [],
  )

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      <main className="bg-paper">
        <section className="bg-paper pb-section pt-6 md:pt-8">
          <div className="container-page">
            <h1 className="font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#003314] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px]">
              Recent
            </h1>
            <p className="mt-3 max-w-[640px] text-[14px] font-medium leading-[20px] text-[#414752] sm:text-[15px]">
              Businesses you opened recently, in order of your last visit.
            </p>

            <div className="mx-auto mt-8 grid w-full max-w-[1200px] justify-items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
              {profiles.map((p) => (
                <VerifiedPartnerCard
                  key={p.profileId}
                  profile={p}
                  stretch
                  uniformActionRow
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
})
