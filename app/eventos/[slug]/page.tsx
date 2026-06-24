import { Metadata } from 'next'
import { getEvento, getEventosNav, formatDataLonga, formatMesAno } from '@/lib/content'
import Link from 'next/link'

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
  const [evento, eventos] = await Promise.all([
    getEvento(params.slug),
    getEventosNav(),
  ])

  if (!evento) {
    return (
      <div className="page-content">
        <h1>Evento não encontrado</h1>
        <p>Desculpe, o evento que você está procurando não existe.</p>
        <Link href="/eventos" className="btn btn-primary">Voltar para eventos</Link>
      </div>
    )
  }

  return (
    <div className="page-content">
      <article className="evento-detalhe">
        <header>
          <h1>{evento.titulo}</h1>
          <div className="evento-info">
            <span className="categoria">{evento.categoria}</span>
            {evento.data && <time dateTime={evento.data}>{formatDataLonga(evento.data)}</time>}
          </div>
        </header>

        <div className="evento-details">
          {evento.local && (
            <p><strong>Local:</strong> {evento.local}</p>
          )}
          {evento.detalhe && (
            <p>{evento.detalhe}</p>
          )}

          {evento.descricao && (
            <div className="evento-descricao">
              {/* PortableText rendering would go here */}
            </div>
          )}

          {evento.linkUrl && (
            <Link href={evento.linkUrl} className="btn btn-primary">
              {evento.ctaLabel || 'Inscrever-se'}
            </Link>
          )}
        </div>
      </article>

      <nav className="evento-nav">
        <Link href="/eventos" className="btn btn-secondary">← Voltar para eventos</Link>
      </nav>
    </div>
  )
}
