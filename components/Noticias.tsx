import Link from 'next/link'
import { ArrowRight, Pin } from 'lucide-react'
import { getNoticias, formatDataCurta, formatDataLonga } from '@/lib/content'

export default async function Noticias() {
  const noticias = await getNoticias()
  const featured = noticias[0]
  const rest = noticias.slice(1, 6)

  return (
    <section className="bg-white py-20 md:py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span className="eyebrow">NOTÍCIAS</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-navy mt-3">
              Fique por <em className="not-italic text-red-600">dentro</em>
            </h2>
          </div>
          <Link
            href="/noticias"
            className="flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 transition-colors whitespace-nowrap"
          >
            Ver todas as notícias
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-12 bg-navy text-cream rounded-lg overflow-hidden p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              {featured.fixado && (
                <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Pin size={12} />
                  DESTAQUE
                </div>
              )}
              <time className="text-xs uppercase tracking-widest text-cream/70">
                {formatDataLonga(featured.data)}
              </time>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-medium mb-4">
              {featured.titulo}
            </h3>
            <p className="text-lg text-cream/80 mb-6 leading-relaxed max-w-2xl">
              {featured.resumo}
            </p>
            <Link
              href={`/noticias/${featured.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
            >
              Leia a notícia completa
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((noticia) => (
            <article
              key={noticia._id}
              className="bg-cream rounded-lg border border-line overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-line bg-cream-dark/30">
                <div className="flex items-center justify-between">
                  <time className="text-xs uppercase tracking-widest text-red-700 font-semibold">
                    {formatDataCurta(noticia.data)}
                  </time>
                  {noticia.fixado && (
                    <Pin size={14} className="text-red-600" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-display font-medium text-navy mb-2 line-clamp-3">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-grow line-clamp-3">
                  {noticia.resumo}
                </p>

                {/* CTA */}
                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  Saiba mais
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
