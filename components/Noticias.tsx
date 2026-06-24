import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getNoticias, formatDataCurta } from '@/lib/content'

export default async function Noticias() {
  const noticias = await getNoticias()

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
          {noticias.map((noticia) => (
            <article key={noticia._id} className="noticia-card">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.resumo}</p>
              <Link href={`/noticias/${noticia.slug}`} className="noticia-link">
                Saiba mais →
              </Link>
              <span className="noticia-date">{formatDataCurta(noticia.data)}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
