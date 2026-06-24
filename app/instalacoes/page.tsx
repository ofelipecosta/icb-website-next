import { Metadata } from 'next'
import Link from 'next/link'
import { getInstalacoes } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Instalações | Iate Clube Brasileiro',
  description: 'Conheça as instalações do Iate Clube Brasileiro.',
}

export default async function InstalacoesPag() {
  const instalacoes = await getInstalacoes()

  return (
    <div className="bg-white">
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Instalações
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Conheça os espaços e facilidades disponíveis
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instalacoes.map((instalacao) => (
            <div
              key={instalacao._id}
              className="bg-white border border-line rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-medium text-navy mb-3">
                {instalacao.titulo}
              </h3>
              {instalacao.texto && (
                <p className="text-sm text-muted mb-4 line-clamp-3">
                  {instalacao.texto}
                </p>
              )}
              {instalacao.ctaUrl && (
                <Link
                  href={instalacao.ctaUrl}
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  {instalacao.ctaLabel || 'Saiba mais'} →
                </Link>
              )}
            </div>
          ))}
        </div>
    </div>
  )
}
