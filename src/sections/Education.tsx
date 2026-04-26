import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/utils'
import { education, graduateAppointments } from '@/data/site'

const description =
  'Degrees and graduate appointments from the Texas State M.S. era—same context as the résumé education block.'

function EducationCard({ compact }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'border border-border/80 bg-card/60 shadow-card backdrop-blur-sm',
        compact ? 'rounded-xl p-4' : 'rounded-2xl p-6 sm:p-8',
      )}
    >
      <ul className={cn('space-y-5', compact && 'space-y-4')}>
        {education.map((e) => (
          <li key={e.school} className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
            <p
              className={cn(
                'font-semibold text-foreground',
                compact ? 'text-base leading-snug' : 'text-lg',
              )}
            >
              {e.school}
            </p>
            <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>{e.location}</p>
            <p className={cn('mt-1 text-foreground/90', compact ? 'text-sm leading-snug' : 'text-base')}>
              {e.degree}
            </p>
            <p className={cn('text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>{e.dates}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-border/60 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          During my M.S. (Texas State)
        </h3>
        <ul className={cn('mt-3 space-y-3 text-muted-foreground', compact ? 'text-sm' : 'text-base')}>
          {graduateAppointments.map((g) => (
            <li key={`${g.role}-${g.dates}`}>
              <p className={cn('font-medium text-foreground/95', compact && 'text-sm')}>{g.role}</p>
              <p className="text-xs text-muted-foreground">
                {g.org} · {g.location} · {g.dates}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/** `page`: full-width section (mobile main column). `rail`: sticky column under Skills (desktop). */
export function Education({ variant = 'page' }: { variant?: 'page' | 'rail' }) {
  if (variant === 'rail') {
    return (
      <div className="space-y-4" role="region" aria-labelledby="education-rail-title">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Academic</p>
          <h2
            id="education-rail-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem] sm:leading-tight"
          >
            Education
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <Reveal>
          <EducationCard compact />
        </Reveal>
      </div>
    )
  }

  return (
    <Section
      eyebrow="Academic"
      title="Education"
      description={description}
      containWidth={false}
      className="border-t-0 py-12 sm:py-14"
    >
      <Reveal>
        <EducationCard />
      </Reveal>
    </Section>
  )
}
