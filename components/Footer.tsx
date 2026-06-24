'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>O Clube</h3>
            <ul>
              <li><Link href="/historia">Nossa História</Link></li>
              <li><Link href="/instalacoes">Instalações</Link></li>
              <li><Link href="/administracao">Administração</Link></li>
              <li><Link href="/documentos">Documentos</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Náutica</h3>
            <ul>
              <li><Link href="/regatas">Velas e Regatas</Link></li>
              <li><Link href="/secretaria-nautica">Secretaria Náutica</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p><MapPin size={16} /> Estrada Leopoldina Fróes, 400</p>
            <p>São Francisco, Niterói — RJ</p>
            <p><Phone size={16} /> (21) 2714-5252</p>
            <p><Mail size={16} /> secretaria@icb.org.br</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Iate Clube Brasileiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
