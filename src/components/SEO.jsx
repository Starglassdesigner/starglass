import { Helmet } from 'react-helmet-async'

const SITE_NAME = '5 Star Glass Designer'
const SITE_URL = 'https://www.5starglassdesigners.com'
const DEFAULT_TITLE = '5 Star Glass Designer | Custom glass design & installation'
const DEFAULT_DESCRIPTION =
  '5 Star Glass Designer creates and installs custom residential and commercial glass — shower enclosures, storefronts, railings, mirrors and more. Rated 5 stars by our clients.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
}) {
  const url = `${SITE_URL}${path}`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE_NAME,
    image,
    url: SITE_URL,
    telephone: '+27691264148',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Foundary St',
      addressLocality: 'Kempton Park',
      addressRegion: 'GP',
      postalCode: '1601',
      addressCountry: 'South Africa',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
    },
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  )
}

export default SEO