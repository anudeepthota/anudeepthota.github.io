import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }

export function HeroPortrait({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.aside
      className={cn('relative', className)}
      initial={reduced ? undefined : { opacity: 0, y: 24 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ ...transition, delay: reduced ? 0 : 0.14 }}
      aria-label="Portrait"
    >
      <div
        className="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-br from-accent/12 via-transparent to-violet-500/10 blur-lg"
        aria-hidden
      />
      <figure className="relative mx-auto aspect-square w-full max-w-[210px] sm:max-w-[230px] lg:max-w-none">
        <div className="rounded-full bg-gradient-to-br from-white/12 via-white/[0.04] to-accent/18 p-[2px] shadow-card">
          <div className="aspect-square size-full overflow-hidden rounded-full bg-card ring-1 ring-white/[0.06]">
            <img
              src="/profile.jpg"
              alt="Portrait of Anudeep Thota"
              width={320}
              height={320}
              className="size-full rounded-full object-cover object-[center_15%] [transform:scale(1.08)]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </figure>
    </motion.aside>
  )
}
