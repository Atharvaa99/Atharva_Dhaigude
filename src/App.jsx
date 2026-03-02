import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  const isMobile = window.innerWidth <= 768

  return (
    <div>
      {!isMobile && <Cursor />}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}