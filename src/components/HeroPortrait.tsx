import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }

export type HeroPortraitVariant = 'default' | 'rail'

export function HeroPortrait({
  className,
  variant = 'default',
}: {
  className?: string
  /** `rail`: smaller circle for the sticky column so it balances the skills stack */
  variant?: HeroPortraitVariant
}) {
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
        className={cn(
          'pointer-events-none absolute rounded-full bg-gradient-to-br from-accent/12 via-transparent to-violet-500/10',
          variant === 'rail'
            ? '-inset-1 blur-md opacity-90'
            : '-inset-2 blur-lg',
        )}
        aria-hidden
      />
      <figure
        className={cn(
          'relative mx-auto aspect-square w-full',
          variant === 'rail'
            ? 'max-w-[156px] sm:max-w-[168px] md:max-w-[172px] lg:max-w-[176px]'
            : 'max-w-[188px] sm:max-w-[204px]',
        )}
      >
        <div className="rounded-full bg-gradient-to-br from-white/12 via-white/[0.04] to-accent/18 p-[2px] shadow-card">
          <div className="aspect-square size-full overflow-hidden rounded-full bg-card ring-1 ring-white/[0.06]">
            <img
              src="/profile.jpg"
              alt="Portrait of Anudeep Thota"
              width={320}
              height={320}
              className="size-full rounded-full object-cover object-[center_15%] [transform:scale(1.06)]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </figure>
    </motion.aside>
  )
}
