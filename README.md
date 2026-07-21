# 5 Star Glass Designer — website

A React + Vite site for 5starglassdesigners.com, built with the same dark,
cinematic, editorial structure as ferrari.com (full-bleed hero, alternating
service rows, minimal uppercase nav that solidifies on scroll) using the
brand's own teal + gold palette instead of Ferrari red.

## Run it

```
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```
npm run build
```

Outputs a static site to `dist/` — deploy that folder to any static host
(Netlify, Vercel, S3, etc.) or point your domain at it.

## Structure

- `src/components/Header.jsx` — nav, solidifies on scroll
- `src/components/Hero.jsx` — full-bleed intro
- `src/components/Services.jsx` — alternating full-width service rows
- `src/components/Gallery.jsx` — project grid
- `src/components/Reviews.jsx` — 5-star testimonials
- `src/components/Contact.jsx` — contact form + details
- `src/components/Footer.jsx`
- `src/components/components.css` — all component styles
- `src/index.css` — theme tokens (colors, fonts, buttons)

Swap the gradient placeholders in `Gallery.jsx` and `Hero.jsx` for real
project photos when you have them — just replace the inline gradient
`style` with a `background-image`.
