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
      description="Shipped initiatives and platforms named on the résumé—not generic placeholders."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <motion.div
              whileHover={
                reduced
                  ? undefined
                  : { y: -3, transition: { duration: 0.2, ease: 'easeOut' } }
              }
            >
              <Card className="h-full border-border/80">
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <ul className="flex flex-wrap gap-2 pt-2" aria-label="Technologies">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
