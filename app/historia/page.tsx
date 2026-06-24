import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nossa História | Iate Clube Brasileiro',
  description: 'Conheça a história do primeiro clube de vela do Brasil, fundado em 1906.',
}

export default function HistoriaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Nossa História
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="prose max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            O Iate Clube Brasileiro, fundado em 1906, é o primeiro clube de vela do Brasil.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Durante mais de um século, formamos velejadores, acolhemos famílias e cultivamos a arte de viver no mar.
          </p>
        </div>
      </div>
    </div>
  )
}
