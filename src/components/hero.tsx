'use client'

import Image from 'next/image'
import { Instagram, ShoppingBag, ArrowDown } from './icons'
import { Button } from './ui/button'
import { site } from '../data/site'

export default function Hero() {
  const scrollToShop = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-navy pt-16 text-white md:pt-20">
      {/* Background image & gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--gold)_0%,transparent_70%)] opacity-10" />
        <Image
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/85 to-navy" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6 text-center lg:text-left">
            <div className="space-y-5">
              <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em]">
                {site.tagline}
              </span>

              {/* Brand mark */}
              <Image
                src="/1203-wordmark-light.png"
                alt="1203"
                width={1045}
                height={492}
                priority
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 24rem"
                className="mx-auto h-auto w-52 max-w-full sm:w-64 md:w-80 lg:mx-0 lg:w-88"
              />

              <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
                Afro-Urban Ready-to-Wear
                <span className="mt-1 block text-xl font-normal italic text-gold sm:text-2xl md:text-3xl">
                  by Gee Royale
                </span>
              </h1>
            </div>

            <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg md:text-xl lg:mx-0">
              {site.subheadline}
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
              <a href="#shop" onClick={scrollToShop} className="w-full sm:w-auto">
                <Button className="h-13 w-full bg-gold px-8 text-xs font-bold uppercase tracking-[0.2em] text-navy shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 hover:bg-gold-light sm:h-14 sm:w-auto sm:text-sm">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </Button>
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="h-13 w-full border-white/20 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10 hover:text-gold sm:h-14 sm:w-auto sm:text-sm"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  {site.instagramHandle}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Featured Image Frame */}
          <div className="relative hidden animate-slide-up lg:block">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -inset-4 translate-x-4 translate-y-4 rounded-md border border-gold/30" />
              <div className="absolute inset-0 overflow-hidden rounded-md border border-white/10 shadow-2xl">
                <Image
                  src="/hero-feature.jpg"
                  alt="A 1203 look — Afro-urban ready-to-wear by Gee Royale"
                  fill
                  sizes="(max-width: 1024px) 0px, 28rem"
                  className="object-cover object-top grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                />
                <div className="absolute inset-x-6 bottom-6 space-y-1 rounded-md border border-white/15 bg-navy/90 p-4 shadow-xl backdrop-blur-md">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gold">
                    Est. Lagos, NG
                  </span>
                  <p className="text-xs font-light text-white">
                    Versatile garments that move between work, leisure, travel
                    and social life.
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
        aria-label="Scroll to the collection"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors duration-300 hover:text-gold sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
