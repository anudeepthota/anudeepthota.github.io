import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { certificationsNote } from '@/data/site'

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title={certificationsNote.title}
      description="Transparent note so nothing here is invented filler."
    >
      <Reveal>
        <div className="max-w-3xl rounded-2xl border border-border/80 bg-card/50 p-8 shadow-card backdrop-blur-sm sm:p-10">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {certificationsNote.body}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
