import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CLUBE | Iate Clube Brasileiro',
  description: 'Página de clube do Iate Clube Brasileiro.',
}

export default function Page() {
  return (
    <div className="page-content">
      <h1>CLUBE</h1>
      <p>Conteúdo em breve...</p>
    </div>
  )
}
