import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/site'

export function Projects() {
  const reduced = useReducedMotion()

  return (
    <Section
      id="projects"
      eyebrow="Highlights"
      title="Projects"
      description="Each card: what was broken, what shipped, and the outcome—so you can scan without reading a case study."
      containWidth={false}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, i) => {
          const wide = i === 0 || i === 3
          return (
            <Reveal
              key={project.name}
              delay={i * 0.06}
              className={wide ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <motion.div
                className="h-full"
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.02,
                        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                      }
                }
              >
                <Card className="h-full overflow-hidden rounded-2xl border-border/80 bg-card/55 shadow-card backdrop-blur-sm transition-[border-color,box-shadow] duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.07]">
                  <CardHeader className="space-y-3 pb-2 sm:pb-3">
                    <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {project.name}
                    </CardTitle>
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                      {project.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-7 sm:pb-8">
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Problem
                      </p>
                      <p className="max-w-prose text-sm leading-relaxed text-foreground/88 sm:text-[0.95rem]">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Solution
                      </p>
                      <p className="max-w-prose text-sm leading-relaxed text-foreground/88 sm:text-[0.95rem]">
                        {project.solution}
                      </p>
                    </div>
                    <div className="space-y-1.5 rounded-xl border border-accent/15 bg-accent/[0.06] p-3.5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Impact</p>
                      <p className="max-w-prose text-sm font-medium leading-relaxed text-foreground/90 sm:text-[0.95rem]">
                        {project.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
