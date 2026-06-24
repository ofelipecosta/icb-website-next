import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getEventos, formatMesAno } from '@/lib/content'

export default async function EventosCards() {
  const eventos = await getEventos()
  const destaques = eventos.filter(e => e.destaque).slice(0, 2)

  return (
    <section className="eventos-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">AGENDA DO CLUBE</div>
            <h2>Próximos <em>Eventos</em></h2>
          </div>
          <Link href="/eventos" className="section-link">
            Ver calendário completo <ArrowRight size={15} />
          </Link>
        </div>
        <div className="eventos-grid">
          {destaques.map((evento) => (
            <div key={evento._id} className="evento-card">
              <div className="evento-header">
                <span className="evento-date">{evento.data ? formatMesAno(evento.data).toUpperCase() : 'TBD'}</span>
                <span className="evento-cat">{evento.categoria}</span>
              </div>
              <h3>{evento.titulo}</h3>
              <p>{evento.detalhe || evento.local || 'Saiba mais para detalhes'}</p>
              <Link href={evento.linkUrl || '/eventos'} className="evento-link">
                {evento.ctaLabel || 'Saiba mais'} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
