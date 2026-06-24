interface StatCardProps {
  number: string | number
  label: string
  description?: string
  color?: 'red' | 'white'
}

export default function StatCard({
  number,
  label,
  description,
  color = 'white',
}: StatCardProps) {
  return (
    <div
      className={`rounded-lg p-8 text-center ${
        color === 'red'
          ? 'bg-red-600 text-white'
          : 'bg-white border border-line text-navy'
      }`}
    >
      <div className={`text-5xl md:text-6xl font-display font-medium mb-3 ${
        color === 'red' ? 'text-white' : 'text-red-600'
      }`}>
        {number}
      </div>
      <div className={`text-sm uppercase tracking-widest font-semibold mb-2 ${
        color === 'red' ? 'text-white/90' : 'text-red-600'
      }`}>
        {label}
      </div>
      {description && (
        <p className={`text-sm leading-relaxed ${
          color === 'red' ? 'text-white/75' : 'text-muted'
        }`}>
          {description}
        </p>
      )}
    </div>
  )
}
