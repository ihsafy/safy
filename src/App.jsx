import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import AiVision from './components/AiVision.jsx'
import Research from './components/Research.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { nav } from './data/content.js'
import { useReveal, useScrollSpy } from './hooks.js'

const SECTION_IDS = nav.map((item) => item.id)

export default function App() {
  useReveal()
  const active = useScrollSpy(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header activeSection={active} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <AiVision />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
