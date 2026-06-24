import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notícias | Iate Clube Brasileiro',
  description: 'Acompanhe as últimas notícias do Iate Clube Brasileiro.',
}

export default function NoticiasPage() {
  return (
    <div className="page-content">
      <h1>Notícias</h1>
      <p>Fique atualizado com as últimas novidades do ICB.</p>
    </div>
  )
}
