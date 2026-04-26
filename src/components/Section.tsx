import type { ReactNode } from 'react'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  /** When nested in a padded column (e.g. desktop main rail), avoid double horizontal padding */
  containWidth = true,
}: {
  /** Omit when a parent wrapper carries the anchor id (e.g. responsive duplicate layouts). */
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  containWidth?: boolean
}) {
  return (
    <section
      {...(id ? { id } : {})}
      className={cn(
        'scroll-mt-28 border-t border-border/60 py-28 sm:py-40',
        className,
      )}
    >
      <div
        className={cn(
          containWidth ? 'mx-auto max-w-6xl px-4 sm:px-6' : 'w-full max-w-none px-0',
        )}
      >
        <Reveal>
          <div className="mb-14 max-w-prose sm:mb-16">
            {eyebrow ? (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-accent/90 sm:text-[0.8125rem]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-[2.125rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.04]">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 text-[1.0625rem] font-medium leading-[1.68] text-muted-foreground/68 sm:text-lg sm:leading-[1.72]">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
