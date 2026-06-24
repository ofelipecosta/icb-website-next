import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { getDocumentos, formatDataLonga } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Documentos Oficiais | Iate Clube Brasileiro',
  description: 'Acesse os documentos oficiais do Iate Clube Brasileiro.',
}

export default async function DocumentosPage() {
  const documentos = await getDocumentos()

  const documentosPorCategoria = documentos.reduce((acc, doc) => {
    const categoria = doc.categoria || 'Outros'
    if (!acc[categoria]) acc[categoria] = []
    acc[categoria].push(doc)
    return acc
  }, {} as Record<string, typeof documentos>)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Documentos Oficiais
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Acesse os documentos públicos do Iate Clube Brasileiro
          </p>
        </div>
      </section>

      {/* Documents */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {Object.entries(documentosPorCategoria).map(([categoria, docs]) => (
          <section key={categoria} className="mb-16">
            <h2 className="text-2xl font-display font-medium text-navy mb-6">
              {categoria}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.map((doc) => (
                <a
                  key={doc._id}
                  href={doc.arquivoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 border border-line rounded-lg hover:border-red-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Download className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-grow min-w-0">
                      <h3 className="font-medium text-navy group-hover:text-red-600 transition-colors line-clamp-2">
                        {doc.titulo}
                      </h3>
                      {doc.dataPublicacao && (
                        <time className="text-xs text-muted mt-2 block">
                          {formatDataLonga(doc.dataPublicacao)}
                        </time>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {documentos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Nenhum documento disponível no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
