# 🚀 Deployment Guide - Iate Clube Brasileiro

## Deploy em Vercel (Recomendado)

### Opção 1: Via CLI (Mais rápido)

```bash
# Instale Vercel CLI
npm i -g vercel

# Faça deploy
vercel
```

**O Vercel irá:**
1. ✅ Detectar Next.js
2. ✅ Rodar `npm install`
3. ✅ Rodar `npm run build`
4. ✅ Deploy automático

### Opção 2: Via GitHub (Recomendado para produção)

1. **Conecte GitHub em Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique "Add New..." → "Project"
   - Conecte sua conta GitHub
   - Selecione repositório `icb-website-next`

2. **Configure as variáveis de ambiente:**
   - Vá em "Settings" → "Environment Variables"
   - Adicione:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=m7k49mce
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
   ```

3. **Clique "Deploy"**
   - Vercel faz build automático
   - Deploy fica online em ~2 minutos

### Opção 3: Via Git Push (Auto-deploy)

Após conectar GitHub em Vercel:

```bash
git push origin master
```

Vercel detecta o push e faz deploy automático! 🎉

---

## Configurar Domínio Customizado

### Com Vercel Domains (Grátis)

1. Em Vercel → Settings → Domains
2. Clique "Add"
3. Escolha um domínio `.vercel.app` grátis
4. Pronto!

### Com seu próprio domínio

1. **Compre um domínio** (Namecheap, GoDaddy, etc)

2. **Aponte DNS para Vercel:**
   - Em Vercel → Settings → Domains
   - Adicione seu domínio
   - Vercel mostra os registros DNS a adicionar

3. **No seu registrador de DNS:**
   - Adicione os registros que Vercel indica
   - Aguarde propagação (pode levar 24h)

4. **Configure SSL:**
   - Vercel faz automaticamente via Let's Encrypt

---

## Configurar Sanity CMS

### Adicionar CORS Origin

1. Acesse [sanity.io](https://sanity.io) → Seu projeto
2. Vá em "Settings" → "API" → "CORS origins"
3. Adicione:
   ```
   https://seu-dominio.vercel.app
   https://seu-dominio.vercel.app:3000
   ```
4. Salve

### Autorizar Deploy (Optional)

Se Sanity Studio estiver em `/studio`:
1. Edite `studio/sanity.config.ts`
2. Adicione:
   ```typescript
   studioHost: 'studio.seu-dominio.com'
   ```

---

## Analytics & Monitoring

### Google Analytics

1. Crie conta em [google.com/analytics](https://google.com/analytics)
2. Novo projeto → Website
3. Copie o ID (ex: `G-XXXXXXXXXX`)
4. Adicione em Vercel → Environment Variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Redeploy

### Vercel Analytics

Automático! Você vê:
- Performance scores
- Web Vitals
- Deployment history
- Error logs

---

## Monitoramento Pós-Deploy

### Checklist

- [ ] Site carrega rápido (< 3s)
- [ ] Navegação funciona
- [ ] Formulários enviam
- [ ] Imagens carregam
- [ ] Mobile responsivo
- [ ] SEO marcado em Rich Results

### Testes

```bash
# Lighthouse (Local)
npm install -g lighthouse
lighthouse https://seu-dominio.vercel.app

# Ou via Google PageSpeed
# https://pagespeed.web.dev
```

---

## Environment Variables Checklist

```env
# OBRIGATÓRIO
NEXT_PUBLIC_SANITY_PROJECT_ID=m7k49mce
NEXT_PUBLIC_SANITY_DATASET=production

# OPCIONAL (Analytics)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# SITE URL
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
```

---

## Troubleshooting

### Build falha
```
# Local
npm run build

# Se falhar localmente, Vercel também falhará
# Verifique errores e fix antes de push
```

### Variáveis de ambiente não funcionam
- ✅ Verificou Vercel → Settings → Environment Variables?
- ✅ Redeploy após adicionar?
- ✅ Nomes começam com `NEXT_PUBLIC_`?

### Sanity offline
- Site continua funcionando com dados fallback
- Verifique CORS origins configurados

### Cache de imagens
- Vercel cache por 1 ano por padrão
- Para limpar: Settings → Deployments → Clear Cache

---

## Próximas Integrações

- [ ] Google Search Console
- [ ] Google Tag Manager
- [ ] Hotjar (heatmaps)
- [ ] Vercel Edge Functions (cache inteligente)
- [ ] Webhook do Sanity (invalidar cache ao publicar)

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs

---

**Deploy agora e celebre! 🎉**
