import { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Seja Sócio | Iate Clube Brasileiro',
  description: 'Conheça os planos de associação e benefícios exclusivos',
}

export default function AssociacaoPage() {
  const benefits = [
    'Acesso a todas as instalações',
    'Desconto em eventos e atividades',
    'Aula de vela e atividades náuticas',
    'Acesso ao restaurante e bar',
    'Prioridade em reservas de espaços',
    'Comunidade exclusiva de associados',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Faça Parte da Tradição
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Desfrute de exclusividade e experiências inesquecíveis à beira-mar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Benefits Section */}
        <section className="mb-20">
          <SectionHeader
            eyebrow="BENEFÍCIOS"
            title="O que você"
            titleEmphasis="ganha"
            centered
            description="Acesso exclusivo a instalações, eventos e uma comunidade de pessoas que compartilham a mesma paixão pelo mar"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 p-6 bg-cream rounded-lg border border-line">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-600">
                    <Check size={16} className="text-white" />
                  </div>
                </div>
                <p className="text-navy font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos Section */}
        <section className="mb-20">
          <SectionHeader
            eyebrow="PLANOS"
            title="Escolha o plano"
            titleEmphasis="ideal"
            centered
            description="Oferecemos diferentes categorias para atender suas necessidades"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Pleno',
                price: 'A partir de',
                description: 'Acesso completo a todas as instalações e atividades',
              },
              {
                name: 'Fundador',
                price: 'Contate',
                description: 'Categoria especial com benefícios exclusivos e lifetime',
              },
              {
                name: 'Dependente',
                price: 'Meia',
                description: 'Para familiares de associados plenos',
              },
            ].map((plano) => (
              <div
                key={plano.name}
                className="border-2 border-line rounded-lg p-8 hover:border-red-600 transition-colors"
              >
                <h3 className="text-2xl font-display font-medium text-navy mb-2">
                  {plano.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{plano.price}</p>
                <p className="text-muted mb-8">{plano.description}</p>
                <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors">
                  Solicitar Informações
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Como Se Associar */}
        <section className="mb-20 bg-cream rounded-lg p-12 border border-line">
          <SectionHeader
            eyebrow="PROCESSO"
            title="Como se"
            titleEmphasis="associar"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '1', title: 'Solicite Informações', desc: 'Preencha nosso formulário de contato' },
              { step: '2', title: 'Entrevista', desc: 'Converse com nossa equipe' },
              { step: '3', title: 'Aprovação', desc: 'Análise e aprovação de candidatura' },
              { step: '4', title: 'Bem-vindo!', desc: 'Seja bem-vindo ao ICB' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-display font-medium">
                  {item.step}
                </div>
                <h4 className="font-display font-medium text-navy mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-4xl font-display font-medium text-navy mb-8">
            Pronto para começar?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white text-sm md:text-base font-medium rounded transition-colors"
            >
              Solicitar Informações
            </Link>
            <a
              href="https://wa.me/5521973703932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 md:py-4 border-2 border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 text-sm md:text-base font-medium rounded transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
