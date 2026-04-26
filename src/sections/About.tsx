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
      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
        <Reveal className="lg:col-span-8">
          <div className="h-full rounded-2xl border border-border/80 bg-card/60 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              <p>
                I am <strong className="font-semibold text-foreground">{person.name}</strong>, a{' '}
                <strong className="font-semibold text-foreground">{person.title}</strong> at Q2
                Software in {person.location}. I lead and contribute to UI, API, and mobile
                automation for commercial banking experiences, own regression strategy across
                interconnected systems, and partner with teams on AWS-backed QA infrastructure,
                Jenkins pipelines, and Docker-based execution grids.
              </p>
              <p>
                Recent work includes co-architecting{' '}
                <strong className="text-foreground">TestMate AI</strong>—using Amazon Titan and
                Claude to generate tests from requirements and code—and evolving tools like{' '}
                <strong className="text-foreground">Q2 Contraster</strong> for upgrade validation
                with centralized S3 configuration.
              </p>
              <p>
                Earlier roles at Mast Global (L Brands), Cognizant, and Infosys built deep
                experience in hybrid frameworks, mobile automation, SAP GUI automation, and
                ACA-compliant billing workflows.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4" delay={0.06}>
          <div className="grid h-full gap-4">
            <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-accent/15 via-card/80 to-card p-6 shadow-card backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Focus</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">QE &amp; enablement</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                UI · API · mobile automation, CI/CD, cloud QA stacks, AI-assisted testing.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-6 shadow-card backdrop-blur-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </h3>
              <ul className="mt-4 space-y-5">
                {education.map((e) => (
                  <li key={e.school} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                    <p className="font-semibold text-foreground">{e.school}</p>
                    <p className="text-xs text-muted-foreground">{e.location}</p>
                    <p className="mt-1 text-sm text-foreground/90">{e.degree}</p>
                    <p className="text-xs text-muted-foreground">{e.dates}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
