'use client'

import Image from 'next/image'

const marqueeImages = [
  '/products/product-1.jpg',
  '/products/product-2.jpg',
  '/products/product-3.jpg',
  '/products/product-4.jpg',
  '/products/product-5.jpg',
  '/products/product-1.jpg',
  '/products/product-2.jpg',
]

export default function Marquee() {
  const scrollToShop = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-navy-light py-16 sm:py-20 border-y border-white/5">
      {/* Decorative motif overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="relative z-10 space-y-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.4em]">
            The 1203 Wardrobe
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Made to be worn <span className="italic text-gold">every day</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-light text-white/60">
            From elevated essentials to statement outerwear.
          </p>
        </div>

        {/* Marquee Row 1 - Left */}
        <div className="overflow-hidden w-full flex">
          <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0 py-2">
            {[...marqueeImages, ...marqueeImages].map((src, i) => (
              <div
                key={`m1-${i}`}
                className="relative h-52 w-40 shrink-0 overflow-hidden rounded-md sm:h-72 sm:w-56 md:h-80 md:w-64 border border-white/10 shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`1203 Lookbook ${i + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Right */}
        <div className="overflow-hidden w-full flex">
          <div className="flex gap-4 sm:gap-6 animate-marquee-right shrink-0 py-2">
            {[...marqueeImages, ...marqueeImages].reverse().map((src, i) => (
              <div
                key={`m2-${i}`}
                className="relative h-52 w-40 shrink-0 overflow-hidden rounded-md sm:h-72 sm:w-56 md:h-80 md:w-64 border border-white/10 shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`1203 Lookbook ${i + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <a
            href="#shop"
            onClick={scrollToShop}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-gold transition-colors underline underline-offset-8"
          >
            Explore the Catalog
          </a>
        </div>
      </div>
    </section>
  )
}
