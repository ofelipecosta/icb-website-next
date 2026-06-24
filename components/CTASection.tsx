import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  background?: 'navy' | 'red' | 'cream'
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  background = 'navy',
}: CTASectionProps) {
  const bgColor = {
    navy: 'bg-navy text-cream',
    red: 'bg-red-600 text-white',
    cream: 'bg-cream text-navy',
  }[background]

  const buttonColor = {
    navy: 'bg-red-600 hover:bg-red-700 text-white',
    red: 'bg-white hover:bg-cream text-navy',
    cream: 'bg-red-600 hover:bg-red-700 text-white',
  }[background]

  const secondaryButtonColor = {
    navy: 'border-white/40 hover:border-white text-white',
    red: 'border-white/40 hover:border-white text-white',
    cream: 'border-navy/40 hover:border-navy text-navy',
  }[background]

  return (
    <section className={`py-20 md:py-28 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-display font-medium mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 md:py-4 ${buttonColor} text-sm md:text-base font-medium rounded transition-colors`}
          >
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 md:py-4 border-2 ${secondaryButtonColor} text-sm md:text-base font-medium rounded transition-colors`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
