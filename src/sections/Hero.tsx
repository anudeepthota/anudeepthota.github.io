import { motion, useReducedMotion } from 'framer-motion'
import { HeroPortrait } from '@/components/HeroPortrait'
import { HeroShimmerName } from '@/components/HeroShimmerName'
import { ProfileIconLinks } from '@/components/ProfileIconLinks'
import { heroAtAGlance, person } from '@/data/site'

export function Hero() {
  const reduced = useReducedMotion()
  const transition = { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pb-8 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_0%_38%,hsl(217_72%_52%/0.14),transparent_58%)]"
        aria-hidden
      />
      <div className="relative flex w-full flex-col gap-7 sm:gap-8 md:px-0">
        <div className="min-w-0 flex-1 lg:max-w-[min(100%,36rem)] xl:max-w-xl">
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.28em] text-accent"
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.05 }}
          >
            {person.location}
          </motion.p>

          <motion.h1
            className="mt-2.5 text-display font-semibold tracking-tight text-foreground sm:text-display-lg"
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.1 }}
          >
            <HeroShimmerName>{person.name}</HeroShimmerName>
          </motion.h1>
          <motion.p
            className={
              reduced
                ? 'mt-1.5 text-lg font-medium text-foreground/85 sm:text-xl'
                : 'mt-1.5 animate-text-pulse-soft text-lg font-medium text-foreground/85 sm:text-xl'
            }
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.16 }}
          >
            {person.title}
          </motion.p>
          <motion.p
            className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.22 }}
          >
            {person.tagline}
          </motion.p>

          <motion.div
            className="mt-5 grid gap-2.5 rounded-xl border border-border/70 bg-card/40 px-4 py-3 backdrop-blur-sm sm:grid-cols-3 sm:gap-3 sm:px-4 sm:py-3.5"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.24 }}
            aria-label="At a glance"
          >
            {heroAtAGlance.map((row) => (
              <div
                key={row.label}
                className="min-w-0 border-border/40 pb-2 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 last:sm:border-r-0 last:sm:pr-0"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                  {row.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-foreground sm:text-base">{row.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.28 }}
          >
            <ProfileIconLinks />
          </motion.div>
        </div>

        <div className="mt-2 flex justify-center md:hidden">
          <HeroPortrait />
        </div>
      </div>
    </section>
  )
}
