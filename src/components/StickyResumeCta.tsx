import { FileDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { person } from '@/data/site'

/** Fixed mini CTA for recruiters (tappable on all breakpoints). */
export function StickyResumeCta() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="pointer-events-none fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6"
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.28,
        delay: reduced ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={person.resumePdf}
        download
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-accent/35 bg-background/90 px-4 py-2.5 text-sm font-semibold text-foreground shadow-lg shadow-black/20 backdrop-blur-md transition-[transform,box-shadow,border-color] duration-200 hover:border-accent/50 hover:shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        <FileDown className="size-4 text-accent" aria-hidden />
        Résumé PDF
      </a>
    </motion.div>
  )
}
