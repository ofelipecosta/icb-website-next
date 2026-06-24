import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clube | Iate Clube Brasileiro',
  description: 'Informações sobre o Iate Clube Brasileiro.',
}

export default function ClubePage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            O Clube
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Visite as seções do clube para mais informações
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { href: '/o-clube', title: 'O Clube', desc: 'Conheça nossa história e valores' },
            { href: '/estrutura', title: 'Estrutura', desc: 'Conheça nossas instalações' },
            { href: '/historia', title: 'História', desc: 'Nossa trajetória desde 1906' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-8 bg-cream rounded-lg border border-line hover:border-red-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-display font-medium text-navy mb-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
