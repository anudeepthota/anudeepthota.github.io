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
        'scroll-mt-28 border-t border-border/60 py-20 sm:py-28',
        className,
      )}
    >
      <div
        className={cn(
          containWidth ? 'mx-auto max-w-6xl px-4 sm:px-6' : 'w-full max-w-none px-0',
        )}
      >
        <Reveal>
          <div className="mb-10 max-w-prose sm:mb-12">
            {eyebrow ? (
              <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-[0.8125rem]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.375rem] sm:leading-[1.1]">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 text-[1.0625rem] leading-[1.65] text-foreground/72 sm:text-lg sm:leading-relaxed">
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
