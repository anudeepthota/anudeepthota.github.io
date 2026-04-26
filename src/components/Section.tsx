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
}: {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-28 border-t border-border/60 py-20 sm:py-28',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
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
