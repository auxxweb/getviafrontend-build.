const imgUnion =
  'https://www.figma.com/api/mcp/asset/ae92a259-09f3-4b3c-ba30-660586a698ae'
const imgAyurvedaResort =
  'https://www.figma.com/api/mcp/asset/903aba57-0c2a-4599-a237-9e43d03c6504'
const imgD21 =
  'https://www.figma.com/api/mcp/asset/c6530ab3-2ad6-4bf7-a7f1-55e899c3ad09'
const imgHerbalOil =
  'https://www.figma.com/api/mcp/asset/48c3b3df-054c-4097-a5b3-673b2762224e'
const imgHairDry =
  'https://www.figma.com/api/mcp/asset/24e7cb22-6a22-4042-a41f-6c270470d375'
const imgRestaurant =
  'https://www.figma.com/api/mcp/asset/c6f14af9-b7aa-4a21-b1aa-ebcc928011fe'
const imgGrocery =
  'https://www.figma.com/api/mcp/asset/a79878bf-dc2a-407a-b0df-652a4741b862'
const imgEducation =
  'https://www.figma.com/api/mcp/asset/e88d2fad-43f8-462d-a3f9-c33c0ed3595a'
const imgPulseBanner =
  'https://www.figma.com/api/mcp/asset/499aebdc-d56d-4d8d-8281-ee3488e96e01'
const imgSummit =
  'https://www.figma.com/api/mcp/asset/54b8979d-1efd-46d6-a815-debf56dfa86e'
const imgIpl =
  'https://www.figma.com/api/mcp/asset/903fefb4-9ce9-490b-a95f-eedd1f342be6'
const imgRectangle65 =
  'https://www.figma.com/api/mcp/asset/2bb9b86f-7261-43db-a5be-76fd0f45377c'

/** @type {ReadonlyArray<{ id: string; badgeText: string; title: string; imageSrc: string; to: string }>} */
export const ALL_OFFERS = [
  {
    id: 'o1',
    badgeText: '20% OFF',
    title: 'Organic Fresh Basket',
    imageSrc: imgUnion,
    to: '/categories/cat-6',
  },
  {
    id: 'o2',
    badgeText: '40% OFF',
    title: 'Ayurveda Treatments',
    imageSrc: imgAyurvedaResort,
    to: '/categories/cat-2',
  },
  {
    id: 'o3',
    badgeText: '15% OFF',
    title: 'Dental Care Package',
    imageSrc: imgD21,
    to: '/categories/cat-1',
  },
  {
    id: 'o4',
    badgeText: '25% OFF',
    title: 'Herbal Wellness Oils',
    imageSrc: imgHerbalOil,
    to: '/profile/l-2',
  },
  {
    id: 'o5',
    badgeText: '30% OFF',
    title: 'Salon & Styling',
    imageSrc: imgHairDry,
    to: '/categories/cat-3',
  },
  {
    id: 'o6',
    badgeText: '18% OFF',
    title: 'Dining Near You',
    imageSrc: imgRestaurant,
    to: '/categories/cat-4',
  },
  {
    id: 'o7',
    badgeText: '22% OFF',
    title: 'Grocery Essentials',
    imageSrc: imgGrocery,
    to: '/categories/cat-4',
  },
  {
    id: 'o8',
    badgeText: '12% OFF',
    title: 'Courses & Coaching',
    imageSrc: imgEducation,
    to: '/categories/cat-5',
  },
  {
    id: 'o9',
    badgeText: '35% OFF',
    title: 'Weekend Pulse Deals',
    imageSrc: imgPulseBanner,
    to: '/offers',
  },
  {
    id: 'o10',
    badgeText: '10% OFF',
    title: 'Summit & Events Pass',
    imageSrc: imgSummit,
    to: '/events',
  },
  {
    id: 'o11',
    badgeText: '28% OFF',
    title: 'Sports & Media Bundle',
    imageSrc: imgIpl,
    to: '/categories/cat-6',
  },
  {
    id: 'o12',
    badgeText: '20% OFF',
    title: 'Local Spotlight',
    imageSrc: imgRectangle65,
    to: '/profile/l-1',
  },
]

export const HOME_FEATURED_OFFERS = ALL_OFFERS.slice(0, 2)
