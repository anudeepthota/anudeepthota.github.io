import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const COUNT = 52

/** Deterministic “random” layout so SSR/hydration stay stable. */
function sparkleStyle(i: number) {
  const x = ((i * 7919) % 10000) / 100
  const y = ((i * 6151) % 10000) / 100
  const delay = ((i * 173) % 4500) / 1000
  const slow = i % 4 === 0
  return { left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s`, slow }
}

/**
 * Very subtle background sparkles (opacity + scale only).
 * Disabled when `prefers-reduced-motion: reduce` (WCAG / vestibular comfort).
 */
export function SparkleField({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <div
      className={cn('pointer-events-none fixed inset-0 -z-[8] opacity-[0.5]', className)}
      aria-hidden
    >
      {Array.from({ length: COUNT }, (_, i) => {
        const { left, top, animationDelay, slow } = sparkleStyle(i)
        return (
          <span
            key={i}
            className={cn(
              'absolute rounded-full bg-foreground will-change-[opacity,transform]',
              slow ? 'h-[2px] w-[2px] animate-twinkle-slow' : 'h-px w-px animate-twinkle',
            )}
            style={{ left, top, animationDelay }}
          />
        )
      })}
    </div>
  )
}
