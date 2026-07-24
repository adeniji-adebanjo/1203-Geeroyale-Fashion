'use client'

import Image from 'next/image'
import { Instagram, ShoppingBag, ArrowDown } from './icons'
import { Button } from './ui/button'

export default function Hero() {
  const scrollToShop = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy text-white pt-20">
      {/* Background image & gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--gold)_0%,transparent_70%)] opacity-10" />
        <Image
          src="/hero.jpg"
          alt="1203 RTW Afro-Urban Collection"
          fill
          priority
          className="object-cover object-center opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/85 to-navy" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in">
            <div>
              <span className="inline-block text-gold uppercase tracking-[0.35em] font-semibold text-xs sm:text-sm mb-3 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                A Product of Gee Royale
              </span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-extrabold leading-[0.9] tracking-tight text-white mt-2">
                1203
                <span className="block italic text-gold font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
                  Ready To Wear
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Premium Unisex Afro-Urban Ready To Wear. Affordable fashion that celebrates culture, comfort, and street luxury.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#shop" onClick={scrollToShop} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold uppercase tracking-[0.2em] h-14 px-8 text-xs sm:text-sm shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </Button>
              </a>

              <a
                href="https://www.instagram.com/1203_rtw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white/20 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold font-bold uppercase tracking-[0.2em] h-14 px-8 text-xs sm:text-sm transition-all hover:-translate-y-0.5"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  @1203_rtw
                </Button>
              </a>
            </div>
          </div>

          {/* Right Featured Image Frame */}
          <div className="hidden lg:block relative animate-slide-up">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute -inset-4 border border-gold/30 rounded-md translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-white/10 rounded-md overflow-hidden shadow-2xl">
                <Image
                  src="/hero-feature.jpg"
                  alt="1203 Featured Look"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-navy/90 backdrop-blur-md border border-white/15 p-4 rounded-md shadow-xl space-y-1">
                  <span className="block text-gold text-[10px] font-bold uppercase tracking-widest">
                    Est. Lagos, NG
                  </span>
                  <p className="text-white text-xs font-light">
                    Unisex Afro-Urban Essentials designed for effortless everyday wear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#shop"
        onClick={scrollToShop}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors duration-300 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
