import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { HeroPortrait } from '@/components/HeroPortrait'
import { HeroShimmerName } from '@/components/HeroShimmerName'
import { ProfileIconLinks } from '@/components/ProfileIconLinks'
import { person } from '@/data/site'

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
        <div className="min-w-0 flex-1 lg:max-w-[min(100%,38rem)] xl:max-w-2xl">
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
                ? 'mt-2 text-lg font-medium text-foreground/80 sm:text-xl'
                : 'mt-2 animate-text-pulse-soft text-lg font-medium text-foreground/80 sm:text-xl'
            }
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.14 }}
          >
            {person.title}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl"
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.18 }}
          >
            {person.valueProposition}
          </motion.p>

          <motion.ul
            className="mt-5 max-w-xl space-y-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.22 }}
            aria-label="Selected impact"
          >
            {person.impactBullets.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                  aria-hidden
                >
                  <Check className="size-3.5 stroke-[2.5]" />
                </span>
                <span className="text-foreground/85">{line}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.28 }}
          >
            {person.credibilityLine}
          </motion.p>

          <motion.div
            className="mt-6"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.32 }}
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
