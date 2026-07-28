'use client'

import Image from 'next/image'
import { Instagram, ArrowUpRight } from './icons'
import { Button } from './ui/button'
import { site } from '../data/site'

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
    <section className="relative overflow-hidden border-t border-white/10 bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl space-y-10 px-4 text-center sm:px-6 sm:space-y-12 lg:px-8">
        <div className="mx-auto max-w-xl space-y-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em]">
            Follow Us On Instagram
          </span>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            @1203_<span className="italic text-gold">rtw</span>
          </h2>
          <p className="text-sm font-light text-white/60 sm:text-base">
            Tag us in your fits to be featured on our official page.
          </p>
        </div>

        {/* IG Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
          {igFeed.map((src, i) => (
            <a
              key={i}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View 1203 on Instagram — post ${i + 1}`}
              className="group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-navy-light shadow-md"
            >
              <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 33vw, 16vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-gold drop-shadow-md" />
              </div>
            </a>
          ))}
        </div>

        <div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:inline-block"
          >
            <Button className="h-13 w-full bg-gold px-8 text-xs font-bold uppercase tracking-[0.2em] text-navy shadow-xl transition-all hover:scale-105 hover:bg-gold-light sm:h-14 sm:w-auto sm:text-sm">
              <Instagram className="mr-2 h-5 w-5 shrink-0" />
              Follow {site.instagramHandle}
              <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
