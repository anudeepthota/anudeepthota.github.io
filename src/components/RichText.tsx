type RichTextVariant = 'default' | 'heroMetric'

const metricClassDefault =
  'inline-flex items-center rounded-md border border-accent/45 bg-accent/[0.18] px-2 py-0.5 text-[0.9375rem] font-extrabold tabular-nums tracking-tight text-accent shadow-sm shadow-accent/10 sm:px-2.5 sm:py-1 sm:text-lg'

const metricClassLead =
  'inline-flex max-w-full items-center rounded-lg border border-accent/50 bg-accent/[0.22] px-2.5 py-1 text-base font-extrabold tabular-nums tracking-tight text-accent shadow-md shadow-accent/15 sm:px-3.5 sm:py-1.5 sm:text-xl'

/**
 * Renders `**like this**` as bold (default) or as high-visibility metric pills (heroMetric).
 */
export function RichText({
  text,
  className,
  variant = 'default',
  /** Larger pills for full-line hero metrics. */
  metricProminence = 'default',
}: {
  text: string
  className?: string
  /** `heroMetric`: accent pills for scan-first numbers (hero impact lines). */
  variant?: RichTextVariant
  metricProminence?: 'default' | 'lead'
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  const metricClass = metricProminence === 'lead' ? metricClassLead : metricClassDefault

  const defaultStrong = 'font-semibold text-foreground'

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          const inner = part.slice(2, -2)
          if (variant === 'heroMetric') {
            return (
              <span key={i} className={metricClass}>
                {inner}
              </span>
            )
          }
          return (
            <strong key={i} className={defaultStrong}>
              {inner}
            </strong>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}
