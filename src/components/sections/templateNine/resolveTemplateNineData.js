function isValidNavItems(arr) {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((item) => item && typeof item.label === 'string' && typeof item.href === 'string')
  )
}

const DEFAULT_OFFERS = [
  {
    id: 't9-o1',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60',
    title: 'Annual Wellness Package',
    description: 'Physical exam, labs, and follow-up consult — limited slots.',
    priceActual: '$249',
    priceOffer: '$189',
    tag: 'Featured',
    link: '#contact',
    linkLabel: 'Book now',
  },
  {
    id: 't9-o2',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=60',
    title: 'Telehealth Trio',
    description: 'Three secure video visits with any GP this quarter.',
    priceActual: '$135',
    priceOffer: '$99',
    tag: 'Popular',
    link: '#contact',
    linkLabel: 'Get offer',
  },
]

const DEFAULT_CATALOGUE = [
  {
    id: 't9-p1',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=60',
    title: 'General Consultation',
    description: 'In-clinic visit with history review and care plan.',
    price: '$55 / visit',
    link: '#contact',
    linkLabel: 'Book',
  },
  {
    id: 't9-p2',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=60',
    title: 'Diagnostic Panel',
    description: 'Standard blood work with digital results in 24–48h.',
    price: '$89',
    link: '#contact',
    linkLabel: 'Order',
  },
  {
    id: 't9-p3',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=60',
    title: 'Specialist Referral',
    description: 'Coordinated referral and records transfer.',
    price: 'From $35',
    link: '#contact',
    linkLabel: 'Enquire',
  },
]

const DEFAULT_FEED = [
  {
    id: 't9-f1',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60',
    title: 'Heart Health Basics',
    description: 'Prevention habits your care team wants you to know.',
    link: '#feed',
    linkLabel: 'Read more',
    date: '2 days ago',
  },
  {
    id: 't9-f2',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=60',
    title: 'When to Visit Urgent Care',
    description: 'A quick guide for patients and families.',
    link: '#feed',
    linkLabel: 'Read more',
    date: '1 week ago',
  },
]

const DEFAULT_TESTIMONIAL_CAROUSEL = [
  {
    name: 'Elena M.',
    quote:
      'The team was thorough and kind — from scheduling to follow-up, everything felt coordinated and clear.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'David Chen',
    quote: 'Same-day telehealth saved us a trip; the doctor explained options without rushing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=60',
  },
]

const DEFAULT_REVIEWS = [
  {
    id: 't9-r1',
    author: 'Priya N.',
    rating: 5,
    text: 'Spotless facilities and transparent billing. Would recommend CarePoint to anyone.',
    date: 'Jan 2026',
  },
  {
    id: 't9-r2',
    author: 'Marcus L.',
    rating: 5,
    text: 'Nurses and doctors actually listen. The patient portal is easy to use.',
    date: 'Dec 2025',
  },
]

const DEFAULT_DEPARTMENTS = [
  { icon: '❤', title: 'Cardiology' },
  { icon: '🔬', title: 'Laboratory' },
  { icon: '🧠', title: 'Neurology' },
  { icon: '🦴', title: 'Orthopedics' },
  { icon: '🚑', title: 'Emergency' },
]

const DEFAULT_SERVICE_TILES = [
  {
    tone: 'light',
    title: 'Diagnostic Imaging',
    text: 'MRI, CT, ultrasound, and X-ray with rapid reporting and coordinated follow-up.',
    cta: 'Learn More',
  },
  {
    tone: 'teal',
    title: 'Telemedicine',
    text: 'Secure video visits for follow-ups, prescriptions, and specialist consults from home.',
    cta: 'Learn More',
    icon: '📹',
  },
  {
    tone: 'navy',
    title: 'Patient Portal',
    text: 'Access records, lab results, and messaging with your care team anytime.',
    cta: 'Patient Portal',
  },
  {
    tone: 'white',
    title: 'Inpatient Care',
    text: 'Dedicated units and round-the-clock nursing for recovery and complex treatment.',
    cta: 'Learn More',
    icon: '🏥',
  },
]

const DEFAULT_DOCTORS = [
  {
    name: 'Dr. Sarah Green',
    specialty: 'Cardiology',
    status: 'Available Now',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Dr. Marcus Thorne',
    specialty: 'Neurology',
    status: 'Available Now',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16f?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Dr. Emily Ross',
    specialty: 'Pediatrics',
    status: 'Available Now',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Dr. Michael Torres',
    specialty: 'Orthopedics',
    status: 'Available Now',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=60',
  },
]

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
    author: r.author ?? r.name ?? 'Patient',
    rating: Math.min(5, Math.max(1, Number(r.rating) || 5)),
    text: r.text ?? r.comment ?? '',
    date: r.date ?? r.meta,
  }
}

function normalizeDoctor(d, i) {
  if (!d || typeof d !== 'object') return null
  const name = d.name ?? d.title ?? ''
  if (!name) return null
  return {
    name,
    specialty: d.specialty ?? d.role ?? 'Specialist',
    status: d.status ?? 'Available Now',
    image: d.image ?? d.photo ?? d.src,
    cta: d.cta ?? 'Book Appointment',
  }
}

