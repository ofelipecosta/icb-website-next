export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsClub',
    name: 'Iate Clube Brasileiro',
    description: 'O primeiro clube de vela do Brasil. Fundado em 1906.',
    url: 'https://icb-website-bay.vercel.app',
    logo: 'https://icb-website-bay.vercel.app/logo.png',
    foundingDate: '1906',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Estrada Leopoldina Fróes, 400',
      addressLocality: 'Niterói',
      addressRegion: 'RJ',
      postalCode: '',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+55-21-2714-5252',
      email: 'secretaria@icb.org.br',
    },
    sameAs: [
      'https://facebook.com/iatebrasileiro',
      'https://instagram.com/iatebrasileiro',
    ],
    areaServed: 'BR',
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Iate Clube Brasileiro',
    image: 'https://icb-website-bay.vercel.app/og-image.jpg',
    description: 'O primeiro clube de vela do Brasil',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Estrada Leopoldina Fróes, 400',
      addressLocality: 'Niterói',
      addressRegion: 'RJ',
      postalCode: '',
      addressCountry: 'BR',
    },
    telephone: '+55-21-2714-5252',
    url: 'https://icb-website-bay.vercel.app',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-22.8833',
      longitude: '-43.0667',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function eventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Niterói',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
    },
    ...(event.image && { image: event.image }),
    url: 'https://icb-website-bay.vercel.app/eventos',
  }
}

export function articleSchema(article: {
  headline: string
  description: string
  image?: string
  datePublished: string
  author: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://icb-website-bay.vercel.app/og-image.jpg',
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Iate Clube Brasileiro',
    },
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'Iate Clube Brasileiro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://icb-website-bay.vercel.app/logo.png',
      },
    },
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
