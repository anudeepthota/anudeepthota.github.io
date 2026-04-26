import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { person } from '@/data/site'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Reach out"
      title="Contact"
      description="Direct lines from the résumé header—recruiting, collaboration, or deep dives on automation."
    >
      <Reveal>
        <div className="flex flex-col gap-8 rounded-2xl border border-border/80 bg-gradient-to-br from-card/80 via-card/40 to-accent/[0.07] p-8 shadow-card backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="space-y-2">
            <p className="text-xl font-semibold tracking-tight text-foreground">{person.name}</p>
            <p className="text-sm text-muted-foreground">{person.title}</p>
            <p className="text-sm text-muted-foreground">{person.location}</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Button variant="secondary" size="lg" className="rounded-xl" asChild>
              <a href={`mailto:${person.email}`}>
                <Mail className="size-4" aria-hidden />
                {person.email}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl" asChild>
              <a href="tel:+14698347396">
                <Phone className="size-4" aria-hidden />
                {person.phone}
              </a>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" className="rounded-xl" asChild>
                <a href={person.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin className="size-4" aria-hidden />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" className="rounded-xl" asChild>
                <a href={person.github} target="_blank" rel="noreferrer noopener">
                  <Github className="size-4" aria-hidden />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
