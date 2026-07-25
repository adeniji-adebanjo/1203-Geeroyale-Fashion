'use client'

import { Instagram, ExternalLink, MessageCircle, Heart } from './icons'

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-charcoal text-white border-t border-white/10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-3xl font-bold text-gold">1203</span>
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">RTW</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Premium Unisex Afro-Urban Ready To Wear. Affordable street luxury crafted by Gee Royale in Lagos, Nigeria.
            </p>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                Parent Brand
              </span>
              <a
                href="https://geeroyalefashion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-gold transition-colors inline-flex items-center gap-1 mt-0.5"
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
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  onClick={() => scrollTo('#shop')}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Shop Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  About 1203
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-xs text-white/70">
              <li>
                <a
                  href="https://www.instagram.com/1203_rtw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Instagram className="h-4 w-4 text-gold" />
                  <span>@1203_rtw on Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2340000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
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
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Designed & Hand-finished in Lagos, Nigeria. Worldwide shipping available upon request.
            </p>
            <div className="p-3 rounded-md bg-navy border border-white/10 text-[11px] text-white/70">
              <span className="text-gold font-bold block mb-0.5">Order Inquiries:</span>
              <span>All orders are fulfilled via WhatsApp for custom sizing & delivery setup.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} 1203 RTW. A product of Gee Royale. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Crafted with <Heart className="h-3 w-3 text-gold fill-gold" /> in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
