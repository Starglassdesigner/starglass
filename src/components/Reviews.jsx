function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M12 2 L14.7 8.9 L22 9.4 L16.4 14.2 L18.2 21.4 L12 17.3 L5.8 21.4 L7.6 14.2 L2 9.4 L9.3 8.9 Z"
            fill="#c9a24b"
          />
        </svg>
      ))}
    </div>
  )
}

const TESTIMONIALS = [
  {
    quote:
      'They replaced our whole shower enclosure in a day and the finish is flawless. Cleanest edges I’ve ever seen on glasswork.',
    name: 'Marissa D.',
    place: 'Homeowner',
  },
  {
    quote:
      'Our storefront glass took a beating in a storm and they had it repaired within 24 hours. Professional from quote to install.',
    name: 'Devon R.',
    place: 'Retail owner',
  },
  {
    quote:
      'The backlit mirror they built for our bathroom remodel is the first thing every guest asks about. Worth every cent.',
    name: 'Priya K.',
    place: 'Homeowner',
  },
]

function Reviews() {
  return (
    <section id="reviews" className="reviews section-pad">
      <div className="container reviews__head">
        <p className="eyebrow">Client reviews</p>
        <h2>Rated five stars by the people we build for</h2>
        <div className="reviews__badge">
          <span className="reviews__score">5.0</span>
          <div>
            <Stars />
            <span className="reviews__count">from 200+ verified reviews</span>
          </div>
        </div>
      </div>

      <div className="container reviews__grid">
        {TESTIMONIALS.map((t) => (
          <div className="reviews__card" key={t.name}>
            <Stars />
            <p>&ldquo;{t.quote}&rdquo;</p>
            <div className="reviews__author">
              <span>{t.name}</span>
              <span className="reviews__place">{t.place}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
