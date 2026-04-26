import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { experience } from '@/data/site'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience"
      description="Roles and outcomes summarized from the same résumé as this site—newest first."
    >
      <ol className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}-${job.dates}`} delay={i * 0.04}>
            <li className="relative rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.company}</h3>
                  <p className="text-sm font-medium text-accent">{job.role}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
                <p className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                  {job.dates}
                </p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                {job.highlights.map((h, idx) => (
                  <li key={`${job.dates}-${idx}`}>{h}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
