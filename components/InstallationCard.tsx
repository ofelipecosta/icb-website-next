import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Instalacao } from '@/lib/content'
import { urlForImage } from '@/lib/sanity'

interface InstallationCardProps extends Instalacao {
  reversed?: boolean
}

export default function InstallationCard({
  titulo,
  texto,
  fotos,
  ctaLabel,
  ctaUrl,
  reversed = false,
}: InstallationCardProps) {
  const imageUrl = fotos?.[0] ? urlForImage(fotos[0]) : null

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-16 border-b border-line last:border-b-0 ${
        reversed ? 'md:direction-rtl' : ''
      }`}
    >
      {/* Image */}
      <div className={`order-1 ${reversed ? 'md:order-2' : ''}`}>
        {imageUrl ? (
          <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={titulo}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        ) : (
          <div className="bg-cream-dark rounded-lg aspect-video md:aspect-square flex items-center justify-center text-muted text-sm">
            Imagem em breve
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`order-2 ${reversed ? 'md:order-1' : ''}`}>
        <h3 className="text-3xl md:text-4xl font-display font-medium text-navy mb-4">
          {titulo}
        </h3>
        <p className="text-lg text-muted leading-relaxed mb-6">
          {texto}
        </p>
        {ctaUrl && ctaLabel && (
          <Link
            href={ctaUrl}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
