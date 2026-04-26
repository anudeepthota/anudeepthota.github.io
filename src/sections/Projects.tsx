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
                transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
              }
        }
      >
        <Card className="h-full overflow-hidden rounded-2xl border-border/80 bg-card/55 shadow-card backdrop-blur-sm ring-2 ring-transparent transition-[border-color,box-shadow,ring-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/35 hover:shadow-xl hover:shadow-accent/[0.1] hover:ring-accent/15">
          <CardHeader className="space-y-4 px-8 pb-1 pt-8 sm:px-9 sm:pb-2 sm:pt-9">
            <CardTitle className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{project.name}</CardTitle>
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
          <CardContent className="space-y-6 px-8 pb-9 pt-2 sm:space-y-7 sm:px-9 sm:pb-10">
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground/90">Problem</p>
              <p className="max-w-prose text-sm font-medium leading-relaxed text-foreground/82 sm:text-[0.95rem]">
                {project.problem}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground/90">Solution</p>
              <p className="max-w-prose text-sm font-medium leading-relaxed text-foreground/82 sm:text-[0.95rem]">
                {project.solution}
              </p>
            </div>
            <div className="space-y-2.5 rounded-xl border border-accent/30 bg-accent/[0.11] p-4 shadow-inner shadow-accent/[0.04] sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Impact</p>
              <p className="max-w-prose text-sm font-semibold leading-relaxed text-foreground sm:text-[0.95rem]">
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
      description="Problem → solution → impact on every card. Hover for depth."
      containWidth={false}
      className="pb-4 sm:pb-6"
    >
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
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
