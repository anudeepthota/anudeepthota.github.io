import { SparklesCore } from '@/components/ui/sparkles'
import { GradientDots } from '@/components/ui/gradient-dots'
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
      {/* Tinted charcoal wash — avoids pure black; slight depth top→bottom */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[hsl(220_20%_8%)] via-[hsl(220_22%_6%)] to-[hsl(222_26%_4%)]"
        aria-hidden
      />
      {/* Soft vignette — edges settle darker for focus toward center */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_115%_100%_at_50%_50%,transparent_35%,hsl(222_28%_3%/0.92)_100%)]"
        aria-hidden
      />
      {/* Single restrained brand halo (no rainbow / multi-bloom clutter) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,hsl(217_72%_52%/0.1),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:48px_48px] bg-grid-fade opacity-[0.07]"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 -z-[9] overflow-hidden" aria-hidden>
        <GradientDots
          className="opacity-[0.055]"
          dotSize={5}
          spacing={16}
          duration={48}
          colorCycleDuration={14}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <SparklesCore
          id="site-sparkles"
          background="transparent"
          minSize={0.35}
          maxSize={1.15}
          particleDensity={85}
          className="h-full min-h-dvh w-full"
          particleColor="#e8eef8"
          speed={2.5}
        />
      </div>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-border/80 py-12 text-center text-sm text-muted-foreground">
        <p className="mx-auto max-w-md leading-relaxed">
          © {new Date().getFullYear()} Anudeep Thota. React, TypeScript, Tailwind CSS, and Framer
          Motion on GitHub Pages.
        </p>
      </footer>
    </div>
  )
}
