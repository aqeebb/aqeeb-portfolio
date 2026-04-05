import { useReveal, useActiveSection } from './hooks'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  const activeSection = useActiveSection()

  return (
    <>
      <Cursor />
      <div className="noise" />
      <div className="grid-bg" />

      <Navbar active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
