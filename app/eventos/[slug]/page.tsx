import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getEvento, formatDataLonga } from '@/lib/content'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const evento = await getEvento(params.slug)
  return {
    title: evento?.titulo ? `${evento.titulo} | Iate Clube Brasileiro` : 'Evento | Iate Clube Brasileiro',
    description: evento?.detalhe || 'Saiba mais sobre o evento',
  }
}

export default async function EventoSluggPage({ params }: Props) {
  const evento = await getEvento(params.slug)

  if (!evento) {
    return (
      <div className="bg-white">
        <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
              Evento não encontrado
            </h1>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-lg text-muted mb-8">
            Desculpe, o evento que você está procurando não existe.
          </p>
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para eventos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <Link
          href="/eventos"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para eventos
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              {evento.categoria && (
                <span className="text-xs px-2 py-1 bg-red-600 text-white rounded-full font-medium">
                  {evento.categoria}
                </span>
              )}
              {evento.data && (
                <time className="text-sm text-muted">
                  {formatDataLonga(evento.data)}
                </time>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-navy">
              {evento.titulo}
            </h1>
          </header>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            {evento.local && (
              <p>
                <strong>📍 Local:</strong> {evento.local}
              </p>
            )}
            {evento.detalhe && <p>{evento.detalhe}</p>}

            {evento.linkUrl && (
              <Link
                href={evento.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors"
              >
                {evento.ctaLabel || 'Inscrever-se'}
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
