'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function EventosCards() {
  return (
    <section className="eventos-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">AGENDA DO CLUBE</div>
            <h2>Próximos <em>Eventos</em></h2>
          </div>
          <Link href="/eventos" className="section-link">
            Ver calendário completo <ArrowRight size={15} />
          </Link>
        </div>
        <div className="eventos-grid">
          <div className="evento-card">
            <div className="evento-header">
              <span className="evento-date">JUN 28</span>
              <span className="evento-cat">REGATA</span>
            </div>
            <h3>Interclubes de Niterói</h3>
            <p>Regata com classes ILCA 4, ILCA 6 e Optimist</p>
            <Link href="#" className="evento-link">Inscrições →</Link>
          </div>
          <div className="evento-card">
            <div className="evento-header">
              <span className="evento-date">JUL 05</span>
              <span className="evento-cat">SOCIAL</span>
            </div>
            <h3>Festa do Clube</h3>
            <p>Confraternização com comidas e música ao vivo</p>
            <Link href="#" className="evento-link">Reservar →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
