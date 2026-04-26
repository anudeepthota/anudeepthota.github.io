import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About"
      description="Philosophy and differentiators—short scan; résumé for timelines and tools."
      containWidth={false}
    >
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <div className="rounded-2xl border border-border/80 bg-card/65 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent/95">How I work</p>
            <p className="mt-3 max-w-prose text-lg font-semibold leading-snug text-foreground sm:text-xl">
              Treat automation as a release gate: tight signals, reproducible environments, and ownership across
              dependent systems—not happy-path-only UI.
            </p>
            <ul className="mt-8 max-w-prose space-y-6 text-base leading-relaxed text-muted-foreground/78 sm:text-[1.0625rem] sm:space-y-7">
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/85" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">Commercial digital banking at Q2</strong>—wires,
                  approvals, money movement—Page Objects, API checks (including mocks), and regression across UUX, HQ,
                  Ardent, and Tecton before deploy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/85" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">AI + frameworks</strong>: co-architected{' '}
                  <strong className="text-foreground">TestMate AI</strong> to shorten requirements → executable checks;
                  daily work on <strong className="text-foreground">Q2 ATF</strong>, Contraster, Jenkins / GitLab / AWS /
                  Nomad-backed QA.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/85" aria-hidden />
                <span>
                  <strong className="font-semibold text-foreground">System-level lens</strong> shaped by Mast Global
                  (retail / HR at scale) and Cognizant (ACA billing)—balancing flakiness, risk, and maintainability.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.06}>
          <div className="flex flex-col gap-6 lg:border-l lg:border-border/60 lg:pl-10">
            <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-accent/15 via-card/80 to-card p-8 shadow-card backdrop-blur-sm sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-[0.8125rem]">
                What I lean on
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem]">
                Ownership, clarity, speed
              </p>
              <ul className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground/76 sm:space-y-6">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>Regression strategy across dependent systems—not only happy-path UI.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>CI/CD and cloud-backed QA so nightly and pre-release signals stay trustworthy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
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
