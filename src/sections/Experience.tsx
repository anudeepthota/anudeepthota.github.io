import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { experience } from '@/data/site'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience"
      description="Newest first—each card starts with how the role fits the bigger picture, then concrete outcomes. Open the résumé PDF for the exhaustive list."
    >
      <ol className="space-y-7 sm:space-y-8">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}-${job.dates}`} delay={i * 0.04}>
            <li className="relative rounded-2xl border border-border/80 bg-card/50 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="absolute left-6 top-0 hidden h-px w-12 bg-gradient-to-r from-accent/60 to-transparent sm:block" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{job.company}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{job.role}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
                <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                  {job.dates}
                </p>
              </div>
              {job.blurb ? (
                <p className="mt-4 text-sm leading-relaxed text-foreground/88 sm:text-[0.95rem]">{job.blurb}</p>
              ) : null}
              <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5 text-sm leading-relaxed text-muted-foreground">
                {job.highlights.map((h, idx) => (
                  <li key={`${job.dates}-${idx}`} className="flex gap-3">
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent/80"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
