"use client";

import Image from "next/image";
import { Instagram, ExternalLink, MessageCircle, Heart } from "./icons";
import { navLinks, site } from "../data/site";
import Link from "next/link";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-charcoal pt-14 pb-10 text-white sm:pt-16 sm:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tagline band */}
        <div className="flex flex-col items-center gap-3 border-b border-white/10 pb-10 text-center">
          <Image
            src="/1203-logo-light.png"
            alt="1203 — Afro-urban ready-to-wear by Gee Royale"
            width={1045}
            height={639}
            sizes="(max-width: 640px) 70vw, 20rem"
            className="h-auto w-52 max-w-full sm:w-64"
          />
          <p className="font-serif text-xl italic text-gold sm:text-2xl">
            {site.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The Label
            </h3>
            <p className="text-xs font-light leading-relaxed text-white/60">
              Afro-urban ready-to-wear for a generation that values style,
              culture and individuality — versatile garments for work, leisure,
              travel and social life.
            </p>
            <div className="pt-1">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold">
                Parent Brand
              </span>
              <a
                href={site.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-9 items-center gap-1 text-xs text-white/80 transition-colors hover:text-gold"
              >
                geeroyalefashion.com
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="space-y-1 text-xs text-white/70">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex min-h-9 cursor-pointer items-center transition-colors hover:text-gold"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Connect With Us
            </h3>
            <ul className="space-y-1 text-xs text-white/70">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-2 transition-colors hover:text-gold"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-gold" />
                  <span>{site.instagramHandle} on Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2340000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                  <span>WhatsApp Orders</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Brand Info
            </h3>
            <p className="text-xs font-light leading-relaxed text-white/60">
              Designed and hand-finished in {site.locality}, {site.country}.
              Worldwide shipping available on request.
            </p>
            <div className="rounded-md border border-white/10 bg-navy p-3 text-[11px] text-white/70">
              <span className="mb-0.5 block font-bold text-gold">
                Order Inquiries:
              </span>
              <span>
                All orders are fulfilled via WhatsApp for custom sizing and
                delivery setup.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1">
            Developed with <Heart className="h-3 w-3 fill-gold text-gold" /> by{" "}
            <Link
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {site.developerName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
