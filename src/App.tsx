import { Nav } from '@/components/Nav'
import { About } from '@/sections/About'
import { Certifications } from '@/sections/Certifications'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export default function App() {
  return (
    <div className="relative min-h-dvh">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:48px_48px] bg-grid-fade opacity-[0.22]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,hsl(217_91%_60%/0.14),transparent_58%),radial-gradient(ellipse_50%_40%_at_100%_0%,hsl(263_70%_50%/0.08),transparent_50%)]"
        aria-hidden
      />
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border/80 py-12 text-center text-sm text-muted-foreground">
        <p className="mx-auto max-w-md leading-relaxed">
          © {new Date().getFullYear()} Anudeep Thota. React, TypeScript, Tailwind CSS, and Framer
          Motion on GitHub Pages.
        </p>
      </footer>
    </div>
  )
}
