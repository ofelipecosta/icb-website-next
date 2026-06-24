'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OClube() {
  return (
    <section className="o-clube">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">O CLUBE</div>
            <h2>Tradição <em>náutica</em> à beira da baía</h2>
          </div>
          <Link href="/clube" className="section-link">
            Conheça mais <ArrowRight size={15} />
          </Link>
        </div>
        <div className="clube-content">
          <p>Fundado em 1906, o Iate Clube Brasileiro é o primeiro clube de vela do Brasil. Mais de um século formando velejadores, acolhendo famílias e cultivando a arte de viver no mar.</p>
          <p>Um espaço de confraternização, lazer e prática de esportes náuticos em um ambiente acolhedor e familiar.</p>
        </div>
      </div>
    </section>
  )
}
