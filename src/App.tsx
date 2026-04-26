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
    <>
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
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {`Anudeep Thota`}. Built for GitHub Pages with React,
          TypeScript, Tailwind CSS, shadcn-style primitives, and Framer Motion.
        </p>
      </footer>
    </>
  )
}
