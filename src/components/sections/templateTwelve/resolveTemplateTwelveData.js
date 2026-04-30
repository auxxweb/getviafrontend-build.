const IMG = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`

function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

function buildTemplateTwelveNavItems({
  services,
  offers,
  catalogue,
  feed,
  testimonialQuotes,
  reviews,
  address,
  locationUrl,
  workingHours,
  catalogueNavLabel,
}) {
  const items = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
  ]
  if (services.length) items.push({ label: 'Services', href: '#services' })
  if (offers.length) items.push({ label: 'Offers', href: '#offers' })
  if (catalogue.length) items.push({ label: catalogueNavLabel, href: '#catalogue' })
  if (feed.length) items.push({ label: 'Feed', href: '#feed' })
  if (testimonialQuotes.length || reviews.length) items.push({ label: 'Reviews', href: '#testimonials' })
  items.push({ label: 'Follow', href: '#social' })
  if ((address && address.trim()) || (locationUrl && String(locationUrl).trim())) {
    items.push({ label: 'Map', href: '#map' })
  }
  items.push({ label: 'Contact', href: '#contact' })
  if (workingHours && Object.keys(workingHours).length) items.push({ label: 'Hours', href: '#hours' })
  return items
}

const DEFAULT_HERO = {
  image: IMG('photo-1608571423902-eed4a5ad8108', 1000),
  title: 'Skin Care Products.',
  subtitle:
    'Your skin needs our help to thrive. Make sure to explore our natural skincare products — clean formulas, gentle results.',
  cta: 'SHOP NOW',
  ctaLink: '#catalogue',
}

const DEFAULT_WELCOME = {
  title: 'Who Are We?',
  lead: 'We are the only best online store for best skin care solution.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cta: 'LEARN MORE',
  ctaLink: '#',
  image: IMG('photo-1515377905703-c4788e51af15', 800),
}

const DEFAULT_SERVICES = [
  {
    id: 's1',
    image: IMG('photo-1620916566398-39f1143ab7be'),
    title: 'Facial Treatments',
    description: 'Custom facials and gentle exfoliation tailored to your skin type.',
    link: '#',
  },
  {
    id: 's2',
    image: IMG('photo-1556228578-0d85b1a4d571'),
    title: 'Body Care',
    description: 'Nourishing washes and lotions for head-to-toe hydration.',
    link: '#',
  },
  {
    id: 's3',
    image: IMG('photo-1608571423902-eed4a5ad8108'),
    title: 'Consultations',
    description: 'One-on-one guidance to build a routine that fits your goals.',
    link: '#',
  },
  {
    id: 's4',
    image: IMG('photo-1570194065650-d99fb4b38b15'),
    title: 'Gift Sets',
    description: 'Curated bundles for gifting — wrapped and ready.',
    link: '#',
  },
]

const DEFAULT_OFFERS = [
  {
    id: 'o1',
    image: IMG('photo-1620916566398-39f1143ab7be'),
    title: 'Nourish Cream Duo',
    description: 'Two full-size jars — perfect for morning and night.',
    priceActual: '$190.00',
    priceOffer: '$152.00',
    link: '#',
    tag: 'Limited',
  },
  {
    id: 'o2',
    image: IMG('photo-1556228578-0d85b1a4d571'),
    title: 'Hand Care Bundle',
    description: 'Handwash + balm duo with complimentary travel pouch.',
    priceActual: '$145.00',
    priceOffer: '$116.00',
    link: '#',
    tag: 'Sale',
  },
  {
    id: 'o3',
    image: IMG('photo-1596755094514-f87e34085b2c'),
    title: 'Spring Routine Kit',
    description: 'Cleanser, toner, and SPF minis to refresh your shelf.',
    priceActual: '$98.00',
    priceOffer: '$74.00',
    link: '#',
    tag: 'Bundle',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 'p1',
    image: IMG('photo-1620916566398-39f1143ab7be'),
    title: 'Nourish Cream',
    description: 'Rich daily moisturizer with botanical oils for dewy skin.',
    price: '$95.00',
    link: '#',
  },
  {
    id: 'p2',
    image: IMG('photo-1556228578-0d85b1a4d571'),
    title: 'Evening Handwash',
    description: 'Gentle cleanse that leaves hands soft, never stripped.',
    price: '$120.00',
    link: '#',
  },
  {
    id: 'p3',
    image: IMG('photo-1608571423902-eed4a5ad8108'),
    title: 'CBD Muscle Gel',
    description: 'Cooling gel for shoulders and calves after long days.',
    price: '$80.00',
    link: '#',
  },
  {
    id: 'p4',
    image: IMG('photo-1570194065650-d99fb4b38b15'),
    title: 'Ordinary Set',
    description: 'Minimal essentials for sensitive skin routines.',
    price: '$95.00',
    link: '#',
  },
  {
    id: 'p5',
    image: IMG('photo-1596755094514-f87e34085b2c'),
    title: 'Minimo Travel',
    description: 'Travel-friendly minis in a cotton pouch.',
    price: '$80.00',
    link: '#',
  },
  {
    id: 'p6',
    image: IMG('photo-1556228720-195a672e8a03'),
    title: 'Evening Serum',
    description: 'Night serum duo for overnight renewal.',
    price: '$42.00',
    link: '#',
  },
]

const DEFAULT_FEED = [
  {
    id: 'f1',
    image: IMG('photo-1596462502278-27bfdc403348', 800),
    title: 'New: SPF drops are here',
    description: 'Lightweight protection that sits perfectly under makeup.',
    link: '#',
    date: '2 days ago',
  },
  {
    id: 'f2',
    image: IMG('photo-1522335789203-aabd1fc54bc9', 800),
    title: 'Behind the formula',
    description: 'How we source botanicals for our hero cleanser.',
    link: '#',
    date: '1 week ago',
  },
  {
    id: 'f3',
    image: IMG('photo-1515377905703-c4788e51af15', 800),
    title: 'Winter skin checklist',
    description: 'Five swaps to keep barrier happy when it is cold.',
    link: '#',
    date: '2 weeks ago',
  },
]

const DEFAULT_TESTIMONIAL_QUOTES = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Arthur Gallas',
  },
  {
    text: 'The textures are beautiful and my routine finally feels simple. Customer care answered every question.',
    author: 'Maya Chen',
  },
  {
    text: 'Shipping was fast and the packaging felt thoughtful. Already reordering my favourites.',
    author: 'James Wright',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 'cr1',
    author: 'Elena Brooks',
    rating: 5,
    text: 'Gorgeous textures and my skin feels calm after a week.',
    date: 'Jan 2026',
  },
  {
    id: 'cr2',
    author: 'Priya N.',
    rating: 5,
    text: 'The handwash is a staple on my counter. Never drying.',
    date: 'Dec 2025',
  },
  {
    id: 'cr3',
    author: 'Tom W.',
    rating: 4,
    text: 'Great quality — would love more SPF in the line.',
    date: 'Dec 2025',
  },
]

function normalizeTestimonialQuote(q, i) {
  if (!q || typeof q !== 'object') return null
  const text = q.text ?? q.quote ?? ''
  const author = q.author ?? q.name ?? ''
  if (!text) return null
  return { text, author }
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

function normalizeService(s, i) {
  if (!s || typeof s !== 'object') return null
  return {
    id: s.id ?? `service-${i}`,
    image: s.image ?? s.photo ?? s.src,
    title: s.title ?? s.name ?? '',
    description: s.description ?? s.text ?? '',
    link: s.link ?? s.href ?? '#',
    linkLabel: s.linkLabel ?? 'Learn more',
  }
}

function normalizeOffer(o, i) {
  if (!o || typeof o !== 'object') return null
  const priceActual = o.priceActual ?? o.originalPrice ?? o.wasPrice ?? o.regularPrice ?? o.price ?? ''
  const priceOffer = o.priceOffer ?? o.offerPrice ?? o.salePrice ?? o.discountedPrice ?? ''
  return {
    id: o.id ?? `offer-${i}`,
    image: o.image ?? o.photo ?? o.src,
    title: o.title ?? o.name ?? '',
    description: o.description ?? o.text ?? '',
    priceActual,
    priceOffer,
    link: o.link ?? o.href ?? '#',
    linkLabel: o.linkLabel ?? 'Shop offer',
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
    linkLabel: p.linkLabel ?? 'View product',
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
    date: f.date ?? f.meta,
  }
}

export function resolveTemplateTwelveData(businessData = {}) {
  const t = businessData.template12 ?? {}

  const brand = t.brand ?? businessData.name ?? 'Flores'

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

  const hero = {
    image: t.hero?.image ?? businessData.images?.[0]?.src ?? DEFAULT_HERO.image,
    title: t.hero?.title ?? businessData.tagline ?? DEFAULT_HERO.title,
    subtitle: t.hero?.subtitle ?? businessData.description ?? DEFAULT_HERO.subtitle,
    cta: t.hero?.cta ?? DEFAULT_HERO.cta,
    ctaLink: t.hero?.ctaLink ?? DEFAULT_HERO.ctaLink,
  }

  const welcomeLeadDefault = businessData.name
    ? `We are ${businessData.name} — your online store for skincare solutions.`
    : DEFAULT_WELCOME.lead

  const welcome = {
    title: t.about?.title ?? t.welcome?.title ?? DEFAULT_WELCOME.title,
    lead: t.about?.lead ?? t.welcome?.lead ?? welcomeLeadDefault,
    text: t.about?.text ?? t.welcome?.text ?? DEFAULT_WELCOME.text,
    cta: t.about?.cta ?? t.welcome?.cta ?? DEFAULT_WELCOME.cta,
    ctaLink: t.about?.ctaLink ?? t.welcome?.ctaLink ?? DEFAULT_WELCOME.ctaLink,
    image: t.about?.image ?? t.welcome?.image ?? DEFAULT_WELCOME.image,
  }

  const phone = businessData.phone ?? t.phone ?? ''
  const whatsapp = businessData.whatsapp ?? t.whatsapp ?? phone
  const email =
    businessData.email ?? businessData.contact?.email ?? t.email ?? t.contact?.email ?? ''
  const address =
    businessData.address ?? businessData.contact?.address ?? t.address ?? t.contact?.address ?? ''

  const testimonialsRaw = Array.isArray(businessData.testimonials)
    ? businessData.testimonials
    : Array.isArray(t.testimonials)
      ? t.testimonials
      : null
  const testimonialQuotes = (testimonialsRaw?.length ? testimonialsRaw : DEFAULT_TESTIMONIAL_QUOTES)
    .map((q, i) => normalizeTestimonialQuote(q, i))
    .filter(Boolean)

  const reviewsRaw = Array.isArray(businessData.reviews) ? businessData.reviews : t.reviews
  const reviews = (reviewsRaw?.length ? reviewsRaw : DEFAULT_REVIEWS)
    .map((r, i) => normalizeReview(r, i))
    .filter((r) => r && r.text)

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
    t.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const catalogueNavLabel = t.catalogueNavLabel ?? 'Shop'
  const nav = isValidNavItems(t.navItems)
    ? t.navItems
    : buildTemplateTwelveNavItems({
        services,
        offers,
        catalogue,
        feed,
        testimonialQuotes,
        reviews,
        address,
        locationUrl,
        workingHours,
        catalogueNavLabel,
      })

  return {
    brand,
    nav,
    hero,
    welcome,
    phone,
    whatsapp,
    email,
    address,
    locationUrl,
    socialLinks,
    workingHours,
    testimonialsTitle: t.testimonialsTitle ?? 'Customer Testimonials',
    reviewsFormTitle: t.reviewsFormTitle ?? 'Write a Review',
    reviewsSubmitLabel: t.reviewsSubmitLabel ?? 'SUBMIT REVIEW',
    socialTitle: t.socialTitle ?? 'Follow Us',
    mapTitle: t.mapTitle ?? 'Find Us on the Map',
    hoursTitle: t.hoursTitle ?? 'Opening Hours',
    contact: {
      findTitle: t.contact?.findTitle ?? 'Find us',
      formTitle: t.contact?.formTitle ?? 'Get in Touch',
      submitCta: t.contact?.submitCta ?? 'Send Message',
    },
    testimonialQuotes,
    reviews,
    servicesTitle: t.servicesTitle ?? 'Core Services',
    offersTitle: t.offersTitle ?? 'Offers & Promotions',
    catalogueTitle: t.catalogueTitle ?? 'Product & Service Catalogue',
    feedTitle: t.feedTitle ?? 'Feed',
    linkLabelDefault: t.linkLabelDefault ?? 'Learn more',
    services,
    offers,
    catalogue,
    feed,
  }
}
