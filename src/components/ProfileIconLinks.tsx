import { FileDown, Github, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { person } from '@/data/site'

const itemClass =
  'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10'

export function ProfileIconLinks({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center gap-0.5 sm:gap-1', className)}
      aria-label="GitHub, LinkedIn, and résumé"
    >
      <a
        href={person.github}
        className={itemClass}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub (opens in a new tab)"
        title="GitHub"
      >
        <Github className="size-[1.125rem] sm:size-5" aria-hidden />
      </a>
      <a
        href={person.linkedin}
        className={itemClass}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <Linkedin className="size-[1.125rem] sm:size-5" aria-hidden />
      </a>
      <a
        href={person.resumePdf}
        className={itemClass}
        download
        aria-label="Download résumé PDF"
        title="Résumé PDF"
      >
        <FileDown className="size-[1.125rem] sm:size-5" aria-hidden />
      </a>
    </div>
  )
}
