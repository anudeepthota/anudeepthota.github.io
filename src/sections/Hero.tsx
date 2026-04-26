import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingShadow } from '@/components/ui/glowing-shadow'
import { person } from '@/data/site'

export function Hero() {
  const reduced = useReducedMotion()
  const transition = { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--accent)/0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,420px)] sm:items-center sm:gap-10 sm:px-6">
        <div>
          <motion.p
            className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.05 }}
          >
            {person.location}
          </motion.p>
          <motion.h1
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.12 }}
          >
            {person.name}
          </motion.h1>
          <motion.p
            className="mt-3 text-lg font-medium text-foreground/90 sm:text-xl"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.18 }}
          >
            {person.title}
          </motion.p>
          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.24 }}
          >
            {person.tagline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.32 }}
          >
            <Button asChild size="lg">
              <a href="#contact">
                <Mail className="size-4" aria-hidden />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="size-4" aria-hidden />
                Résumé PDF
              </a>
            </Button>
          </motion.div>
          <motion.a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ delay: reduced ? 0 : 0.55, duration: reduced ? 0 : 0.4 }}
          >
            <ArrowDown className="size-4" aria-hidden />
            About &amp; experience
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center sm:justify-end"
          initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: reduced ? 0 : 0.2 }}
        >
          <GlowingShadow className="max-w-[min(100%,420px)] scale-[0.92] sm:scale-100">
            <img
              src="/profile.jpg"
              alt="Portrait of Anudeep Thota"
              width={480}
              height={640}
              className="relative z-[1] max-h-[min(340px,48vh)] w-auto max-w-full rounded-xl object-cover object-top shadow-2xl"
              decoding="async"
              fetchPriority="high"
            />
          </GlowingShadow>
        </motion.div>
      </div>
    </section>
  )
}
