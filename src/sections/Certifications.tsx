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
        <div className="max-w-3xl rounded-xl border border-border bg-card p-8 shadow-sm">
          <p className="text-base leading-relaxed text-muted-foreground">
            {certificationsNote.body}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
