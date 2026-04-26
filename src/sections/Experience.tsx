import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { memo, useId, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { RichText } from '@/components/RichText'
import { Section } from '@/components/Section'
import { cn } from '@/lib/utils'
import type { ExperienceEntry, ExperienceHighlight } from '@/data/site'
import { experience } from '@/data/site'

const HIGHLIGHT_PREVIEW = 6

function HighlightRow({ item }: { item: ExperienceHighlight }) {
  return (
    <div className="flex gap-4">
      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
      <div className="min-w-0 flex-1 space-y-2.5">
        <p className="text-[1.0625rem] leading-relaxed text-foreground/85 sm:text-base">
          <RichText text={item.text} />
        </p>
        {item.metrics && item.metrics.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {item.metrics.map((m) => (
              <span
                key={m}
                className="inline-flex rounded-md border border-accent/35 bg-accent/[0.14] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent sm:text-sm sm:normal-case sm:tracking-normal"
              >
                {m}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const ExperienceJobCard = memo(function ExperienceJobCard({ job }: { job: ExperienceEntry }) {
  const reduced = useReducedMotion()
  const listId = useId()
  const [expanded, setExpanded] = useState(false)
  const highlights = job.highlights
  const needsToggle = highlights.length > HIGHLIGHT_PREVIEW
  const visible = !needsToggle || expanded ? highlights : highlights.slice(0, HIGHLIGHT_PREVIEW)
  const hiddenCount = highlights.length - HIGHLIGHT_PREVIEW

  return (
    <motion.li
      layout
      className={cn(
        'relative rounded-2xl border border-border/80 bg-card/55 p-8 shadow-card backdrop-blur-sm sm:p-10',
        'transition-[border-color,box-shadow] duration-200 ease-out',
        'hover:border-accent/35 hover:shadow-lg hover:shadow-accent/[0.08]',
      )}
      whileHover={reduced ? undefined : { y: -3, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 440, damping: 26 }}
    >
      <div className="absolute left-8 top-0 hidden h-px w-12 bg-gradient-to-r from-accent/60 to-transparent sm:block" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-[1.4rem]">
            {job.company}
          </h3>
          <p className="mt-1.5 text-base font-semibold text-accent">{job.role}</p>
          <p className="text-sm text-muted-foreground/85 sm:text-base">{job.location}</p>
        </div>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 sm:text-sm sm:normal-case sm:tracking-normal">
          {job.dates}
        </p>
      </div>

      <p className="mt-5 max-w-prose text-base font-medium leading-snug text-foreground sm:text-[1.0625rem]">
        {job.impactSummary}
      </p>
      {job.blurb ? (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground/75 sm:text-[0.9375rem]">
          {job.blurb}
        </p>
      ) : null}

      <ul
        id={listId}
        className="mt-8 space-y-5 border-t border-border/60 pt-8 text-muted-foreground sm:space-y-6"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((h, idx) => (
            <motion.li
              key={`${job.dates}-${idx}`}
              layout
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: reduced ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <HighlightRow item={h} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {needsToggle ? (
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? (
            <>
              Show fewer
              <ChevronUp className="size-4" aria-hidden />
            </>
          ) : (
            <>
              Show {hiddenCount} more
              <ChevronDown className="size-4" aria-hidden />
            </>
          )}
        </button>
      ) : null}
    </motion.li>
  )
})

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience"
      description="One-line scope per role, then proof bullets. Metrics are badge-first so you can skim without reading prose. Full history on the résumé PDF."
      containWidth={false}
      className="pt-8 pb-16 sm:pt-10 sm:pb-24"
    >
      <ol className="space-y-10 sm:space-y-12">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}-${job.dates}`} delay={i * 0.04}>
            <ExperienceJobCard job={job} />
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
