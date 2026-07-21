import { useEffect, useState } from "react";
import Logo from "../assets/5-star-logo.png";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Furniture", href: "#furniture" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
         <img src={Logo} width="180" alt="5 Star Glass Designer" />
        </a>

        <nav className="header__nav">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+15555550123" className="btn btn-ghost header__cta">
          Call now
        </a>

        <button
          className="header__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="tel:+15555550123" className="btn btn-primary">
            Call now
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
