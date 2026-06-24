import { Metadata } from 'next'
import Link from 'next/link'
import { Anchor, Wind, Users, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Náutica | Iate Clube Brasileiro',
  description: 'Atividades náuticas, regatas, vela e secretaria náutica do ICB',
}

export default function NauticaPage() {
  const activities = [
    {
      icon: Wind,
      title: 'Aulas de Vela',
      description: 'Programas para iniciantes e avançados em diferentes classes'
    },
    {
      icon: Trophy,
      title: 'Regatas',
      description: 'Competições regulares durante todo o ano'
    },
    {
      icon: Users,
      title: 'Comunidade Náutica',
      description: 'Rede de velejadores e entusiastas do mar'
    },
    {
      icon: Anchor,
      title: 'Suporte Técnico',
      description: 'Assistência da secretaria náutica para embarcações'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Náutica
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Tradição em vela e atividades marinhas desde 1906
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Activities */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-medium text-navy mb-12 text-center">
            Nossas Atividades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <div
                  key={activity.title}
                  className="bg-cream rounded-lg p-6 border border-line text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <Icon size={24} className="text-red-600" />
                    </div>
                  </div>
                  <h3 className="font-display font-medium text-navy mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted">{activity.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-cream rounded-lg p-12 border border-line">
          <h2 className="text-3xl font-display font-medium text-navy mb-8 text-center">
            Explore a Náutica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/regatas"
              className="group block p-8 bg-white border-2 border-line rounded-lg hover:border-red-600 transition-colors"
            >
              <h3 className="text-2xl font-display font-medium text-navy mb-3 group-hover:text-red-600 transition-colors">
                Velas e Regatas
              </h3>
              <p className="text-muted mb-4">
                Conheça nossos calendário de regatas e competições
              </p>
              <span className="text-red-600 font-medium text-sm">Ver mais →</span>
            </Link>

            <Link
              href="/secretaria-nautica"
              className="group block p-8 bg-white border-2 border-line rounded-lg hover:border-red-600 transition-colors"
            >
              <h3 className="text-2xl font-display font-medium text-navy mb-3 group-hover:text-red-600 transition-colors">
                Secretaria Náutica
              </h3>
              <p className="text-muted mb-4">
                Informações, avisos e suporte técnico para associados
              </p>
              <span className="text-red-600 font-medium text-sm">Ver mais →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
