# CLAUDE.md — Iate Clube Brasileiro (Next.js)

Migração do projeto React Vite para **Next.js 16** com App Router.

## Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **CMS**: Sanity (`projectId: m7k49mce`, `dataset: production`)
- **Animações**: `framer-motion` (nota: não usar `motion/react`)
- **Ícones**: lucide-react
- **Deploy**: Vercel (frontend) + Sanity Cloud (studio)

## Arquitetura

### Roteamento
- **App Router**: Estrutura de pastas em `app/` define as rotas
- **Páginas dinâmicas**: `/noticias/[slug]` e `/eventos/[slug]` são renderizadas sob demanda (Server Components)
- **Server Components**: Componentes sem `'use client'` buscam dados do Sanity no servidor

### Estrutura de arquivos
```
app/
  layout.tsx (Root layout com Header/Footer)
  page.tsx (Home)
  noticias/
    page.tsx (Listagem)
    [slug]/page.tsx (Detalhe)
  eventos/
    page.tsx (Listagem)
    [slug]/page.tsx (Detalhe)
  documentos/page.tsx
  regatas/page.tsx (Velas e Regatas)
  secretaria-nautica/page.tsx
  instalacoes/page.tsx
  clube/page.tsx
  historia/page.tsx
  contato/page.tsx
  administracao/page.tsx
  nautica/page.tsx
  globals.css (Estilos base + Tailwind)

components/
  Header.tsx (Menu, navbar)
  Footer.tsx
  Hero.tsx (Seção herói da Home)
  OClube.tsx (Seção "O Clube")
  Noticias.tsx (Grid de notícias na Home — Server Component)
  EventosCards.tsx (Grid de eventos na Home — Server Component)
  WhatsAppFloat.tsx (Botão WhatsApp flutuante)
  AnnouncementBar.tsx (Barra de comunicado)

lib/
  sanity.ts (Cliente Sanity + imageUrl builder)
  content.ts (Queries GROQ + funções de fetch com fallback resiliente)
```

## Variáveis de ambiente

Criar `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=m7k49mce
NEXT_PUBLIC_SANITY_DATASET=production
```

Ver `.env.example` para template.

## Queries GROQ implementadas

| Função | Query | Descrição |
|---|---|---|
| `getNoticias()` | `NOTICIAS_QUERY` | 6 notícias mais recentes (fixadas primeiro) |
| `getTodasNoticias()` | `TODAS_NOTICIAS_QUERY` | Todas as notícias com paginação |
| `getNoticia(slug)` | `NOTICIA_BY_SLUG_QUERY` | Notícia individual com corpo completo |
| `getEventos()` | `EVENTOS_QUERY` | Eventos ordenados por destaque e data |
| `getEvento(slug)` | `EVENTO_BY_SLUG_QUERY` | Evento individual com descrição |
| `getRegatas()` | `REGATAS_QUERY` | Regatas com classes e inscrições |
| `getAvisos()` | `AVISOS_QUERY` | Avisos da Secretaria Náutica |
| `getInstalacoes()` | `INSTALACOES_QUERY` | Instalações com fotos e CTA |
| `getDocumentos()` | `DOCUMENTOS_QUERY` | PDFs agrupados por categoria |

## Fallbacks resilientes

Todas as queries possuem dados fallback definidos em `lib/content.ts`:
- `NOTICIAS_FALLBACK`
- `EVENTOS_FALLBACK`
- `REGATAS_FALLBACK`
- `INSTALACOES_FALLBACK`
- `AVISOS_FALLBACK`

Se Sanity não estiver configurado ou falhar, o site continua funcionando com dados placeholder.

## Helpers de formatação

```typescript
formatDataCurta(iso?: string) // "08 de out"
formatDataLonga(iso?: string) // "08 de outubro de 2026"
formatMesAno(iso?: string) // "Out 2026"
```

## Status de implementação

### ✅ Concluído
- Migração de Vite → Next.js 16 App Router
- Correção de `import.meta.env` → `process.env` em sanity.ts
- Integração Sanity (queries GROQ, client)
- Componentes Server-side para Noticias e Eventos (Home)
- Páginas dinâmicas: `/noticias/[slug]`, `/eventos/[slug]`
- Páginas de listagem: `/noticias`, `/eventos`, `/regatas`, `/documentos`, `/instalacoes`
- Build Next.js passa sem erros
- Fallbacks resilientes para CMS offline

### 🔄 Em progresso / Pendências
- [ ] Implementar PortableText rendering para `corpo` (notícias) e `descricao` (eventos)
- [ ] Páginas: história, clube, contato, administração, secretaria náutica ainda têm conteúdo mínimo
- [ ] Componente AnnouncementBar com dados do Sanity (comunicados ativos)
- [ ] Componente WhatsAppFloat (botão flutuante)
- [ ] CSS responsivo completo (algumas classes de página podem precisar de estilo)
- [ ] Testes e verificação em tempo real
- [ ] Deploy em Vercel

## Próximos passos recomendados

1. **PortableText rendering**
   - Instalar `@portabletext/react` (já está em package.json)
   - Criar componente `<PortableText />` reutilizável
   - Usar em páginas de detalhe (notícias/eventos)

2. **Preenchimento de conteúdo**
   - Atualizar páginas vazias (história, clube, contato, etc.)
   - Configurar dados de teste no Sanity para validar queries

3. **Testes**
   - `npm run dev` para rodar em desenvolvimento
   - Verificar Home, listagens e páginas de detalhe no navegador

4. **Deploy**
   - Configurar variáveis de ambiente no Vercel
   - Push para Git e fazer deploy

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
# Abrir http://localhost:3000

# Build
npm run build

# Produção
npm run start
```

## Notas importantes

- Next.js ignora TypeScript errors por padrão (`ignoreBuildErrors: true` em next.config.ts)
- Todos os componentes da Home são **Server Components** para otimizar performance
- Pagination de notícias pode ser adicionada usando `offset` nas queries GROQ
- Imagens Sanity usam builder automático (`urlForImage()`) com `auto('format').fit('max')`
