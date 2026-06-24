import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getEventos, formatMesAno } from '@/lib/content'

export default async function EventosCards() {
  const eventos = await getEventos()
  const destaques = eventos.slice(0, 3)

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span className="eyebrow">AGENDA DO CLUBE</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-navy mt-3">
              Próximos <em className="not-italic text-red-600">Eventos</em>
            </h2>
          </div>
          <Link
            href="/eventos"
            className="flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 transition-colors whitespace-nowrap"
          >
            Ver calendário completo
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destaques.map((evento) => (
            <div
              key={evento._id}
              className="bg-white rounded-lg border border-line overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Header with date and category */}
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <span className="text-2xl font-display font-medium text-red-500">
                  {evento.data
                    ? new Date(evento.data).getDate()
                    : 'TBD'}
                </span>
                <div className="flex flex-col text-right">
                  <span className="text-xs uppercase tracking-widest text-cream/70">
                    {evento.data ? formatMesAno(evento.data) : ''}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-red-500 font-semibold mt-1">
                    {evento.categoria}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-medium text-navy mb-3 line-clamp-2">
                  {evento.titulo}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-grow">
                  {evento.detalhe || evento.local || 'Saiba mais para detalhes'}
                </p>

                {/* CTA */}
                <Link
                  href={evento.linkUrl || '/eventos'}
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  {evento.ctaLabel || 'Saiba mais'}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
