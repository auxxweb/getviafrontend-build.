import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { PlaceholderImage } from '../components/ui/PlaceholderImage.jsx'
import { Button } from '../components/ui/Button.jsx'
import { categories } from '../data/homeData.js'
import { HOME_FEATURED_OFFERS } from '../data/offersCatalog.js'
import { TEMPLATE_PROFILE_DEMOS } from '../data/templateProfileDemos.js'
import { OfferCard } from '../components/offers/OfferCard.jsx'
import { VerifiedPartnerCard } from '../components/partners/VerifiedPartnerCard.jsx'
import {
  IconBolt,
  IconBookmark,
  IconStar,
} from '../components/ui/Icons.jsx'

const imgI1 = "https://www.figma.com/api/mcp/asset/11513211-5f1b-4bd3-ac3f-6b2f08950302";
const imgVerifiedPartnerAvatar = "https://www.figma.com/api/mcp/asset/d25ce22f-ab23-4a8c-b221-252966f474a8";
const imgOfferBannerBackground = "https://www.figma.com/api/mcp/asset/1239ae37-7c33-4d85-a490-0a13e72555df";
const imgUnion = "https://www.figma.com/api/mcp/asset/ae92a259-09f3-4b3c-ba30-660586a698ae";
const img221 = "https://www.figma.com/api/mcp/asset/3b91f205-db14-4586-9dc4-d5ec473a0c82";
const imgCebqm451Ejzm0RemlktbJpg1 = "https://www.figma.com/api/mcp/asset/5ac47d09-13af-4dc6-9de2-83460f6b71b4";
const imgLbo964TkjzunyetfksjbJpg1 = "https://www.figma.com/api/mcp/asset/d97393a9-7d33-40b1-8fb0-7d439efa6c1e";
const imgKwc8Dv1Lxjzbgvqn4Nyt1 = "https://www.figma.com/api/mcp/asset/2fbc1c6a-0acd-4745-b6a2-66603210dd47";
const imgGwbj9J4Fdu3L91Lokfh3Jpg1 = "https://www.figma.com/api/mcp/asset/a0b674d1-180a-4a6f-bab1-b1a24982918a";
const imgL8Etp8L3Qv9Txnhcf97N1 = "https://www.figma.com/api/mcp/asset/9419189e-46e3-406a-a480-4e46cb4abf7b";
const imgNhcyp6Hnmhguj5Boilos1 = "https://www.figma.com/api/mcp/asset/2aa28004-4d47-4cc3-8e31-f8cd2ddad243";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/6433be07-286e-4422-9126-e8b6ef10a742";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/226305e0-dd3d-409f-9bf9-40f083933813";
const imgUnion3 = "https://www.figma.com/api/mcp/asset/40416442-0ff3-49cd-8da8-9ac6661e5f84";
const imgUnion4 = "https://www.figma.com/api/mcp/asset/d105abf2-f023-48d6-ba8a-71eb99746b09";
const imgCategoryRestaurantsThumb = "https://www.figma.com/api/mcp/asset/a7af8350-1fec-440c-8817-ba1e101bb43c";
const imgCategoryBankingThumb = "https://www.figma.com/api/mcp/asset/5110affc-e846-4c1d-9163-b256be3edc9b";
const imgCategoryRealEstateThumb = "https://www.figma.com/api/mcp/asset/10426084-4a38-4831-8d32-1cd001d53635";
const imgCategoryEducationThumb = "https://www.figma.com/api/mcp/asset/b599d3d3-799d-4b3c-b034-af093dafe408";
const imgCategoryGroceryThumb = "https://www.figma.com/api/mcp/asset/27cfb1bb-acdf-4a2f-94c5-abbed2e220a6";
const imgCategoryPreownedCarsThumb = "https://www.figma.com/api/mcp/asset/5502f3f4-cc62-4f4f-82e4-337748816fac";
const imgCategoryAyurvedaThumb = "https://www.figma.com/api/mcp/asset/003a9c85-cc8d-4083-b768-e672520121f6";
const imgCategoryHealthCareThumb = "https://www.figma.com/api/mcp/asset/e7cfa55c-05a9-4031-bcb1-ef9c0dad1a78";
const imgRectangle65 = "https://www.figma.com/api/mcp/asset/2bb9b86f-7261-43db-a5be-76fd0f45377c";
const imgIpl2024AdvertisingInJioCinema2 = "https://www.figma.com/api/mcp/asset/903fefb4-9ce9-490b-a95f-eedd1f342be6";
const imgSummitOfFuture2 = "https://www.figma.com/api/mcp/asset/54b8979d-1efd-46d6-a815-debf56dfa86e";
const imgAyurvedaResortWayanadWayanadSilverwoods3 = "https://www.figma.com/api/mcp/asset/903aba57-0c2a-4599-a237-9e43d03c6504";
const imgWec26PulseBanner2 = "https://www.figma.com/api/mcp/asset/499aebdc-d56d-4d8d-8281-ee3488e96e01";
const imgD21 = "https://www.figma.com/api/mcp/asset/c6530ab3-2ad6-4bf7-a7f1-55e899c3ad09";
const imgLeadingAyurvedicHerbalOilManufacturerAuthenticWellnessSolutionsFromNature1RemovebgPreview1 = "https://www.figma.com/api/mcp/asset/48c3b3df-054c-4097-a5b3-673b2762224e";
const imgHairDry1 = "https://www.figma.com/api/mcp/asset/24e7cb22-6a22-4042-a41f-6c270470d375";
const imgAMaleStudentWithBooksRemovebgPreview1 = "https://www.figma.com/api/mcp/asset/e88d2fad-43f8-462d-a3f9-c33c0ed3595a";
const imgDownloadAiGeneratedVegetablesGroceryRoyaltyFreeStockIllustrationImageRemovebgPreview1 = "https://www.figma.com/api/mcp/asset/a79878bf-dc2a-407a-b0df-652a4741b862";
const imgDownload13RemovebgPreview1 = "https://www.figma.com/api/mcp/asset/c6f14af9-b7aa-4a21-b1aa-ebcc928011fe";
const imgAyurvedaResortWayanadWayanadSilverwoods2 = "https://www.figma.com/api/mcp/asset/867af489-bf47-495c-b659-5360705d0482";
const imgRectangle38 = "https://www.figma.com/api/mcp/asset/0a529bc8-151d-40cd-8112-a8009dc39c30";
const imgWec26PulseBanner1 = "https://www.figma.com/api/mcp/asset/aedb7e6e-2667-477c-92c6-7251f307a35c";
/** Desktop hero art + copy only — nav + search come from shared Navbar (same as Offers). */
function HomeHeroHeader({ className }) {
  return (
    <div className={className || 'relative h-[613px] w-full max-w-[1440px]'} data-node-id="1:4">
      <div className="pointer-events-none absolute left-0 top-0 h-[546px] w-full max-w-[1440px] bg-white" data-node-id="1:5" />
      <div className="-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[96px] text-[0px] text-black top-[180px] w-[773px]" data-node-id="1:14">
        <p className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[79px] tracking-[0px]">
          <span className="leading-[100px] text-[#1b1c1c]">{`Grow your `}</span>
          <span className="leading-[100px] text-[#b3e718]">brand</span>
          <span className="leading-[100px] text-[#1b1c1c]">{` with `}</span>
          <span className="leading-[100px] text-[#006e12]">Getvia</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[96px] not-italic text-[#6a5d44] text-[14px] top-[307.5px] w-[638px]" data-node-id="1:15">
        <p className="leading-[20px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
      </div>
      <div className="absolute h-[415px] left-[769px] top-[43px] w-[450.119px]" data-node-id="1:32" />
      <div className="absolute flex h-[433.746px] items-center justify-center left-[796px] top-[12px] w-[770.902px]">
        <div className="flex-none rotate-[-0.38deg]">
          <div className="h-[428.708px] relative rounded-[86px] w-[768.102px]" data-node-id="1:33" data-name="i 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[86px] size-full" src={imgI1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeMobile({ offerIndex, setOfferIndex, featuredEventsRow }) {
  const [readyIndex, setReadyIndex] = useState(0)
  const [readyAnimating, setReadyAnimating] = useState(true)
  const [verifiedPartnersShowAll, setVerifiedPartnersShowAll] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setReadyIndex((i) => (i >= 2 ? 0 : i + 1)), 3500)
    return () => clearInterval(t)
  }, [])

  const dailyNeedsItems = [
    { id: 'dn-1', to: '/categories/cat-1', title: 'Dental Clinic', image: imgD21 },
    {
      id: 'dn-2',
      to: '/categories/cat-2',
      title: 'Ayurveda and Herbals',
      image:
        imgLeadingAyurvedicHerbalOilManufacturerAuthenticWellnessSolutionsFromNature1RemovebgPreview1,
    },
    { id: 'dn-3', to: '/categories/cat-3', title: 'Salon', image: imgHairDry1 },
    {
      id: 'dn-4',
      to: '/categories/cat-4',
      title: 'Restaurants',
      image: imgDownload13RemovebgPreview1,
    },
    {
      id: 'dn-5',
      to: '/categories/cat-5',
      title: 'Education',
      image: imgAMaleStudentWithBooksRemovebgPreview1,
    },
    {
      id: 'dn-6',
      to: '/categories/cat-6',
      title: 'Grocery',
      image: imgDownloadAiGeneratedVegetablesGroceryRoyaltyFreeStockIllustrationImageRemovebgPreview1,
    },
  ]

  const verifiedPartnersVisible = verifiedPartnersShowAll
    ? TEMPLATE_PROFILE_DEMOS
    : TEMPLATE_PROFILE_DEMOS.slice(0, 6)

  return (
    <div className="bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-[1440px] bg-white">
        <style>{`
          @keyframes homeMobileFeaturedEventsMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hm-fe-marquee { overflow: hidden; position: relative; }
          .hm-fe-track {
            display: flex;
            width: max-content;
            will-change: transform;
            animation: homeMobileFeaturedEventsMarquee var(--hm-fe-speed, 26s) linear infinite;
          }
          .hm-fe-marquee:hover .hm-fe-track { animation-play-state: paused; }
        `}</style>

        <section className="bg-[#fbf9ee]">
          <div className="container-page py-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="font-['Inter:Bold',sans-serif] font-bold tracking-[0px] text-[#1b1c1c] text-[48px] leading-[56px] sm:text-[64px] sm:leading-[76px] lg:text-[79px] lg:leading-[100px]">
                  Grow your <span className="text-[#b3e718]">brand</span> with{' '}
                  <span className="text-[#006e12]">Getvia</span>
                </h1>
                <p className="mt-4 font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#6a5d44]">
                  Friendly, professional tools designed to accelerate your
                  reach. Harness the power of organic editorial growthtoday.
                </p>
              </div>

              <div className="mx-auto w-full max-w-[520px]">
                <div className="flex justify-center overflow-hidden rounded-[32px] shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <img
                    alt=""
                    src={imgI1}
                    loading="lazy"
                    className="block aspect-[768.102/428.708] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page py-10 sm:py-12">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="relative size-[32px] shrink-0">
                  <IconBolt className="absolute inset-0 block size-full text-black" />
                </div>
                <h2 className="min-w-0 font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
                  Trending Nearby Hot Offers
                </h2>
              </div>
              <Link
                to="/offers"
                className="shrink-0 font-['Inter:SemiBold',sans-serif] text-[14px] font-semibold text-[#006e12] underline-offset-2 hover:underline sm:text-[15px]"
              >
                View all
              </Link>
              <span className="inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#b3e718] px-4 py-1 font-['Inter:Bold',sans-serif] text-[20px] font-bold leading-[24px] text-black sm:text-[28px] sm:leading-[34px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
                New
              </span>
            </div>

            <div className="mt-6">
              <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
                {HOME_FEATURED_OFFERS.map((o, i) => (
                  <OfferCard
                    key={o.id}
                    active={offerIndex === i}
                    onClick={() => setOfferIndex(i)}
                    badgeText={o.badgeText}
                    title={o.title}
                    imageSrc={o.imageSrc}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-[10px]">
                {HOME_FEATURED_OFFERS.map((_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Go to offer slide ${dot + 1}`}
                    onClick={() => setOfferIndex(dot)}
                    className="grid h-[13px] w-[13px] place-items-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-[13px] w-[13px] rounded-full ${
                        offerIndex === dot ? 'bg-[#003314]' : 'bg-black/20'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page pb-10">
            <h2 className="text-center font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
              Categories
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={`/categories/${c.id}`}
                  className="ds-card ds-card-hover overflow-hidden rounded-[18px]"
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-black/5">
                    <PlaceholderImage
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <p className="min-w-0 truncate font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-[20px] text-black tracking-[0px]">
                      {c.title}
                    </p>
                    <p className="shrink-0 font-['Inter:Medium',sans-serif] text-[11px] font-medium leading-[20px] text-[#177043] tracking-[0px]">
                      {c.listingsCount}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button as="link" to="/categories" variant="ghost" size="md">
                View all
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page pb-10">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
                Daily Needs
              </h2>
            </div>

            <div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2">
              {dailyNeedsItems.map((it) => (
                <Link
                  key={it.id}
                  to={it.to}
                  className="relative block h-[360px] w-[280px] shrink-0 overflow-hidden rounded-[19.755px] bg-[#177043]"
                >
                  <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />
                  <div className="absolute left-4 top-4 right-4 z-[5]">
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white">
                      {it.title}
                    </p>
                    <p className="mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[14px] text-white/95">
                      Friendly, professional tools designed to accelerate your
                      reach. Harness the power of organic editorial growthtoday.
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 top-[110px]">
                    <PlaceholderImage
                      src={it.image}
                      alt=""
                      label={it.title}
                      className="h-full w-full"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(242,227,198,0.09)]">
          <div className="container-page py-10">
            <h2 className="text-center font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
              Verified Partners
            </h2>
            <p className="mt-3 text-center font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#3d4a39]">
              Connect with established professionals in your local ecosystem.
            </p>

            <div className="mt-6 grid gap-4 sm:no-scrollbar sm:flex sm:gap-4 sm:overflow-x-auto sm:pb-2">
              {verifiedPartnersVisible.map((p) => (
                <VerifiedPartnerCard key={p.profileId} profile={p} />
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              {!verifiedPartnersShowAll && TEMPLATE_PROFILE_DEMOS.length > 6 ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={() => setVerifiedPartnersShowAll(true)}
                >
                  View all
                </Button>
              ) : null}
            </div>
          </div>
        </section>

        {/* Find & Connect / We Connect the Business (mobile version of desktop section) */}
        <section className="bg-white">
          <div className="container-page py-10">
            <p className="text-center font-['Inter:Bold',sans-serif] text-[24px] font-bold leading-[28px] text-black">
              Find &amp; Connect with Local Businesses – Absolutely Free!
            </p>

            <h2 className="mt-6 text-center font-['Inter:Bold',sans-serif] text-[48px] font-bold leading-[52px]">
              <span className="text-black">We </span>
              <span className="text-[#b3e718]">Connect</span>
              <span className="text-black"> the </span>
              <span className="text-[#177043]">Business</span>
            </h2>

            <p className="mt-4 text-center font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-black">
              Find various businesses near you from the free profile listing directory. Top-rated services can be discovered through genuine customer reviews and recommendations from the community. No fees, no fuss; simply unhindered access to the best local businesses around you NectereClub
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                as="link"
                to="/auth/login"
                unstyled
                className="inline-flex h-[69px] w-[296px] items-center justify-center rounded-[10px] border border-[#1b794a] bg-gradient-to-r from-[#1a6539] to-[#7eba24] text-[24px] font-semibold text-white"
              >
                Connect Now
              </Button>
            </div>

            <div className="mt-10 overflow-hidden rounded-[10px]">
              <img
                alt=""
                src={img221}
                className="h-[360px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <div className="relative">
          {/* Desktop-equivalent background layer (node 1:62) */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[524px] bg-[rgba(243,243,243,0.39)]"
          />

          <section className="relative bg-transparent">
            <div className="container-page py-10">
              <h2 className="text-center font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
                Featured Events
              </h2>
              <div className="hm-fe-marquee mt-6">
                <div className="hm-fe-track">
                  {[...featuredEventsRow, ...featuredEventsRow].map((ev, idx) => (
                    <Link
                      key={`${ev.id}-${idx}`}
                      to="/offers"
                      className="mr-4 w-[280px] shrink-0 overflow-hidden rounded-[18px] bg-white ring-1 ring-black/5"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img
                          alt=""
                          src={ev.image}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-['Inter:Bold',sans-serif] text-[16px] font-bold text-[#1a1c19]">
                          {ev.title}
                        </p>
                        <p className="mt-1 text-[12px] font-medium text-black/60">
                          {ev.date}
                        </p>
                        <p className="mt-1 text-[12px] font-medium text-black/60">
                          {ev.place}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Carousel section (under Featured Events, on same background layer) */}
          <section className="relative bg-transparent">
            <div className="container-page py-10">
              <div className="overflow-hidden rounded-[10px] bg-[#faf4e9] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                <div
                  className={`relative flex w-full ${readyAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
                  style={{ transform: `translateX(-${readyIndex * 100}%)` }}
                >
                  {[
                    { id: 'ready-1', src: imgRectangle65, className: 'h-[220px] w-full object-cover' },
                    { id: 'ready-2', src: imgSummitOfFuture2, className: 'h-[220px] w-full object-cover' },
                    { id: 'ready-3', src: imgWec26PulseBanner2, className: 'h-[220px] w-full object-cover' },
                  ].map((s) => (
                    <div key={s.id} className="w-full shrink-0">
                      <img alt="" src={s.src} className={s.className} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 py-3">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ready carousel ${i + 1}`}
                      onClick={() => {
                        setReadyAnimating(true)
                        setReadyIndex(i)
                      }}
                      className={`size-[10px] rounded-full ${readyIndex === i ? 'bg-[#003314]' : 'bg-black/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Ready to Create Business (text + CTA) */}
        <section className="bg-[#faf4e9]">
          <div className="container-page py-10">
            <h2 className="text-center font-['Inter:Bold',sans-serif] font-bold text-[#003314] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] tracking-[0px]">
              Ready to Create Business!
            </h2>
            <p className="mt-4 text-center font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-black sm:text-[18px]">
              Showcase your profile to the world! Our platform is designed for both businesses and professionals to list their profiles and connect with a wider audience!
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                as="link"
                to="/auth/signup"
                unstyled
                className="inline-flex h-[69px] w-[296px] items-center justify-center rounded-[10px] border border-[#1b794a] bg-gradient-to-r from-[#1a6539] to-[#7eba24] text-[24px] font-semibold text-white"
              >
                Create Profile
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function Home() {
  const [offerIndex, setOfferIndex] = useState(0);
  const [dailyNeedsIndex, setDailyNeedsIndex] = useState(0);
  const [dailyNeedsAnimating, setDailyNeedsAnimating] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [readyCarouselIndex, setReadyCarouselIndex] = useState(0);
  const [readyCarouselAnimating, setReadyCarouselAnimating] = useState(true);
  const [readyRightTopIndex, setReadyRightTopIndex] = useState(0);
  const [readyRightTopAnimating, setReadyRightTopAnimating] = useState(true);
  const [readyRightBottomIndex, setReadyRightBottomIndex] = useState(0);
  const [readyRightBottomAnimating, setReadyRightBottomAnimating] = useState(true);

  const featuredEventsRow = [
    {
      id: 'fe-1',
      title: 'BUDX NBA House 2026',
      date: 'sat,23 Jan, 6:00 PM',
      place: 'Bharat Mandapam, New Delhi',
      image: imgCebqm451Ejzm0RemlktbJpg1,
    },
    {
      id: 'fe-2',
      title: 'Ye Live in India',
      date: 'sat,23 May, 8:00 PM',
      place: 'JLN Stadium, Kochi',
      image: imgLbo964TkjzunyetfksjbJpg1,
    },
    {
      id: 'fe-3',
      title: 'ISL 2025-2026',
      date: 'Sat,23 May, 8:00 PM',
      place: 'JLN Stadium, Kochi',
      image: imgGwbj9J4Fdu3L91Lokfh3Jpg1,
    },
    {
      id: 'fe-4',
      title: 'Pottery Date',
      date: 'Thu,23 May, 8:00 PM',
      place: 'JLN Stadium, Kochi',
      image: imgKwc8Dv1Lxjzbgvqn4Nyt1,
    },
    {
      id: 'fe-5',
      title: 'Neon Face Painting',
      date: 'sat,23 Jan, 6:00 PM',
      place: 'Fort Kochi, Ernakulam',
      image: imgL8Etp8L3Qv9Txnhcf97N1,
    },
    {
      id: 'fe-6',
      title: 'Kids Painting Workshop',
      date: 'sat,23 May, 8:00 PM',
      place: 'Kakkanad, Kochi',
      image: imgNhcyp6Hnmhguj5Boilos1,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setOfferIndex((prev) => (prev + 1) % 2);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDailyNeedsIndex((prev) => (prev >= 6 ? 6 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadyCarouselIndex((prev) => (prev >= 3 ? 3 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReadyRightTopIndex((prev) => (prev >= 3 ? 3 : prev + 1));
      setReadyRightBottomIndex((prev) => (prev >= 3 ? 3 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (readyCarouselIndex !== 3) return;

    const t = setTimeout(() => {
      setReadyCarouselAnimating(false);
      setReadyCarouselIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setReadyCarouselAnimating(true));
      });
    }, 720);

    return () => clearTimeout(t);
  }, [readyCarouselIndex]);

  useEffect(() => {
    if (readyRightTopIndex !== 3) return;

    const t = setTimeout(() => {
      setReadyRightTopAnimating(false);
      setReadyRightTopIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setReadyRightTopAnimating(true));
      });
    }, 720);

    return () => clearTimeout(t);
  }, [readyRightTopIndex]);

  useEffect(() => {
    if (readyRightBottomIndex !== 3) return;

    const t = setTimeout(() => {
      setReadyRightBottomAnimating(false);
      setReadyRightBottomIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setReadyRightBottomAnimating(true));
      });
    }, 720);

    return () => clearTimeout(t);
  }, [readyRightBottomIndex]);

  useEffect(() => {
    if (dailyNeedsIndex !== 6) return;

    const t = setTimeout(() => {
      // Jump back to first slide without transition (seamless loop)
      setDailyNeedsAnimating(false);
      setDailyNeedsIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setDailyNeedsAnimating(true));
      });
    }, 720);

    return () => clearTimeout(t);
  }, [dailyNeedsIndex]);

  return (
    <div className="bg-white">
      {/* Mobile/tablet: responsive layout */}
      <div className="lg:hidden">
        <HomeMobile
          offerIndex={offerIndex}
          setOfferIndex={setOfferIndex}
          featuredEventsRow={featuredEventsRow}
        />
      </div>

      {/* Desktop: shared Navbar (matches Offers) + fixed 1440px canvas */}
      <div className="hidden lg:block bg-white">
        <Navbar />
        <div className="relative mx-auto min-h-[5600px] w-full max-w-[1440px] bg-white" data-node-id="1:2" data-name="Home">
          <style>{`
            html { scroll-behavior: smooth; overflow-x: hidden; }
            body { overflow-x: hidden; }
            @keyframes dailyNeedsAutoSlide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-2256.63px); }
            }
            .daily-needs-track {
              animation: dailyNeedsAutoSlide 32s linear infinite;
              will-change: transform;
            }
            .daily-needs-track:hover {
              animation-play-state: paused;
            }

            @keyframes featuredEventsMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .fe-marquee {
              overflow: hidden;
              position: relative;
            }
            .fe-track {
              display: flex;
              width: max-content;
              will-change: transform;
              animation: featuredEventsMarquee var(--fe-speed, 28s) linear infinite;
            }
            .fe-marquee:hover .fe-track {
              animation-play-state: paused;
            }

            @keyframes featuredEventsInnerMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .fe-inner-track {
              display: flex;
              width: max-content;
              will-change: transform;
              animation: featuredEventsInnerMarquee var(--fe-inner-speed, 18s) linear infinite;
            }
            .fe-inner:hover .fe-inner-track {
              animation-play-state: paused;
            }
          `}</style>
      <HomeHeroHeader className="absolute left-0 top-0 h-[613px] w-full max-w-[1440px]" />
      <p id="categories" className="absolute font-['Inter:Bold',sans-serif] font-bold h-[56px] leading-[44px] left-[calc(50%-107px)] not-italic text-[#003314] text-[36px] top-[1187px] w-[230px] tracking-[0px]" data-node-id="1:34">
        Categories
      </p>
      <div className="absolute bg-[rgba(242,227,198,0.09)] h-[890px] left-[-46px] top-[2299px] w-[1440px]" data-node-id="1:35" />
      <div id="verified-partners" className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] left-[calc(50%+1.5px)] not-italic text-[#003314] text-[36px] text-center top-[2406px] tracking-[0px] w-[359px]" data-node-id="1:36">
        <p className="leading-[40px]">Verified Partners</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-[98px] right-[101px] top-[2452px]" data-node-id="1:37" data-name="Container">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a39] text-[18px] text-center w-[609px]" data-node-id="1:38">
          <p className="leading-[28px]">Connect with established professionals in your local ecosystem.</p>
        </div>
      </div>
      <div className="absolute bg-white h-[273px] left-[150px] rounded-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[2545px] w-[550px]" data-node-id="1:39" />
      <div className="absolute h-[109px] left-[184px] rounded-[16px] top-[2569px] w-[125px]" data-node-id="1:40" data-name="AB6AXuDjqLefNN9mheOSDwJyQtycjg7DWqrhdd0vz_SWqyMsp_oOJL9QDbquHNDHz1aEsDAHYYJxoCqUCBmuElJ1j_m1OFpuudRCixPgLmHSCiCpcyXHYbO2pPixm4ZwK-62Bo6VEgLZt82wwJW244oyfO_rCwiVmPAYI296rRqc53_8lT85JCvh75P50v16aclbhLN7YLXUnv5_81lWdvxCUGtV-f074bN0P8DfJx8Dgmasf9Elbj3OBC8qcd7OFTCfR79Wb3mZyaXqxmsU">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPartnerAvatar} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[46px] items-start left-[582px] top-[2675px]" data-node-id="1:41" data-name="Container">
        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="1:42" data-name="Container">
          <div className="h-[14.25px] relative shrink-0 w-[15px]" data-node-id="1:43" data-name="Container">
            <IconStar className="absolute inset-0 block size-full text-[#177043]" />
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[18px] text-right w-[28.7px]" data-node-id="1:45">
            <p className="leading-[28px]">4.9</p>
          </div>
        </div>
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] text-right w-[89.08px]" data-node-id="1:46">
          <p className="leading-[20px]">120+ Reviews</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[324px] text-[#1a1c19] text-[24px] top-[2582px] w-[123px]" data-node-id="1:47">
        <p className="leading-[28px]">Dr. Anie</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[324px] text-[#1a1c19] text-[20px] top-[2652px] w-[143px]" data-node-id="1:48">
        <p className="leading-[28px]">Dental Clinic</p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[19px] items-start left-[324px] top-[2602px] w-[236px]" data-node-id="1:49" data-name="Container">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] tracking-[0.7px] uppercase w-full" data-node-id="1:50">
          <p className="leading-[20px]">Senior Dental Surgeon</p>
        </div>
      </div>
      <div className="absolute bg-[#006e12] border-4 border-solid border-white content-stretch flex h-[31px] items-center justify-center left-[calc(16.67%+39px)] p-[4px] rounded-[9999px] top-[2663px] w-[33px]" data-node-id="1:51" data-name="Background+Border">
        <div className="h-[6.012px] relative shrink-0 w-[8.15px]" data-node-id="1:52" data-name="Container">
          <IconStar className="absolute inset-0 block size-full text-white" />
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[12px] h-[61px] items-start left-[calc(8.33%+62px)] pt-[20px] right-[calc(50%+33px)] top-[2729px]" data-node-id="1:54" data-name="Container">
        <div className="bg-[#177043] content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:55" data-name="Button">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f8e9d1] text-[16px] text-center w-[148px]" data-node-id="1:56">
            <p className="leading-[24px]">WhatsApp</p>
          </div>
        </div>
        <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:57" data-name="Button">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[16px] text-center w-[148px]" data-node-id="1:58">
            <p className="leading-[24px]">{`Call `}</p>
          </div>
        </div>
        <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:59" data-name="Button">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(23,112,67,0.42)] text-center w-[148px]" data-node-id="1:60">
            <p className="leading-[28px]">View Offers</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(243,243,243,0.6)] h-[562px] left-[4px] top-[1749px] w-[1440px]" data-node-id="1:61" />
      <div className="absolute bg-[rgba(243,243,243,0.39)] h-[524px] left-[-2px] top-[3203px] w-[1440px]" data-node-id="1:62" />
      <div className="absolute bg-[rgba(243,243,243,0.6)] h-[528px] left-[-2px] top-[636px] w-[1440px]" data-node-id="1:63" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] left-[185px] not-italic text-[#176d3e] text-[8px] top-[2713px] w-[362px]" data-node-id="1:64">
        <p className="leading-[11px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
      </div>
      <p
        className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[calc(41.67%+2px)] not-italic text-[#003314] text-[36px] top-[1773px] w-[230px] whitespace-nowrap tracking-[0px]"
        data-node-id="1:66"
        style={{ top: 1773 + (categoriesExpanded ? 398 : 0) }}
      >
        Daily Needs
      </p>
      <div className="hidden absolute h-[343px] left-[calc(100%+31px)] overflow-clip rounded-[32px] top-[717px] w-[592px]" data-node-id="1:67" data-name="AB6AXuAK9cSXigCFSxlbwheq7TGcDwlf0mIfeEwG_Wm4P9a2-MxCXYZb77HoW05s0btKPQW0JHhmT5rzTigPiYQDBlSUdEcaz5GL4kLO-0nDhyYa8Az33nkZ7O9xHlmE5W4yjOX5uhJMx00HH6r477rnM6aS28X3IlxkwLHwptvqPzERfqCZ_1BOzh9qFxoBSkmPIhnF1dGJN-55fXuX8FdamIrpaAgsp3fXhnzIaBTfjvEzgrhZJt-SR8Pyq65oN0QIZ27XhS8gAjBlqFmh">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
          <img alt="" className="absolute h-[148%] left-0 max-w-none top-[-24%] w-full" src={imgOfferBannerBackground} />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[63px] not-italic text-[30px] text-white top-[180px] whitespace-nowrap" data-node-id="1:68">
          <p className="leading-[36px]">Luxury Grooming Session</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[63px] text-[#e3e3de] text-[16px] top-[228px] whitespace-nowrap" data-node-id="1:69">
          <p className="leading-[24px] mb-0">Premium salon services for the busy</p>
          <p className="leading-[24px]">entrepreneur. Valid this weekend only.</p>
        </div>
        <div className="absolute bg-white h-[51px] left-[63px] rounded-[12px] top-[258px] w-[131px]" data-node-id="1:70" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[129px] text-[#1a1c19] text-[16px] text-center top-[284px] whitespace-nowrap" data-node-id="1:71">
          <p className="leading-[24px]">Claim Offer</p>
        </div>
        <div className="absolute bg-[#a0a3fe] h-[33px] left-[63px] rounded-[20px] top-[123px] w-[97px]" data-node-id="1:72" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[114px] text-[16px] text-center text-white top-[140px] whitespace-nowrap" data-node-id="1:73">
          <p className="leading-[24px]">30% OFF</p>
        </div>
      </div>
      <div className="hidden absolute h-[343px] left-[97px] top-[747px] w-[610.179px]" data-node-id="1:74" data-name="Union">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="343" src={imgUnion} width="610.179" />
      </div>
      <p className="hidden absolute font-['Inter:Bold',sans-serif] font-bold h-[104px] leading-[normal] left-[123px] not-italic text-[#b3e718] text-[96px] top-[870px] w-[309px]" data-node-id="1:77">
        20%
      </p>
      <p className="hidden absolute font-['Inter:Bold',sans-serif] font-bold h-[58px] leading-[normal] left-[129px] not-italic text-[#faeeee] text-[24px] top-[976px] w-[241px]" data-node-id="1:78">
        Organic Fresh Basket
      </p>
      <div id="offers" className="hidden absolute contents left-[calc(16.67%+140px)] top-[672px]" data-node-id="1:79">
        <div className="absolute left-[calc(16.67%+140px)] size-[45px] top-[672px]" data-node-id="1:80" data-name="ic:baseline-bolt">
          <IconBolt className="absolute inset-0 block size-full text-black" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(25%+320.5px)] not-italic text-[#003314] text-[36px] text-center top-[694px] whitespace-nowrap" data-node-id="1:82">
          <p className="leading-[36px]">Trending Nearby Hot Offers</p>
        </div>
        <div className="absolute h-[38px] left-[calc(66.67%-21px)] top-[675px] w-[106px]" data-node-id="1:83">
          <div className="absolute inset-0 rounded-[10px] bg-[#b3e718]" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(66.67%+32px)] text-[30px] text-black text-center top-[694px] whitespace-nowrap" data-node-id="1:84">
          <p className="leading-[36px]">New</p>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-[694px] -translate-y-1/2 flex items-center justify-center gap-[24px] z-[10]">
        <div className="relative h-[45px] w-[45px]">
          <IconBolt className="absolute inset-0 block size-full text-black" />
        </div>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[36px] leading-[36px] text-[#003314] whitespace-nowrap">
          Trending Nearby Hot Offers
        </p>
        <div className="relative h-[38px] w-[106px]">
          <div className="absolute inset-0 rounded-[10px] bg-[#b3e718]" />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[30px] leading-[36px] text-black text-center">
            New
          </p>
        </div>
      </div>
      <div className="absolute left-[97px] top-[760px] w-[1240px] overflow-hidden z-[5]">
        <div
          className="flex gap-[18px] transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${offerIndex * 628}px)` }}
        >
          <div className="relative h-[343px] w-[610px] shrink-0 overflow-hidden rounded-[10px]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src={imgUnion}
            />
            <div className="absolute left-[26px] top-[122px] flex items-end">
              <p className="font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                20
              </p>
              <p className="ml-[2px] font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                %
              </p>
              <p className="ml-[10px] font-['Inter:Bold',sans-serif] font-extrabold text-[28px] leading-[1] text-white">
                OFF
              </p>
            </div>
            <p className="absolute left-[32px] top-[218px] w-[241px] font-['Inter:Bold',sans-serif] font-extrabold text-[24px] leading-[normal] text-[#faeeee]">
              Organic Fresh Basket
            </p>
          </div>

          <div className="relative h-[343px] w-[610px] shrink-0 overflow-hidden rounded-[10px]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src={imgAyurvedaResortWayanadWayanadSilverwoods3}
            />
            <div className="absolute left-[35px] top-[120px] flex items-end">
              <p className="font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                40
              </p>
              <p className="ml-[2px] font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                %
              </p>
              <p className="ml-[10px] font-['Inter:Bold',sans-serif] font-extrabold text-[28px] leading-[1] text-white">
                OFF
              </p>
            </div>
            <p className="absolute left-[32px] top-[218px] w-[241px] font-['Inter:Bold',sans-serif] font-extrabold text-[24px] leading-[normal] text-[#faeeee]">
              Ayurveda Treatments
            </p>
          </div>

          <div className="relative h-[343px] w-[610px] shrink-0 overflow-hidden rounded-[10px]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src={imgUnion}
            />
            <div className="absolute left-[26px] top-[122px] flex items-end">
              <p className="font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                20
              </p>
              <p className="ml-[2px] font-['Inter:Bold',sans-serif] font-extrabold text-[88px] leading-[0.9] text-[#b3e718]">
                %
              </p>
              <p className="ml-[10px] font-['Inter:Bold',sans-serif] font-extrabold text-[28px] leading-[1] text-white">
                OFF
              </p>
            </div>
            <p className="absolute left-[32px] top-[218px] w-[241px] font-['Inter:Bold',sans-serif] font-extrabold text-[24px] leading-[normal] text-[#faeeee]">
              Organic Fresh Basket
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-[1134px] flex -translate-x-1/2 items-center gap-[10px] z-[10]">
        {[0, 1, 2].map((dot) => {
          const targetIndex = dot === 1 ? 1 : 0
          const isActive = offerIndex === targetIndex
          return (
          <button
            key={dot}
            type="button"
            aria-label={`Go to offer slide ${dot + 1}`}
            onClick={() => setOfferIndex(targetIndex)}
            className="grid h-[13px] w-[13px] place-items-center"
          >
            <span
              aria-hidden="true"
              className={`h-[13px] w-[13px] rounded-full ${isActive ? 'bg-[#ffffff]' : 'bg-[rgba(255,255,255,0.6)]'}`}
            />
          </button>
          )
        })}
      </div>
      <div className="absolute left-[647px] size-[29px] top-[2572px]" data-node-id="1:85" data-name="download__11_-removebg-preview 1">
        <IconBookmark className="absolute inset-0 block size-full text-white" />
      </div>
      <div className="absolute contents left-[calc(50%+23px)] top-[2545px]" data-node-id="1:86">
        <div className="absolute bg-white h-[273px] left-[calc(50%+23px)] rounded-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[2545px] w-[550px]" data-node-id="1:87" />
        <div className="absolute h-[109px] left-[calc(50%+57px)] rounded-[16px] top-[2569px] w-[125px]" data-node-id="1:88" data-name="AB6AXuDjqLefNN9mheOSDwJyQtycjg7DWqrhdd0vz_SWqyMsp_oOJL9QDbquHNDHz1aEsDAHYYJxoCqUCBmuElJ1j_m1OFpuudRCixPgLmHSCiCpcyXHYbO2pPixm4ZwK-62Bo6VEgLZt82wwJW244oyfO_rCwiVmPAYI296rRqc53_8lT85JCvh75P50v16aclbhLN7YLXUnv5_81lWdvxCUGtV-f074bN0P8DfJx8Dgmasf9Elbj3OBC8qcd7OFTCfR79Wb3mZyaXqxmsU">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPartnerAvatar} />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[46px] items-start left-[1175px] top-[2675px]" data-node-id="1:89" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="1:90" data-name="Container">
            <div className="h-[14.25px] relative shrink-0 w-[15px]" data-node-id="1:91" data-name="Container">
              <IconStar className="absolute inset-0 block size-full text-[#177043]" />
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[18px] text-right w-[28.7px]" data-node-id="1:93">
              <p className="leading-[28px]">4.9</p>
            </div>
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] text-right w-[89.08px]" data-node-id="1:94">
            <p className="leading-[20px]">120+ Reviews</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[917px] text-[#1a1c19] text-[24px] top-[2582px] w-[123px]" data-node-id="1:95">
          <p className="leading-[28px]">Dr. Anie</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[917px] text-[#1a1c19] text-[20px] top-[2652px] w-[143px]" data-node-id="1:96">
          <p className="leading-[28px]">Dental Clinic</p>
        </div>
        <div className="absolute content-stretch flex flex-col h-[19px] items-start left-[917px] top-[2602px] w-[236px]" data-node-id="1:97" data-name="Container">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] tracking-[0.7px] uppercase w-full" data-node-id="1:98">
            <p className="leading-[20px]">Senior Dental Surgeon</p>
          </div>
        </div>
        <div className="absolute bg-[#006e12] border-4 border-solid border-white content-stretch flex h-[31px] items-center justify-center left-[calc(58.33%+32px)] p-[4px] rounded-[9999px] top-[2663px] w-[33px]" data-node-id="1:99" data-name="Background+Border">
          <div className="h-[6.012px] relative shrink-0 w-[8.15px]" data-node-id="1:100" data-name="Container">
            <IconStar className="absolute inset-0 block size-full text-white" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[12px] h-[61px] items-start left-[calc(50%+52px)] pt-[20px] right-[163px] top-[2729px]" data-node-id="1:102" data-name="Container">
          <div className="bg-[#177043] content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:103" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f8e9d1] text-[16px] text-center w-[148px]" data-node-id="1:104">
              <p className="leading-[24px]">WhatsApp</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:105" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[16px] text-center w-[148px]" data-node-id="1:106">
              <p className="leading-[24px]">{`Call `}</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:107" data-name="Button">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(23,112,67,0.42)] text-center w-[148px]" data-node-id="1:108">
              <p className="leading-[28px]">View Offers</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] left-[778px] not-italic text-[#176d3e] text-[8px] top-[2713px] w-[362px]" data-node-id="1:109">
          <p className="leading-[11px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
        </div>
        <div className="absolute left-[1240px] size-[29px] top-[2572px]" data-node-id="1:110" data-name="download__11_-removebg-preview 2">
          <IconBookmark className="absolute inset-0 block size-full text-white" />
        </div>
      </div>
      <div className="absolute contents left-[153px] top-[2850px]" data-node-id="1:111">
        <div className="absolute bg-white h-[273px] left-[153px] rounded-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[2850px] w-[550px]" data-node-id="1:112" />
        <div className="absolute h-[108px] left-[187px] rounded-[16px] top-[2874px] w-[125px]" data-node-id="1:113" data-name="AB6AXuDjqLefNN9mheOSDwJyQtycjg7DWqrhdd0vz_SWqyMsp_oOJL9QDbquHNDHz1aEsDAHYYJxoCqUCBmuElJ1j_m1OFpuudRCixPgLmHSCiCpcyXHYbO2pPixm4ZwK-62Bo6VEgLZt82wwJW244oyfO_rCwiVmPAYI296rRqc53_8lT85JCvh75P50v16aclbhLN7YLXUnv5_81lWdvxCUGtV-f074bN0P8DfJx8Dgmasf9Elbj3OBC8qcd7OFTCfR79Wb3mZyaXqxmsU">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPartnerAvatar} />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[46px] items-start left-[585px] top-[2980px]" data-node-id="1:114" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="1:115" data-name="Container">
            <div className="h-[14.25px] relative shrink-0 w-[15px]" data-node-id="1:116" data-name="Container">
              <IconStar className="absolute inset-0 block size-full text-[#177043]" />
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[18px] text-right w-[28.7px]" data-node-id="1:118">
              <p className="leading-[28px]">4.9</p>
            </div>
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] text-right w-[89.08px]" data-node-id="1:119">
            <p className="leading-[20px]">120+ Reviews</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[327px] text-[#1a1c19] text-[24px] top-[2887px] w-[123px]" data-node-id="1:120">
          <p className="leading-[28px]">Dr. Anie</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[327px] text-[#1a1c19] text-[20px] top-[2957px] w-[143px]" data-node-id="1:121">
          <p className="leading-[28px]">Dental Clinic</p>
        </div>
        <div className="absolute content-stretch flex flex-col h-[19px] items-start left-[327px] top-[2907px] w-[236px]" data-node-id="1:122" data-name="Container">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] tracking-[0.7px] uppercase w-full" data-node-id="1:123">
            <p className="leading-[20px]">Senior Dental Surgeon</p>
          </div>
        </div>
        <div className="absolute bg-[#006e12] border-4 border-solid border-white content-stretch flex h-[30px] items-center justify-center left-[calc(16.67%+42px)] p-[4px] rounded-[9999px] top-[2968px] w-[33px]" data-node-id="1:124" data-name="Background+Border">
          <div className="h-[6.012px] relative shrink-0 w-[8.15px]" data-node-id="1:125" data-name="Container">
            <IconStar className="absolute inset-0 block size-full text-white" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[12px] h-[61px] items-start left-[calc(8.33%+62px)] pt-[20px] right-[calc(50%+33px)] top-[3034px]" data-node-id="1:127" data-name="Container">
          <div className="bg-[#177043] content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:128" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f8e9d1] text-[16px] text-center w-[148px]" data-node-id="1:129">
              <p className="leading-[24px]">WhatsApp</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:130" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[16px] text-center w-[148px]" data-node-id="1:131">
              <p className="leading-[24px]">{`Call `}</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:132" data-name="Button">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(23,112,67,0.42)] text-center w-[148px]" data-node-id="1:133">
              <p className="leading-[28px]">View Offers</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[28px] left-[calc(41.67%+34px)] top-[2892px] w-[29px]" data-node-id="1:134" data-name="download__11_-removebg-preview 3">
          <IconBookmark className="absolute inset-0 block size-full text-white" />
        </div>
      </div>
      <div className="absolute contents left-[calc(50%+23px)] top-[2851px]" data-node-id="1:135">
        <div className="absolute bg-white h-[273px] left-[calc(50%+23px)] rounded-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] top-[2851px] w-[550px]" data-node-id="1:136" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] left-[calc(50%+58px)] not-italic text-[#176d3e] text-[8px] top-[3019px] w-[362px]" data-node-id="1:137">
          <p className="leading-[11px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
        </div>
        <div className="absolute h-[108px] left-[calc(50%+57px)] rounded-[16px] top-[2875px] w-[125px]" data-node-id="1:138" data-name="AB6AXuDjqLefNN9mheOSDwJyQtycjg7DWqrhdd0vz_SWqyMsp_oOJL9QDbquHNDHz1aEsDAHYYJxoCqUCBmuElJ1j_m1OFpuudRCixPgLmHSCiCpcyXHYbO2pPixm4ZwK-62Bo6VEgLZt82wwJW244oyfO_rCwiVmPAYI296rRqc53_8lT85JCvh75P50v16aclbhLN7YLXUnv5_81lWdvxCUGtV-f074bN0P8DfJx8Dgmasf9Elbj3OBC8qcd7OFTCfR79Wb3mZyaXqxmsU">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPartnerAvatar} />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[46px] items-start left-[calc(83.33%-25px)] top-[2981px]" data-node-id="1:139" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="1:140" data-name="Container">
            <div className="h-[14.25px] relative shrink-0 w-[15px]" data-node-id="1:141" data-name="Container">
              <IconStar className="absolute inset-0 block size-full text-[#177043]" />
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[18px] text-right w-[28.7px]" data-node-id="1:143">
              <p className="leading-[28px]">4.9</p>
            </div>
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] text-right w-[89.08px]" data-node-id="1:144">
            <p className="leading-[20px]">120+ Reviews</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[calc(58.33%+77px)] text-[#1a1c19] text-[24px] top-[2888px] w-[123px]" data-node-id="1:145">
          <p className="leading-[28px]">Dr. Anie</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[calc(58.33%+77px)] text-[#1a1c19] text-[20px] top-[2958px] w-[143px]" data-node-id="1:146">
          <p className="leading-[28px]">Dental Clinic</p>
        </div>
        <div className="absolute content-stretch flex flex-col h-[19px] items-start left-[calc(58.33%+77px)] right-[calc(16.67%+47px)] top-[2908px]" data-node-id="1:147" data-name="Container">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d4a39] text-[14px] tracking-[0.7px] uppercase w-full" data-node-id="1:148">
            <p className="leading-[20px]">Senior Dental Surgeon</p>
          </div>
        </div>
        <div className="absolute bg-[#006e12] border-4 border-solid border-white content-stretch flex h-[30px] items-center justify-center left-[calc(58.33%+32px)] p-[4px] rounded-[9999px] top-[2969px] w-[33px]" data-node-id="1:149" data-name="Background+Border">
          <div className="h-[6.012px] relative shrink-0 w-[8.15px]" data-node-id="1:150" data-name="Container">
            <IconStar className="absolute inset-0 block size-full text-white" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[12px] h-[61px] items-start left-[calc(50%+52px)] pt-[20px] right-[163px] top-[3035px]" data-node-id="1:152" data-name="Container">
          <div className="bg-[#177043] content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:153" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f8e9d1] text-[16px] text-center w-[148px]" data-node-id="1:154">
              <p className="leading-[24px]">WhatsApp</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:155" data-name="Button">
            <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#177043] text-[16px] text-center w-[148px]" data-node-id="1:156">
              <p className="leading-[24px]">{`Call `}</p>
            </div>
          </div>
          <div className="bg-white border border-[#177043] border-solid content-stretch flex flex-col h-[44px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[156px]" data-node-id="1:157" data-name="Button">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(23,112,67,0.42)] text-center w-[148px]" data-node-id="1:158">
              <p className="leading-[28px]">View Offers</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[28px] left-[calc(91.67%-80px)] top-[2878px] w-[29px]" data-node-id="1:159" data-name="download__11_-removebg-preview 4">
          <IconBookmark className="absolute inset-0 block size-full text-white" />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[58px] justify-center leading-[0] left-[95px] not-italic text-[24px] text-black top-[3469px] w-[667px]" data-node-id="1:160">
        <p className="leading-[28px]">{`Find & Connect with Local Businesses – Absolutely Free!`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[225px] justify-center leading-[0] left-[96px] not-italic text-[#166139] text-[0px] top-[3356.5px] w-[805px]" data-node-id="1:161">
        <p className="text-[78px]">
          <span className="leading-[84px] text-black">We</span>
          <span className="leading-[84px]">{` `}</span>
          <span className="leading-[84px] text-[#b3e718]">Connect</span>
          <span className="leading-[84px]">{` `}</span>
          <span className="leading-[84px] text-black">{`the `}</span>
          <span className="leading-[84px] text-[#177043]">Business</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[96px] not-italic text-[14px] text-black top-[3549px] w-[730px]" data-node-id="1:162">
        <p className="leading-[20px]">Find various businesses near you from the free profile listing directory. Top-rated services can be discovered through genuine customer reviews and recommendations from the community. No fees, no fuss; simply unhindered access to the best local businesses around you NectereClub</p>
      </div>
      <div className="absolute h-[638px] left-[calc(58.33%+68px)] top-[3089px] w-[479px]" data-node-id="1:163" data-name="22 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img221} />
      </div>
      <Link
        to="/auth/login"
        className="absolute left-[97px] top-[3618px] h-[69px] w-[296px] rounded-[10px] border border-[#1b794a] bg-gradient-to-r from-[#1a6539] to-[#7eba24]"
        data-node-id="1:164"
        aria-label="Connect Now"
      >
        <span
          className="absolute left-[27px] top-1/2 -translate-y-1/2 font-['Inter:Bold',sans-serif] text-[36px] font-bold leading-[100px] text-white"
          data-node-id="1:165"
        >
          Connect Now
        </span>
      </Link>
      <div id="featured-events" className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(33.33%+94px)] not-italic text-[#003326] text-[36px] top-[3791px] whitespace-nowrap" data-node-id="1:166">
        <p className="leading-[normal]">Featured Events</p>
      </div>
      <div className="absolute left-[calc(8.33%+54px)] top-[3848px] w-[1126px] h-[950px] relative" data-node-id="1:167">
        {/* Row 1: auto-scroll right-to-left (loop) */}
        <div className="fe-marquee h-[469px] w-full" style={{ ['--fe-speed']: '34s' }}>
          <div className="fe-track gap-[32px] pr-[32px]">
            {[...featuredEventsRow, ...featuredEventsRow].map((ev, idx) => (
              <div
                key={`${ev.id}-${idx}`}
                className="shrink-0 w-[252px] h-[434px] mt-[4px] rounded-[10px] border-2 border-[#f1f1ed] bg-white overflow-hidden relative"
              >
                <div className="h-[336px] w-full rounded-tl-[10px] rounded-tr-[10px] overflow-hidden relative">
                  <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={ev.image} />
                </div>
                <div className="absolute left-[16px] top-[348px] right-[16px] flex flex-col gap-[2px]">
                  <div className="font-['Inter:Extra_Light',sans-serif] font-extralight text-[14px] text-black whitespace-nowrap">
                    {ev.date}
                  </div>
                  <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black whitespace-nowrap">
                    {ev.title}
                  </div>
                  <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-black">
                    {ev.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div
        aria-hidden
        className="absolute left-0 top-[1256px] w-[1440px] bg-[#fbf9ee]"
        style={{ height: categoriesExpanded ? 980 : 461 }}
      />
      <div
        className="absolute left-[97px] overflow-x-clip overflow-y-hidden top-[1256px] w-[1250px]"
        data-node-id="1:210"
        style={{ height: categoriesExpanded ? 980 : 461 }}
      >
        <div className="absolute contents left-px top-[8px]" data-node-id="1:212">
          <div className="absolute contents left-px top-[8px]" data-node-id="1:213">
            <div className="absolute contents left-px top-[8px]" data-node-id="1:214">
              <div className="absolute contents left-px top-[8px]" data-node-id="1:215">
                <Link
                  to="/categories/cat-3"
                  aria-label="Salon listings"
                  className="absolute h-[197px] left-px top-[8px] w-[224px]"
                  data-node-id="1:216"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="absolute h-[140px] left-px top-[8px] w-[224px]" data-node-id="1:217" data-name="Union">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="140" src={imgUnion1} width="224" />
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[40px] not-italic text-[16px] text-black text-center top-[169px] w-[48px]" data-node-id="1:221">
                  <p className="leading-[20px]">Salon</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[171.5px] not-italic text-[#177043] text-[11px] text-center top-[169px] w-[71px]" data-node-id="1:222">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-0 top-[461px]" data-node-id="1:223">
          <div className="absolute contents left-0 top-[461px]" data-node-id="1:224">
            <div className="absolute contents left-0 top-[461px]" data-node-id="1:225">
              <Link
                to="/categories/cat-3"
                aria-label="Salon listings"
                className="absolute h-[197px] left-0 top-[461px] w-[224px]"
                data-node-id="1:226"
              >
                <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
              </Link>
              <div className="absolute h-[140px] left-0 top-[461px] w-[224px]" data-node-id="1:227" data-name="Union">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="140" src={imgUnion2} width="224" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[40px] not-italic text-[18px] text-black text-center top-[623px] w-[48px]" data-node-id="1:231">
                <p className="leading-[20px]">Salon</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[171.5px] text-[#177043] text-[11px] text-center top-[623px] w-[71px]" data-node-id="1:232">
                <p className="leading-[20px]">420+ Listings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[258px] top-[461px]" data-node-id="1:233">
          <div className="absolute contents left-[258px] top-[461px]" data-node-id="1:234">
            <div className="absolute contents left-[258px] top-[461px]" data-node-id="1:235">
              <div className="absolute contents left-[258px] top-[461px]" data-node-id="1:236">
                <div className="absolute h-[197px] left-[258px] top-[461px] w-[224px]" data-node-id="1:237">
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[331.5px] not-italic text-[#1a1c19] text-[18px] text-center top-[623px] whitespace-nowrap" data-node-id="1:238">
                  <p className="leading-[28px]">Dental Clinic</p>
                </div>
              </div>
              <div className="absolute h-[140px] left-[258px] top-[461px] w-[224px]" data-node-id="1:239" data-name="Union">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="140" src={imgUnion3} width="224" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[440px] text-[#177043] text-[11px] text-center top-[623px] whitespace-nowrap" data-node-id="1:256">
                <p className="leading-[20px]">180+ Listings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[1023px] top-[700px]" data-node-id="1:258">
          <div className="absolute contents left-[1023px] top-[700px]" data-node-id="1:259">
            <div className="absolute contents left-[1023px] top-[700px]" data-node-id="1:260">
              <div className="absolute h-[197px] left-[1023px] top-[700px] w-[224px]" data-node-id="1:261">
                <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setCategoriesExpanded(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setCategoriesExpanded(true)
                }}
                className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[1134px] not-italic text-[#006e12] text-[16px] text-center top-[799px] whitespace-nowrap cursor-pointer ${
                  categoriesExpanded ? 'hidden' : ''
                }`}
                data-node-id="1:262"
              >
                <p className="leading-[28px]">
                  View All
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[1023px] top-[229px]" data-node-id="1:263">
          <div className="absolute contents left-[1023px] top-[229px]" data-node-id="1:264">
            <div className="absolute h-[197px] left-[1023px] top-[229px] w-[224px]" data-node-id="1:265">
              <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[512px] top-[461px]" data-node-id="1:268">
          <div className="absolute contents left-[512px] top-[461px]" data-node-id="1:269">
            <div className="absolute contents left-[512px] top-[461px]" data-node-id="1:270">
              <div className="absolute contents left-[512px] top-[461px]" data-node-id="1:271">
                <Link
                  to="/categories/cat-2"
                  aria-label="Ayurveda listings"
                  className="absolute h-[197px] left-[512px] top-[461px] w-[224px]"
                  data-node-id="1:272"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[683.5px] text-[#177043] text-[11px] text-center top-[623px] whitespace-nowrap" data-node-id="1:273">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[522px] top-[469px]" data-node-id="1:274">
              <div className="absolute bg-[rgba(227,227,222,0.2)] left-[522px] rounded-[16px] size-[40px] top-[469px]" data-node-id="1:275" />
            </div>
          </div>
          <div className="absolute h-[140px] left-[512px] top-[461px] w-[224px]" data-node-id="1:276" data-name="Union">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="140" src={imgUnion4} width="224" />
          </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[572px] not-italic text-[18px] text-black text-center top-[623px] whitespace-nowrap" data-node-id="1:280">
            <p className="leading-[normal]">{`Ayurveda `}</p>
          </div>
        </div>
        <div className="absolute contents left-[1023px] top-[8px]" data-node-id="1:281">
          <div className="absolute contents left-[1023px] top-[8px]" data-node-id="1:282">
            <div className="absolute contents left-[1023px] top-[8px]" data-node-id="1:283">
              <Link
                to="/categories/cat-4"
                aria-label="Restaurants listings"
                className="absolute h-[197px] left-[1023px] top-[8px] w-[224px]"
                data-node-id="1:284"
              >
                <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
              </Link>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[1092px] not-italic text-[#1a1c19] text-[16px] text-center top-[177px] w-[108px]" data-node-id="1:286">
              <p className="leading-[28px]">Restaurants</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1194.5px] not-italic text-[#177043] text-[11px] text-center top-[177px] w-[71px]" data-node-id="1:287">
              <p className="leading-[20px]">420+ Listings</p>
            </div>
          </div>
          <div className="absolute h-[140px] left-[1023px] rounded-[32px] top-[8px] w-[223px]" data-node-id="1:288" data-name="050f04d96bd076c4e422381d2e71d632 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[158.87%] left-0 max-w-none top-[-35.46%] w-full" src={imgCategoryRestaurantsThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[1023px] top-[461px]" data-node-id="1:289">
          <div className="absolute contents left-[1023px] top-[461px]" data-node-id="1:290">
            <div className="absolute contents left-[1023px] top-[461px]" data-node-id="1:291">
              <div className="absolute contents left-[1023px] top-[461px]" data-node-id="1:292">
                <Link
                  to="/categories/cat-4"
                  aria-label="Restaurants listings"
                  className="absolute h-[197px] left-[1023px] top-[461px] w-[224px]"
                  data-node-id="1:293"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[1092px] text-[#1a1c19] text-[18px] text-center top-[623px] w-[108px]" data-node-id="1:294">
                  <p className="leading-[28px]">Restaurants</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[1194.5px] text-[#177043] text-[11px] text-center top-[623px] w-[71px]" data-node-id="1:295">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[1023px] rounded-[32px] top-[461px] w-[223px]" data-node-id="1:296" data-name="050f04d96bd076c4e422381d2e71d632 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[158.87%] left-0 max-w-none top-[-35.46%] w-full" src={imgCategoryRestaurantsThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-px top-[229px]" data-node-id="1:297">
          <div className="absolute contents left-px top-[229px]" data-node-id="1:298">
            <div className="absolute contents left-px top-[229px]" data-node-id="1:299">
              <div className="absolute contents left-px top-[229px]" data-node-id="1:300">
                <Link
                  to="/categories/banking"
                  aria-label="Banking listings"
                  className="absolute h-[197px] left-px top-[229px] w-[224px]"
                  data-node-id="1:301"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[51px] not-italic text-[16px] text-black text-center top-[398px] whitespace-nowrap" data-node-id="1:302">
                  <p className="leading-[20px]">Banking</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[172.5px] not-italic text-[#177043] text-[11px] text-center top-[398px] w-[71px]" data-node-id="1:303">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-px rounded-[32px] top-[229px] w-[224px]" data-node-id="1:304" data-name="493d32c00f46ef94c5ba534702847386 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-6.55%] w-full" src={imgCategoryBankingThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[3px] top-[693px]" data-node-id="1:305">
          <div className="absolute contents left-[3px] top-[693px]" data-node-id="1:306">
            <div className="absolute contents left-[3px] top-[693px]" data-node-id="1:307">
              <div className="absolute contents left-[3px] top-[693px]" data-node-id="1:308">
                <Link
                  to="/categories/banking"
                  aria-label="Banking listings"
                  className="absolute h-[197px] left-[3px] top-[693px] w-[224px]"
                  data-node-id="1:309"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[53px] not-italic text-[16px] text-black text-center top-[862px] whitespace-nowrap" data-node-id="1:310">
                  <p className="leading-[20px]">Banking</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[174.5px] text-[#177043] text-[11px] text-center top-[862px] whitespace-nowrap" data-node-id="1:311">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[3px] rounded-[32px] top-[693px] w-[224px]" data-node-id="1:312" data-name="493d32c00f46ef94c5ba534702847386 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-6.55%] w-full" src={imgCategoryBankingThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[768px] top-[8px]" data-node-id="1:313">
          <div className="absolute contents left-[768px] top-[8px]" data-node-id="1:314">
            <div className="absolute contents left-[768px] top-[8px]" data-node-id="1:315">
              <Link
                to="/categories/real-estate"
                aria-label="Real estate listings"
                className="absolute h-[197px] left-[768px] top-[8px] w-[224px]"
                data-node-id="1:316"
              >
                <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
              </Link>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[830px] not-italic text-[16px] text-black text-center top-[177px] whitespace-nowrap" data-node-id="1:318">
              <p className="leading-[20px]">Real estate</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[939.5px] not-italic text-[#177043] text-[11px] text-center top-[177px] w-[71px]" data-node-id="1:319">
              <p className="leading-[20px]">420+ Listings</p>
            </div>
          </div>
          <div className="absolute h-[140px] left-[768px] rounded-[32px] top-[8px] w-[224px]" data-node-id="1:320" data-name="89312fb7955766a6171fef9535b3cd6f 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[120%] left-0 max-w-none top-[-11.43%] w-full" src={imgCategoryRealEstateThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[768px] top-[461px]" data-node-id="1:321">
          <div className="absolute contents left-[768px] top-[461px]" data-node-id="1:322">
            <div className="absolute contents left-[768px] top-[461px]" data-node-id="1:323">
              <div className="absolute contents left-[768px] top-[461px]" data-node-id="1:324">
                <Link
                  to="/categories/real-estate"
                  aria-label="Real estate listings"
                  className="absolute h-[197px] left-[768px] top-[461px] w-[224px]"
                  data-node-id="1:325"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[830px] not-italic text-[18px] text-black text-center top-[623px] whitespace-nowrap" data-node-id="1:326">
                  <p className="leading-[20px]">Real estate</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[939.5px] text-[#177043] text-[11px] text-center top-[623px] whitespace-nowrap" data-node-id="1:327">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[768px] rounded-[32px] top-[461px] w-[224px]" data-node-id="1:328" data-name="89312fb7955766a6171fef9535b3cd6f 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[120%] left-0 max-w-none top-[-11.43%] w-full" src={imgCategoryRealEstateThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[258px] top-[232px]" data-node-id="1:329">
          <div className="absolute contents left-[258px] top-[232px]" data-node-id="1:330">
            <div className="absolute contents left-[258px] top-[232px]" data-node-id="1:331">
              <div className="absolute contents left-[258px] top-[232px]" data-node-id="1:332">
                <Link
                  to="/categories/cat-5"
                  aria-label="Education listings"
                  className="absolute h-[197px] left-[258px] top-[232px] w-[224px]"
                  data-node-id="1:333"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[311.5px] not-italic text-[#1a1c19] text-[16px] text-center top-[398px] whitespace-nowrap" data-node-id="1:334">
                  <p className="leading-[28px]">Education</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[429.5px] not-italic text-[#177043] text-[11px] text-center top-[398px] whitespace-nowrap" data-node-id="1:335">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[140px] items-center justify-center left-[258px] top-[232px] w-[224px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[140px] relative rounded-[32px] w-[224px]" data-node-id="1:336" data-name="1af89eb238a5ba8851d02ea86e6b1bff 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
                  <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-42.86%] w-full" src={imgCategoryEducationThumb} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[258px] top-[696px]" data-node-id="1:337">
          <div className="absolute contents left-[258px] top-[696px]" data-node-id="1:338">
            <div className="absolute contents left-[258px] top-[696px]" data-node-id="1:339">
              <div className="absolute contents left-[258px] top-[696px]" data-node-id="1:340">
                <Link
                  to="/categories/cat-5"
                  aria-label="Education listings"
                  className="absolute h-[197px] left-[258px] top-[696px] w-[224px]"
                  data-node-id="1:341"
                >
                  <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </Link>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[311.5px] not-italic text-[#1a1c19] text-[16px] text-center top-[862px] whitespace-nowrap" data-node-id="1:342">
                  <p className="leading-[28px]">Education</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[429.5px] text-[#177043] text-[11px] text-center top-[862px] whitespace-nowrap" data-node-id="1:343">
                  <p className="leading-[20px]">420+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[140px] items-center justify-center left-[258px] top-[696px] w-[224px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[140px] relative rounded-[32px] w-[224px]" data-node-id="1:344" data-name="1af89eb238a5ba8851d02ea86e6b1bff 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
                  <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-42.86%] w-full" src={imgCategoryEducationThumb} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1134.5px] not-italic text-[#006e12] text-[18px] text-center top-[328px] whitespace-nowrap ${
            categoriesExpanded ? 'hidden' : ''
          }`}
          data-node-id="1:345"
          type="button"
          aria-label="View all categories"
        >
          <p className="leading-[20px]">{`View all `}</p>
        </button>
        <div className="absolute contents left-[512px] top-[232px]" data-node-id="1:346">
          <div className="absolute contents left-[512px] top-[232px]" data-node-id="1:347">
            <div className="absolute contents left-[512px] top-[232px]" data-node-id="1:348">
              <div className="absolute contents left-[512px] top-[232px]" data-node-id="1:349">
                <div className="absolute h-[197px] left-[512px] top-[232px] w-[224px]" data-node-id="1:350">
                        <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[565px] not-italic text-[#1a1c19] text-[16px] text-center top-[398px] whitespace-nowrap" data-node-id="1:351">
                  <p className="leading-[28px]">Grocery</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[683.5px] not-italic text-[#177043] text-[11px] text-center top-[398px] whitespace-nowrap" data-node-id="1:352">
                  <p className="leading-[20px]">220+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[512px] rounded-[32px] top-[232px] w-[224px]" data-node-id="1:353" data-name="874821ca6100fd873ab0e58bac5185a1 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.58%] left-0 max-w-none top-[-6.51%] w-full" src={imgCategoryGroceryThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[512px] top-[696px]" data-node-id="1:354">
          <div className="absolute contents left-[512px] top-[696px]" data-node-id="1:355">
            <div className="absolute contents left-[512px] top-[696px]" data-node-id="1:356">
              <div className="absolute contents left-[512px] top-[696px]" data-node-id="1:357">
                <div className="absolute h-[197px] left-[512px] top-[696px] w-[224px]" data-node-id="1:358">
                        <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[565px] not-italic text-[#1a1c19] text-[16px] text-center top-[862px] whitespace-nowrap" data-node-id="1:359">
                  <p className="leading-[28px]">Grocery</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[683px] text-[#177043] text-[11px] text-center top-[862px] whitespace-nowrap" data-node-id="1:360">
                  <p className="leading-[20px]">220+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[512px] rounded-[32px] top-[696px] w-[224px]" data-node-id="1:361" data-name="874821ca6100fd873ab0e58bac5185a1 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.58%] left-0 max-w-none top-[-6.51%] w-full" src={imgCategoryGroceryThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[768px] top-[232px]" data-node-id="1:362">
          <div className="absolute contents left-[768px] top-[232px]" data-node-id="1:363">
            <div className="absolute contents left-[768px] top-[232px]" data-node-id="1:364">
              <div className="absolute contents left-[768px] top-[232px]" data-node-id="1:365">
                <div className="absolute h-[197px] left-[768px] top-[232px] w-[224px]" data-node-id="1:366">
                        <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[782px] not-italic text-[#1a1c19] text-[16px] top-[398.5px] w-[144px]" data-node-id="1:367">
                  <p className="leading-[19px]">Preowned Cars</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[943.5px] not-italic text-[#177043] text-[11px] text-center top-[400px] whitespace-nowrap" data-node-id="1:368">
                  <p className="leading-[20px]">90+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[768px] rounded-[32px] top-[232px] w-[224px]" data-node-id="1:369" data-name="dd54fb78be57ec643b7182b73ced7b46 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-6.55%] w-full" src={imgCategoryPreownedCarsThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[768px] top-[696px]" data-node-id="1:370">
          <div className="absolute contents left-[768px] top-[696px]" data-node-id="1:371">
            <div className="absolute contents left-[768px] top-[696px]" data-node-id="1:372">
              <div className="absolute contents left-[768px] top-[696px]" data-node-id="1:373">
                <div className="absolute h-[197px] left-[768px] top-[696px] w-[224px]" data-node-id="1:374">
                        <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[782px] not-italic text-[#1a1c19] text-[16px] top-[862.5px] w-[144px]" data-node-id="1:375">
                  <p className="leading-[19px]">Preowned Cars</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[939px] text-[#177043] text-[11px] text-center top-[862px] whitespace-nowrap" data-node-id="1:376">
                  <p className="leading-[20px]">90+ Listings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[140px] left-[768px] rounded-[32px] top-[696px] w-[224px]" data-node-id="1:377" data-name="dd54fb78be57ec643b7182b73ced7b46 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-6.55%] w-full" src={imgCategoryPreownedCarsThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[258px] top-[8px]" data-node-id="1:378">
          <div className="absolute contents left-[258px] top-[8px]" data-node-id="1:379">
            <div className="absolute contents left-[258px] top-[8px]" data-node-id="1:380">
              <div className="absolute h-[197px] left-[258px] top-[8px] w-[224px]" data-node-id="1:381">
                <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[429.5px] not-italic text-[#177043] text-[11px] text-center top-[177px] w-[71px]" data-node-id="1:383">
              <p className="leading-[20px]">420+ Listings</p>
            </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[319.5px] not-italic text-[16px] text-black text-center top-[177.5px] whitespace-nowrap" data-node-id="1:384">
              <p className="leading-[normal]">{`Ayurveda `}</p>
            </div>
          </div>
          <div className="absolute h-[140px] left-[258px] rounded-[32px] top-[8px] w-[224px]" data-node-id="1:385" data-name="a036b6972735638b4c91e41df25682d9 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-5.12%] w-full" src={imgCategoryAyurvedaThumb} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[512px] top-[8px]" data-node-id="1:386">
          <div className="absolute h-[197px] left-[512px] top-[8px] w-[224px]" data-node-id="1:387">
            <div className="absolute inset-0 rounded-[30.051px] bg-white ring-1 ring-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[688.5px] not-italic text-[#177043] text-[11px] text-center top-[178px] w-[79px]" data-node-id="1:389">
            <p className="leading-[20px]">180+ Listings</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-bold justify-center leading-[0] left-[585.5px] not-italic text-[#1a1c19] text-[16px] text-center top-[177px] whitespace-nowrap" data-node-id="1:390">
            <p className="leading-[28px]">Health Care</p>
          </div>
          <div className="absolute h-[140px] left-[513px] rounded-[32px] top-[8px] w-[222px]" data-node-id="1:391" data-name="4aa52036304f28ee4f59e5614ed5d98b 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[168.76%] left-[-0.09%] max-w-none top-[-15.54%] w-[100.19%]" src={imgCategoryHealthCareThumb} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#faf4e9] h-[327px] left-px rounded-[3px] top-[5132px] w-[1442px]" data-node-id="1:392" />
      <div className="absolute bg-gradient-to-r border border-[#1b794a] border-solid from-[#1a6539] h-[69px] left-[calc(33.33%+94px)] rounded-[10px] to-[#7eba24] top-[5341px] w-[296px]" data-node-id="1:393" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(25%+131px)] not-italic text-[#003314] text-[36px] top-[5175px] whitespace-nowrap tracking-[0px]" data-node-id="1:394">
        <p className="leading-[normal]">Ready to Create Business!</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[722.5px] not-italic text-[24px] text-black text-center top-[5279px] w-[1257px] tracking-[0px]" data-node-id="1:395">
        <p className="leading-[29px]">Showcase your profile to the world! Our platform is designed for both businesses and professionals to list their profiles and connect with a wider audience!</p>
      </div>
      <div className="hidden absolute left-[calc(50%+19px)] size-[13px] top-[1134px]" data-node-id="1:396">
        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.6)]" />
      </div>
      <div className="hidden absolute left-[calc(41.67%+98px)] size-[13px] top-[1134px]" data-node-id="1:397">
        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.6)]" />
      </div>
      <div className="hidden absolute left-[calc(50%-1px)] size-[13px] top-[1134px]" data-node-id="1:398">
        <div className="absolute inset-0 rounded-full bg-[#ffffff]" />
      </div>
      <div className="absolute h-[519px] left-[calc(8.33%+54px)] rounded-[10px] top-[4310px] w-[699px]" data-node-id="1:401">
        <div className="absolute inset-0 overflow-hidden rounded-[10px] bg-[#faf4e9]">
          <div
            className={`absolute inset-0 flex ${readyCarouselAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${readyCarouselIndex * 100}%)` }}
          >
            {[
              { id: 'ready-1', src: imgRectangle65, className: "absolute h-full left-[-0.03%] max-w-none top-[0.05%] w-[116.12%]" },
              { id: 'ready-2', src: imgSummitOfFuture2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'ready-3', src: imgWec26PulseBanner2, className: "absolute inset-0 max-w-none size-full object-cover" },
              // clone first for seamless loop
              { id: 'ready-1-clone', src: imgRectangle65, className: "absolute h-full left-[-0.03%] max-w-none top-[0.05%] w-[116.12%]" },
            ].map((slide) => (
              <div key={slide.id} className="relative h-full w-full shrink-0">
                <img alt="" className={slide.className + " pointer-events-none"} src={slide.src} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] z-[5]">
            {[0, 1, 2].map((i) => {
              const active = (readyCarouselIndex === 3 ? 0 : readyCarouselIndex) === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Carousel slide ${i + 1}`}
                  onClick={() => {
                    setReadyCarouselAnimating(true);
                    setReadyCarouselIndex(i);
                  }}
                  className={`size-[10px] rounded-full ${active ? 'bg-white' : 'bg-[rgba(255,255,255,0.6)]'}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute left-[897px] top-[4310px] w-[399px] h-[519px] flex flex-col gap-[21px]" data-node-id="1:402">
        {/* Right top card carousel */}
        <div className="relative w-full h-[249px] rounded-[10px] overflow-hidden bg-[#faf4e9] border border-[rgba(0,0,0,0.06)]">
          <div
            className={`absolute inset-0 flex ${readyRightTopAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${readyRightTopIndex * 100}%)` }}
          >
            {[
              { id: 'rt-1', src: imgIpl2024AdvertisingInJioCinema2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rt-2', src: imgSummitOfFuture2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rt-3', src: imgWec26PulseBanner2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rt-1-clone', src: imgIpl2024AdvertisingInJioCinema2, className: "absolute inset-0 max-w-none size-full object-cover" },
            ].map((slide) => (
              <div key={slide.id} className="relative h-full w-full shrink-0">
                <img alt="" className={slide.className + " pointer-events-none"} src={slide.src} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] z-[5]">
            {[0, 1, 2].map((i) => {
              const active = (readyRightTopIndex === 3 ? 0 : readyRightTopIndex) === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Right top carousel slide ${i + 1}`}
                  onClick={() => {
                    setReadyRightTopAnimating(true);
                    setReadyRightTopIndex(i);
                  }}
                  className={`size-[10px] rounded-full ${active ? 'bg-white' : 'bg-[rgba(255,255,255,0.6)]'}`}
                />
              );
            })}
          </div>
        </div>

        {/* Right bottom card carousel */}
        <div className="relative w-full h-[249px] rounded-[10px] overflow-hidden bg-[#faf4e9] border border-[rgba(0,0,0,0.06)]">
          <div
            className={`absolute inset-0 flex ${readyRightBottomAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${readyRightBottomIndex * 100}%)` }}
          >
            {[
              { id: 'rb-1', src: imgSummitOfFuture2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rb-2', src: imgWec26PulseBanner2, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rb-3', src: imgRectangle65, className: "absolute inset-0 max-w-none size-full object-cover" },
              { id: 'rb-1-clone', src: imgSummitOfFuture2, className: "absolute inset-0 max-w-none size-full object-cover" },
            ].map((slide) => (
              <div key={slide.id} className="relative h-full w-full shrink-0">
                <img alt="" className={slide.className + " pointer-events-none"} src={slide.src} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] z-[5]">
            {[0, 1, 2].map((i) => {
              const active = (readyRightBottomIndex === 3 ? 0 : readyRightBottomIndex) === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Right bottom carousel slide ${i + 1}`}
                  onClick={() => {
                    setReadyRightBottomAnimating(true);
                    setReadyRightBottomIndex(i);
                  }}
                  className={`size-[10px] rounded-full ${active ? 'bg-white' : 'bg-[rgba(255,255,255,0.6)]'}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Link
        to="/auth/signup"
        className="absolute left-[calc(41.67%+20px)] top-[5340px] flex h-[70px] w-[260px] items-center justify-center rounded-[18px] bg-[#006e12]"
        aria-label="Create Profile"
      >
        <span
          className="font-['Inter:Extra_Bold',sans-serif] text-[24px] font-extrabold leading-[normal] text-white"
          data-node-id="1:408"
        >
          Create Profile
        </span>
      </Link>
      <div className="hidden absolute contents left-[calc(50%+14.45px)] top-[752.07px]" data-node-id="1:409">
        <div className="absolute contents left-[calc(50%+63.72px)] not-italic top-[804.53px]" data-node-id="1:411">
          <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[68.757px] leading-[0] left-[calc(50%+83.08px)] text-[#003314] text-[24px] top-[804.53px] w-[327.904px] whitespace-pre-wrap" data-node-id="1:413">
            <p className="leading-[normal] mb-0">{`Amazing Offer for `}</p>
            <p className="leading-[normal]">Ayurveda Treatments</p>
          </div>
          <div className="absolute contents left-[calc(50%+63.72px)] text-white top-[891.56px]" data-node-id="1:414">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[76.879px] leading-[normal] left-[calc(50%+63.72px)] text-[96px] top-[891.56px] w-[183.298px]" data-node-id="1:415">
              40
            </p>
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[96.847px] leading-[1.064] left-[calc(58.33%+69.86px)] text-[96px] top-[902.55px] w-[107.416px]" data-node-id="1:416">
              %
            </p>
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[67.893px] leading-[1.064] left-[calc(66.67%+35.6px)] text-[40px] top-[952.47px] w-[132.053px]" data-node-id="1:417">
              OFF
            </p>
          </div>
          <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[57.909px] leading-[0] left-[calc(50%+68.65px)] text-[24px] text-white top-[1004.39px] w-[341.959px] whitespace-pre-wrap" data-node-id="1:418">
            <p className="leading-[normal] mb-0">{`BUY ONE TREATMENT & `}</p>
            <p className="leading-[normal]">YOUR PARTNER GETS</p>
          </div>
        </div>
        <div className="absolute h-[337.256px] left-[calc(50%+7.51px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.938px_1.891px] mask-size-[609.022px_335.471px] top-[750.18px] w-[617.971px]" data-node-id="1:420" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }} data-name="Ayurveda Resort Wayanad - Wayanad Silverwoods 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[286.03%] left-[0.03%] max-w-none top-[-122.77%] w-[104.21%]" src={imgAyurvedaResortWayanadWayanadSilverwoods3} />
          </div>
        </div>
        <div className="absolute h-[343px] left-[calc(50%+14px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.449px_5.074px] mask-size-[609.022px_335.471px] top-[747px] w-[611px]" data-node-id="1:421" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
          <div className="absolute inset-[0_-0.65%_-2.33%_-0.65%]">
            <img alt="" className="block max-w-none size-full" src={imgRectangle38} />
          </div>
        </div>
        <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[68.891px] leading-[0] left-[calc(50%+66.68px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.23px_-32.37px] mask-size-[609.022px_335.471px] not-italic text-[24px] text-white top-[784.44px] w-[289.729px] whitespace-pre-wrap" data-node-id="1:422" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
          <p className="leading-[normal] mb-0">{`Amazing Offer for `}</p>
          <p className="leading-[normal]">Ayurveda Treatments</p>
        </div>
        <div className="absolute contents left-[calc(50%+58.8px)] not-italic top-[861.49px]" data-node-id="1:423">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[76.879px] leading-[normal] left-[calc(50%+58.8px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-44.346px_-109.419px] mask-size-[609.022px_335.471px] text-[#b3e718] text-[96px] top-[861.49px] w-[183.298px]" data-node-id="1:424" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
            40
          </p>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[96.847px] leading-[1.064] left-[calc(58.33%+64.94px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-170.487px_-120.402px] mask-size-[609.022px_335.471px] text-[#b3e718] text-[96px] top-[872.48px] w-[107.416px]" data-node-id="1:425" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
            %
          </p>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[67.893px] leading-[1.064] left-[calc(66.67%+30.67px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-256.223px_-170.323px] mask-size-[609.022px_335.471px] text-[40px] text-white top-[922.4px] w-[132.053px]" data-node-id="1:426" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
            OFF
          </p>
        </div>
        <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[57.909px] leading-[0] left-[calc(50%+63.72px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-49.274px_-216.251px] mask-size-[609.022px_335.471px] not-italic text-[24px] text-white top-[968.32px] w-[341.959px] whitespace-pre-wrap" data-node-id="1:427" style={{ maskImage: `url('${imgAyurvedaResortWayanadWayanadSilverwoods2}')` }}>
          <p className="leading-[normal] mb-0">{`BUY ONE TREATMENT & `}</p>
          <p className="leading-[normal]">YOUR PARTNER GETS</p>
        </div>
      </div>
      <div className="absolute contents left-[172px] top-[4870px]" data-node-id="1:428" data-name="Mask group">
        <div className="absolute h-[279px] left-[172px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_10px] mask-size-[1086px_225px] top-[4860px] w-[1083px]" data-node-id="1:430" style={{ maskImage: `url('${imgWec26PulseBanner1}')` }} data-name="wec26-pulse-banner 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.04%] left-[-0.03%] max-w-none top-[-5.72%] w-full" src={imgWec26PulseBanner2} />
          </div>
        </div>
      </div>
      <div
        className="absolute left-[97px] overflow-hidden top-[1838px] w-[1240px] z-[5]"
        data-node-id="1:437"
        style={{ top: 1838 + (categoriesExpanded ? 398 : 0) }}
      >
        <div
          className="flex gap-[18px]"
          style={{
            transform: `translateX(-${dailyNeedsIndex * 365.39}px)`,
            transition: dailyNeedsAnimating ? 'transform 700ms ease-in-out' : 'none',
          }}
        >
          <Link
          to="/categories/cat-1"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:438"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:439" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <div className="absolute left-[83.24px] top-[167.34px] h-[316.076px] w-[261.051px] relative" data-node-id="1:441" data-name="D2 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[104.86%] left-[-11.81%] max-w-none top-[-4.74%] w-[126.96%]" src={imgD21} />
            </div>
          </div>

          <div className="absolute left-[17.93px] top-[84.05px] z-[5] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:442">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>

          <p className="absolute left-[15.84px] top-[22.41px] z-[5] h-[53.789px] w-[204.509px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white whitespace-nowrap" data-node-id="1:443">
            Dental Clinic
          </p>
        </Link>
          <Link
          to="/categories/cat-2"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:444"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:445" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <div className="absolute left-[70.89px] top-[182.24px] h-[299.064px] w-[275.417px] relative rounded-[22.073px]" data-node-id="1:447" data-name="Leading_Ayurvedic_Herbal_Oil_Manufacturer___Authentic_Wellness_Solutions_from_Nature__1_-removebg-preview 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[22.073px]">
              <img alt="" className="absolute h-[105.12%] left-0 max-w-none top-0 w-[114.14%]" src={imgLeadingAyurvedicHerbalOilManufacturerAuthenticWellnessSolutionsFromNature1RemovebgPreview1} />
            </div>
          </div>

          <p className="absolute left-[17.16px] top-[22.41px] z-[5] h-[53.789px] w-[299.112px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white whitespace-nowrap" data-node-id="1:448">
            Ayurveda and Herbals
          </p>

          <div className="absolute left-[17.93px] top-[84.05px] z-[5] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:449">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>
        </Link>
          <Link
          to="/categories/cat-3"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:450"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:451" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <p className="absolute left-[16.61px] top-[22.41px] z-[5] h-[53.789px] w-[162.772px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white" data-node-id="1:453">
            Salon
          </p>

          <div className="absolute left-[28.86px] top-[157.32px] h-[325.545px] w-[315.806px] relative" data-node-id="1:454" data-name="Hair dry 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[108.97%] left-[-7.93%] max-w-none top-[-8.97%] w-[112.33%]" src={imgHairDry1} />
            </div>
          </div>

          <div className="absolute left-[17.93px] top-[84.05px] z-[5] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:455">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>
        </Link>
          <Link
          to="/categories/cat-4"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:456"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:457" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <div className="absolute left-[89.38px] top-[151.6px] h-[329.649px] w-[257.429px] relative rounded-br-[22.073px]" data-node-id="1:459" data-name="a_male_student_with_books-removebg-preview 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[22.073px]">
              <img alt="" className="absolute h-[107.77%] left-[-20.36%] max-w-none top-[-7.77%] w-[138.01%]" src={imgAMaleStudentWithBooksRemovebgPreview1} />
            </div>
          </div>

          <p className="absolute left-[15.22px] top-[22.41px] z-[5] h-[53.789px] w-[303.285px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white" data-node-id="1:460">
            Education
          </p>

          <div className="absolute left-[17.93px] top-[84.05px] z-[5] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:461">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>
        </Link>
          <Link
          to="/categories/cat-5"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:462"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:463" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <p className="absolute left-[16.57px] top-[22.41px] h-[53.789px] w-[193.379px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white" data-node-id="1:466">
            Grocery
          </p>

          <div className="absolute left-[17.93px] top-[84.05px] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:465">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>

          <div className="absolute left-[53.79px] top-[203.95px] h-[274.55px] w-[293.601px] flex items-center justify-center" data-node-id="1:468">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[274.55px] relative w-[293.601px]" data-node-id="1:467" data-name="Download_Ai_Generated__Vegetables__Grocery__Royalty-Free_Stock_Illustration_Image-removebg-preview 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.05%] left-[-9.32%] max-w-none top-[-8.2%] w-[109.46%]" src={imgDownloadAiGeneratedVegetablesGroceryRoyaltyFreeStockIllustrationImageRemovebgPreview1} />
                </div>
              </div>
            </div>
          </div>
        </Link>
          <Link
          to="/categories/cat-6"
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[19.755px]"
          data-node-id="1:468"
        >
          <div className="absolute inset-0 bg-[#177043]" data-node-id="1:469" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <p className="absolute left-[16.68px] top-[22.41px] h-[53.789px] w-[329.719px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white" data-node-id="1:472">
            Sweet Donut
          </p>

          <div className="absolute left-[17.93px] top-[84.05px] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white" data-node-id="1:471">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>

          <div className="absolute left-[86.74px] top-[163.43px] h-[318.589px] w-[250.419px] relative" data-node-id="1:473" data-name="download__13_-removebg-preview 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[124.45%] left-0 max-w-none top-[-24.45%] w-[105.56%]" src={imgDownload13RemovebgPreview1} />
            </div>
          </div>
          </Link>
          {/* Clone of first card for seamless loop */}
          <Link
          to="/categories/cat-1"
          aria-hidden="true"
          tabIndex={-1}
          className="relative block h-[484.105px] w-[347.39px] shrink-0 cursor-pointer overflow-hidden rounded-[19.755px]"
          data-node-id="1:438-clone"
        >
          <div className="absolute inset-0 bg-[#177043]" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

          <div className="absolute left-[83.24px] top-[167.34px] h-[316.076px] w-[261.051px] relative" data-name="D2 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[104.86%] left-[-11.81%] max-w-none top-[-4.74%] w-[126.96%]" src={imgD21} />
            </div>
          </div>

          <div className="absolute left-[17.93px] top-[84.05px] z-[5] h-[45.945px] w-[290.764px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative text-[9.81px] text-white">
            <p className="leading-[13.489px]">Friendly, professional tools designed to accelerate your reach. Harness the power of organic editorial growthtoday.</p>
          </div>

          <p className="absolute left-[15.84px] top-[22.41px] z-[5] h-[53.789px] w-[204.509px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[39.241px] text-white whitespace-nowrap">
            Dental Clinic
          </p>
        </Link>
        </div>
      </div>
          <div className="absolute left-0 top-[5459px] w-[1440px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}