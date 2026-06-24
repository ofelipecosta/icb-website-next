import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Pin } from 'lucide-react'
import { getTodasNoticias, formatDataLonga } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Notícias | Iate Clube Brasileiro',
  description: 'Acompanhe as últimas notícias do Iate Clube Brasileiro.',
}

export default async function NoticiasPage() {
  const noticias = await getTodasNoticias()

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Notícias
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Fique atualizado com as últimas novidades do ICB
          </p>
        </div>
      </section>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <Link
              key={noticia._id}
              href={`/noticias/${noticia.slug}`}
              className="group block bg-white border border-line rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header com data e badge */}
                <div className="mb-3 flex items-start justify-between">
                  <span className="text-red-600 text-sm font-semibold">
                    {formatDataLonga(noticia.data)}
                  </span>
                  {noticia.fixado && (
                    <Pin size={16} className="text-red-600" fill="currentColor" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-medium text-navy mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {noticia.titulo}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted mb-4 line-clamp-3 flex-grow">
                  {noticia.resumo}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-red-600 font-medium text-sm">
                  Leia mais
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {noticias.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Nenhuma notícia disponível no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
