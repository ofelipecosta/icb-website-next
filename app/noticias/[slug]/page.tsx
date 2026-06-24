import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getNoticia, formatDataLonga } from '@/lib/content'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const noticia = await getNoticia(params.slug)
  return {
    title: noticia?.titulo ? `${noticia.titulo} | Iate Clube Brasileiro` : 'Notícia | Iate Clube Brasileiro',
    description: noticia?.resumo || 'Leia a notícia completa',
  }
}

export default async function NoticiaSluggPage({ params }: Props) {
  const noticia = await getNoticia(params.slug)

  if (!noticia) {
    return (
      <div className="bg-white">
        <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
              Notícia não encontrada
            </h1>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-lg text-muted mb-8">
            Desculpe, a notícia que você está procurando não existe.
          </p>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para notícias
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <Link
          href="/noticias"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para notícias
        </Link>

        <article>
          <header className="mb-8">
            <time className="text-sm text-muted">
              {formatDataLonga(noticia.data)}
            </time>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-navy mt-2 mb-4">
              {noticia.titulo}
            </h1>
          </header>

          {noticia.corpo && (
            <div className="prose max-w-none">
              <p className="text-lg text-muted leading-relaxed">
                {noticia.resumo}
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
