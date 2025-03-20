import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import CinematicBackground from "@/components/cinematic-background"
import { ScrollProvider } from "@/components/scroll-context"

export default function Home() {
  return (
    <ScrollProvider>
      <div className="relative min-h-screen">
        <CinematicBackground />
        <main className="relative z-10">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </ScrollProvider>
  )
}

