import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getEventos, formatMesAno } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Eventos | Iate Clube Brasileiro',
  description: 'Confira os próximos eventos do Iate Clube Brasileiro.',
}

export default async function EventosPage() {
  const eventos = await getEventos()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Próximos Eventos
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Fique por dentro de todos os eventos que o ICB tem preparado para você e sua família
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <article
              key={evento._id}
              className="bg-white border border-line rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header com data e categoria */}
              <div className="bg-navy text-cream px-6 py-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold uppercase tracking-widest">
                    {evento.data ? formatMesAno(evento.data) : 'Data TBD'}
                  </span>
                  <span className="text-xs px-2 py-1 bg-red-600 rounded-full">
                    {evento.categoria}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-medium text-navy mb-3">
                  {evento.titulo}
                </h3>

                {evento.local && (
                  <p className="text-sm text-muted mb-3">
                    <strong>📍 Local:</strong> {evento.local}
                  </p>
                )}

                {evento.detalhe && (
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {evento.detalhe}
                  </p>
                )}

                {evento.linkUrl && (
                  <Link
                    href={evento.linkUrl}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    {evento.ctaLabel || 'Inscrever-se'}
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {eventos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Nenhum evento disponível no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
