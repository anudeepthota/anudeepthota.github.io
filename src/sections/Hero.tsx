import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { person } from '@/data/site'

export function Hero() {
  const reduced = useReducedMotion()
  const transition = { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_40%,hsl(217_72%_52%/0.12),transparent_55%)]"
        aria-hidden
      />
      {/* Tighter max-width + start-aligned row removes the wide “dead” corridor between copy and photo */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 sm:gap-9 sm:px-6 lg:flex-row lg:items-center lg:justify-start lg:gap-10 xl:gap-12">
        <div className="min-w-0 flex-1 lg:max-w-xl xl:max-w-2xl">
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.28em] text-accent"
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.05 }}
          >
            {person.location}
          </motion.p>

          <motion.h1
            className="mt-3 text-display font-semibold tracking-tight text-foreground sm:text-display-lg"
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.1 }}
          >
            {person.name}
          </motion.h1>
          <motion.p
            className="mt-2 text-lg font-medium text-foreground/85 sm:text-xl"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.16 }}
          >
            {person.title}
          </motion.p>
          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.22 }}
          >
            {person.tagline}
          </motion.p>
          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.28 }}
          >
            <Button asChild size="lg" className="rounded-xl shadow-glow">
              <a href="#contact">
                <Mail className="size-4" aria-hidden />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl" asChild>
              <a href="/resume.pdf" download>
                <Download className="size-4" aria-hidden />
                Résumé PDF
              </a>
            </Button>
          </motion.div>
          <motion.a
            href="#about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-accent"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ delay: reduced ? 0 : 0.5, duration: reduced ? 0 : 0.4 }}
          >
            <ArrowDown className="size-4" aria-hidden />
            About &amp; experience
          </motion.a>
        </div>

        <motion.aside
          className="relative mx-auto w-full max-w-[200px] shrink-0 sm:max-w-[220px] lg:mx-0 lg:max-w-[240px]"
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduced ? 0 : 0.14 }}
          aria-label="Portrait"
        >
          <div
            className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/12 via-transparent to-violet-500/10 blur-lg"
            aria-hidden
          />
          <figure className="relative">
            <div className="rounded-xl bg-gradient-to-br from-white/12 via-white/[0.04] to-accent/18 p-px shadow-card">
              <div className="overflow-hidden rounded-xl bg-card ring-1 ring-white/[0.06]">
                <img
                  src="/profile.jpg"
                  alt="Portrait of Anudeep Thota"
                  width={280}
                  height={360}
                  className="aspect-[4/5] w-full object-cover object-[center_14%] [transform:scale(1.07)]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </figure>
        </motion.aside>
      </div>
    </section>
  )
}
