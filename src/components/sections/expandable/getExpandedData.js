function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

const DEFAULT_OFFERS = [
  {
    id: 'exp-o1',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    title: 'Seasonal getaway',
    description: 'Limited packages with flexible dates and premium support.',
    priceActual: '$1,299',
    priceOffer: '$999',
    tag: 'Sale',
    link: '#contact',
    linkLabel: 'Book',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 'exp-p1',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=60',
    title: 'City explorer pass',
    description: 'Guided routes, local tips, and 24/7 chat.',
    price: '$49',
    link: '#contact',
    linkLabel: 'Details',
  },
  {
    id: 'exp-p2',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=60',
    title: 'Weekend premium',
    description: 'Two nights, breakfast, and airport transfer.',
    price: 'From $320',
    link: '#contact',
    linkLabel: 'Enquire',
  },
]

const DEFAULT_FEED = [
  {
    id: 'exp-f1',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
    title: 'Packing smarter',
    description: 'A minimalist checklist for long-haul trips.',
    link: '#feed',
    linkLabel: 'Read',
    date: '3 days ago',
  },
]

const DEFAULT_CAROUSEL = [
  {
    name: 'Guest traveler',
    quote: 'Smooth booking and thoughtful details — we felt looked after the whole way.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 'exp-r1',
    author: 'Alex P.',
    rating: 5,
    text: 'Clear communication and great recommendations.',
    date: 'Jan 2026',
  },
]

export function normalizeOffer(o, i) {
  if (!o || typeof o !== 'object') return null
  return {
    id: o.id ?? `offer-${i}`,
    image: o.image ?? o.photo ?? o.src,
    title: o.title ?? o.name ?? '',
    description: o.description ?? o.text ?? '',
    priceActual: o.priceActual ?? o.originalPrice ?? o.wasPrice ?? '',
    priceOffer: o.priceOffer ?? o.offerPrice ?? o.salePrice ?? '',
    link: o.link ?? o.href ?? '#',
    linkLabel: o.linkLabel ?? 'View',
    tag: o.tag ?? o.badge,
  }
}

