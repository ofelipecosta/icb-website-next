'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import aereo1 from '@/public/imagens/tela principal/aero_nova_01.png'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const scrollIndicatorVariants = {
    animate: { y: [0, 8, 0], transition: { duration: 2, repeat: Infinity } },
  }

  return (
    <section className="relative w-full h-screen md:h-[70vh] overflow-hidden bg-navy-900">
      {/* Background Image */}
      <Image
        src={aereo1}
        alt="Iate Clube Brasileiro - Marina"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/50 to-navy-900/70" />
      <div className="absolute inset-0 bg-navy-900/35" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-1 h-8 bg-red-600 rounded-full" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-red-500">
            Desde 1906
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white max-w-3xl leading-tight mb-4 md:mb-6"
        >
          Mais que um clube.{' '}
          <em className="not-italic text-red-500">Uma tradição</em> à beira-mar.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-cream/75 max-w-2xl mb-8 md:mb-12 leading-relaxed"
        >
          Tradição, lazer e experiências inesquecíveis para toda a família.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
          <Link
            href="/o-clube"
            className="px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors duration-200"
          >
            Conheça o Clube
          </Link>
          <Link
            href="/associacao"
            className="px-8 py-3 md:py-4 border-2 border-white/40 hover:border-white text-white font-medium rounded transition-colors duration-200"
          >
            Seja Sócio
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Rolar</span>
        <ChevronDown size={20} className="text-white/50" />
      </motion.div>
    </section>
  )
}
