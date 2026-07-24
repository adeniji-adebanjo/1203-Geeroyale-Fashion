import type { Metadata } from 'next'
import { Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: '1203 RTW | Affordable Afro-Urban Ready To Wear by Gee Royale',
  description:
    'Shop premium yet affordable Afro-urban ready-to-wear fashion. Unisex streetwear with African-inspired design. A product of Gee Royale.',
  keywords: [
    '1203 RTW',
    'Afro-urban fashion',
    'ready to wear',
    'Nigerian streetwear',
    'Gee Royale',
    'affordable fashion',
    'African fashion',
  ],
  openGraph: {
    title: '1203 RTW | Affordable Afro-Urban Ready To Wear by Gee Royale',
    description:
      'Shop premium yet affordable Afro-urban ready-to-wear fashion. Unisex streetwear with African-inspired design. A product of Gee Royale.',
    url: 'https://1203.geeroyalefashion.com',
    siteName: '1203 RTW',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
