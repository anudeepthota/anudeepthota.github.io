import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { skillGroups } from '@/data/site'

const layouts: readonly string[] = [
  'sm:col-span-2 lg:col-span-2 lg:row-span-1',
  'sm:col-span-2 lg:col-span-2 lg:row-span-2',
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-1 lg:col-span-1',
  'sm:col-span-1 lg:col-span-1',
]

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Tooling and practices from the résumé—organized in a scannable bento layout."
    >
      <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className={layouts[i] ?? 'sm:col-span-2 lg:col-span-2'}
          >
            <div className="flex h-full min-h-[140px] flex-col rounded-2xl border border-border/80 bg-card/50 p-6 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-glow lg:min-h-0">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border/60 bg-background/40 px-2.5 py-1 text-[11px] font-medium leading-tight text-foreground/90 sm:text-xs"
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
