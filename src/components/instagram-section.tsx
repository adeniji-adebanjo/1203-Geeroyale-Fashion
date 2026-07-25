'use client'

import Image from 'next/image'
import { Instagram, ArrowUpRight } from './icons'
import { Button } from './ui/button'

const igFeed = [
  '/products/product-1.jpg',
  '/products/product-2.jpg',
  '/products/product-3.jpg',
  '/products/product-4.jpg',
  '/products/product-5.jpg',
  '/hero-feature.jpg',
]

export default function InstagramSection() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Follow Us On Instagram
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">
            @1203_<span className="italic text-gold">rtw</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Tag us in your fits to be featured on our official page.
          </p>
        </div>

        {/* IG Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {igFeed.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/1203_rtw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-md overflow-hidden bg-navy-light border border-white/10 shadow-md"
            >
              <Image
                src={src}
                alt={`1203 Instagram Post ${i + 1}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-gold drop-shadow-md" />
              </div>
            </a>
          ))}
        </div>

        <div>
          <a
            href="https://www.instagram.com/1203_rtw/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-gold hover:bg-gold-light text-navy font-bold uppercase tracking-[0.2em] h-14 px-8 text-xs sm:text-sm shadow-xl transition-all hover:scale-105">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @1203_rtw
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
