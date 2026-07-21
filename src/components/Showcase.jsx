import { useEffect, useState } from 'react'
import bath1 from '../assets/bath-1.avif'
import backlitVanity from '../assets/backlit-vanity-mirror-1.avif'
import bathroomWall from '../assets/bathroom-wall-1.avif'
import gymWall8 from '../assets/gym-wall-8.avif'
import gymWall9 from '../assets/gym-wall-9.avif'
import gymWall10 from '../assets/gym-wall-10.avif'
import mirrorWall from '../assets/mirror--wall.avif'
import mirrorWall1 from '../assets/mirror--wall-1.avif'
import sittingRoom1 from '../assets/sitting-room-wall-1.avif'
import sittingRoom2 from '../assets/sitting-room-wall-2.avif'
import sittingRoom3 from '../assets/sitting-room-wall-3.avif'
import sittingRoom4 from '../assets/sitting-room-wall-4.avif'
import fourUpMirror from '../assets/4up-mirror.avif'
import largeFormat1 from '../assets/32-piece-1.avif'
import largeFormat2 from '../assets/32-piece-2.avif'

const SLIDES = [
  {
    img: bath1,
    tag: 'Residential',
    title: 'Spa-style bathroom suite',
    text: 'A full walk-in shower enclosure, soaking-tub glass panel and backlit vanity mirrors, fabricated and fitted as one cohesive suite.',
  },
  {
    img: backlitVanity,
    tag: 'Residential',
    title: 'Backlit vanity mirrors',
    text: 'LED-edge mirrors with a soft halo glow, custom cut to size and wired discreetly into the wall.',
  },
  {
    img: bathroomWall,
    tag: 'Residential',
    title: 'Frameless bathroom glass walls',
    text: 'Frameless glass walls and shower screens that open up the room without losing the water line.',
  },
  {
    img: gymWall8,
    tag: 'Commercial',
    title: 'Studio mirror wall',
    text: 'Wall-to-wall mirror paneling for a home gym or studio, seamed edge to edge for one unbroken reflection.',
  },
  {
    img: gymWall9,
    tag: 'Commercial',
    title: 'Full-height gym mirrors',
    text: 'Impact-rated mirror glass, sized and mounted to handle daily training use.',
  },
  {
    img: gymWall10,
    tag: 'Commercial',
    title: 'Training room mirrors',
    text: 'Custom-cut mirror walls that make a compact training space feel twice the size.',
  },
  {
    img: mirrorWall,
    tag: 'Residential',
    title: 'Feature mirror wall',
    text: 'A statement mirror wall that doubles the light in a living space and anchors the room.',
  },
  {
    img: mirrorWall1,
    tag: 'Residential',
    title: 'Accent mirror paneling',
    text: 'Mirror paneling used as a design feature in its own right, not just a functional surface.',
  },
  {
    img: sittingRoom1,
    tag: 'Residential',
    title: 'Sitting room glass wall',
    text: 'Floor-to-ceiling glass that divides a room while keeping every sightline open.',
  },
  {
    img: sittingRoom2,
    tag: 'Residential',
    title: 'Living space glass partition',
    text: 'A glass partition wall built to keep two spaces connected by light, not closed off from each other.',
  },
  {
    img: sittingRoom3,
    tag: 'Residential',
    title: 'Interior glass divider',
    text: 'Frameless interior glass installed to separate space while keeping it bright and open.',
  },
  {
    img: sittingRoom4,
    tag: 'Residential',
    title: 'Open-plan glass wall',
    text: 'Glass walling built for open-plan living, with clean, near-invisible seams.',
  },
  {
    img: fourUpMirror,
    tag: 'Residential',
    title: 'Four-panel mirror install',
    text: 'A four-panel mirror assembly, aligned and seamed for a near-invisible join line.',
  },
  {
    img: largeFormat1,
    tag: 'Commercial',
    title: 'Large-format glass partition',
    text: 'A 32-piece glass installation, precision-cut and fitted panel by panel on site.',
  },
  {
    img: largeFormat2,
    tag: 'Commercial',
    title: 'Multi-panel glass assembly',
    text: 'Large-scale glasswork broken into exact panel sizes for a flawless finished fit.',
  },
]

function Showcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const go = (dir) => {
    setActive((i) => (i + dir + SLIDES.length) % SLIDES.length)
  }

  const current = SLIDES[active]

  return (
    <section id="showcase" className="showcase section-pad">
      <div className="container showcase__inner">
        <div className="showcase__slider">
          {SLIDES.map((s, i) => (
            <img
              key={s.img}
              src={s.img}
              alt={s.title}
              className={`showcase__slide ${i === active ? 'is-active' : ''}`}
            />
          ))}
          <div className="showcase__nav">
            <button
              className="showcase__arrow"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <span className="showcase__count">
              {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </span>
            <button
              className="showcase__arrow"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>

        <div className="showcase__copy">
          <p className="eyebrow">Featured installs</p>
          <span className="showcase__tag">{current.tag}</span>
          <h2>{current.title}</h2>
          <p>{current.text}</p>
          <div className="showcase__dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.img}
                className={`showcase__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
