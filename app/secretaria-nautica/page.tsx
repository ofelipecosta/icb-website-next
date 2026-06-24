import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SECRETARIA NAUTICA | Iate Clube Brasileiro',
  description: 'Página de secretaria-nautica do Iate Clube Brasileiro.',
}

export default function Page() {
  return (
    <div className="page-content">
      <h1>SECRETARIA NAUTICA</h1>
      <p>Conteúdo em breve...</p>
    </div>
  )
}
