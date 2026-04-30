function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

const DEFAULT_SERVICES = [
  {
    title: 'Office Cleaning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Spring Cleaning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'House Cleaning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=60',
  },
]

const DEFAULT_FEATURES = [
  '100% Satisfaction',
  'Best Price',
  'Eco-Friendly Products',
  'Insured & Bonded',
  'Same-Day Booking',
  'Trained Professionals',
]

const DEFAULT_OFFERS = [
  {
    id: 'o1',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60',
    title: 'Deep Clean Package',
    description: 'Full home deep clean with eco supplies — ideal before events or season change.',
    priceActual: '£180',
    priceOffer: '£144',
    tag: 'Sale',
    link: '#',
    linkLabel: 'Book offer',
  },
  {
    id: 'o2',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=60',
    title: 'Office Refresh',
    description: 'Weekly office maintenance with sanitising high-touch surfaces.',
    priceActual: '£220',
    priceOffer: '£176',
    tag: 'Limited',
    link: '#',
    linkLabel: 'Get quote',
  },
  {
    id: 'o3',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=60',
    title: 'Move-out Sparkle',
    description: 'End-of-tenancy clean with oven and fridge add-on options.',
    priceActual: '£260',
    priceOffer: '£199',
    tag: 'Bundle',
    link: '#',
    linkLabel: 'View details',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=60',
    title: 'Standard Home Clean',
    description: 'Regular visit: kitchen, baths, floors, and dusting.',
    price: '£59 / visit',
    link: '#',
    linkLabel: 'Book',
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=60',
    title: 'Carpet & Upholstery',
    description: 'Hot-water extraction for carpets and fabric seating.',
    price: 'From £89',
    link: '#',
    linkLabel: 'Enquire',
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=600&q=60',
    title: 'Window Cleaning',
    description: 'Interior and exterior glass (ground & first floor).',
    price: '£45 / session',
    link: '#',
    linkLabel: 'Schedule',
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=60',
    title: 'Post-Construction',
    description: 'Dust removal and detail pass after renovation work.',
    price: 'From £199',
    link: '#',
    linkLabel: 'Quote',
  },
]

const DEFAULT_FEED = [
  {
    id: 'f1',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=60',
    title: '10 Spring Cleaning Tips for a Fresher Home',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    link: '#',
    linkLabel: 'Read more',
    date: '2 days ago',
  },
  {
    id: 'f2',
    image: 'https://images.unsplash.com/photo-1610557892470-b29863a06795?auto=format&fit=crop&w=800&q=60',
    title: 'Why Eco-Friendly Products Matter',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    link: '#',
    linkLabel: 'Read more',
    date: '1 week ago',
  },
  {
    id: 'f3',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60',
    title: 'How We Train Our Cleaning Experts',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    link: '#',
    linkLabel: 'Read more',
    date: '2 weeks ago',
  },
]

const DEFAULT_TESTIMONIAL_CAROUSEL = [
  {
    name: 'Olivia Richards',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Daniel Brooks',
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Sophie Allen',
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 't11-r1',
    author: 'Marcus Lee',
    rating: 5,
    text: 'Spotless every time — the team is punctual and thorough.',
    date: 'Jan 2026',
  },
  {
    id: 't11-r2',
    author: 'Ana Petrova',
    rating: 5,
    text: 'Eco products smell great and the pricing is transparent.',
    date: 'Dec 2025',
  },
  {
    id: 't11-r3',
    author: 'Chris Dale',
    rating: 4,
    text: 'Excellent deep clean; booking online was easy.',
    date: 'Nov 2025',
  },
]

