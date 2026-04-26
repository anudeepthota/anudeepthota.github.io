import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { education, person } from '@/data/site'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About"
      description="Senior-quality automation engineer focused on fintech platforms, AI-assisted testing, and reliable CI/CD at scale."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I am <strong className="font-semibold text-foreground">{person.name}</strong>, a{' '}
              <strong className="font-semibold text-foreground">{person.title}</strong> at Q2
              Software in {person.location}. I lead and contribute to UI, API, and mobile
              automation for commercial banking experiences, own regression strategy across
              interconnected systems, and partner with teams on AWS-backed QA infrastructure,
              Jenkins pipelines, and Docker-based execution grids.
            </p>
            <p>
              Recent work includes co-architecting <strong className="text-foreground">TestMate AI</strong>—using
              Amazon Titan and Claude to generate tests from requirements and code—and evolving
              tools like <strong className="text-foreground">Q2 Contraster</strong> for upgrade validation with centralized S3 configuration.
            </p>
            <p>
              Earlier roles at Mast Global (L Brands), Cognizant, and Infosys built deep experience
              in hybrid frameworks, mobile automation, SAP GUI automation, and ACA-compliant
              billing workflows.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Education
            </h3>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-foreground">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.location}</p>
                  <p className="mt-1 text-sm text-foreground/90">{e.degree}</p>
                  <p className="text-xs text-muted-foreground">{e.dates}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
