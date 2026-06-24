import { Metadata } from 'next'
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
    <div className="page-content">
      <h1>Documentos Oficiais</h1>
      <p>Acesse os documentos públicos do Iate Clube Brasileiro.</p>

      {Object.entries(documentosPorCategoria).map(([categoria, docs]) => (
        <section key={categoria} className="documentos-secao">
          <h2>{categoria}</h2>
          <ul className="documentos-lista">
            {docs.map((doc) => (
              <li key={doc._id} className="documento-item">
                <a href={doc.arquivoUrl} target="_blank" rel="noopener noreferrer" className="documento-link">
                  {doc.titulo}
                </a>
                {doc.dataPublicacao && (
                  <span className="data-publicacao">{formatDataLonga(doc.dataPublicacao)}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
