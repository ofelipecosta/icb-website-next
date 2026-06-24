import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import EventosCards from '@/components/EventosCards'
import Noticias from '@/components/Noticias'
import StatCard from '@/components/StatCard'
import InstallationCard from '@/components/InstallationCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'
import { getInstalacoes } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Iate Clube Brasileiro — O primeiro clube de vela do Brasil',
  description: 'Tradição, lazer e experiências inesquecíveis para toda a família. Fundado em 1906.',
  openGraph: {
    title: 'Iate Clube Brasileiro',
    description: 'O primeiro clube de vela do Brasil. Fundado em 1906.',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default async function Home() {
  const instalacoes = await getInstalacoes()

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About Section */}
      <section className="bg-white py-20 md:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="O CLUBE"
            title="Tradição e"
            titleEmphasis="exclusividade"
            description="Um clube consolidado que há mais de um século oferece experiências únicas à beira-mar"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-medium text-navy mb-4">
                Desde 1906
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                O Iate Clube Brasileiro é o primeiro clube de vela do Brasil, fundado há mais de
                um século. Durante todos esses anos, formou velejadores, acolheu famílias e
                cultivou a arte de viver no mar.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Hoje, mantemos a mesma dedicação: oferecer tradição, lazer e experiências
                inesquecíveis para toda a família em um espaço de exclusividade e sofisticação.
              </p>
              <Link
                href="/o-clube"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
              >
                Conheça nossa história
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="1906" label="Fundação" color="red" />
              <StatCard number="+1000" label="Associados" />
              <StatCard number="200+" label="Eventos/ano" />
              <StatCard number="12" label="Instalações" />
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura/Instalações */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="ESTRUTURA"
            title="Conheça nossas"
            titleEmphasis="instalações"
            description="Espaços premium projetados para o seu conforto e bem-estar"
          />

          <div>
            {instalacoes.slice(0, 3).map((instalacao, index) => (
              <InstallationCard
                key={instalacao._id}
                {...instalacao}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              href="/estrutura"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
            >
              Ver todas as instalações
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <EventosCards />

      {/* News */}
      <Noticias />

      {/* CTA - Associação */}
      <CTASection
        background="navy"
        title="Faça parte da nossa tradição"
        description="Desfrute de exclusividade, conforto e experiências inesquecíveis em um dos clubes mais tradicionais do Brasil"
        primaryLabel="Seja Sócio"
        primaryHref="/associacao"
        secondaryLabel="Contato"
        secondaryHref="/contato"
      />
    </>
  )
}
