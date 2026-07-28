import Image from 'next/image'
import { designLanguage } from '../data/site'

export default function DesignLanguage() {
  return (
    <section
      id="design-language"
      className="relative overflow-hidden border-y border-white/10 bg-charcoal py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Brand motif texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <Image
          src="/1203-pattern.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-charcoal via-charcoal/85 to-charcoal" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em]">
            Design Language
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Five words, one <span className="italic text-gold">wardrobe</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-white/65 sm:text-base">
            Unlike seasonal trends, 1203 focuses on enduring design — clean
            lines, functional construction, premium materials and thoughtful
            detailing.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {designLanguage.map(({ word, note }, i) => (
            <li
              key={word}
              className="group flex flex-col gap-2 bg-charcoal p-6 transition-colors duration-300 hover:bg-navy-light sm:p-7"
            >
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-gold/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                {word}
                <span className="text-gold">.</span>
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                {note}
              </p>
            </li>
          ))}

          {/* Closing tile carries the tagline so the grid stays even */}
          <li className="flex flex-col justify-center gap-2 bg-navy p-6 sm:p-7">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              The 1203 promise
            </span>
            <p className="font-serif text-2xl font-bold italic text-gold sm:text-3xl">
              Wear Your Identity.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
