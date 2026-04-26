import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { education, graduateAppointments } from '@/data/site'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic"
      title="Education"
      description="Degrees and graduate appointments from the Texas State M.S. era—same context as the résumé education block."
      containWidth={false}
    >
      <Reveal>
        <div className="rounded-2xl border border-border/80 bg-card/60 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school} className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
                <p className="text-lg font-semibold text-foreground">{e.school}</p>
                <p className="text-sm text-muted-foreground">{e.location}</p>
                <p className="mt-1 text-base text-foreground/90">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.dates}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border/60 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              During my M.S. (Texas State)
            </h3>
            <ul className="mt-3 space-y-3 text-base text-muted-foreground">
              {graduateAppointments.map((g) => (
                <li key={`${g.role}-${g.dates}`}>
                  <p className="font-medium text-foreground/95">{g.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {g.org} · {g.location} · {g.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