function buildTemplateNineNav({
  departments,
  offers,
  serviceTiles,
  doctors,
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
  if (departments.length) items.push({ label: 'Departments', href: '#departments' })
  if (offers.length) items.push({ label: 'Offers', href: '#offers' })
  if (serviceTiles.length) items.push({ label: 'Services', href: '#services' })
  if (doctors.length) items.push({ label: 'Specialists', href: '#specialists' })
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

export function resolveTemplateNineData(businessData = {}) {
  const t = businessData.template9 ?? {}
  const brand = t.brand ?? businessData.name ?? 'CarePoint Health'

  const departments = (Array.isArray(t.departments) && t.departments.length ? t.departments : DEFAULT_DEPARTMENTS).filter(
    Boolean,
  )

  const doctors = (Array.isArray(t.specialists) && t.specialists.length ? t.specialists : DEFAULT_DOCTORS)
    .map((d, i) => normalizeDoctor(d, i))
    .filter(Boolean)

  const serviceTiles =
    Array.isArray(t.serviceTiles) && t.serviceTiles.length ? t.serviceTiles : DEFAULT_SERVICE_TILES

  const whyFeatures =
    t.why?.features ??
    [
      {
        icon: '🩺',
        title: 'Patient-Centered Experience',
        text: 'Care plans tailored to you and your family with clear communication at every step.',
      },
      {
        icon: '➕',
        title: 'Cutting-Edge Technology',
        text: 'Modern diagnostics and digital tools that support faster, safer treatment.',
      },
      {
        icon: '🏆',
        title: 'World-Class Specialists',
        text: 'Board-certified physicians across key disciplines, working as one coordinated team.',
      },
    ]

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

  const phone =
    businessData.phone ?? t.headerPhone ?? t.booking?.phone ?? ''
  const whatsapp = businessData.whatsapp ?? t.whatsapp ?? phone
  const email =
    businessData.email ?? businessData.contact?.email ?? t.booking?.email ?? t.contact?.email ?? 'care@carepoint.health'
  const address =
    businessData.address ??
    businessData.contact?.address ??
    t.headerAddress ??
    t.booking?.address ??
    t.contact?.address ??
    '123 Healthcare Blvd, Suite 100'

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
          sun: 'Emergency: 24/7',
        }

  const locationUrl =
    businessData.locationUrl ??
    t.locationUrl ??
    (address ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : '')

  const catalogueNavLabel = t.catalogueNavLabel ?? 'Pricing'

  const nav = isValidNavItems(t.navItems)
    ? t.navItems
    : buildTemplateNineNav({
        departments,
        offers,
        serviceTiles,
        doctors,
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
          { icon: '📞', text: phone || '(555) 123-4567' },
          { icon: '✉', text: email },
          { icon: '📍', text: address },
        ]

  const hero = {
    eyebrow: 'Your Health is Our Priority',
    title: 'Professional Clinical Care for Your Family',
    subtitle:
      'Comprehensive medical solutions with compassionate teams and the highest standards of safety, privacy, and clinical quality.',
    searchPlaceholder: 'Search for a doctor or service...',
    searchCta: 'Find a Doctor',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=60',
    floatTitle: '24/7 Support',
    floatSubtitle: 'Care Point Health',
    ...t.hero,
  }

  const why = {
    title: 'Why Choose CarePoint Health Center?',
    videoImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=60',
    features: whyFeatures,
    ...t.why,
  }

  return {
    ...t,
    brand,
    nav,
    departments,
    doctors,
    serviceTiles,
    why,
    hero,
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
    feedTitle: t.feedTitle ?? 'Health articles',
    departmentsTitle: t.departmentsTitle ?? 'Our Specialized Departments',
    departmentsSubtitle:
      t.departmentsSubtitle ??
      'From prevention to advanced treatment, our departments collaborate for seamless care.',
    servicesTitle: t.servicesTitle ?? 'Comprehensive Patient Services',
    specialistsTitle: t.specialistsTitle ?? 'Meet Our Specialists',
    specialistsSubtitle:
      t.specialistsSubtitle ??
      'Trusted experts across cardiology, neurology, pediatrics, and orthopedics.',
    specialistsLink: t.specialistsLink ?? 'See All Doctors',
    socialTitle: t.socialTitle ?? 'Follow CarePoint',
    mapTitle: t.mapTitle ?? 'Find Us',
    hoursTitle: t.hoursTitle ?? 'Opening Hours',
    reviewsFormTitle: t.reviewsFormTitle ?? 'Write a Review',
    reviewsSubmitLabel: t.reviewsSubmitLabel ?? 'Submit review',
    headerLogin: t.header?.login ?? 'Login',
    headerSignup: t.header?.signup ?? 'Sign up',
    headerLoginHref: t.header?.loginHref ?? '#contact',
    headerSignupHref: t.header?.signupHref ?? '#contact',
    testimonials: {
      title: 'What patients say about us',
      subtitle: 'Real feedback from families who trust CarePoint for coordinated care.',
      ...t.testimonials,
    },
    contact: {
      findTitle: 'Contact us',
      formTitle: 'Send a message',
      submitCta: 'Submit',
      ...t.contact,
    },
    contactItems,
    footer: {
      about:
        'A modern health system focused on accessible, coordinated care for every patient.',
      locationText: address,
      hours: 'Mon–Fri 8am–8pm · Sat 9am–2pm',
      quick: ['Book Appointment', 'Contact Support', 'About Us'],
      legal: ['Privacy Policy', 'Terms of Use', 'Accessibility'],
      social: ['f', '𝕏', '📷'],
      copyright: '© 2026 CarePoint Health System. All Rights Reserved.',
      ...t.footer,
    },
  }
}