export function normalizeCatalogueItem(p, i) {
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

export function normalizeFeedItem(f, i) {
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

export function normalizeCarouselItem(x, i) {
  if (!x || typeof x !== 'object') return null
  const quote = x.quote ?? x.text ?? x.comment ?? ''
  const name = x.name ?? x.author ?? ''
  if (!quote && !name) return null
  return {
    name: name || 'Member',
    quote,
    image: x.image ?? x.photo ?? x.src,
  }
}

export function normalizeReview(r, i) {
  if (!r || typeof r !== 'object') return null
  return {
    id: r.id ?? `review-${i}`,
    author: r.author ?? r.name ?? 'Customer',
    rating: Math.min(5, Math.max(1, Number(r.rating) || 5)),
    text: r.text ?? r.comment ?? r.quote ?? '',
    date: r.date ?? r.meta,
  }
}

function legacyTestimonialToCarousel(t) {
  if (!t?.quote && !t?.name) return null
  return normalizeCarouselItem(
    { name: t.name, quote: t.quote, image: t.avatar },
    0,
  )
}

function legacyTestimonialToReview(t, i) {
  if (!t?.quote && !t?.text) return null
  return normalizeReview(
    {
      id: t.id,
      author: t.name ?? t.author,
      rating: t.rating ?? 5,
      text: t.quote ?? t.text,
      date: t.meta ?? t.date,
    },
    i,
  )
}

export function buildStandardExpandedNav({
  prefix = [],
  offers,
  catalogue,
  feed = [],
  contactHref = '#contact',
  mapHref = '#map',
  socialHref = '#social',
  hoursHref = '#hours',
  testimonialsHref = '#testimonials',
  feedHref = '#feed',
  address,
  locationUrl,
  workingHours,
  catalogueNavLabel = 'Shop',
  feedLabel = 'Journal',
}) {
  const items = [...prefix]
  if (offers?.length) items.push({ label: 'Offers', href: '#offers' })
  if (catalogue?.length) items.push({ label: catalogueNavLabel, href: '#catalogue' })
  items.push({ label: 'Contact', href: contactHref })
  if ((address && String(address).trim()) || (locationUrl && String(locationUrl).trim())) {
    items.push({ label: 'Map', href: mapHref })
  }
  items.push({ label: 'Follow', href: socialHref })
  if (workingHours && Object.keys(workingHours).length) {
    items.push({ label: 'Hours', href: hoursHref })
  }
  items.push({ label: 'Reviews', href: testimonialsHref })
  if (feed?.length) items.push({ label: feedLabel, href: feedHref })
  return items
}

/**
 * @param {object} businessData
 * @param {object} opts
 * @param {object} [opts.block] — templateN merge object (titles, contact overrides)
 * @param {object[]} [opts.navPrefix] — nav items before standard tail
 */
export function getExpandedData(businessData = {}, opts = {}) {
  const block = opts.block ?? {}
  const offersRaw = Array.isArray(businessData.offers) ? businessData.offers : block.offers
  const offers = (offersRaw?.length ? offersRaw : DEFAULT_OFFERS)
    .map((o, i) => normalizeOffer(o, i))
    .filter((o) => o && o.title)

  const productsRaw = Array.isArray(businessData.products) ? businessData.products : block.catalogue ?? block.products
  const catalogue = (productsRaw?.length ? productsRaw : DEFAULT_CATALOGUE)
    .map((p, i) => normalizeCatalogueItem(p, i))
    .filter((p) => p && p.title)

  const feedRaw = Array.isArray(businessData.feed) ? businessData.feed : block.feed
  const feed = (feedRaw?.length ? feedRaw : DEFAULT_FEED).map((f, i) => normalizeFeedItem(f, i)).filter((f) => f && f.title)

  const rawTestimonials = businessData.testimonials ?? block.testimonials ?? []
  let testimonialCarousel = (block.testimonials?.items ?? [])
    .map((x, i) => normalizeCarouselItem(x, i))
    .filter((x) => x && x.quote)

  if (!testimonialCarousel.length && Array.isArray(rawTestimonials)) {
    testimonialCarousel = rawTestimonials.map((t, i) => legacyTestimonialToCarousel(t)).filter(Boolean)
  }
  if (!testimonialCarousel.length) {
    testimonialCarousel = DEFAULT_CAROUSEL.map((x, i) => normalizeCarouselItem(x, i)).filter((x) => x && x.quote)
  }

  let reviewsRaw = businessData.reviews ?? block.reviews
  let reviews = (Array.isArray(reviewsRaw) ? reviewsRaw : [])
    .map((r, i) => normalizeReview(r, i))
    .filter((r) => r && r.text)

  if (!reviews.length && Array.isArray(rawTestimonials)) {
    reviews = rawTestimonials.map((t, i) => legacyTestimonialToReview(t, i)).filter(Boolean)
  }
  if (!reviews.length) {
    reviews = DEFAULT_REVIEWS.map((r, i) => normalizeReview(r, i)).filter((r) => r && r.text)
  }

  const phone = businessData.phone ?? block.phone ?? ''
  const whatsapp = businessData.whatsapp ?? block.whatsapp ?? phone
  const email =
    businessData.email ?? businessData.contact?.email ?? block.contact?.email ?? block.email ?? 'hello@example.com'
  const address =
    businessData.address ?? businessData.contact?.address ?? block.address ?? block.contact?.address ?? ''

  const socialLinks = {
    facebook: businessData.socialLinks?.facebook ?? block.socialLinks?.facebook,
    instagram: businessData.socialLinks?.instagram ?? block.socialLinks?.instagram,
    twitter: businessData.socialLinks?.twitter ?? block.socialLinks?.twitter,
    linkedin: businessData.socialLinks?.linkedin ?? block.socialLinks?.linkedin,
    youtube: businessData.socialLinks?.youtube ?? block.socialLinks?.youtube,
  }

  const workingHours =
    businessData.workingHours && Object.keys(businessData.workingHours).length
      ? businessData.workingHours
      : block.workingHours && Object.keys(block.workingHours).length
        ? block.workingHours
        : {
            mon: '9:00 – 18:00',
            tue: '9:00 – 18:00',
            wed: '9:00 – 18:00',
            thu: '9:00 – 18:00',
            fri: '9:00 – 18:00',
            sat: '10:00 – 16:00',
            sun: 'Closed',
          }

  const locationUrl =
    businessData.locationUrl ??
    block.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const contactItems =
    block.contact?.items?.length
      ? block.contact.items
      : [
          { icon: '📞', text: phone || '—' },
          { icon: '✉', text: email },
          { icon: '📍', text: address || 'Add your address' },
        ]

  return {
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
    offersTitle: block.offersTitle ?? 'Offers & deals',
    catalogueTitle: block.catalogueTitle ?? 'Plans & add-ons',
    feedTitle: block.feedTitle ?? 'Stories & tips',
    socialTitle: block.socialTitle ?? 'Follow us',
    mapTitle: block.mapTitle ?? 'Find us',
    hoursTitle: block.hoursTitle ?? 'Opening hours',
    reviewsFormTitle: block.reviewsFormTitle ?? 'Write a review',
    reviewsSubmitLabel: block.reviewsSubmitLabel ?? 'Submit review',
    testimonialsTitle: block.testimonials?.title ?? "What people say",
    catalogueNavLabel: block.catalogueNavLabel ?? 'Shop',
    feedNavLabel: block.feedNavLabel ?? 'Journal',
    contact: {
      findTitle: 'Contact',
      formTitle: 'Send a message',
      submitCta: 'Submit',
      ...block.contact,
    },
    contactItems,
    headerLogin: block.header?.login ?? 'Login',
    headerSignup: block.header?.signup ?? 'Sign up',
    headerLoginHref: block.header?.loginHref ?? '#contact',
    headerSignupHref: block.header?.signupHref ?? '#contact',
    navItems: isValidNavItems(block.navItems) ? block.navItems : null,
  }
}
