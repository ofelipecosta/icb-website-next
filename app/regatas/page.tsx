import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REGATAS | Iate Clube Brasileiro',
  description: 'Página de regatas do Iate Clube Brasileiro.',
}

export default function Page() {
  return (
    <div className="page-content">
      <h1>REGATAS</h1>
      <p>Conteúdo em breve...</p>
    </div>
  )
}
