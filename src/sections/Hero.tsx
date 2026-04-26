import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { HeroPortrait } from '@/components/HeroPortrait'
import { HeroShimmerName } from '@/components/HeroShimmerName'
import { ProfileIconLinks } from '@/components/ProfileIconLinks'
import { RichText } from '@/components/RichText'
import { cn } from '@/lib/utils'
import { person } from '@/data/site'

export function Hero() {
  const reduced = useReducedMotion()
  const transition = { duration: reduced ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-8 pt-20 sm:pb-10 sm:pt-24 lg:pb-10 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_0%_38%,hsl(217_72%_52%/0.14),transparent_58%)]"
        aria-hidden
      />
      <div className="relative flex w-full flex-col gap-8 sm:gap-9 md:px-0">
        <div className="min-w-0 max-w-lg flex-1 sm:max-w-xl md:max-w-[min(100%,36rem)]">
          <motion.h1
            className="text-[clamp(2.35rem,5.5vw,3.65rem)] font-semibold leading-[1.06] tracking-tight text-foreground"
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.05 }}
          >
            <HeroShimmerName>{person.name}</HeroShimmerName>
          </motion.h1>
          <motion.p
            className={
              reduced
                ? 'mt-2.5 text-balance text-base font-medium text-foreground/65 sm:text-lg'
                : 'mt-2.5 animate-text-pulse-soft text-balance text-base font-medium text-foreground/65 sm:text-lg'
            }
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.1 }}
          >
            {person.title}
          </motion.p>

          <motion.p
            className="mt-6 max-w-full whitespace-pre-line text-base font-normal leading-relaxed tracking-normal text-foreground/88 sm:mt-7 sm:max-w-xl sm:text-[1.0625rem] sm:leading-[1.72]"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.14 }}
          >
            {person.valueProposition}
          </motion.p>

          <motion.ul
            className="mt-6 max-w-lg space-y-3.5 sm:mt-7 sm:space-y-4"
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.18 }}
            aria-label="Selected impact"
          >
            {person.impactBullets.map((line) => {
              const isMetric = line.variant === 'metric'
              return (
                <li
                  key={line.text}
                  className={cn('flex gap-2.5', isMetric ? 'items-center' : 'items-start')}
                >
                  <span
                    className={cn(
                      'flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent',
                      isMetric ? 'self-center' : 'mt-0.5',
                    )}
                    aria-hidden
                  >
                    <Check className="size-3 stroke-[2.5]" />
                  </span>
                  <span
                    className={cn(
                      'min-w-0 text-sm font-normal leading-relaxed',
                      isMetric ? 'text-foreground' : 'pt-px text-foreground/78 sm:text-[0.9375rem]',
                    )}
                  >
                    <RichText
                      text={line.text}
                      variant="heroMetric"
                      metricProminence={isMetric ? 'lead' : 'default'}
                    />
                  </span>
                </li>
              )
            })}
          </motion.ul>

          {person.credibilityLine ? (
            <motion.p
              className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground/72 sm:mt-8 sm:text-[0.9375rem]"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ ...transition, delay: reduced ? 0 : 0.22 }}
            >
              {person.credibilityLine}
            </motion.p>
          ) : null}

          <motion.div
            className={person.credibilityLine ? 'mt-7' : 'mt-8'}
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : person.credibilityLine ? 0.26 : 0.22 }}
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
