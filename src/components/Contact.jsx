import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&rsquo;s design your next project</h2>
          <p className="contact__lead">
            Tell us what you have in mind and we&rsquo;ll get back to you with a
            free quote, usually within one business day.
          </p>

          <ul className="contact__list">
            <li>
              <span>Phone</span>
              <a href="tel:+27691264148">+27 69 126 4148</a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:info@5starglassdesigner.com">
                info@5starglassdesigner.com
              </a>
            </li>
            <li>
              <span>Studio</span>
              <p>12 Foundary St, Kempton Park, 1601, South Africa</p>
            </li>
            <li>
              <span>Hours</span>
              <p>Mon &ndash; Sat, 8am &ndash; 6pm</p>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__thanks">
              <h3>Thank you.</h3>
              <p>We&rsquo;ve received your message and will be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Project details</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
