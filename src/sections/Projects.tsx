import { motion, useReducedMotion } from 'framer-motion'
import { memo } from 'react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ProjectEntry } from '@/data/site'
import { projects } from '@/data/site'

type ProjectCardProps = {
  project: ProjectEntry
  wide: boolean
  delay: number
  reduced: boolean | null
}

const ProjectCard = memo(function ProjectCard({ project, wide, delay, reduced }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className={wide ? 'sm:col-span-2 lg:col-span-2' : ''}>
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
        <Card className="h-full overflow-hidden rounded-2xl border-border/80 bg-card/55 shadow-card backdrop-blur-sm ring-2 ring-transparent transition-[border-color,box-shadow,ring-color] duration-200 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/[0.08] hover:ring-accent/15">
          <CardHeader className="space-y-3 pb-2 sm:pb-3">
            <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</CardTitle>
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent transition-colors duration-200 hover:border-accent/35"
                >
                  {t}
                </li>
              ))}
            </ul>
          </CardHeader>
          <CardContent className="space-y-4 pb-7 sm:pb-8">
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
              <p className="max-w-prose text-sm leading-relaxed text-foreground/88 sm:text-[0.95rem]">
                {project.problem}
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Solution</p>
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
})

export function Projects() {
  const reduced = useReducedMotion()

  return (
    <Section
      id="projects"
      eyebrow="Highlights"
      title="Projects"
      description="Problem → solution → impact on every card. Hover for depth; details expand only when you need them elsewhere."
      containWidth={false}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            wide={i === 0 || i === 3}
            delay={i * 0.06}
            reduced={reduced}
          />
        ))}
      </div>
    </Section>
  )
}
