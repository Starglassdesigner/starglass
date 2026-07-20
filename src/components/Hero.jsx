import { useEffect, useState } from 'react'
import heroVideo from '../assets/videos/hero-1.mp4'
import slide1 from '../assets/frameless-1.avif'
import slide2 from '../assets/bathroom-wall-1.avif'
import slide3 from '../assets/gym-wall-4.avif'
import slide4 from '../assets/sitting-room-wall-1.avif'
import slide5 from '../assets/pool-glass-fencing-1.avif'

const SLIDES = [slide1, slide2, slide3, slide4, slide5]

function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__scrim" />
     

      
      <a href="#services" className="hero__scroll-hint">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>

      <div className="container hero__split">
        <div className="hero__slider">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`hero__slide ${i === active ? 'is-active' : ''}`}
            />
          ))}
          <div className="hero__dots">
            {SLIDES.map((src, i) => (
              <button
                key={src}
                className={`hero__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero__copy">
          <div className="hero__accent-line">
            <span />
            <p className="hero__eyebrow">5-star rated design &amp; installation</p>
          </div>

          <h1 className="hero__title">
            Crafted in glass.
            <br />
            Perfected in detail.
          </h1>

          <p className="hero__subtitle">Residential / Commercial / Custom</p>

          <p className="hero__sub">
            Custom shower enclosures, storefronts, railings and mirrors —
            designed and installed by a team obsessed with precision.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Get a free quote
            </a>
            <a href="#gallery" className="btn btn-ghost">
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero