import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About"
      description="How I work with teams and where the depth comes from—without repeating the hero. Full timelines and tool list are on the résumé PDF."
      containWidth={false}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-7 shadow-card backdrop-blur-sm sm:p-9">
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                At <strong className="font-semibold text-foreground">Q2 Software</strong> I focus on
                commercial digital banking: ETMS, wires, bulk approvals, and related flows. I extend
                maintainable UI automation (Page Object patterns), validate APIs and integrations
                (including ReadyAPI mocks for Okta SSO and consumer payments), and treat regression
                across <strong className="text-foreground">UUX, HQ, Ardent, and Tecton</strong> as a
                first-class release gate—not a last-minute checkbox.
              </p>
              <p>
                I co-architected <strong className="text-foreground">TestMate AI</strong>, combining
                Amazon Titan and Claude with requirements and code context so teams can move faster
                from intent to executable checks. I also contribute to{' '}
                <strong className="text-foreground">Q2 ATF</strong> (Python, UI/API/mobile),{' '}
                <strong className="text-foreground">Q2 Contraster</strong> (upgrade validation with
                centralized S3-backed config), and Jenkins-driven pipelines alongside AWS and Nomad
                for QA environments.
              </p>
              <p>
                Before Q2 I shipped high-volume automation at{' '}
                <strong className="text-foreground">Mast Global (L Brands)</strong> (mobile + web,
                Sauce Labs, Jenkins), and ACA-focused billing automation at{' '}
                <strong className="text-foreground">Cognizant</strong> (Selenium, Java, Postman,
                HP ALM). That mix—retail velocity, regulated financials, and now fintech—shapes how
                I prioritize risk, flakiness, and maintainability.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.06}>
          <div className="flex flex-col gap-5 lg:border-l lg:border-border/60 lg:pl-8">
            <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-accent/15 via-card/80 to-card p-6 shadow-card backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-[0.8125rem]">
                What I lean on
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                Ownership, clarity, speed
              </p>
              <ul className="mt-3 space-y-2.5 text-base leading-relaxed text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>Regression strategy across dependent systems—not only happy-path UI.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>CI/CD and cloud-backed QA so teams trust nightly and pre-release signals.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                  <span>AI-assisted workflows where they reduce toil without hiding risk.</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
