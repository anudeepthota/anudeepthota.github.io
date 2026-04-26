import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About"
      description="How I work with teams—tight scan, then the résumé for timelines and tools."
      containWidth={false}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <div className="rounded-2xl border border-border/80 bg-card/65 p-7 shadow-card backdrop-blur-sm sm:p-9">
            <div className="max-w-prose space-y-5 text-[1.0625rem] leading-[1.65] text-muted-foreground sm:text-lg">
              <p>
                At <strong className="font-semibold text-foreground">Q2</strong> I focus on commercial
                digital banking—wires, approvals, and related flows—with Page Object UI automation, API
                validation (including mocks for SSO and payments), and regression across{' '}
                <strong className="text-foreground">UUX, HQ, Ardent, and Tecton</strong> as a release gate,
                not an afterthought.
              </p>
              <p>
                I co-architected <strong className="text-foreground">TestMate AI</strong> to shorten the
                path from requirements to executable checks. I also ship on <strong className="text-foreground">Q2 ATF</strong>,{' '}
                <strong className="text-foreground">Q2 Contraster</strong>, and Jenkins / AWS / Nomad-backed QA
                environments.
              </p>
              <p>
                Earlier: high-volume automation at <strong className="text-foreground">Mast Global</strong>{' '}
                and ACA billing QE at <strong className="text-foreground">Cognizant</strong>—that mix shapes
                how I balance risk, flakiness, and maintainability.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.06}>
          <div className="flex flex-col gap-5 lg:border-l lg:border-border/60 lg:pl-8">
            <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-accent/15 via-card/80 to-card p-7 shadow-card backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-[0.8125rem]">
                What I lean on
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                Ownership, clarity, speed
              </p>
              <ul className="mt-4 max-w-prose space-y-3 text-base leading-relaxed text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>Regression strategy across dependent systems—not only happy-path UI.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>CI/CD and cloud-backed QA so nightly and pre-release signals stay trustworthy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>AI-assisted workflows that cut toil without hiding risk.</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
