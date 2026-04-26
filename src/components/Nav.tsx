import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ProfileIconLinks } from '@/components/ProfileIconLinks'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/site'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/75 shadow-card backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="shrink-0 text-sm font-bold uppercase tracking-[0.35em] text-foreground/90 transition-opacity hover:opacity-80"
        >
          AT
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2 md:gap-3">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-muted-foreground transition-colors duration-200 ease-out hover:bg-white/[0.04] hover:text-foreground sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ProfileIconLinks className="shrink-0" />
          <button
            type="button"
            className="inline-flex shrink-0 rounded-lg p-2 text-foreground transition-colors hover:bg-white/[0.06] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border/80 bg-background/95 backdrop-blur-xl md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map((link) => {
            const href =
              'mobileHref' in link && typeof link.mobileHref === 'string' ? link.mobileHref : link.href
            return (
              <li key={`${link.label}-mobile`}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-white/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
