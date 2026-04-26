import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/utils'
import { skillGroups } from '@/data/site'

type SkillGroup = (typeof skillGroups)[number]

const SKILL_CAP = 6

/** Bento spans for skill groups (full-width layout only); index maps to `skillGroups` */
const layouts: readonly string[] = [
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-2 lg:col-span-2 lg:row-span-2',
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-2 lg:col-span-1',
  'sm:col-span-2 lg:col-span-1',
]

function SkillChip({
  item,
  compact,
}: {
  item: string
  compact?: boolean
}) {
  return (
    <li
      className={cn(
        'rounded-lg border border-border/60 bg-background/45 font-medium leading-snug text-foreground/90 transition-[border-color,transform] duration-200 hover:border-accent/25',
        compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs sm:text-sm',
      )}
    >
      {item}
    </li>
  )
}

function SkillGroupItems({
  group,
  compact,
}: {
  group: SkillGroup
  compact?: boolean
}) {
  const [open, setOpen] = useState(false)
  const items = group.items
  const extra = items.length - SKILL_CAP
  const needsMore = items.length > SKILL_CAP
  const shown = needsMore && !open ? items.slice(0, SKILL_CAP) : items

  return (
    <div>
      <ul className={cn('flex flex-wrap gap-2', compact ? 'gap-1.5' : 'gap-2')}>
        {shown.map((item) => (
          <SkillChip key={item} item={item} compact={compact} />
        ))}
      </ul>
      {needsMore ? (
        <button
          type="button"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-sm"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <>
              Show fewer
              <ChevronUp className="size-3.5" aria-hidden />
            </>
          ) : (
            <>
              +{extra} more
              <ChevronDown className="size-3.5" aria-hidden />
            </>
          )}
        </button>
      ) : null}
    </div>
  )
}

type SkillsProps = {
  variant?: 'full' | 'rail'
  containWidth?: boolean
}

export function Skills({ variant = 'full', containWidth }: SkillsProps) {
  if (variant === 'rail') {
    return (
      <div className="space-y-6" role="region" aria-labelledby="skills-rail-title">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Capabilities</p>
          <h2
            id="skills-rail-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem] sm:leading-tight"
          >
            Skills
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            First {SKILL_CAP} chips per group—expand for the rest. Full inventory also on the résumé PDF.
          </p>
        </div>
        <div className="space-y-3.5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="rounded-xl border border-border/80 bg-card/50 p-4 shadow-card backdrop-blur-sm transition-shadow duration-200 hover:border-accent/25">
                <h3 className="text-sm font-semibold leading-snug tracking-tight text-pretty text-foreground">
                  {group.title}
                </h3>
                <div className="mt-3">
                  <SkillGroupItems group={group} compact />
                </div>
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
      description="Grouped for scanning—expand any category to see every chip. The résumé PDF still carries the full inventory for ATS."
      containWidth={containWidth ?? true}
    >
      <div className="grid auto-rows-min gap-5 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className={layouts[i] ?? 'sm:col-span-2 lg:col-span-2'}
          >
            <div className="flex h-full min-h-[140px] flex-col rounded-2xl border border-border/80 bg-card/55 p-7 shadow-card backdrop-blur-sm transition-[box-shadow,border-color] duration-200 hover:border-accent/25 hover:shadow-glow lg:min-h-0">
              <h3 className="text-base font-semibold leading-snug tracking-tight text-pretty text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-1 flex-col content-start">
                <SkillGroupItems group={group} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
