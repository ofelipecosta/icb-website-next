'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import logoICB from '@/public/imagens/Logo/Timão ICB PRETO.png'

const navLinks = [
  { href: '/', label: 'Início' },
  {
    href: '/o-clube',
    label: 'O Clube',
    submenu: [
      { href: '/historia', label: 'Nossa História' },
      { href: '/estrutura', label: 'Estrutura' },
      { href: '/administracao', label: 'Administração' },
      { href: '/documentos', label: 'Documentos Oficiais' },
    ],
  },
  {
    href: '/nautica',
    label: 'Náutica',
    submenu: [
      { href: '/regatas', label: 'Velas e Regatas' },
      { href: '/secretaria-nautica', label: 'Secretaria Náutica' },
    ],
  },
  { href: '/eventos', label: 'Eventos' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/associacao', label: 'Seja Sócio' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-line shadow-md'
            : 'bg-cream/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logoICB}
              alt="Iate Clube Brasileiro"
              height={56}
              width="auto"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.href} className="relative group">
                  <button className="px-4 py-2 text-sm font-medium text-ink hover:text-red-600 transition-colors flex items-center gap-1">
                    {link.label}
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-line rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-ink hover:bg-cream hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-ink hover:text-red-600 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://icb.areadosocio.com.br"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
          >
            Área do associado
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-cream-dark rounded-lg transition-colors"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} className="text-navy" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 w-64 bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-line">
              <span className="font-display text-lg font-medium text-navy">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 hover:bg-cream-dark rounded"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-2">
              {navLinks.map((link) =>
                link.submenu ? (
                  <details key={link.href} className="group">
                    <summary className="px-4 py-2 text-sm font-medium text-ink hover:text-red-600 cursor-pointer flex items-center gap-2">
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="group-open:rotate-180 transition-transform"
                      />
                    </summary>
                    <div className="pl-4 space-y-1 mt-2">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted hover:text-red-600 transition-colors rounded"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-ink hover:text-red-600 transition-colors rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="p-6 border-t border-line">
              <a
                href="https://icb.areadosocio.com.br"
                target="_blank"
                rel="noreferrer"
                className="block w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded text-center transition-colors"
              >
                Área do associado
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
