'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import logoICB from '@/public/imagens/Logo/Timão ICB PRETO.png'

const navLinks = [
  { href: '/', label: 'Início' },
  {
    href: '/clube', label: 'O Clube',
    submenu: [
      { href: '/historia', label: 'Nossa História' },
      { href: '/instalacoes', label: 'Instalações' },
      { href: '/administracao', label: 'Administração' },
      { href: '/documentos', label: 'Documentos Oficiais' },
    ],
  },
  {
    href: '/nautica', label: 'Náutica',
    submenu: [
      { href: '/regatas', label: 'Velas e Regatas' },
      { href: '/secretaria-nautica', label: 'Secretaria Náutica' },
    ],
  },
  { href: '/eventos', label: 'Eventos' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <Image src={logoICB} alt="Iate Clube Brasileiro" className="brand-logo" />
        </Link>
        <nav className="nav">
          <span className="nav-links">
            {navLinks.map((l) => (
              l.submenu ? (
                <span key={l.href} className="nav-dropdown-wrap">
                  <Link href={l.href} className="nav-dropdown-trigger">
                    {l.label} <ChevronDown size={13} />
                  </Link>
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner">
                      {l.submenu.map((s) => (
                        <Link key={s.href} href={s.href} className="nav-dropdown-item">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </span>
              ) : (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              )
            ))}
          </span>
          <a className="btn btn-primary nav-cta" href="https://icb.areadosocio.com.br" target="_blank" rel="noreferrer">
            Área do associado
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </nav>
      </div>
    </header>
  )
}
