import img11 from '../assets/image-11.jpeg'
import img12 from '../assets/image-12.jpeg'
import img13 from '../assets/image-13.jpeg'
import img14 from '../assets/image-14.jpeg'
import img15 from '../assets/image-15.jpeg'
import img16 from '../assets/image-16.jpeg'
import img17 from '../assets/image-17.jpeg'
import img18 from '../assets/image-18.jpeg'

const PIECES = [
  { name: 'Hexagon nesting coffee tables', img: img11 },
  { name: 'Bi-level black coffee table', img: img12 },
  { name: 'Round marble coffee table', img: img13 },
  { name: 'Boxed black coffee table', img: img14 },
  { name: 'Geometric marble-top side table', img: img15 },
  { name: 'Bi-level gold coffee table', img: img16 },
  { name: 'Gold hexagon nesting tables', img: img17 },
  { name: 'Custom glass coffee table', img: img18 },
]

function Furniture() {
  return (
    <section id="furniture" className="furniture section-pad">
      <div className="container furniture__head">
        <p className="eyebrow">Custom furniture</p>
        <h2>Glass tables, made to order</h2>
      </div>

      <div className="container furniture__grid">
        {PIECES.map((p) => (
          <div className="furniture__card" key={p.name}>
            <div
              className="furniture__img"
              style={{ backgroundImage: `url(${p.img})` }}
            />
            <span className="furniture__name">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Furniture