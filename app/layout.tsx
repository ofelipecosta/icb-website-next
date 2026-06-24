import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { organizationSchema } from '@/lib/schemas'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://icb-website-bay.vercel.app'),
  title: {
    default: 'Iate Clube Brasileiro — O primeiro clube de vela do Brasil',
    template: '%s | Iate Clube Brasileiro',
  },
  description: 'Tradição, lazer e experiências inesquecíveis para toda a família. Fundado em 1906.',
  keywords: [
    'iate clube',
    'clube náutico',
    'vela',
    'niterói',
    'rio de janeiro',
    'clube social',
    'eventos',
    'regatas',
  ],
  authors: [{ name: 'Iate Clube Brasileiro' }],
  creator: 'Iate Clube Brasileiro',
  publisher: 'Iate Clube Brasileiro',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://icb-website-bay.vercel.app',
    title: 'Iate Clube Brasileiro — O primeiro clube de vela do Brasil',
    description: 'Tradição, lazer e experiências inesquecíveis para toda a família',
    images: [
      {
        url: 'https://icb-website-bay.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Iate Clube Brasileiro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iate Clube Brasileiro',
    description: 'O primeiro clube de vela do Brasil',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
