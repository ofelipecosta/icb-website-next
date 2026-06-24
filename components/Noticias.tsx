'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Noticias() {
  return (
    <section className="noticias-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">NOTÍCIAS</div>
            <h2>Fique por <em>dentro</em></h2>
          </div>
          <Link href="/noticias" className="section-link">
            Ver todas as notícias <ArrowRight size={15} />
          </Link>
        </div>
        <div className="noticias-grid">
          <article className="noticia-card">
            <h3>Agradecimento</h3>
            <p>Agradeçemos a todos que participaram dos eventos do mês de outubro.</p>
            <Link href="#" className="noticia-link">Saiba mais →</Link>
            <span className="noticia-date">08 de outubro</span>
          </article>
          <article className="noticia-card">
            <h3>Dia das Crianças</h3>
            <p>Dia das Crianças é no ICB! Confira as atividades especiais.</p>
            <Link href="#" className="noticia-link">Saiba mais →</Link>
            <span className="noticia-date">08 de outubro</span>
          </article>
        </div>
      </div>
    </section>
  )
}
