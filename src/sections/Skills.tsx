import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { skillGroups } from '@/data/site'

/** Bento spans for skill groups (full-width layout only); index maps to `skillGroups` */
const layouts: readonly string[] = [
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-2 lg:col-span-2 lg:row-span-2',
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-2 lg:col-span-1',
  'sm:col-span-2 lg:col-span-1',
]

type SkillsProps = {
  /** `rail`: compact stack for desktop sticky column under portrait */
  variant?: 'full' | 'rail'
  /** Use `false` when nested inside a padded main column */
  containWidth?: boolean
}

export function Skills({ variant = 'full', containWidth }: SkillsProps) {
  if (variant === 'rail') {
    return (
      <div className="space-y-6" role="region" aria-labelledby="skills-rail-title">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Capabilities
          </p>
          <h2
            id="skills-rail-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem] sm:leading-tight"
          >
            Skills
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            Same five groups as the full panel—aligned with the Technical Skills block on the résumé PDF.
          </p>
        </div>
        <div className="space-y-3.5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="rounded-xl border border-border/80 bg-card/50 p-4 shadow-card backdrop-blur-sm transition-shadow hover:border-accent/20">
                <h3 className="text-sm font-semibold leading-snug tracking-tight text-pretty text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/60 bg-background/45 px-2.5 py-1 text-xs font-medium leading-snug text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Section
      id="skills-panel"
      eyebrow="Capabilities"
      title="Skills"
      description="Grouped like the résumé Technical Skills section—languages, frameworks, testing practice, AI tools, and OS—so nothing important is only on the PDF."
      containWidth={containWidth ?? true}
    >
      <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className={layouts[i] ?? 'sm:col-span-2 lg:col-span-2'}
          >
            <div className="flex h-full min-h-[130px] flex-col rounded-2xl border border-border/80 bg-card/50 p-6 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-glow lg:min-h-0">
              <h3 className="text-base font-semibold leading-snug tracking-tight text-pretty text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-medium leading-snug text-foreground/90 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
