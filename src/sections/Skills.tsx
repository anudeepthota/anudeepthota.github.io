import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { skillGroups } from '@/data/site'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Tooling and practices drawn directly from the résumé—grouped for quick scanning."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/90"
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
