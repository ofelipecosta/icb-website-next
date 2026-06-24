import { Metadata } from 'next'
import { getNoticia, getNoticiasNav, formatDataLonga } from '@/lib/content'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const noticia = await getNoticia(params.slug)
  return {
    title: noticia?.titulo ? `${noticia.titulo} | Iate Clube Brasileiro` : 'Notícia | Iate Clube Brasileiro',
    description: noticia?.resumo || 'Leia a notícia completa',
  }
}

export default async function NoticiaSluggPage({ params }: Props) {
  const [noticia, noticias] = await Promise.all([
    getNoticia(params.slug),
    getNoticiasNav(),
  ])

  if (!noticia) {
    return (
      <div className="page-content">
        <h1>Notícia não encontrada</h1>
        <p>Desculpe, a notícia que você está procurando não existe.</p>
        <Link href="/noticias" className="btn btn-primary">Voltar para notícias</Link>
      </div>
    )
  }

  return (
    <div className="page-content">
      <article className="noticia-detalhe">
        <header>
          <h1>{noticia.titulo}</h1>
          <time dateTime={noticia.data}>{formatDataLonga(noticia.data)}</time>
        </header>

        {noticia.corpo && (
          <div className="noticia-corpo">
            {/* PortableText rendering would go here */}
            {/* For now, displaying as fallback */}
            <p>{noticia.resumo}</p>
          </div>
        )}
      </article>

      <nav className="noticia-nav">
        <Link href="/noticias" className="btn btn-secondary">← Voltar para notícias</Link>
      </nav>
    </div>
  )
}
