'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream text-charcoal relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 border border-gold/30 rounded-md translate-x-4 translate-y-4 hidden sm:block" />
            <div className="relative h-full w-full rounded-md overflow-hidden shadow-2xl bg-navy border border-black/10">
              <Image
                src="/hero-feature.jpg"
                alt="About 1203 Ready To Wear"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-md shadow-lg border border-black/5">
                <span className="text-gold font-bold text-xs uppercase tracking-widest block">
                  A Product of Gee Royale
                </span>
                <p className="text-charcoal text-xs mt-1 font-light">
                  Bridging traditional craftsmanship with contemporary Afro-urban street culture.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.3em] text-navy bg-gold/20 px-3 py-1 rounded-full border border-gold/30">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                About 1203 RTW
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-3 leading-tight">
                The Accessible Expression of <span className="italic text-gold block">Gee Royale</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              <strong>1203 RTW</strong> is the ready-to-wear expression of the luxury fashion house <em>Gee Royale</em>. We bring high-end Afro-urban design, premium fabric choices, and signature tailoring details into accessible everyday apparel.
            </p>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light">
              Designed in Lagos for style lovers worldwide, our collections feature versatile co-ords, statement tops, relaxed joggers, and hoodies crafted for authentic self-expression.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://geeroyalefashion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-navy hover:bg-navy-light text-white font-bold uppercase tracking-[0.15em] h-12 px-6 text-xs shadow-lg transition-all">
                  Visit Main House (Gee Royale)
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
