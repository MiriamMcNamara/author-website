import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Books from './components/Books'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { startMotion } from './motion'

function App() {
  useEffect(() => startMotion(), [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Books />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
