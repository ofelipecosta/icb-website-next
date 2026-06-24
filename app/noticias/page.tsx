import { Metadata } from 'next'
import Link from 'next/link'
import { getTodasNoticias, formatDataLonga } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Notícias | Iate Clube Brasileiro',
  description: 'Acompanhe as últimas notícias do Iate Clube Brasileiro.',
}

export default async function NoticiasPage() {
  const noticias = await getTodasNoticias()

  return (
    <div className="page-content">
      <h1>Notícias</h1>
      <p>Fique atualizado com as últimas novidades do ICB.</p>

      <div className="noticias-list">
        {noticias.map((noticia) => (
          <article key={noticia._id} className="noticia-item">
            <Link href={`/noticias/${noticia.slug}`}>
              <h3>{noticia.titulo}</h3>
            </Link>
            <p>{noticia.resumo}</p>
            <time>{formatDataLonga(noticia.data)}</time>
            <Link href={`/noticias/${noticia.slug}`} className="leia-mais">
              Leia mais →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
