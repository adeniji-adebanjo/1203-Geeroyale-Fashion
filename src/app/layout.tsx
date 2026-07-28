import type { Metadata, Viewport } from 'next'
import { Outfit, Cormorant_Garamond } from 'next/font/google'
import { site } from '../data/site'
import './globals.css'

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const title = `1203 | ${site.headline}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: '%s | 1203 by Gee Royale',
  },
  description: site.description,
  applicationName: site.fullName,
  authors: [{ name: site.parent, url: site.parentUrl }],
  creator: site.parent,
  publisher: site.parent,
  category: 'Fashion',
  keywords: [
    '1203',
    '1203 by Gee Royale',
    '1203 RTW',
    'Afro-urban fashion',
    'Afro-urban ready-to-wear',
    'African ready to wear',
    'Gee Royale',
    'Nigerian fashion brand',
    'Lagos fashion',
    'contemporary African fashion',
    'African streetwear',
    'Minayo Textile',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    locale: 'en_NG',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '1203 — Afro-Urban Ready-to-Wear by Gee Royale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a1128',
  colorScheme: 'dark',
}

/** Structured data so search engines resolve 1203 as a Gee Royale sub-brand. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Brand',
      '@id': `${site.url}/#brand`,
      name: site.name,
      alternateName: site.fullName,
      slogan: site.tagline,
      description: site.description,
      logo: `${site.url}/1203-logo-light.png`,
      url: site.url,
      parentOrganization: {
        '@type': 'Organization',
        name: site.parent,
        url: site.parentUrl,
      },
      sameAs: [site.instagram, site.parentUrl],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.fullName,
      description: site.description,
      inLanguage: 'en-NG',
      publisher: { '@id': `${site.url}/#brand` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-NG">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
