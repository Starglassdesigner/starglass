import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Furniture from './components/Furniture.jsx'
import Reviews from './components/Reviews.jsx'
import Showcase from './components/Showcase.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import CookieSettingsButton from './components/CookieSettingsButton.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import SEO from './components/SEO.jsx'

function App() {
  const [cookiesOpen, setCookiesOpen] = useState(false)

  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Furniture />
        <Reviews />
        <Showcase />
        <Contact />
      </main>
      <Footer />

      <CookieConsent isOpen={cookiesOpen} onClose={() => setCookiesOpen(false)} />
      <CookieSettingsButton onClick={() => setCookiesOpen(true)} />
      <WhatsAppButton />
    </>
  )
}

export default App