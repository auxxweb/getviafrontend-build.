import { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { TemplateOne } from '../templates/TemplateOne.jsx'
import { TemplateTwo } from '../templates/TemplateTwo.jsx'
import { TemplateThree } from '../templates/TemplateThree.jsx'
import { TemplateFour } from '../templates/TemplateFour.jsx'
import { TemplateFive } from '../templates/TemplateFive.jsx'
import { TemplateSix } from '../templates/TemplateSix.jsx'
import { TemplateSeven } from '../templates/TemplateSeven.jsx'
import { TemplateEight } from '../templates/TemplateEight.jsx'
import { TemplateNine } from '../templates/TemplateNine.jsx'
import { TemplateTen } from '../templates/TemplateTen.jsx'
import { TemplateEleven } from '../templates/TemplateEleven.jsx'
import { TemplateTwelve } from '../templates/TemplateTwelve.jsx'

// Temporary local demo data.
// Later: replace with API fetch or a shared data store.
function useBusinessData(profileId) {
  return useMemo(() => {
    const base = {
      name: 'Ram Residency',
      description:
        'Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.',
      category: 'BEST DESTINATIONS AROUND THE WORLD',
      address: 'Badrinath Road, Tapovan, Rishikesh',
      phone: '8956751544',
      whatsapp: '#',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=60',
          alt: 'Traveler',
        },
      ],
      hero: {
        titleLines: ['Travel, enjoy', 'and live a new', 'and full life'],
        ctaLabel: 'Find out more',
      },
      destinations: [
        {
          id: 'd1',
          image:
            'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=800&q=60',
          place: 'Rome, Italy',
          priceLabel: '$5.42k',
          metaLeft: '10 Days Trip',
          metaRight: '',
        },
        {
          id: 'd2',
          image:
            'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60',
          place: 'London, UK',
          priceLabel: '$4.2k',
          metaLeft: '12 Days Trip',
          metaRight: '',
        },
        {
          id: 'd3',
          image:
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60',
          place: 'Full Europe',
          priceLabel: '$15k',
          metaLeft: '28 Days Trip',
          metaRight: '',
        },
      ],
      rating: '4.1',
      reviews: [],
      socialLinks: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
      testimonials: [
        {
          id: 't1',
          quote:
            'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.',
          name: 'Mike taylor',
          meta: 'Lahore, Pakistan',
        },
        {
          id: 't2',
          quote:
            'She met humoured sir breeding her. Six curiosity day assurance bed necessary.',
          name: 'Chris Thomas',
          meta: 'CEO of Red Button',
        },
      ],
      workingHours: {},
      template1: {
        header: { login: 'Login', signup: 'Sign up' },
        welcome: {
          eyebrow: 'WELCOME',
          title: 'Plan journeys that feel effortless',
          text:
            'From curated itineraries to trusted local partners, we help you travel with confidence — so you can focus on the moments that matter.',
          ctaLabel: 'Browse destinations',
          ctaHref: '#destinations',
          image:
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=60',
        },
        offersTitle: 'Featured getaways',
        catalogueTitle: 'Trip add-ons',
        feedTitle: 'Travel journal',
        catalogueNavLabel: 'Shop',
        feedNavLabel: 'Journal',
        mapTitle: 'Find us',
        hoursTitle: 'Office hours',
        socialTitle: 'Follow our journeys',
        contact: {
          findTitle: 'Contact',
          formTitle: 'Send a message',
          submitCta: 'Submit',
        },
      },
      template2: {
        header: { login: 'Login', signup: 'Get Fresh' },
        offersTitle: 'Farm deals',
        catalogueTitle: 'Boxes & bundles',
        feedTitle: 'From the field',
        catalogueNavLabel: 'Shop',
        feedNavLabel: 'Stories',
        mapTitle: 'Visit us',
        hoursTitle: 'Store hours',
        socialTitle: 'Stay fresh with us',
        contact: {
          findTitle: 'Reach us',
          formTitle: 'Message the team',
          submitCta: 'Send',
        },
        hero: {
          title: 'Why Choose Fresh Garden ?',
          subtitle:
            'Making your day healthier with fresh organic fruits and vegetables.',
          ctaTop: 'Get Fresh',
          cta: 'View Plan',
          image:
            'https://images.unsplash.com/photo-1524594227084-8b36b7a7f21b?auto=format&fit=crop&w=1200&q=60',
        },
        featured: [
          {
            id: 'f1',
            name: 'Fruits',
            price: '$12',
            image:
              'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=600&q=60',
          },
          {
            id: 'f2',
            name: 'Carrots',
            price: '$9',
            image:
              'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=600&q=60',
          },
          {
            id: 'f3',
            name: 'Milk',
            price: '$7',
            image:
              'https://images.unsplash.com/photo-1585238342028-4c4b4b67e8d6?auto=format&fit=crop&w=600&q=60',
          },
          {
            id: 'f4',
            name: 'Strawberries',
            price: '$11',
            image:
              'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=60',
          },
        ],
        promos: [
          { title: 'Weekend Harvest Sale', subtitle: 'Limited time offer', cta: 'Shop' },
          { title: '30% off your first organic basket', subtitle: 'New customers', cta: 'Order' },
        ],
        promiseSubtitle:
          'We are committed to deliver safe, fresh and healthy food.',
        promise: [
          { icon: '✓', title: 'Fresh', text: 'Delivered daily from local farms.' },
          { icon: '✓', title: 'Clean', text: 'Carefully handled and packed.' },
          { icon: '✓', title: 'Eco', text: 'Sustainable sourcing practices.' },
        ],
        testimonials: [
          {
            name: 'John Carter',
            meta: 'Regular customer',
            quote: 'Great quality and always fresh.',
            avatar:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
          },
          {
            name: 'Sophia Moore',
            meta: 'Local chef',
            quote: 'Perfect ingredients for my recipes.',
            avatar:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
          },
          {
            name: 'Matt Cannon',
            meta: 'Fitness coach',
            quote: 'Healthy, tasty, and fast delivery.',
            avatar:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
          },
        ],
        store: {
          lines: ['Fresh Garden Store', 'Open: 9AM - 9PM', 'Call: +91 99999 99999'],
          cta: 'Save address',
          mapImage:
            'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1000&q=60',
        },
        footerColumns: [
          { title: 'Policy', links: ['Privacy', 'Terms', 'Refund'] },
          { title: 'Store', links: ['Locations', 'Delivery', 'Pickup'] },
          { title: 'Support', links: ['Help', 'Contact', 'FAQ'] },
          { title: 'Social', links: ['Instagram', 'Facebook', 'X'] },
        ],
        copyright: 'Fresh Garden © 2026',
      },
      template3: {
        header: { login: 'Login', signup: 'Order Now' },
        offersTitle: 'Chef specials',
        catalogueTitle: 'Menu favorites',
        feedTitle: 'Kitchen stories',
        catalogueNavLabel: 'Menu',
        feedNavLabel: 'Stories',
        mapTitle: 'Find us',
        hoursTitle: 'Hours',
        socialTitle: 'Follow the table',
        contact: {
          findTitle: 'Reservations & catering',
          formTitle: 'Write to us',
          submitCta: 'Send',
        },
        hero: {
          titleTop: 'We Serve',
          titleAccent: 'Delicious Food',
          subtitle:
            'Indulge in a culinary journey where every plate is a canvas of sensory delight.',
          ctaPrimary: 'Get your dish right away',
          ctaSecondary: 'Explore Menu',
          image:
            'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=60',
        },
        philosophy: {
          eyebrow: 'OUR PHILOSOPHY',
          title: 'Experience the Art of Fine Dining',
          text:
            'At Restaurant, we believe food is more than sustenance—it’s a symphony of flavor, texture and visual artistry.',
          cta: 'View More',
          image:
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=60',
        },
        popular: {
          title: 'Most Popular Food',
          subtitle: 'Selected by our experts, loved by all.',
          items: [
            {
              id: 'm1',
              name: 'Artisan Benedict',
              price: '$12.00',
              meta: '★ 4.8 | 2k Served',
              image:
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=60',
            },
            {
              id: 'm2',
              name: 'Truffle Steak',
              price: '$42.00',
              meta: '★ 4.9 | 900 Served',
              image:
                'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=60',
            },
            {
              id: 'm3',
              name: 'Peking Glaze',
              price: '$15.00',
              meta: '★ 4.7 | 1.2k Served',
              image:
                'https://images.unsplash.com/photo-1555992336-03a23c7b20e0?auto=format&fit=crop&w=900&q=60',
            },
          ],
        },
        why: {
          title: 'Why choose our Food',
          subtitle: 'Because we keep it fresh and delicious.',
          items: [
            { icon: '✓', title: 'Quality Food', text: 'Fresh ingredients and premium recipes.' },
            { icon: '✓', title: 'Super Taste', text: 'Expert chefs craft every dish with care.' },
            { icon: '✓', title: 'Fast Delivery', text: 'Hot and fresh right to your door.' },
          ],
        },
        testimonials: [
          {
            name: 'Mary Lukach',
            quote:
              'The sensory experience at this restaurant is unparalleled. From the presentation to the very last bite, every element was crafted to perfection.',
            avatar:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
          },
        ],
        footer: {
          brand: 'Pixelspark',
          brandText:
            'Delivering the best experience through great food.',
          columns: [
            { title: 'OPENING HOURS', links: ['Mon-Fri 9AM-9PM', 'Sat 10AM-8PM', 'Sun Closed'] },
            { title: 'CONTACT US', links: ['+91 99999 99999', 'hello@pixelspark.io', 'City Center'] },
            { title: 'MORE', links: ['Privacy Policy', 'Terms', 'Support'] },
          ],
          bottomLinks: ['Privacy Policy', 'Terms', 'Contact'],
          copyright: '© 2026. All rights reserved.',
        },
      },
      template4: {
        header: {
          brand: 'FASHION',
          links: ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE'],
          cta: 'SIGN UP',
          login: 'Login',
          signup: 'Sign up',
        },
        offersTitle: 'Promos',
        catalogueTitle: 'Collections',
        feedTitle: 'Style notes',
        catalogueNavLabel: 'Shop',
        feedNavLabel: 'Journal',
        mapTitle: 'Flagship',
        hoursTitle: 'Store hours',
        socialTitle: 'Social',
        contact: {
          findTitle: 'Customer care',
          formTitle: 'Message us',
          submitCta: 'Send',
        },
        hero: {
          titleTop: "LET'S",
          titleMid: 'EXPLORE',
          titleBottom: 'UNIQUE CLOTHES.',
          subtitle: 'Live for Influential and Innovative fashion!',
          cta: 'View More',
          image:
            'https://images.unsplash.com/photo-1520975869018-52b74d3e1c9b?auto=format&fit=crop&w=900&q=60',
        },
        brands: ['HM', 'OBEY', 'SHOPIFY', 'LACOSTE', 'LEVIS', 'AMAZON'],
        newArrivals: [
          {
            name: 'Hoodies & Sweetshirt',
            subtitle: 'Explore Now!',
            image:
              'https://images.unsplash.com/photo-1520975958225-2fb6a5f2d4df?auto=format&fit=crop&w=900&q=60',
          },
          {
            name: 'Coats & Parkas',
            subtitle: 'Explore Now!',
            image:
              'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=60',
          },
          {
            name: 'Tees & T-Shirt',
            subtitle: 'Explore Now!',
            image:
              'https://images.unsplash.com/photo-1520975690821-8bba3b1b7b2e?auto=format&fit=crop&w=900&q=60',
          },
        ],
        payday: {
          title: 'PAYDAY SALE NOW',
          text: 'Spend minimal $100 get 30% off voucher code for your next purchase',
          date: '1 June - 10 June 2021',
          hint: '*Terms & Conditions apply',
          cta: 'SHOP NOW',
          image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60',
        },
        favourites: [
          {
            name: 'Trending on instagram',
            subtitle: 'Explore Now!',
            image:
              'https://images.unsplash.com/photo-1520975958225-2fb6a5f2d4df?auto=format&fit=crop&w=900&q=60',
          },
          {
            name: 'All Under $40',
            subtitle: 'Explore Now!',
            image:
              'https://images.unsplash.com/photo-1520975690821-8bba3b1b7b2e?auto=format&fit=crop&w=900&q=60',
          },
        ],
        download: {
          title: 'DOWNLOAD APP & GET THE VOUCHER!',
          text: 'Get 30% off for first transaction using our app.',
          image:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=60',
        },
        join: {
          title: 'JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO',
          subtitle: 'Type your email down below and be young wild generation',
        },
        footer: {
          brand: 'FASHION',
          text: 'Complete your style with awesome clothes from us.',
          columns: [
            { title: 'Company', links: ['About', 'Contact us', 'Support', 'Careers'] },
            { title: 'Quick Link', links: ['Share Location', 'Orders Tracking', 'Size Guide', 'FAQs'] },
            { title: 'Legal', links: ['Terms & conditions', 'Privacy Policy'] },
          ],
          copyright: '© 2026. All rights reserved.',
        },
      },
      template5: {
        brand: 'HOMYZ',
        nav: ['Home', 'About', 'Properties', 'Agents', 'News'],
        headerCta: 'Add Listing',
        header: { login: 'Login', signup: 'Add Listing' },
        offersTitle: 'Buyer incentives',
        catalogueTitle: 'Services & fees',
        feedTitle: 'Market insights',
        catalogueNavLabel: 'Services',
        feedNavLabel: 'Insights',
        mapTitle: 'Office map',
        hoursTitle: 'Broker hours',
        socialTitle: 'Connect',
        contact: {
          findTitle: 'Contact brokerage',
          formTitle: 'Request a callback',
          submitCta: 'Submit',
        },
        hero: {
          title: "Find a perfect home you'll love",
          subtitle:
            'We help you find your dream home with modern listings and verified agents.',
          image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=60',
        },
        stats: [
          { value: '1200+', label: 'Listings', icon: '🏠' },
          { value: '850+', label: 'Clients', icon: '👤' },
          { value: '320+', label: 'Agents', icon: '🧑‍💼' },
          { value: '80+', label: 'Awards', icon: '🏆' },
        ],
        best: {
          title: 'We are the best in the housing market',
          text:
            'We provide trusted listings, transparent pricing, and professional support.',
          image:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60',
        },
        properties: {
          title: "We've got properties for everyone",
          items: [
            {
              title: 'Modern Family House',
              location: 'New Delhi, India',
              price: '₹87.5L',
              beds: 3,
              baths: 2,
              area: '1450 sqft',
              image:
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60',
            },
            {
              title: 'Luxury Villa',
              location: 'Goa, India',
              price: '₹1.02Cr',
              beds: 4,
              baths: 3,
              area: '2100 sqft',
              image:
                'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60',
            },
            {
              title: 'City Apartment',
              location: 'Bengaluru, India',
              price: '₹57.3L',
              beds: 2,
              baths: 2,
              area: '980 sqft',
              image:
                'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=60',
            },
            {
              title: 'Countryside Home',
              location: 'Dehradun, India',
              price: '₹42.8L',
              beds: 3,
              baths: 2,
              area: '1300 sqft',
              image:
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=60',
            },
          ],
        },
        calc: {
          title: 'Calculate the cost of your property',
          text: 'Use our calculator to estimate monthly payments.',
          image:
            'https://images.unsplash.com/photo-1554224155-3a58922a22c3?auto=format&fit=crop&w=1200&q=60',
        },
        deals: {
          title: 'We always offer best deals',
          items: [
            {
              title: 'Studio Apartment',
              location: 'Kochi, India',
              price: '₹29.9L',
              beds: 1,
              baths: 1,
              area: '520 sqft',
              image:
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=60',
            },
            {
              title: 'Family Home',
              location: 'Noida, India',
              price: '₹62.1L',
              beds: 3,
              baths: 2,
              area: '1500 sqft',
              image:
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60',
            },
            {
              title: 'Premium Villa',
              location: 'Pune, India',
              price: '₹1.28Cr',
              beds: 4,
              baths: 3,
              area: '2450 sqft',
              image:
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60',
            },
          ],
        },
        agents: {
          title: 'Top real estate agents',
          items: [
            {
              name: 'Cameron Williamson',
              role: 'Senior Agent',
              avatar:
                'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
            },
            {
              name: 'Floyd Miles',
              role: 'Property Advisor',
              avatar:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
            },
            {
              name: 'Jenny Wilson',
              role: 'Sales Agent',
              avatar:
                'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
            },
            {
              name: 'Savannah Nguyen',
              role: 'Consultant',
              avatar:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
            },
          ],
        },
        partners: ['SKILL', 'CarsW', 'WORL', 'CHAINS', 'Portal'],
        footer: {
          about: 'Helping you find the perfect home with trusted agents.',
          columns: [
            { title: 'Company', links: ['About', 'Careers', 'Blog'] },
            { title: 'Support', links: ['Help Center', 'Contact', 'FAQs'] },
            { title: 'Legal', links: ['Privacy', 'Terms'] },
          ],
          copyright: 'HOMYZ © 2026',
        },
      },
      template6: {
        brand: 'ElegantInteriors',
        nav: ['Home', 'About', 'Services', 'Projects', 'Contact'],
        headerCta: 'Get Started',
        header: { login: 'Login', signup: 'Get Started' },
        offersTitle: 'Studio promos',
        catalogueTitle: 'Packages',
        feedTitle: 'Design digest',
        catalogueNavLabel: 'Packages',
        feedNavLabel: 'Digest',
        mapTitle: 'Studio',
        hoursTitle: 'Studio hours',
        socialTitle: 'Inspiration',
        contact: {
          findTitle: 'Start a project',
          formTitle: 'Tell us about your space',
          submitCta: 'Send',
        },
        hero: {
          title: 'Sophisticated Designs\nfor Modern Living',
          subtitle: 'Transform your space with premium interior design solutions crafted to your lifestyle.',
          cta: 'Learn More',
          imageLeft:
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=60',
          imageRight:
            'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=60',
        },
        testimonialsTitle: 'What our clients say',
        testimonialsSubtitle:
          'Real feedback from clients who transformed their spaces with us.',
        testimonials: [
          {
            name: 'John Carter',
            role: 'Home Owner',
            quote: 'Beautiful work and smooth process from start to finish.',
            avatar:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
          },
          {
            name: 'Sophia Moore',
            role: 'Business Owner',
            quote: 'The design feels modern, warm, and truly functional.',
            avatar:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
          },
          {
            name: 'Matt Cannon',
            role: 'Architect',
            quote: 'Attention to detail and great styling decisions.',
            avatar:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
          },
        ],
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Curated services designed for modern living.',
        services: [
          {
            title: 'Lighting Design',
            text: 'Ambient, task and accent lighting plans for every room.',
            image:
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=60',
          },
          {
            title: 'Furniture Styling',
            text: 'Balanced layouts with comfort-first modern pieces.',
            image:
              'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=60',
          },
          {
            title: 'Space Planning',
            text: 'Functional zones that feel open and premium.',
            image:
              'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=60',
          },
        ],
        demoTitle: 'Watch Our Demo for Confirmation',
        demo: {
          title: 'facebook',
          text: 'See how we approach modern interiors with clean lines, warm textures, and functional layouts.',
          image:
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=60',
        },
        cta: {
          title: 'Ready to start your design journey?',
          text: 'Get in touch with our designers and begin your transformation.',
          button: 'Get Started',
          image:
            'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=60',
        },
        footer: {
          text: 'Modern interior solutions for homes and offices.',
          columns: [
            { title: 'Support', links: ['Help Center', 'Contact', 'FAQs'] },
            { title: 'Services', links: ['Design', 'Planning', 'Styling'] },
            { title: 'Company', links: ['About', 'Careers', 'Blog'] },
          ],
          copyright: 'ElegantInteriors © 2026',
        },
      },
      template7: {
        brand: 'Best Food',
        nav: ['Home', 'About', 'Menu', 'Locations', 'Contact'],
        headerCta: 'BOOK A TABLE',
        header: { login: 'Login', signup: 'Book a table' },
        offersTitle: 'Tonight’s deals',
        catalogueTitle: 'Chef’s picks',
        feedTitle: 'Food news',
        catalogueNavLabel: 'Menu',
        feedNavLabel: 'News',
        mapTitle: 'Locations',
        hoursTitle: 'Opening hours',
        socialTitle: 'Follow us',
        contact: {
          findTitle: 'Guest services',
          formTitle: 'Message the restaurant',
          submitCta: 'Send',
        },
        hero: {
          eyebrow: 'ENJOY GREAT FOOD',
          title: 'Discover Restaurant\n& Delicious Food',
          subtitle: 'Best food delivered to your door with fresh ingredients.',
          ctaPrimary: 'Order Now',
          ctaSecondary: 'Reservation',
          image:
            'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=60',
        },
        stripTitle: 'Our Best Food Menu',
        menuChips: [
          { name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=60' },
          { name: 'Pizza', image: 'https://images.unsplash.com/photo-1548365328-9f547f1d8ed9?auto=format&fit=crop&w=200&q=60' },
          { name: 'Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=60' },
          { name: 'Steak', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=200&q=60' },
          { name: 'Dessert', image: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=200&q=60' },
        ],
        highlight: {
          eyebrow: 'SPECIAL',
          title: 'A moment of the\ngreat wings',
          text: 'Crispy, spicy and full of flavor. Try our signature wings today.',
          cta: 'Order Now',
          image:
            'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=60',
        },
        quoteBanner: {
          title: 'An award-winning experience for family\nand special occasions alike',
          subtitle: 'Make Food, Not War',
          image:
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60',
        },
        menuPanel: {
          title: 'Make Food, Not War',
          cta: 'Order Now',
          image:
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60',
          items: [
            { name: 'BBQ Chicken', meta: 'Spicy', price: '$20', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=200&q=60' },
            { name: 'Salad Bowl', meta: 'Healthy', price: '$12', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=60' },
            { name: 'Burger', meta: 'Classic', price: '$15', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=60' },
            { name: 'Pizza', meta: 'Cheesy', price: '$18', image: 'https://images.unsplash.com/photo-1548365328-9f547f1d8ed9?auto=format&fit=crop&w=200&q=60' },
            { name: 'Dessert', meta: 'Sweet', price: '$10', image: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=200&q=60' },
          ],
        },
        locationsTitle: 'Our Locations',
        locations: [
          {
            title: 'North region',
            text: 'A warm, cozy space with signature specials.',
            cta: 'View Menu',
            meta: '2 Reviews',
            image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20e0?auto=format&fit=crop&w=1200&q=60',
          },
          {
            title: 'Worldwide',
            text: 'Experience our flavors across the globe.',
            cta: 'View Menu',
            meta: '4 Reviews',
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60',
          },
          {
            title: 'Cardiff',
            text: 'Fresh ingredients and friendly service.',
            cta: 'View Menu',
            meta: '2 Reviews',
            image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=60',
          },
        ],
        testimonialsBg: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60',
        testimonialsTitle: "Client's Testimonial",
        testimonials: [
          {
            name: 'Mike Taylor',
            meta: 'Lahore, Pakistan',
            quote: 'On the Windows talking painted pasture yet its express parties use.',
            avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
          },
          {
            name: 'Chris Thomas',
            meta: 'CEO of Red Button',
            quote: 'Sure last upon he same as knew next. Of believed or diverted no.',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
          },
        ],
        mediaTitle: 'Local Media',
        media: [
          { title: 'New menu launched', text: 'Seasonal specials now available.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=60' },
          { title: 'Chef spotlight', text: 'Meet our head chef.', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=60' },
          { title: 'Dessert week', text: 'Sweet treats all week.', image: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=1200&q=60' },
        ],
        footer: {
          columns: [
            { title: 'About', links: ['Story', 'Team', 'Careers'] },
            { title: 'Contact', links: ['Help/FAQ', 'Press', 'Affiliates'] },
            { title: 'More', links: ['Privacy', 'Terms', 'Support'] },
            { title: 'Subscribe', links: ['Newsletter', 'Offers'] },
          ],
          copyright: 'Best Food © 2026',
        },
      },
      template8: {
        brand: 'REV.AUTO',
        header: { login: 'Sign In', signup: 'Get started' },
        offersTitle: 'Current offers',
        catalogueTitle: 'Add-ons & services',
        feedTitle: 'REV Journal',
        hero: {
          title: 'Find Your Perfect\nPre-Owned Car',
          subtitle:
            'Browse verified inventory, compare pricing, and schedule a test drive in minutes.',
          image:
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=60',
          filters: ['All car', 'Max. $45k', '2024+'],
          cta: 'Find Inventory',
        },
        inventory: [
          {
            name: 'Audi A4 Sedan',
            meta: '2021 • Automatic',
            price: '$42,300',
            tags: ['New', 'Warranty', 'Auto'],
            image:
              'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=60',
          },
          {
            name: 'BMW X5 Sport',
            meta: '2022 • AWD',
            price: '$58,200',
            tags: ['Featured', 'AWD', 'SUV'],
            image:
              'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=60',
          },
          {
            name: 'Jeep Wrangler',
            meta: '2020 • 4x4',
            price: '$33,800',
            tags: ['4x4', 'Offroad', 'Popular'],
            image:
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=60',
          },
        ],
        performance: {
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
        },
        featuresEyebrow: 'The REV_DRIVE Edge',
        features: [
          { icon: '⚡', title: 'Fast Checkout', text: 'Quick booking and paperwork.' },
          { icon: '🛡', title: 'Warranty', text: 'Coverage on selected cars.' },
          { icon: '📍', title: 'Nearby Dealers', text: 'Find inventory near you.' },
          { icon: '🔧', title: 'Service Ready', text: 'Road-ready and maintained.' },
        ],
        sell: { text: 'Get an instant estimate and list your vehicle in minutes.' },
        contact: { text: 'Send a message to schedule a test drive.' },
        footer: { copyright: 'REV.AUTO © 2026', links: ['Privacy', 'Terms', 'Support'] },
      },
      template9: {
        brand: 'CarePoint Health',
        header: { login: 'Login', signup: 'Sign up' },
        offersTitle: 'Offers & Promotions',
        catalogueTitle: 'Services & Pricing',
        feedTitle: 'Health articles',
        headerAddress: '123 Healthcare Blvd, Suite 100',
        headerPhone: '(555) 123-4567',
        headerCta: 'Get an Appointment',
        hero: {
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
        },
        departmentsTitle: 'Our Specialized Departments',
        departmentsSubtitle:
          'From prevention to advanced treatment, our departments collaborate for seamless care.',
        departments: [
          { icon: '❤', title: 'Cardiology' },
          { icon: '🔬', title: 'Laboratory' },
          { icon: '🧠', title: 'Neurology' },
          { icon: '🦴', title: 'Orthopedics' },
          { icon: '🚑', title: 'Emergency' },
        ],
        why: {
          title: 'Why Choose CarePoint Health Center?',
          videoImage:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=60',
          features: [
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
          ],
        },
        specialistsTitle: 'Meet Our Specialists',
        specialistsSubtitle:
          'Trusted experts across cardiology, neurology, pediatrics, and orthopedics.',
        specialistsLink: 'See All Doctors',
        specialists: [
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
        ],
        servicesTitle: 'Comprehensive Patient Services',
        serviceTiles: [
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
            cta: 'Access Portal',
          },
          {
            tone: 'white',
            title: 'Inpatient Care',
            text: 'Dedicated units and round-the-clock nursing for recovery and complex treatment.',
            cta: 'Learn More',
            icon: '🏥',
          },
        ],
        booking: {
          title: 'Make an Appointment',
          phone: '(555) 123-4567',
          email: 'care@carepoint.health',
          address: '123 Healthcare Blvd, Suite 100',
          hoursTitle: 'Hours',
          hoursLines: ['Mon–Fri: 8am–8pm', 'Sat: 9am–2pm', 'Emergency: 24/7'],
          branchLabel: 'Select Branch',
          branches: ['Downtown', 'West Campus', 'North Clinic'],
          specialistLabel: 'Select Specialist',
          cta: 'Book an Appointment',
        },
        footer: {
          about:
            'A modern health system focused on accessible, coordinated care for every patient.',
          locationText: '123 Healthcare Blvd, Suite 100',
          hours: 'Mon–Fri 8am–8pm · Sat 9am–2pm',
          quick: ['Book Appointment', 'Contact Support', 'About Us'],
          legal: ['Privacy Policy', 'Terms of Use', 'Accessibility'],
          social: ['f', '𝕏', '📷'],
          copyright: '© 2026 CarePoint Health System. All Rights Reserved.',
        },
      },
      template10: {
        brand: 'E-sheba',
        header: { login: 'Login', signup: 'Sign up' },
        offersTitle: 'Offers & Promotions',
        catalogueTitle: 'Services & Pricing',
        feedTitle: 'Feed',
        hero: {
          titleBefore: 'Find & Search Your ',
          titleHighlight: 'Favourite',
          titleAfter: ' Doctor',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          doctorPlaceholder: 'Doctor Name',
          locationPlaceholder: 'Location',
          image:
            'https://images.unsplash.com/photo-1612349317150-e413f6a5b16f?auto=format&fit=crop&w=800&q=60',
          stats: ['24/7 Online Support', '100+ Doctors', '1M+ Active Patients'],
        },
        specialistsTitle: 'Our Consulting Specialists',
        specialists: [
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
        ],
        why: {
          title: 'Why You Choose Us?',
          image:
            'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=60',
          learnMore: 'Learn More',
          bullets: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Excepteur sint occaecat cupidatat non proident sunt in culpa.',
          ],
        },
        testimonials: {
          title: "What Our Member's Saying About Us",
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          feedbackLabel: '+100 Feedback',
          avatars: [
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=60',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=60',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=60',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
          ],
          card: {
            name: 'Aman Soper',
            quote:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
          },
        },
        future: {
          title: 'The Future of Quality Health',
          paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          ],
          image:
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=60',
          learnMore: 'Learn More',
        },
        newsletter: {
          title: 'Subscribe To Our Newsletter',
          placeholder: 'Enter your email',
        },
        footer: {
          about: 'Connecting patients with trusted doctors and quality care — anytime, anywhere.',
          linksTitle: 'Useful Links',
          links: ['About Us', 'Privacy Policy', 'Our Mission', 'Our Team'],
          addressTitle: 'Address',
          address: 'Dhaka, Bangladesh · Medical City Tower',
          mapImage:
            'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=60',
          social: ['f', '📷', '𝕏'],
          copyright: '© 2026 E-sheba. All rights reserved.',
        },
      },
      template11: {
        brand: 'Pro-Cleaning',
        headerCta: 'Book Now',
        offersTitle: 'Offers & Promotions',
        catalogueTitle: 'Product & Service Catalogue',
        feedTitle: 'Feed',
        hero: {
          title: 'Specialized, efficient, and thorough cleaning services.',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          primaryCta: 'Get started',
          secondaryCta: 'Learn more',
          bgImage:
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=60',
          image:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=60',
        },
        servicesTitle: 'Core Services',
        welcome: {
          title: 'Welcome To Our Pro-cleaning Company!',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          primaryCta: 'Read More',
          secondaryCta: 'Learn More',
        },
        testimonials: {
          title: 'Feedback About Their Experience With Us',
        },
        contact: {
          findTitle: 'Find us',
          formTitle: 'Keep in Touch',
          email: 'hello@pro-cleaning.com',
          address: '128 Clean Street, London, UK',
          submitCta: 'Get Started',
        },
        footer: {
          about: 'Professional residential and commercial cleaning with eco-friendly products and trained staff.',
          companyTitle: 'Company',
          company: ['About', 'Careers', 'Press', 'Partners'],
          quickTitle: 'Quick Links',
          quick: ['Services', 'Offers', 'Catalogue', 'Contact'],
          newsletterTitle: 'Newsletter',
          newsletterText: 'Subscribe for tips and offers.',
          copyright: '© 2026 Pro-Cleaning. All rights reserved.',
        },
      },
      template12: {
        brand: 'Flores',
        header: { login: 'Login', signup: 'Sign up' },
        offersTitle: 'Offers & Promotions',
        catalogueTitle: 'Product & Service Catalogue',
        feedTitle: 'Feed',
        mapTitle: 'Find Us on the Map',
        hoursTitle: 'Opening Hours',
        socialTitle: 'Follow Us',
        catalogueNavLabel: 'Shop',
        feedNavLabel: 'Journal',
        contact: {
          findTitle: 'Find us',
          formTitle: 'Get in Touch',
          submitCta: 'Send Message',
        },
        hero: {
          title: 'Skin Care Products.',
          subtitle:
            'Your skin needs our help to thrive. Make sure to watch our natural skincare products.',
          cta: 'SHOP NOW',
          ctaLink: '#catalogue',
          image:
            'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=60',
        },
        about: {
          title: 'Who Are We?',
          lead: 'We are the only best online store for best skin care solution.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          cta: 'LEARN MORE',
          ctaLink: '#',
          image:
            'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=60',
        },
        servicesTitle: 'Core Services',
      },
    }

    // Slightly vary data by id so pages look different.
    if (!profileId) return base
    if (profileId === 'l-8') {
      return {
        ...base,
        name: 'REV.AUTO',
        phone: '+1 (512) 555-0188',
        whatsapp: '15125550188',
        email: 'hello@rev.auto',
        address: '1200 Motorway Blvd, Austin, TX',
        locationUrl: 'https://maps.google.com/maps?q=1200+Motorway+Blvd+Austin+TX&output=embed',
        socialLinks: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com',
          youtube: 'https://www.youtube.com',
        },
        workingHours: {
          mon: '9:00 – 21:00',
          tue: '9:00 – 21:00',
          wed: '9:00 – 21:00',
          thu: '9:00 – 21:00',
          fri: '9:00 – 21:00',
          sat: '10:00 – 19:00',
          sun: '11:00 – 17:00',
        },
        reviews: [
          {
            id: 't8-demo-1',
            author: 'Riley T.',
            rating: 5,
            text: 'No games on pricing — they walked me through the Carfax and inspection report.',
            date: 'Jan 2026',
          },
          {
            id: 't8-demo-2',
            author: 'Sam D.',
            rating: 5,
            text: 'Traded in my SUV and left with a CPO sedan same afternoon. Solid experience.',
            date: 'Dec 2025',
          },
        ],
        offers: [
          {
            id: 'l8-o1',
            title: 'First service free',
            description: 'Oil change & multi-point inspection on any purchase this month.',
            priceActual: '$129',
            priceOffer: '$0',
            tag: 'New',
            image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=60',
            link: '#contact',
            linkLabel: 'Redeem',
          },
        ],
        products: [
          {
            id: 'l8-p1',
            name: 'Paint protection film',
            description: 'Front clip PPF with 5-year warranty.',
            price: 'From $1,450',
            image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Quote',
          },
          {
            id: 'l8-p2',
            name: 'Remote start install',
            description: 'OEM-style kit with smartphone control.',
            price: '$499 installed',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Book',
          },
        ],
        feed: [
          {
            id: 'l8-f1',
            title: 'Best time to buy CPO',
            description: 'How seasonality and incentives affect certified inventory.',
            image: 'https://images.unsplash.com/photo-1494976388531-d08584c933c0?auto=format&fit=crop&w=800&q=60',
            link: '#feed',
            date: '5 days ago',
          },
        ],
        template8: {
          ...base.template8,
          testimonials: {
            ...(base.template8?.testimonials ?? {}),
            items: [
              {
                name: 'Casey Nguyen',
                quote:
                  'I compared three lots — REV had the cleanest history packet and the fairest out-the-door number.',
                image:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60',
              },
            ],
          },
          contact: {
            ...(base.template8?.contact ?? {}),
            findTitle: 'Reach the crew',
            formTitle: 'Message us',
            submitCta: 'Send message',
          },
        },
      }
    }
    if (profileId === 'l-9') {
      return {
        ...base,
        name: 'CarePoint Health',
        phone: '+1 (415) 555-0199',
        whatsapp: '14155550199',
        email: 'hello@carepoint.health',
        address: '450 Mission St, San Francisco, CA',
        locationUrl: 'https://maps.google.com/maps?q=450+Mission+St+San+Francisco&output=embed',
        socialLinks: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com',
          youtube: 'https://www.youtube.com',
        },
        workingHours: {
          mon: '7:00 – 21:00',
          tue: '7:00 – 21:00',
          wed: '7:00 – 21:00',
          thu: '7:00 – 21:00',
          fri: '7:00 – 21:00',
          sat: '8:00 – 16:00',
          sun: 'Urgent care only',
        },
        reviews: [
          {
            id: 't9-demo-1',
            author: 'Sofia R.',
            rating: 5,
            text: 'Friendly intake and clear follow-up instructions — the portal is actually easy.',
            date: 'Jan 2026',
          },
          {
            id: 't9-demo-2',
            author: 'James P.',
            rating: 5,
            text: 'Imaging results were ready faster than expected. Great coordination between departments.',
            date: 'Dec 2025',
          },
        ],
        offers: [
          {
            id: 'l9-o1',
            title: 'New Patient Physical',
            description: 'Complete exam with labs and lifestyle consult.',
            priceActual: '$320',
            priceOffer: '$249',
            tag: 'New',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60',
            link: '#contact',
            linkLabel: 'Schedule',
          },
        ],
        products: [
          {
            id: 'l9-p1',
            name: 'Urgent Care Visit',
            description: 'Same-day visit for non-life-threatening concerns.',
            price: '$125',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Book',
          },
          {
            id: 'l9-p2',
            name: 'MRI + Radiologist Read',
            description: 'High-field MRI with report within 48 hours.',
            price: 'From $890',
            image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Enquire',
          },
        ],
        feed: [
          {
            id: 'l9-f1',
            title: 'Flu season checklist',
            description: 'Vaccines, hygiene, and when to call your clinician.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60',
            link: '#feed',
            date: '4 days ago',
          },
        ],
        template9: {
          ...base.template9,
          testimonials: {
            ...(base.template9?.testimonials ?? {}),
            items: [
              {
                name: 'Maria G.',
                quote:
                  'CarePoint made a stressful week manageable — scheduling, billing, and the clinical team were all aligned.',
                image:
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=60',
              },
            ],
          },
          contact: {
            ...(base.template9?.contact ?? {}),
            findTitle: 'Contact us',
            formTitle: 'Send a message',
            submitCta: 'Submit',
          },
        },
      }
    }
    if (profileId === 'l-10') {
      return {
        ...base,
        name: 'E-sheba',
        phone: '+880 1711 223344',
        whatsapp: '8801711223344',
        email: 'care@e-sheba.com',
        address: 'Dhaka, Bangladesh · Medical City Tower',
        socialLinks: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com',
          youtube: 'https://www.youtube.com',
        },
        workingHours: {
          mon: '8:00 – 20:00',
          tue: '8:00 – 20:00',
          wed: '8:00 – 20:00',
          thu: '8:00 – 20:00',
          fri: '8:00 – 20:00',
          sat: '9:00 – 14:00',
          sun: 'Emergency only',
        },
        reviews: [
          {
            id: 't10-demo-1',
            author: 'Jamal H.',
            rating: 5,
            text: 'Fast responses and friendly staff — telehealth worked perfectly.',
            date: 'Jan 2026',
          },
          {
            id: 't10-demo-2',
            author: 'Nadia K.',
            rating: 5,
            text: 'Clean clinic and transparent pricing. Highly recommend.',
            date: 'Dec 2025',
          },
        ],
        offers: [
          {
            id: 'l10-o1',
            title: 'Annual Check-up Package',
            description: 'Full vitals, labs, and physician consult.',
            priceActual: '$199',
            priceOffer: '$149',
            tag: 'Sale',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60',
            link: '#contact',
            linkLabel: 'Book now',
          },
        ],
        products: [
          {
            id: 'l10-p1',
            name: 'General Consultation',
            description: 'In-clinic visit with care plan.',
            price: '$45 / visit',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Book',
          },
          {
            id: 'l10-p2',
            name: 'Diagnostic Panel',
            description: 'Standard blood work with digital results.',
            price: '$79',
            image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Order',
          },
        ],
        feed: [
          {
            id: 'l10-f1',
            title: '5 Tips for Better Sleep',
            description: 'Simple habits that support recovery and focus.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60',
            link: '#feed',
            date: '3 days ago',
          },
        ],
        template10: {
          ...base.template10,
          contact: {
            ...(base.template10?.contact ?? {}),
            findTitle: 'Contact us',
            formTitle: 'Send a message',
            submitCta: 'Submit',
          },
        },
      }
    }
    if (profileId === 'l-11') {
      return {
        ...base,
        name: 'Pro-Cleaning',
        phone: '+44 20 1234 5678',
        whatsapp: '+442012345678',
        email: 'hello@pro-cleaning.com',
        address: '128 Clean Street, London, UK',
        socialLinks: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com',
          youtube: 'https://www.youtube.com',
        },
        workingHours: {
          mon: '8:00 – 18:00',
          tue: '8:00 – 18:00',
          wed: '8:00 – 18:00',
          thu: '8:00 – 20:00',
          fri: '8:00 – 18:00',
          sat: '9:00 – 14:00',
          sun: 'Closed',
        },
        reviews: [
          {
            id: 't11-demo-1',
            author: 'Marcus Lee',
            rating: 5,
            text: 'Spotless every time — the team is punctual and thorough.',
            date: 'Jan 2026',
          },
          {
            id: 't11-demo-2',
            author: 'Ana Petrova',
            rating: 5,
            text: 'Eco products smell great and the pricing is transparent.',
            date: 'Dec 2025',
          },
          {
            id: 't11-demo-3',
            author: 'Chris Dale',
            rating: 4,
            text: 'Excellent deep clean; booking online was easy.',
            date: 'Nov 2025',
          },
        ],
        offers: [
          {
            id: 'l11-o1',
            title: 'Spring Deep Clean',
            description: 'Full home deep clean with eco supplies — limited slots this month.',
            priceActual: '£180',
            priceOffer: '£144',
            tag: 'Sale',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60',
            link: '#contact',
            linkLabel: 'Book offer',
          },
          {
            id: 'l11-o2',
            title: 'Office Refresh',
            description: 'Weekly office maintenance with sanitising for high-touch surfaces.',
            priceActual: '£220',
            priceOffer: '£176',
            tag: 'Popular',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=60',
            link: '#contact',
            linkLabel: 'Get quote',
          },
        ],
        products: [
          {
            id: 'l11-p1',
            name: 'Standard Home Clean',
            description: 'Regular visit: kitchen, baths, floors, and dusting.',
            price: '£59 / visit',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Book',
          },
          {
            id: 'l11-p2',
            name: 'Carpet & Upholstery',
            description: 'Hot-water extraction for carpets and fabric seating.',
            price: 'From £89',
            image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Enquire',
          },
          {
            id: 'l11-p3',
            name: 'Window Cleaning',
            description: 'Interior and exterior glass (ground & first floor).',
            price: '£45 / session',
            image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=600&q=60',
            link: '#contact',
            linkLabel: 'Schedule',
          },
        ],
        feed: [
          {
            id: 'l11-f1',
            title: '10 Spring Cleaning Tips',
            description: 'Lightweight checklist to refresh your home before warmer days.',
            image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=60',
            link: '#feed',
            date: '2 days ago',
          },
          {
            id: 'l11-f2',
            title: 'Why Eco-Friendly Products Matter',
            description: 'Safer for pets, kids, and the technicians who use them daily.',
            image: 'https://images.unsplash.com/photo-1610557892470-b29863a06795?auto=format&fit=crop&w=800&q=60',
            link: '#feed',
            date: '1 week ago',
          },
        ],
        template11: {
          ...base.template11,
          contact: {
            ...(base.template11?.contact ?? {}),
            findTitle: 'Find us',
            formTitle: 'Keep in Touch',
            submitCta: 'Get Started',
          },
        },
      }
    }
    if (profileId === 'l-12') {
      return {
        ...base,
        name: 'Flores',
        phone: '+44 20 7946 0958',
        whatsapp: '+442079460958',
        tagline: 'Skin Care Products.',
        description:
          'Your skin needs our help to thrive. Make sure to explore our natural skincare products — clean formulas, gentle results.',
        template12: {
          ...base.template12,
          hero: {
            ...(base.template12?.hero ?? {}),
            title: 'Skin Care Products.',
            subtitle:
              'Your skin needs our help to thrive. Make sure to watch our natural skincare products.',
            cta: 'SHOP NOW',
            ctaLink: '#catalogue',
            image:
              'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=60',
          },
          about: {
            ...(base.template12?.about ?? {}),
            title: 'Who Are We?',
            lead: 'We are the only best online store for best skin care solution.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cta: 'LEARN MORE',
            ctaLink: '#',
            image:
              'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=60',
          },
          contact: {
            findTitle: 'Find us',
            formTitle: 'Get in Touch',
            submitCta: 'Send Message',
          },
        },
        services: [
          {
            id: 's1',
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=60',
            title: 'Facial Treatments',
            description: 'Custom facials and gentle exfoliation tailored to your skin type.',
            link: '#facials',
            linkLabel: 'Book now',
          },
          {
            id: 's2',
            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=60',
            title: 'Body Care',
            description: 'Nourishing washes and lotions for head-to-toe hydration.',
            link: '#body',
            linkLabel: 'Explore',
          },
          {
            id: 's3',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=60',
            title: 'Consultations',
            description: 'One-on-one guidance to build a routine that fits your goals.',
            link: '#consult',
            linkLabel: 'Schedule',
          },
          {
            id: 's4',
            image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?auto=format&fit=crop&w=800&q=60',
            title: 'Gift Sets',
            description: 'Curated bundles for gifting — wrapped and ready.',
            link: '#gifts',
            linkLabel: 'Shop sets',
          },
        ],
        offers: [
          {
            id: 'o1',
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=60',
            title: 'Nourish Cream Duo',
            description: 'Two full-size jars — perfect for morning and night.',
            priceActual: '$190.00',
            priceOffer: '$152.00',
            tag: 'Limited',
            link: '#offer-1',
            linkLabel: 'Shop offer',
          },
          {
            id: 'o2',
            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=60',
            title: 'Hand Care Bundle',
            description: 'Handwash + balm duo with complimentary travel pouch.',
            priceActual: '$145.00',
            priceOffer: '$116.00',
            tag: 'Sale',
            link: '#offer-2',
            linkLabel: 'Shop offer',
          },
          {
            id: 'o3',
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=60',
            title: 'Spring Routine Kit',
            description: 'Cleanser, toner, and SPF minis to refresh your shelf.',
            priceActual: '$98.00',
            priceOffer: '$74.00',
            tag: 'Bundle',
            link: '#offer-3',
            linkLabel: 'Shop offer',
          },
        ],
        products: [
          {
            id: 'p1',
            name: 'Nourish Cream',
            description: 'Rich daily moisturizer with botanical oils for dewy skin.',
            price: '$95.00',
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=60',
            link: '#product-nourish',
          },
          {
            id: 'p2',
            name: 'Evening Handwash',
            description: 'Gentle cleanse that leaves hands soft, never stripped.',
            price: '$120.00',
            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=60',
            link: '#product-handwash',
          },
          {
            id: 'p3',
            name: 'CBD Muscle Gel',
            description: 'Cooling gel for shoulders and calves after long days.',
            price: '$80.00',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=60',
            link: '#product-gel',
          },
          {
            id: 'p4',
            name: 'Ordinary Set',
            description: 'Minimal essentials for sensitive skin routines.',
            price: '$95.00',
            image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?auto=format&fit=crop&w=600&q=60',
            link: '#product-ordinary',
          },
          {
            id: 'p5',
            name: 'Minimo Travel',
            description: 'Travel-friendly minis in a cotton pouch.',
            price: '$80.00',
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=60',
            link: '#product-minimo',
          },
          {
            id: 'p6',
            name: 'Evening Serum',
            description: 'Night serum duo for overnight renewal.',
            price: '$42.00',
            image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=60',
            link: '#product-evening',
          },
        ],
        feed: [
          {
            id: 'f1',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=60',
            title: 'New: SPF drops are here',
            description: 'Lightweight protection that sits perfectly under makeup.',
            link: '#feed-1',
            date: '2 days ago',
          },
          {
            id: 'f2',
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60',
            title: 'Behind the formula',
            description: 'How we source botanicals for our hero cleanser.',
            link: '#feed-2',
            date: '1 week ago',
          },
          {
            id: 'f3',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=60',
            title: 'Winter skin checklist',
            description: 'Five swaps to keep barrier happy when it is cold.',
            link: '#feed-3',
            date: '2 weeks ago',
          },
        ],
        email: 'hello@flores-skincare.com',
        address: '24 Bloom Street, London E1 6AN, UK',
        socialLinks: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://www.linkedin.com',
          youtube: 'https://www.youtube.com',
        },
        workingHours: {
          mon: '9:00 – 18:00',
          tue: '9:00 – 18:00',
          wed: '9:00 – 18:00',
          thu: '9:00 – 20:00',
          fri: '9:00 – 18:00',
          sat: '10:00 – 16:00',
          sun: 'Closed',
        },
        testimonials: [
          {
            text: 'The textures are beautiful and my routine finally feels simple. Customer care answered every question.',
            author: 'Maya Chen',
          },
          {
            text: 'Shipping was fast and the packaging felt thoughtful. Already reordering my favourites.',
            author: 'James Wright',
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit — gentle formulas that actually work.',
            author: 'Arthur Gallas',
          },
        ],
        reviews: [
          {
            id: 'demo-r1',
            author: 'Elena Brooks',
            rating: 5,
            text: 'Gorgeous textures and my skin feels calm after a week.',
            date: 'Jan 2026',
          },
          {
            id: 'demo-r2',
            author: 'Priya N.',
            rating: 5,
            text: 'The handwash is a staple on my counter. Never drying.',
            date: 'Dec 2025',
          },
          {
            id: 'demo-r3',
            author: 'Tom W.',
            rating: 4,
            text: 'Great quality — would love more SPF in the line.',
            date: 'Dec 2025',
          },
        ],
      }
    }
    return {
      ...base,
      name: profileId === 'l-2' ? 'Ram Residency (Premium)' : base.name,
      phone: profileId === 'l-2' ? '8965751544' : base.phone,
    }
  }, [profileId])
}

export default memo(function BusinessProfile() {
  const { profileId } = useParams()
  const businessData = useBusinessData(profileId)

  if (profileId === 'l-2') {
    return <TemplateTwo businessData={businessData} />
  }
  if (profileId === 'l-3') {
    return <TemplateThree businessData={businessData} />
  }
  if (profileId === 'l-4') {
    return <TemplateFour businessData={businessData} />
  }
  if (profileId === 'l-5') {
    return <TemplateFive businessData={businessData} />
  }
  if (profileId === 'l-6') {
    return <TemplateSix businessData={businessData} />
  }
  if (profileId === 'l-7') {
    return <TemplateSeven businessData={businessData} />
  }
  if (profileId === 'l-8') {
    return <TemplateEight businessData={businessData} />
  }
  if (profileId === 'l-9') {
    return <TemplateNine businessData={businessData} />
  }
  if (profileId === 'l-10') {
    return <TemplateTen businessData={businessData} />
  }
  if (profileId === 'l-11') {
    return <TemplateEleven businessData={businessData} />
  }
  if (profileId === 'l-12') {
    return <TemplateTwelve businessData={businessData} />
  }

  return <TemplateOne businessData={businessData} onEnquiry={() => alert('Enquiry submitted (demo).')} />
})

