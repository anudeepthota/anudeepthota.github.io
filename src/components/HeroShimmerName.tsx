import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type HeroShimmerNameProps = {
  children: ReactNode
  className?: string
}

/**
 * Animated gradient fill + soft glow on the display name.
 * Disabled when `prefers-reduced-motion: reduce` (plain foreground text).
 */
export function HeroShimmerName({ children, className }: HeroShimmerNameProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <span className={cn('inline-block text-foreground', className)}>{children}</span>
  }

  return (
    <span className={cn('relative inline-block', className)}>
      <span
        className={cn(
          'relative inline-block bg-[length:280%_auto] bg-clip-text text-transparent',
          'bg-gradient-to-r from-sky-300 via-fuchsia-300 via-amber-200 to-sky-300',
          'animate-name-aurora',
        )}
      >
        {children}
      </span>
    </span>
  )
}
