'use client'

import Image from 'next/image'
import aereo1 from '@/public/imagens/tela principal/aero_nova_01.png'
import aereo2 from '@/public/imagens/tela principal/aero_nova_02.png'
import aereo3 from '@/public/imagens/tela principal/aero_nova_03.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Tradição, lazer e experiências inesquecíveis para toda a família.</h1>
        <button className="hero-cta">Conheça o clube</button>
      </div>
      <div className="hero-carousel">
        <div className="hero-slide">
          <Image src={aereo1} alt="Iate Clube Brasileiro" priority />
        </div>
        <div className="hero-slide">
          <Image src={aereo2} alt="Marina" priority />
        </div>
        <div className="hero-slide">
          <Image src={aereo3} alt="Vista aérea" priority />
        </div>
      </div>
    </section>
  )
}
