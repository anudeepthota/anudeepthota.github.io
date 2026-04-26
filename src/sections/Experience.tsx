import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useId, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/utils'
import type { ExperienceEntry } from '@/data/site'
import { experience } from '@/data/site'

const HIGHLIGHT_PREVIEW = 4

function ExperienceJobCard({ job }: { job: ExperienceEntry }) {
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
        'relative rounded-2xl border border-border/80 bg-card/50 p-6 shadow-card backdrop-blur-sm sm:p-8',
        'transition-[border-color,box-shadow] duration-300 ease-out',
        'hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.06]',
      )}
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <div className="absolute left-6 top-0 hidden h-px w-12 bg-gradient-to-r from-accent/60 to-transparent sm:block" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
            {job.company}
          </h3>
          <p className="mt-1 text-base font-medium text-accent">{job.role}</p>
          <p className="text-base text-muted-foreground">{job.location}</p>
        </div>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
          {job.dates}
        </p>
      </div>
      {job.blurb ? (
        <p className="mt-4 text-base leading-relaxed text-foreground/90">{job.blurb}</p>
      ) : null}

      <ul
        id={listId}
        className="mt-5 space-y-2.5 border-t border-border/60 pt-5 text-base leading-relaxed text-muted-foreground"
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
              className="flex gap-3"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
              <span>{h}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {needsToggle ? (
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience"
      description="Newest first—hover a card for emphasis; long roles expand for full highlights. The résumé PDF stays the source of truth."
      containWidth={false}
      className="pt-8 pb-16 sm:pt-10 sm:pb-24"
    >
      <ol className="space-y-7 sm:space-y-8">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}-${job.dates}`} delay={i * 0.04}>
            <ExperienceJobCard job={job} />
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
