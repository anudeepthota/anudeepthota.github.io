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
      description="Representative initiatives from the résumé—larger cards are the ones I lead or co-own."
      containWidth={false}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
                    : { y: -4, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }
                }
              >
                <Card className="h-full overflow-hidden rounded-2xl border-border/80 bg-card/50 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:border-accent/25 hover:shadow-glow">
                  <CardHeader className="space-y-3 pb-2">
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
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {project.summary}
                    </p>
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
