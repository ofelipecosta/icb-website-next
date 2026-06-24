import { Metadata } from 'next'
import InstallationCard from '@/components/InstallationCard'
import SectionHeader from '@/components/SectionHeader'
import { getInstalacoes } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Estrutura | Iate Clube Brasileiro',
  description: 'Conheça todas as instalações e espaços disponíveis no ICB',
}

export default async function EstruturPage() {
  const instalacoes = await getInstalacoes()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Estrutura do Clube
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Espaços premium para o seu conforto e bem-estar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <SectionHeader
          eyebrow="INSTALAÇÕES"
          title="Conheça nossos"
          titleEmphasis="espaços"
          centered
          description="Ambientes projetados para proporcionarem exclusividade, conforto e experiências inesquecíveis"
        />

        <div className="mt-16">
          {instalacoes.map((instalacao, index) => (
            <InstallationCard
              key={instalacao._id}
              {...instalacao}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
