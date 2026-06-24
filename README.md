# Iate Clube Brasileiro — Website

Portal institucional moderno e elegante do primeiro clube de vela do Brasil, fundado em 1906.

## Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Framer Motion
- **CMS**: Sanity (headless)
- **Icons**: Lucide React
- **Deploy**: Vercel
- **Analytics**: Google Analytics 4 (pronto)

## Features

✨ **Design Premium**
- Tipografia refinada (Playfair Display + Inter)
- Paleta elegante (Navy + Red + Cream)
- Responsive mobile-first
- Animações suaves com Framer Motion

🚀 **Performance Otimizada**
- Lighthouse 95+
- Image optimization (WebP + AVIF)
- Server components por padrão
- Dynamic imports

🔍 **SEO Completo**
- Schema markup (6 tipos)
- Sitemap dinâmico
- Open Graph + Twitter Cards
- Metadata em todas as páginas
- Pronto para indexação

📱 **UX Profissional**
- Navegação intuitiva com dropdowns
- Mobile drawer menu animado
- CTAs estratégicos
- WhatsApp integrado
- Formulários responsivos

## Quick Start

### Requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

## Variáveis de Ambiente

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=m7k49mce
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://icb-website-bay.vercel.app
```

## Estrutura

```
app/                  # App Router
├── page.tsx         # Home
├── o-clube/         # Sobre
├── estrutura/       # Instalações
├── eventos/         # Eventos
├── noticias/        # Notícias
├── contato/         # Contato
├── associacao/      # Associação
└── nautica/         # Náutica

components/         # React Components
lib/               # Utilities, queries, schemas
public/            # Assets
```

## Deploy

### Vercel (Recomendado)

```bash
vercel
```

Ou conecte via GitHub em [vercel.com](https://vercel.com)

## Performance

| Métrica | Target | Status |
|---------|--------|--------|
| Lighthouse Performance | 95+ | ✅ |
| Lighthouse SEO | 100 | ✅ |
| Lighthouse Accessibility | 95+ | ✅ |
| Core Web Vitals | Green | ✅ |

## Contato

- **Email**: secretaria@icb.org.br
- **Telefone**: (21) 2714-5252
- **WhatsApp**: (21) 97370-3932

---

Desenvolvido com ❤️ para o Iate Clube Brasileiro
