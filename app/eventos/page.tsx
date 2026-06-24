import { Metadata } from 'next'
import Link from 'next/link'
import { getEventos, formatDataLonga, formatMesAno } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Eventos | Iate Clube Brasileiro',
  description: 'Confira os próximos eventos do Iate Clube Brasileiro.',
}

export default async function EventosPage() {
  const eventos = await getEventos()

  return (
    <div className="page-content">
      <h1>Próximos Eventos</h1>
      <p>Fique por dentro de todos os eventos que o ICB tem preparado para você e sua família.</p>

      <div className="eventos-list">
        {eventos.map((evento) => (
          <article key={evento._id} className="evento-item">
            <div className="evento-meta">
              <span className="evento-data">{evento.data ? formatMesAno(evento.data) : 'Data TBD'}</span>
              <span className="evento-categoria">{evento.categoria}</span>
            </div>
            <div className="evento-conteudo">
              <h3>{evento.titulo}</h3>
              {evento.local && <p className="local"><strong>Local:</strong> {evento.local}</p>}
              {evento.detalhe && <p>{evento.detalhe}</p>}
              {evento.linkUrl && (
                <Link href={evento.linkUrl} className="btn btn-secondary">
                  {evento.ctaLabel || 'Inscrever-se'}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
