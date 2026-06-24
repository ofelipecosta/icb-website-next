import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  titleEmphasis?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  titleEmphasis,
  description,
  ctaLabel,
  ctaHref,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : ''} gap-4 mb-12`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-5xl md:text-6xl font-display font-medium text-navy">
        {title} {titleEmphasis && <em className="not-italic text-red-600">{titleEmphasis}</em>}
      </h2>
      {description && (
        <p className={`text-lg text-muted leading-relaxed ${centered ? 'max-w-2xl' : ''}`}>
          {description}
        </p>
      )}
      {ctaHref && ctaLabel && (
        <div className="pt-2">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 transition-colors"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  )
}
