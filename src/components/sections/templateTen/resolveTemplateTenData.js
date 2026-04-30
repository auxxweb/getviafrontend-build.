function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

const DEFAULT_SPECIALISTS = [
  {
    icon: '🦠',
    title: 'Covid-19 Test',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: '🫁',
    title: 'Heart Lungs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    featured: true,
  },
  {
    icon: '🥗',
    title: 'Supplement',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: '🧠',
    title: 'Mental Health',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
]

const DEFAULT_OFFERS = [
  {
    id: 't10-o1',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60',
    title: 'Annual Check-up Package',
    description: 'Full vitals, labs, and physician consult — limited appointments.',
    priceActual: '$199',
    priceOffer: '$149',
    tag: 'Sale',
    link: '#contact',
    linkLabel: 'Book now',
  },
  {
    id: 't10-o2',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=60',
    title: 'Telehealth Bundle',
    description: 'Three video visits with any general practitioner this quarter.',
    priceActual: '$120',
    priceOffer: '$89',
    tag: 'Popular',
    link: '#contact',
    linkLabel: 'Get offer',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 't10-p1',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=60',
    title: 'General Consultation',
    description: 'In-clinic visit with history review and care plan.',
    price: '$45 / visit',
    link: '#contact',
    linkLabel: 'Book',
  },
  {
    id: 't10-p2',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=60',
    title: 'Diagnostic Panel',
    description: 'Standard blood work with digital results in 24–48h.',
    price: '$79',
    link: '#contact',
    linkLabel: 'Order',
  },
  {
    id: 't10-p3',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=60',
    title: 'Specialist Referral',
    description: 'Coordinated referral and records transfer to specialty care.',
    price: 'From $30',
    link: '#contact',
    linkLabel: 'Enquire',
  },
]

const DEFAULT_FEED = [
  {
    id: 't10-f1',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60',
    title: '5 Tips for Better Sleep',
    description: 'Simple habits that support recovery and focus.',
    link: '#feed',
    linkLabel: 'Read more',
    date: '3 days ago',
  },
  {
    id: 't10-f2',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=60',
    title: 'Understanding Preventive Care',
    description: 'Why regular screenings matter at every age.',
    link: '#feed',
    linkLabel: 'Read more',
    date: '1 week ago',
  },
]

const DEFAULT_TESTIMONIAL_CAROUSEL = [
  {
    name: 'Aman Soper',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Priya Rahman',
    quote: 'Booking online was smooth and the doctor was attentive and clear about next steps.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 't10-r1',
    author: 'Jamal H.',
    rating: 5,
    text: 'Fast responses and friendly staff — telehealth worked perfectly.',
    date: 'Jan 2026',
  },
  {
    id: 't10-r2',
    author: 'Nadia K.',
    rating: 5,
    text: 'Clean clinic and transparent pricing. Highly recommend.',
    date: 'Dec 2025',
  },
]

function normalizeSpecialist(s, i) {
  if (!s || typeof s !== 'object') return null
  return {
    icon: s.icon ?? '●',
    title: s.title ?? s.name ?? '',
    text: s.text ?? s.description ?? '',
    featured: s.featured,
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
    name: name || 'Member',
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

function buildTemplateTenNav({
  offers,
  specialists,
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
  if (specialists.length) items.push({ label: 'Services', href: '#services' })
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

export function resolveTemplateTenData(businessData = {}) {
  const t = businessData.template10 ?? {}
  const brand = t.brand ?? businessData.name ?? 'E-sheba'

  const specialistsRaw = Array.isArray(businessData.services) && businessData.services.length
    ? businessData.services.map((s) => ({
        icon: s.icon ?? '🩺',
        title: s.title ?? s.name,
        text: s.text ?? s.description,
        featured: s.featured,
      }))
    : t.specialists

  const specialists = (specialistsRaw?.length ? specialistsRaw : DEFAULT_SPECIALISTS)
    .map((s, i) => normalizeSpecialist(s, i))
    .filter((s) => s && s.title)

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

  if (!testimonialCarousel.length && t.testimonials?.card?.quote) {
    const av = t.testimonials?.avatars?.[0]
    testimonialCarousel = [
      normalizeCarouselItem(
        {
          name: t.testimonials.card.name,
          quote: t.testimonials.card.quote,
          image: av,
        },
        0,
      ),
    ].filter(Boolean)
  }
  if (!testimonialCarousel.length) {
    testimonialCarousel = DEFAULT_TESTIMONIAL_CAROUSEL.map((x, i) => normalizeCarouselItem(x, i)).filter((x) => x && x.quote)
  }

  const reviewsRaw = businessData.reviews ?? t.reviews
  const reviews = (reviewsRaw?.length ? reviewsRaw : DEFAULT_REVIEWS)
    .map((r, i) => normalizeReview(r, i))
    .filter((r) => r && r.text)

  const phone = businessData.phone ?? t.phone ?? ''
  const whatsapp = businessData.whatsapp ?? t.whatsapp ?? phone
  const email =
    businessData.email ?? businessData.contact?.email ?? t.contact?.email ?? t.email ?? 'care@e-sheba.com'
  const address =
    businessData.address ??
    businessData.contact?.address ??
    t.contact?.address ??
    t.address ??
    'Dhaka, Bangladesh · Medical City Tower'

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
          mon: '8:00 – 20:00',
          tue: '8:00 – 20:00',
          wed: '8:00 – 20:00',
          thu: '8:00 – 20:00',
          fri: '8:00 – 20:00',
          sat: '9:00 – 14:00',
          sun: 'Emergency only',
        }

  const locationUrl =
    businessData.locationUrl ??
    t.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const catalogueNavLabel = t.catalogueNavLabel ?? 'Catalogue'

  const nav = isValidNavItems(t.navItems)
    ? t.navItems
    : buildTemplateTenNav({
        offers,
        specialists,
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
          { icon: '📞', text: phone || '+880 1234 567890' },
          { icon: '✉', text: email },
          { icon: '📍', text: address },
        ]

  return {
    ...t,
    brand,
    nav,
    specialists,
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
    offersTitle: t.offersTitle ?? 'Offers & Promotions',
    catalogueTitle: t.catalogueTitle ?? 'Services & Pricing',
    feedTitle: t.feedTitle ?? 'Feed',
    specialistsTitle: t.specialistsTitle ?? 'Our Consulting Specialists',
    socialTitle: t.socialTitle ?? 'Follow Us',
    mapTitle: t.mapTitle ?? 'Find Us',
    hoursTitle: t.hoursTitle ?? 'Opening Hours',
    reviewsFormTitle: t.reviewsFormTitle ?? 'Write a Review',
    reviewsSubmitLabel: t.reviewsSubmitLabel ?? 'Submit review',
    headerLogin: t.header?.login ?? 'Login',
    headerSignup: t.header?.signup ?? 'Sign up',
    headerLoginHref: t.header?.loginHref ?? '#contact',
    headerSignupHref: t.header?.signupHref ?? '#contact',
    testimonials: {
      title: "What Our Member's Saying About Us",
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      feedbackLabel: '+100 Feedback',
      ...t.testimonials,
    },
    contact: {
      findTitle: 'Contact us',
      formTitle: 'Send a message',
      submitCta: 'Submit',
      ...t.contact,
    },
    contactItems,
    why: {
      title: 'Why You Choose Us?',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=60',
      learnMore: 'Learn More',
      bullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident sunt in culpa.',
      ],
      ...t.why,
    },
    footer: {
      about: 'Connecting patients with trusted doctors and quality care — anytime, anywhere.',
      linksTitle: 'Useful Links',
      links: ['About Us', 'Privacy Policy', 'Our Mission', 'Our Team'],
      addressTitle: 'Address',
      address: 'Dhaka, Bangladesh · Medical City Tower',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=60',
      social: ['f', '📷', '𝕏'],
      copyright: '© 2026 E-sheba. All rights reserved.',
      ...t.footer,
    },
  }
}
