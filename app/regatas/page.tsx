import { Metadata } from 'next'
import { AlertCircle, ExternalLink } from 'lucide-react'
import { getRegatas, getAvisos, formatDataLonga } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Velas e Regatas | Iate Clube Brasileiro',
  description: 'Acompanhe as regatas do Iate Clube Brasileiro.',
}

export default async function RegatPage() {
  const [regatas, avisos] = await Promise.all([
    getRegatas(),
    getAvisos(),
  ])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Velas e Regatas
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Avisos */}
        {avisos.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-display font-medium text-navy mb-8">
              Avisos da Secretaria Náutica
            </h2>
            <div className="space-y-4">
              {avisos.map((aviso) => (
                <div
                  key={aviso._id}
                  className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg flex gap-4"
                >
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <div className="flex-grow">
                    <p className="text-navy font-medium mb-1">{aviso.texto}</p>
                    <time className="text-sm text-muted">
                      {formatDataLonga(aviso.data)}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regatas */}
        {regatas.length > 0 && (
          <section>
            <h2 className="text-3xl font-display font-medium text-navy mb-8">
              Próximas Regatas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regatas.map((regata) => (
                <div
                  key={regata._id}
                  className="bg-white border border-line rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Header */}
                  <div className="bg-navy text-cream px-6 py-4">
                    <h3 className="text-lg font-display font-medium mb-2">
                      {regata.titulo}
                    </h3>
                    {regata.categoria && (
                      <span className="text-xs px-2 py-1 bg-red-600 rounded-full">
                        {regata.categoria}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-muted mb-3">
                      <strong>📅 Data:</strong> {formatDataLonga(regata.data)}
                    </p>
                    {regata.local && (
                      <p className="text-sm text-muted mb-3">
                        <strong>📍 Local:</strong> {regata.local}
                      </p>
                    )}
                    {regata.classes && (
                      <p className="text-sm text-muted mb-4">
                        <strong>⛵ Classes:</strong> {regata.classes}
                      </p>
                    )}

                    {regata.inscricoes && (
                      <a
                        href={regata.inscricoes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                      >
                        Inscrever-se
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {regatas.length === 0 && avisos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Nenhuma informação disponível no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
