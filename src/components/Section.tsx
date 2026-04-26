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
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  containWidth?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-28 border-t border-border/60 py-16 sm:py-24',
        className,
      )}
    >
      <div
        className={cn(
          containWidth ? 'mx-auto max-w-6xl px-4 sm:px-6' : 'w-full max-w-none px-0',
        )}
      >
        <Reveal>
          <div className="mb-9 max-w-2xl sm:mb-10">
            {eyebrow ? (
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-display-sm font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-[1.12]">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
