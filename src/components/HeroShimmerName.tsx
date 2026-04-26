import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type HeroShimmerNameProps = {
  children: ReactNode
  className?: string
}

/**
 * Slow shine pass over display text (blend mode, low opacity).
 * Disabled when `prefers-reduced-motion: reduce`.
 */
export function HeroShimmerName({ children, className }: HeroShimmerNameProps) {
  const reduced = useReducedMotion()

  return (
    <span className={cn('relative inline-block', className)}>
      <span className="relative">{children}</span>
      {!reduced ? (
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm"
          aria-hidden
        >
          <span className="absolute inset-y-[-25%] left-0 w-[42%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-[0.28] mix-blend-soft-light blur-[1px] animate-shimmer-slide" />
        </span>
      ) : null}
    </span>
  )
}
