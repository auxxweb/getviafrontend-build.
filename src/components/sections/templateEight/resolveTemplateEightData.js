function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

const DEFAULT_INVENTORY = [
  {
    id: 't8-inv-1',
    name: 'Audi A4 Sedan',
    meta: '2021 • Automatic',
    price: '$42,300',
    tags: ['New', 'Warranty', 'Auto'],
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 't8-inv-2',
    name: 'BMW X5 Sport',
    meta: '2022 • AWD',
    price: '$58,200',
    tags: ['Featured', 'AWD', 'SUV'],
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 't8-inv-3',
    name: 'Jeep Wrangler',
    meta: '2020 • 4x4',
    price: '$33,800',
    tags: ['4x4', 'Offroad', 'Popular'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=60',
  },
]

const DEFAULT_OFFERS = [
  {
    id: 't8-o1',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=60',
    title: '0% APR for 60 months',
    description: 'Qualified buyers on select certified pre-owned inventory.',
    priceActual: '',
    priceOffer: 'Limited time',
    tag: 'Finance',
    link: '#contact',
    linkLabel: 'Apply now',
  },
  {
    id: 't8-o2',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=60',
    title: 'Winter tire package',
    description: 'Mount & balance included with any SUV purchase this month.',
    priceActual: '$899',
    priceOffer: '$649',
    tag: 'Bundle',
    link: '#contact',
    linkLabel: 'Claim offer',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 't8-c1',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60',
    title: 'Full detail & ceramic',
    description: 'Exterior wash, interior shampoo, 1-year ceramic coat.',
    price: 'From $349',
    link: '#contact',
    linkLabel: 'Book',
  },
  {
    id: 't8-c2',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=60',
    title: 'Extended warranty',
    description: 'Powertrain + roadside for qualifying models.',
    price: 'From $1,299',
    link: '#contact',
    linkLabel: 'Quote',
  },
  {
    id: 't8-c3',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=600&q=60',
    title: 'Trade-in appraisal',
    description: 'Same-day valuation with no obligation.',
    price: 'Free',
    link: '#sell',
    linkLabel: 'Start',
  },
]

const DEFAULT_FEED = [
  {
    id: 't8-f1',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=60',
    title: 'EV vs hybrid: what to buy now',
    description: 'Range, depreciation, and maintenance in plain numbers.',
    link: '#feed',
    linkLabel: 'Read',
    date: '2 days ago',
  },
  {
    id: 't8-f2',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60',
    title: 'CPO checklist',
    description: 'What certified pre-owned really covers — and what to ask.',
    link: '#feed',
    linkLabel: 'Read',
    date: '1 week ago',
  },
]

const DEFAULT_TESTIMONIAL_CAROUSEL = [
  {
    name: 'Jordan K.',
    quote: 'Transparent pricing and a smooth handoff. Drove off the lot the same day I called.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Alex Rivera',
    quote: 'Best trade-in offer I got after three dealerships. Crew was upfront about fees.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=60',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 't8-r1',
    author: 'Chris W.',
    rating: 5,
    text: 'Inventory photos matched the car. Financing desk explained every line.',
    date: 'Jan 2026',
  },
  {
    id: 't8-r2',
    author: 'Taylor M.',
    rating: 5,
    text: 'Service department squeezed me in for a pre-trip inspection — huge help.',
    date: 'Dec 2025',
  },
]

function normalizeInventoryItem(it, i) {
  if (!it || typeof it !== 'object') return null
  const name = it.name ?? it.title ?? ''
  if (!name) return null
  return {
    id: it.id ?? `inv-${i}`,
    name,
    meta: it.meta ?? it.description ?? it.subtitle ?? '',
    price: it.price ?? it.label ?? '',
    tags: Array.isArray(it.tags) ? it.tags : [],
    image: it.image ?? it.photo ?? it.src,
  }
}

function normalizeOffer(o, i) {
  if (!o || typeof o !== 'object') return null
  const priceActual = o.priceActual ?? o.originalPrice ?? o.wasPrice ?? ''
  const priceOffer = o.priceOffer ?? o.offerPrice ?? o.salePrice ?? ''
  return {
    id: o.id ?? `offer-${i}`,
    image: o.image ?? o.photo ?? o.src,
    title: o.title ?? o.name ?? '',
    description: o.description ?? o.text ?? '',
    priceActual,
    priceOffer,
    link: o.link ?? o.href ?? '#',
    linkLabel: o.linkLabel ?? 'View',
    tag: o.tag ?? o.badge,
  }
}

function normalizeCatalogueItem(p, i) {
  if (!p || typeof p !== 'object') return null
  return {
    id: p.id ?? `cat-${i}`,
    image: p.image ?? p.photo ?? p.src,
    title: p.title ?? p.name ?? '',
    description: p.description ?? p.text ?? '',
    price: p.price ?? p.label ?? '',
    link: p.link ?? p.href ?? '#',
    linkLabel: p.linkLabel ?? 'View',
  }
}

function normalizeFeedItem(f, i) {
  if (!f || typeof f !== 'object') return null
  return {
    id: f.id ?? `feed-${i}`,
    image: f.image ?? f.photo ?? f.src,
    title: f.title ?? f.name ?? '',
    description: f.description ?? f.text ?? f.excerpt ?? '',
    link: f.link ?? f.href ?? '#',
    linkLabel: f.linkLabel ?? 'Read more',
    date: f.date ?? f.meta ?? f.tag,
  }
}

function normalizeCarouselItem(x, i) {
  if (!x || typeof x !== 'object') return null
  const quote = x.quote ?? x.text ?? x.comment ?? ''
  const name = x.name ?? x.author ?? ''
  if (!quote && !name) return null
  return {
    name: name || 'Customer',
    quote,
    image: x.image ?? x.photo ?? x.src,
  }
}

function normalizeReview(r, i) {
  if (!r || typeof r !== 'object') return null
  return {
    id: r.id ?? `review-${i}`,
    author: r.author ?? r.name ?? 'Customer',
    rating: Math.min(5, Math.max(1, Number(r.rating) || 5)),
    text: r.text ?? r.comment ?? '',
    date: r.date ?? r.meta,
  }
}

function buildTemplateEightNav({
  inventory,
  offers,
  features,
  catalogue,
  testimonialCarousel,
  reviews,
  feed,
  address,
  locationUrl,
  workingHours,
  catalogueNavLabel,
}) {
  const items = [{ label: 'Home', href: '#top' }]
  if (inventory.length) items.push({ label: 'Inventory', href: '#inventory' })
  items.push({ label: 'About', href: '#about' })
  if (offers.length) items.push({ label: 'Offers', href: '#offers' })
  if (features.length) items.push({ label: 'Why us', href: '#services' })
  if (catalogue.length) items.push({ label: catalogueNavLabel, href: '#catalogue' })
  items.push({ label: 'Sell', href: '#sell' })
  items.push({ label: 'Contact', href: '#contact' })
  if ((address && address.trim()) || (locationUrl && String(locationUrl).trim())) {
    items.push({ label: 'Map', href: '#map' })
  }
  items.push({ label: 'Follow', href: '#social' })
  if (workingHours && Object.keys(workingHours).length) {
    items.push({ label: 'Hours', href: '#hours' })
  }
  if (testimonialCarousel.length || reviews.length) items.push({ label: 'Reviews', href: '#testimonials' })
  if (feed.length) items.push({ label: 'Journal', href: '#feed' })
  return items
}

export function resolveTemplateEightData(businessData = {}) {
  const t = businessData.template8 ?? {}
  const brand = t.brand ?? businessData.name ?? 'REV.AUTO'

  const inventoryRaw = Array.isArray(t.inventory) && t.inventory.length ? t.inventory : DEFAULT_INVENTORY
  const inventory = inventoryRaw.map((x, i) => normalizeInventoryItem(x, i)).filter(Boolean)

  const defaultFeatures = [
    { icon: '⚡', title: 'Fast Checkout', text: 'Quick booking and paperwork.' },
    { icon: '🛡', title: 'Warranty', text: 'Coverage on selected cars.' },
    { icon: '📍', title: 'Nearby Dealers', text: 'Find inventory near you.' },
    { icon: '🔧', title: 'Service Ready', text: 'Road-ready and maintained.' },
  ]
  const features = Array.isArray(t.features) && t.features.length ? t.features : defaultFeatures

  const offersRaw = Array.isArray(businessData.offers) ? businessData.offers : t.offers
  const offers = (offersRaw?.length ? offersRaw : DEFAULT_OFFERS).map((o, i) => normalizeOffer(o, i)).filter((o) => o && o.title)

  const productsRaw = Array.isArray(businessData.products) ? businessData.products : t.catalogue ?? t.products
  const catalogue = (productsRaw?.length ? productsRaw : DEFAULT_CATALOGUE)
    .map((p, i) => normalizeCatalogueItem(p, i))
    .filter((p) => p && p.title)

  const feedRaw = Array.isArray(businessData.feed) ? businessData.feed : t.feed
  const feed = (feedRaw?.length ? feedRaw : DEFAULT_FEED).map((f, i) => normalizeFeedItem(f, i)).filter((f) => f && f.title)

  let testimonialCarousel = (t.testimonials?.items ?? businessData.testimonials ?? [])
    .map((x, i) => normalizeCarouselItem(x, i))
    .filter((x) => x && x.quote)

  if (!testimonialCarousel.length) {
    testimonialCarousel = DEFAULT_TESTIMONIAL_CAROUSEL.map((x, i) => normalizeCarouselItem(x, i)).filter((x) => x && x.quote)
  }

  const reviewsRaw = businessData.reviews ?? t.reviews
  const reviews = (reviewsRaw?.length ? reviewsRaw : DEFAULT_REVIEWS)
    .map((r, i) => normalizeReview(r, i))
    .filter((r) => r && r.text)

  const phone = businessData.phone ?? t.phone ?? ''
  const whatsapp = businessData.whatsapp ?? t.whatsapp ?? phone
  const email = businessData.email ?? businessData.contact?.email ?? t.contact?.email ?? 'crew@rev.auto'
  const address =
    businessData.address ??
    businessData.contact?.address ??
    t.contact?.address ??
    t.address ??
    '1200 Motorway Blvd, Austin, TX'

  const socialLinks = {
    facebook: businessData.socialLinks?.facebook ?? t.socialLinks?.facebook,
    instagram: businessData.socialLinks?.instagram ?? t.socialLinks?.instagram,
    twitter: businessData.socialLinks?.twitter ?? t.socialLinks?.twitter,
    linkedin: businessData.socialLinks?.linkedin ?? t.socialLinks?.linkedin,
    youtube: businessData.socialLinks?.youtube ?? t.socialLinks?.youtube,
  }

  const workingHours =
    businessData.workingHours && Object.keys(businessData.workingHours).length
      ? businessData.workingHours
      : t.workingHours ?? {
          mon: '9:00 – 20:00',
          tue: '9:00 – 20:00',
          wed: '9:00 – 20:00',
          thu: '9:00 – 20:00',
          fri: '9:00 – 20:00',
          sat: '10:00 – 18:00',
          sun: '12:00 – 17:00',
        }

  const locationUrl =
    businessData.locationUrl ??
    t.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const catalogueNavLabel = t.catalogueNavLabel ?? 'Extras'

  const nav = isValidNavItems(t.navItems)
    ? t.navItems
    : buildTemplateEightNav({
        inventory,
        offers,
        features,
        catalogue,
        testimonialCarousel,
        reviews,
        feed,
        address,
        locationUrl,
        workingHours,
        catalogueNavLabel,
      })

  const contactItems =
    t.contact?.items?.length
      ? t.contact.items
      : [
          { icon: '📞', text: phone || '(512) 555-0142' },
          { icon: '✉', text: email },
          { icon: '📍', text: address },
        ]

  const hero = {
    title: 'Find Your Perfect\nPre-Owned Car',
    subtitle:
      'Browse verified inventory, compare pricing, and schedule a test drive in minutes.',
    image:
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=60',
    filters: ['All car', 'Max. $45k', '2024+'],
    cta: 'Find Inventory',
    ...t.hero,
  }

  const performance = {
    eyebrow: 'OUR CORE PERFORMANCE',
    title: 'Your Trust is Our\nCore Performance',
    text: 'Every vehicle is inspected, priced fairly, and backed by a dedicated support crew.',
    image:
      'https://images.unsplash.com/photo-1517524206127-48bbd363f3f7?auto=format&fit=crop&w=1200&q=60',
    bullets: [
      { title: 'Verified listings', text: 'Inspected vehicles with clear history.' },
      { title: 'Fair pricing', text: 'Market-aligned prices with no surprises.' },
      { title: 'Support crew', text: 'Help from test drive to paperwork.' },
    ],
    ...t.performance,
  }

  return {
    ...t,
    brand,
    nav,
    inventory,
    inventoryTitle: t.inventoryTitle ?? 'Featured Inventory',
    inventoryViewAll: t.inventoryViewAll ?? 'View all →',
    offers,
    catalogue,
    feed,
    testimonialCarousel,
    reviews,
    phone,
    whatsapp,
    email,
    address,
    locationUrl,
    socialLinks,
    workingHours,
    hero,
    performance,
    features,
    featuresEyebrow: t.featuresEyebrow ?? 'The REV_DRIVE Edge',
    sell: {
      text: 'Get an instant estimate and list your vehicle in minutes.',
      ...t.sell,
    },
    offersTitle: t.offersTitle ?? 'Current offers',
    catalogueTitle: t.catalogueTitle ?? 'Add-ons & services',
    feedTitle: t.feedTitle ?? 'REV Journal',
    socialTitle: t.socialTitle ?? 'Follow the showroom',
    mapTitle: t.mapTitle ?? 'Visit us',
    hoursTitle: t.hoursTitle ?? 'Showroom hours',
    reviewsFormTitle: t.reviewsFormTitle ?? 'Share your experience',
    reviewsSubmitLabel: t.reviewsSubmitLabel ?? 'Submit review',
    headerLogin: t.header?.login ?? t.headerCta ?? 'Sign In',
    headerSignup: t.header?.signup ?? 'Get started',
    headerLoginHref: t.header?.loginHref ?? '#contact',
    headerSignupHref: t.header?.signupHref ?? '#contact',
    testimonials: {
      title: 'Drivers trust REV.AUTO',
      subtitle: 'Real stories from buyers, sellers, and service customers.',
      ...t.testimonials,
    },
    contact: {
      findTitle: 'Reach the crew',
      formTitle: 'Message us',
      submitCta: 'Send message',
      text: 'Send a message to schedule a test drive.',
      ...t.contact,
    },
    contactItems,
    footer: {
      copyright: 'REV.AUTO © 2026',
      links: ['Privacy', 'Terms', 'Support'],
      ...t.footer,
    },
  }
}
