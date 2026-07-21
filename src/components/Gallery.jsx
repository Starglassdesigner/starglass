import frameless from '../assets/frameless-1.avif'
import gymWall from '../assets/gym-wall-4.avif'
import storefront from '../assets/storefront-1.avif'
import mirrorWall from '../assets/mirror--wall.avif'
import officePartition from '../assets/office-partition-wall-3.png'
import stairRailing from '../assets/glass-stair-railing-1.avif'
import poolFencing from '../assets/pool-glass-fencing-1.png'
import sittingRoom from '../assets/sitting-room-wall-1.avif'
import vanityMirror from '../assets/backlit-vanity-mirror-1.avif'
import bathroomWall from '../assets/bathroom-wall-1.avif'
import bedroomMirror from '../assets/bedroom-wall-mirror-1.avif'
import largeFormat from '../assets/32-piece.avif'

const PROJECTS = [
  { title: 'Frameless walk-in shower', tag: 'Residential', img: frameless },
  { title: 'Gym mirror wall', tag: 'Commercial', img: gymWall },
  { title: 'Retail storefront facade', tag: 'Commercial', img: storefront },
  { title: 'Feature mirror wall', tag: 'Studio', img: mirrorWall },
  { title: 'Office partition walls', tag: 'Commercial', img: officePartition },
  { title: 'Glass stair railing', tag: 'Residential', img: stairRailing },
  { title: 'Pool glass fencing', tag: 'Residential', img: poolFencing },
  { title: 'Sitting room glass wall', tag: 'Residential', img: sittingRoom },
  { title: 'Backlit vanity mirror', tag: 'Residential', img: vanityMirror },
  { title: 'Luxury bathroom glass wall', tag: 'Residential', img: bathroomWall },
  { title: 'Bedroom mirror wall', tag: 'Residential', img: bedroomMirror },
  { title: 'Large-format glass partition', tag: 'Commercial', img: largeFormat },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container gallery__head">
        <p className="eyebrow">Recent work</p>
        <h2>Installations we&rsquo;re proud of</h2>
      </div>

      <div className="container gallery__grid">
        {PROJECTS.map((p) => (
          <div className="gallery__card" key={p.title}>
            <div
              className="gallery__img"
              style={{ backgroundImage: `url(${p.img})` }}
            />
            <div className="gallery__overlay">
              <span className="gallery__tag">{p.tag}</span>
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
