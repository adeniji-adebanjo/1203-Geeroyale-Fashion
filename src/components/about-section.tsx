'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles } from './icons'
import { Button } from './ui/button'
import { site } from '../data/site'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-16 text-charcoal sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm sm:max-w-md lg:mx-0">
            <div className="absolute -inset-4 hidden translate-x-4 translate-y-4 rounded-md border border-gold/40 sm:block" />
            <div className="relative h-full w-full overflow-hidden rounded-md border border-black/10 bg-navy shadow-2xl">
              <Image
                src="/hero-feature.jpg"
                alt="A 1203 ready-to-wear look by Gee Royale"
                fill
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-md border border-black/5 bg-white/92 p-4 shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                  Designed by Gee Royale
                </span>
                <p className="mt-1 text-xs font-light text-charcoal">
                  Exceptional craftsmanship, made for the energy of modern urban
                  living.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-navy sm:text-xs sm:tracking-[0.3em]">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold-deep" />
                About 1203
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
                Style, culture and
                <span className="block italic text-gold-deep">
                  individuality
                </span>
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-charcoal/80 sm:text-lg">
              <strong className="font-semibold">1203</strong> is the Afro-urban
              ready-to-wear label of <em>Gee Royale</em>, created for a new
              generation that values style, culture and individuality. The brand
              reimagines African aesthetics through contemporary silhouettes,
              producing versatile garments that transition effortlessly between
              work, leisure, travel and social life.
            </p>

            <p className="text-sm font-light leading-relaxed text-charcoal/70 sm:text-base">
              Every collection reflects Gee Royale&apos;s commitment to
              exceptional craftsmanship while embracing the energy of modern
              urban living. From elevated essentials to statement outerwear,
              1203 delivers timeless wardrobe pieces designed to be worn
              confidently every day.
            </p>

            <p className="text-sm font-light leading-relaxed text-charcoal/70 sm:text-base">
              Unlike seasonal trends, 1203 focuses on enduring design — clean
              lines, functional construction, premium materials and thoughtful
              detailing that celebrate African creativity in a modern context.
            </p>

            {/* Designed by Gee Royale */}
            <div className="space-y-4 rounded-lg border border-navy/10 bg-white/70 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Image
                  src="/1203-wordmark-dark.png"
                  alt="1203"
                  width={1045}
                  height={492}
                  sizes="7rem"
                  className="h-7 w-auto"
                />
                <span className="h-5 w-px bg-navy/15" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                  Designed by Gee Royale
                </span>
              </div>

              <p className="text-sm font-light leading-relaxed text-charcoal/75">
                1203 is proudly developed by Gee Royale, a contemporary African
                fashion house dedicated to preserving culture through innovative
                design, craftsmanship and wearable art.
              </p>
              <p className="text-sm font-light leading-relaxed text-charcoal/75">
                While Gee Royale continues to produce bespoke garments, luxury
                collections and textile innovations such as Minayo Textile, 1203
                brings that same design philosophy into everyday wardrobes
                through premium ready-to-wear fashion.
              </p>

              <a
                href={site.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block sm:inline-block"
              >
                <Button className="h-12 w-full bg-navy px-6 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-navy-light sm:w-auto">
                  Visit Gee Royale
                  <ArrowRight className="ml-2 h-4 w-4 text-gold" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
