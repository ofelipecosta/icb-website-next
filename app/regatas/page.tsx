import { Metadata } from 'next'
import { getRegatas, getAvisos, formatDataLonga } from '@/lib/content'

export const metadata: Metadata = {
  title: 'REGATAS | Iate Clube Brasileiro',
  description: 'Acompanhe as regatas do Iate Clube Brasileiro.',
}

export default async function RegatPage() {
  const [regatas, avisos] = await Promise.all([
    getRegatas(),
    getAvisos(),
  ])

  return (
    <div className="page-content">
      <h1>Velas e Regatas</h1>

      {avisos.length > 0 && (
        <section className="avisos-section">
          <h2>Avisos da Secretaria Náutica</h2>
          <ul className="avisos-list">
            {avisos.map((aviso) => (
              <li key={aviso._id} className="aviso-item">
                <p>{aviso.texto}</p>
                <small>{formatDataLonga(aviso.data)}</small>
              </li>
            ))}
          </ul>
        </section>
      )}

      {regatas.length > 0 && (
        <section className="regatas-section">
          <h2>Próximas Regatas</h2>
          <div className="regatas-list">
            {regatas.map((regata) => (
              <article key={regata._id} className="regata-card">
                <header>
                  <h3>{regata.titulo}</h3>
                  <span className="categoria">{regata.categoria}</span>
                </header>
                <p><strong>Data:</strong> {formatDataLonga(regata.data)}</p>
                {regata.local && <p><strong>Local:</strong> {regata.local}</p>}
                {regata.classes && <p><strong>Classes:</strong> {regata.classes}</p>}
                {regata.inscricoes && (
                  <a href={regata.inscricoes} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Inscrever-se
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
