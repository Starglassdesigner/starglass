import Logo from '../assets/5-star-logo.png'
import SocialLinks from './SocialLinks'
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={Logo} width="180" alt="5 Star Glass Designer" />
          <p>
            Premium glass design and installation for homes and businesses.
            Rated five stars, project after project.
          </p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <a href="#services">Residential glass</a>
          <a href="#services">Commercial storefronts</a>
          <a href="#services">Custom mirrors</a>
          <a href="#services">Repair &amp; replacement</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+27691264148">+27 69 126 4148</a>
          <a href="mailto:info@5starglassdesigners.com">
            info@5starglassdesigners.com
          </a>
          <a href="#contact">Get a free quote</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {year} 5 Star Glass Designer. All rights reserved.</span>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
