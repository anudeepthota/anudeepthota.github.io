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
      description="Direct lines from the résumé header—best for recruiting, collaboration, or automation discussions."
    >
      <Reveal>
        <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-foreground">{person.name}</p>
            <p className="text-sm text-muted-foreground">{person.title}</p>
            <p className="text-sm text-muted-foreground">{person.location}</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Button variant="secondary" size="lg" asChild>
              <a href={`mailto:${person.email}`}>
                <Mail className="size-4" aria-hidden />
                {person.email}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+14698347396">
                <Phone className="size-4" aria-hidden />
                {person.phone}
              </a>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" asChild>
                <a href={person.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin className="size-4" aria-hidden />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" asChild>
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
