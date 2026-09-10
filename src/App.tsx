import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Story } from './components/Story'
import { BurnCause } from './components/BurnCause'
import { BurnCenterTimeline } from './components/BurnCenterTimeline'
import { Issues } from './components/Issues'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    target?.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <BurnCause />
        <BurnCenterTimeline />
        <Issues />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
