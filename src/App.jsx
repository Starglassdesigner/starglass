import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Furniture from './components/Furniture.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Furniture />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
