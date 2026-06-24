import { Metadata } from 'next'
import Link from 'next/link'
import { getInstalacoes } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Instalações | Iate Clube Brasileiro',
  description: 'Conheça as instalações do Iate Clube Brasileiro.',
}

export default async function InstalacoesPag() {
  const instalacoes = await getInstalacoes()

  return (
    <div className="page-content">
      <h1>Instalações</h1>
      <p>Conheça os espaços e facilidades disponíveis no Iate Clube Brasileiro.</p>

      <div className="instalacoes-grid">
        {instalacoes.map((instalacao) => (
          <article key={instalacao._id} className="instalacao-card">
            <h3>{instalacao.titulo}</h3>
            {instalacao.texto && <p>{instalacao.texto}</p>}
            {instalacao.ctaUrl && (
              <Link href={instalacao.ctaUrl} className="btn btn-secondary">
                {instalacao.ctaLabel || 'Saiba mais'}
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
