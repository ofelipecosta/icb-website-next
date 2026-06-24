import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos | Iate Clube Brasileiro',
  description: 'Confira os próximos eventos do Iate Clube Brasileiro.',
}

export default function EventosPage() {
  return (
    <div className="page-content">
      <h1>Próximos Eventos</h1>
      <p>Fique por dentro de todos os eventos que o ICB tem preparado para você e sua família.</p>
    </div>
  )
}
