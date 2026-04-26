import type { ComponentProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type GradientDotsProps = ComponentProps<typeof motion.div> & {
  /** Dot size (default: 8) */
  dotSize?: number
  /** Spacing between dots (default: 10) */
  spacing?: number
  /** Animation duration (default: 30) */
  duration?: number
  /** Color cycle duration (default: 6) */
  colorCycleDuration?: number
  /** Background / mask color (default: page background token) */
  backgroundColor?: string
}

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = 'hsl(var(--background))',
  className,
  style,
  ...props
}: GradientDotsProps) {
  const reduced = useReducedMotion()
  const hexSpacing = spacing * 1.732

  const baseStyle = {
    backgroundColor,
    backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #f00, transparent 60%),
          radial-gradient(circle at 50% 50%, #ff0, transparent 60%),
          radial-gradient(circle at 50% 50%, #0f0, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #00f, transparent 60%)
        `,
    backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
    backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
    ...style,
  } as const

  return (
    <motion.div
      className={cn('absolute inset-0', className)}
      style={baseStyle}
      animate={
        reduced
          ? undefined
          : {
              backgroundPosition: [
                `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
                `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
              ],
              filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
            }
      }
      transition={
        reduced
          ? undefined
          : {
              backgroundPosition: {
                duration,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              },
              filter: {
                duration: colorCycleDuration,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              },
            }
      }
      {...props}
    />
  )
}
