'use client'

import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Share2,
  Heart,
  Users,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-display font-medium mb-6 text-white">
              Iate Clube
            </h3>
            <p className="text-sm text-cream/75 leading-relaxed mb-6">
              O primeiro clube de vela do Brasil, fundado em 1906. Tradição, lazer
              e experiências inesquecíveis para toda a família.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/iatebrasileiro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-red-600 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Heart size={18} />
              </a>
              <a
                href="https://facebook.com/iatebrasileiro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-red-600 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Users size={18} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-red-600 rounded-lg transition-colors"
                aria-label="Compartilhar"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* O Clube */}
          <div>
            <h3 className="text-lg font-display font-medium mb-6 text-white">
              O Clube
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/historia"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link
                  href="/estrutura"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Estrutura
                </Link>
              </li>
              <li>
                <Link
                  href="/administracao"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Administração
                </Link>
              </li>
              <li>
                <Link
                  href="/documentos"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Documentos Oficiais
                </Link>
              </li>
            </ul>
          </div>

          {/* Náutica */}
          <div>
            <h3 className="text-lg font-display font-medium mb-6 text-white">
              Náutica
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/eventos"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/regatas"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Velas e Regatas
                </Link>
              </li>
              <li>
                <Link
                  href="/secretaria-nautica"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Secretaria Náutica
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-cream/75 hover:text-red-500 transition-colors"
                >
                  Notícias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-display font-medium mb-6 text-white">
              Contato
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-cream/75">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>
                  Estrada Leopoldina Fróes, 400
                  <br />
                  São Francisco, Niterói — RJ
                </span>
              </li>
              <li>
                <a
                  href="tel:+552127145252"
                  className="flex gap-3 text-cream/75 hover:text-red-500 transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span>(21) 2714-5252</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:secretaria@icb.org.br"
                  className="flex gap-3 text-cream/75 hover:text-red-500 transition-colors"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  <span>secretaria@icb.org.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521973703932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-cream/75 hover:text-red-500 transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span>WhatsApp: (21) 97370-3932</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
            <p>© 2026 Iate Clube Brasileiro. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-red-500 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