function normalizeService(s, i) {
  if (!s || typeof s !== 'object') return null
  return {
    title: s.title ?? s.name ?? '',
    text: s.text ?? s.description ?? '',
    image: s.image ?? s.photo ?? s.src,
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
    linkLabel: o.linkLabel ?? 'View offer',
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

function buildTemplateElevenNav({
  offers,
  services,
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
  items.push({ label: 'About', href: '#about' })
  if (offers.length) items.push({ label: 'Offers', href: '#offers' })
  if (services.length) items.push({ label: 'Services', href: '#services' })
  if (catalogue.length) items.push({ label: catalogueNavLabel, href: '#catalogue' })
  items.push({ label: 'Contact', href: '#contact' })
  if ((address && address.trim()) || (locationUrl && String(locationUrl).trim())) {
    items.push({ label: 'Map', href: '#map' })
  }
  items.push({ label: 'Follow', href: '#social' })
  if (workingHours && Object.keys(workingHours).length) {
    items.push({ label: 'Hours', href: '#hours' })
  }
  if (testimonialCarousel.length || reviews.length) items.push({ label: 'Reviews', href: '#testimonials' })
  if (feed.length) items.push({ label: 'Feed', href: '#feed' })
  return items
}

export function resolveTemplateElevenData(businessData = {}) {
  const t = businessData.template11 ?? {}
  const brand = t.brand ?? businessData.name ?? 'Pro-Cleaning'

  const servicesRaw = Array.isArray(businessData.services) ? businessData.services : t.services
  const services = (servicesRaw?.length ? servicesRaw : DEFAULT_SERVICES)
    .map((s, i) => normalizeService(s, i))
    .filter((s) => s && s.title)

  const offersRaw = Array.isArray(businessData.offers) ? businessData.offers : t.offers
  const offers = (offersRaw?.length ? offersRaw : DEFAULT_OFFERS).map((o, i) => normalizeOffer(o, i)).filter((o) => o && o.title)

  const productsRaw = Array.isArray(businessData.products) ? businessData.products : t.catalogue ?? t.products
  const catalogue = (productsRaw?.length ? productsRaw : DEFAULT_CATALOGUE)
    .map((p, i) => normalizeCatalogueItem(p, i))
    .filter((p) => p && p.title)

  const feedRaw = Array.isArray(businessData.feed) ? businessData.feed : t.feed
  const feed = (feedRaw?.length ? feedRaw : DEFAULT_FEED).map((f, i) => normalizeFeedItem(f, i)).filter((f) => f && f.title)

  const features = t.welcome?.features?.length ? t.welcome.features : DEFAULT_FEATURES

  const testimonialRaw = t.testimonials?.items ?? businessData.testimonials
  const testimonialCarousel = (testimonialRaw?.length ? testimonialRaw : DEFAULT_TESTIMONIAL_CAROUSEL)
    .map((x, i) => normalizeCarouselItem(x, i))
    .filter((x) => x && x.quote)

  const reviewsRaw = businessData.reviews ?? t.reviews
  const reviews = (reviewsRaw?.length ? reviewsRaw : DEFAULT_REVIEWS)
    .map((r, i) => normalizeReview(r, i))
    .filter((r) => r && r.text)

  const phone = businessData.phone ?? t.phone ?? ''
  const whatsapp = businessData.whatsapp ?? t.whatsapp ?? phone
  const email = businessData.email ?? businessData.contact?.email ?? t.contact?.email ?? t.email ?? 'hello@pro-cleaning.com'
  const address =
    businessData.address ?? businessData.contact?.address ?? t.contact?.address ?? t.address ?? '128 Clean Street, London, UK'

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
          mon: '8:00 – 18:00',
          tue: '8:00 – 18:00',
          wed: '8:00 – 18:00',
          thu: '8:00 – 18:00',
          fri: '8:00 – 18:00',
          sat: '9:00 – 14:00',
          sun: 'Closed',
        }

  const locationUrl =
    businessData.locationUrl ??
    t.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const catalogueNavLabel = t.catalogueNavLabel ?? 'Catalogue'

  const nav = isValidNavItems(t.navItems)
    ? t.navItems
    : buildTemplateElevenNav({
        offers,
        services,
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
          { icon: '📞', text: phone || '+44 20 1234 5678' },
          { icon: '✉', text: email },
          { icon: '📍', text: address },
        ]

  return {
    ...t,
    brand,
    nav,
    headerCta: t.headerCta ?? 'Book Now',
    headerCtaHref: t.headerCtaHref ?? '#contact',
    phone,
    whatsapp,
    email,
    address,
    locationUrl,
    socialLinks,
    workingHours,
    offers,
    catalogue,
    feed,
    offersTitle: t.offersTitle ?? 'Offers & Promotions',
    catalogueTitle: t.catalogueTitle ?? 'Product & Service Catalogue',
    feedTitle: t.feedTitle ?? 'Feed',
    servicesTitle: t.servicesTitle ?? 'Core Services',
    socialTitle: t.socialTitle ?? 'Follow Us',
    mapTitle: t.mapTitle ?? 'Find Us',
    hoursTitle: t.hoursTitle ?? 'Opening Hours',
    reviewsFormTitle: t.reviewsFormTitle ?? 'Write a Review',
    reviewsSubmitLabel: t.reviewsSubmitLabel ?? 'Submit review',
    services,
    welcome: {
      title: 'Welcome To Our Pro-cleaning Company!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      primaryCta: 'Read More',
      secondaryCta: 'Learn More',
      ...t.welcome,
      features,
    },
    testimonialCarousel,
    reviews,
    contactItems,
    testimonials: {
      title: 'Feedback About Their Experience With Us',
      ...t.testimonials,
      items: testimonialCarousel,
    },
    contact: {
      findTitle: 'Find us',
      formTitle: 'Keep in Touch',
      submitCta: 'Get Started',
      email: 'hello@pro-cleaning.com',
      address: '128 Clean Street, London, UK',
      ...t.contact,
    },
  }
}
