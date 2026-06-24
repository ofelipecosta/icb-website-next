import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'O Clube | Iate Clube Brasileiro',
  description: 'Conheça a história, missão e valores do Iate Clube Brasileiro',
}

export default function OClubePagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            O Iate Clube Brasileiro
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Mais que um clube. Uma tradição à beira-mar desde 1906.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-20">
        {/* History */}
        <section>
          <SectionHeader
            eyebrow="HISTÓRIA"
            title="Fundado em"
            titleEmphasis="1906"
            centered
            description="O primeiro clube de vela do Brasil"
          />
          <div className="prose prose-lg max-w-none text-muted">
            <p className="text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              O Iate Clube Brasileiro foi fundado em 1906 como o primeiro clube de vela do Brasil.
              Durante mais de um século, formou gerações de velejadores, acolheu famílias inteiras
              e cultivou a arte de viver no mar.
            </p>
            <p className="text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              Mantemos a mesma dedicação de sempre: oferecer um espaço de excelência, exclusividade
              e tradição, onde a proximidade com o mar e a convivência social são fundamentais.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-cream rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-display font-medium text-navy mb-4">Missão</h2>
          <p className="text-lg text-muted leading-relaxed">
            Ser um espaço privilegiado de convivência e desenvolvimento de atividades náuticas,
            sociais e culturais, mantendo os valores de tradição, excelência e sustentabilidade.
          </p>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-display font-medium text-navy mb-8 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tradição',
                description:
                  'Mais de um século de história e excelência',
              },
              {
                title: 'Inclusão',
                description:
                  'Espaço acolhedor para toda a família',
              },
              {
                title: 'Sustentabilidade',
                description:
                  'Responsabilidade com o meio ambiente marinho',
              },
              {
                title: 'Excelência',
                description:
                  'Compromisso com a qualidade em tudo que fazemos',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border-l-4 border-red-600 pl-6 py-4"
              >
                <h3 className="text-xl font-display font-medium text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="bg-navy text-cream rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-display font-medium mb-4">Visão</h2>
          <p className="text-lg leading-relaxed opacity-90">
            Ser reconhecido como o principal clube náutico do Brasil, referência em excelência,
            inovação e responsabilidade social, mantendo viva a tradição da vela e da convivência
            à beira-mar.
          </p>
        </section>
      </div>
    </div>
  )
}
