import video1 from '../assets/videos/video-1.mp4'
import video2 from '../assets/videos/video-2.mp4'
import video3 from '../assets/videos/video-3.mp4'
import video4 from '../assets/videos/video-4.mp4'

const SERVICES = [
  {
    n: '01',
    title: 'Residential glass',
    desc: 'Custom shower enclosures, glass railings and windows engineered and fitted for every home.',
    video: video1,
  },
  {
    n: '02',
    title: 'Commercial storefronts',
    desc: 'Structural glass facades and entry systems built to withstand daily traffic and look sharp doing it.',
    video: video2,
  },
  {
    n: '03',
    title: 'Custom mirrors',
    desc: 'Frameless and backlit mirror design, cut and finished to the millimetre for a flawless fit.',
    video: video3,
  },
  {
    n: '04',
    title: 'Repair & replacement',
    desc: 'Emergency glass repair and replacement, on call when you need it most.',
    video: video4,
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container services__head">
        <p className="eyebrow">What we do</p>
        <h2>Glass, built around you</h2>
      </div>

      {SERVICES.map((s, i) => (
        <div className={`services__row ${i % 2 === 1 ? 'services__row--rev' : ''}`} key={s.n}>
          <div className="services__visual">
            <video
              className="services__video"
              src={s.video}
              autoPlay
              loop
              muted
              playsInline
            />
            <span className="services__index">{s.n}</span>
          </div>
          <div className="services__text">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#contact" className="services__link">
              Learn more &rarr;
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services
