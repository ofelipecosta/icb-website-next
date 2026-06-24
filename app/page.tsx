import { Metadata } from 'next'
import Hero from '@/components/Hero'
import OClube from '@/components/OClube'
import EventosCards from '@/components/EventosCards'
import Noticias from '@/components/Noticias'

export const metadata: Metadata = {
  title: 'Iate Clube Brasileiro — O primeiro clube de vela do Brasil',
  description: 'Tradição, lazer e experiências inesquecíveis para toda a família',
  openGraph: {
    title: 'Iate Clube Brasileiro',
    description: 'O primeiro clube de vela do Brasil. Fundado em 1906.',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <OClube />
      <EventosCards />
      <Noticias />
    </>
  )
}
