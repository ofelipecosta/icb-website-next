import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administração | Iate Clube Brasileiro',
  description: 'Informações administrativas do Iate Clube Brasileiro.',
}

export default function AdministracaoPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Administração
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="bg-cream rounded-lg p-8 border border-line">
          <p className="text-lg text-muted leading-relaxed">
            Conteúdo administrativo disponível em breve. Para informações, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  )
}
