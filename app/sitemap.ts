import { MetadataRoute } from 'next'
import { getTodasNoticias, getEventos } from '@/lib/content'

const BASE_URL = 'https://icb-website-bay.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [noticias, eventos] = await Promise.all([
    getTodasNoticias(),
    getEventos(),
  ])

  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/o-clube`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/estrutura`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/eventos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/regatas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/associacao`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/historia`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/documentos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const noticiaPages = noticias.map((noticia) => ({
    url: `${BASE_URL}/noticias/${noticia.slug}`,
    lastModified: noticia.data ? new Date(noticia.data) : new Date(),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }))

  const eventoPages = eventos.map((evento) => ({
    url: `${BASE_URL}/eventos/${evento.slug}`,
    lastModified: evento.data ? new Date(evento.data) : new Date(),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...noticiaPages, ...eventoPages]
}
