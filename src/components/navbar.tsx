'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, Instagram, ShoppingBag, X } from './icons'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* ── Scroll detection ─────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll() // initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Smooth scroll handler ────────────────────── */
  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    },
    [],
  )

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        bg-navy/80 backdrop-blur-md
        border-b transition-all duration-300
        ${
          scrolled
            ? 'border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
            : 'border-white/10'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* ── Brand ──────────────────────────────── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-baseline gap-1.5 select-none"
          >
            <span className="font-serif text-3xl md:text-4xl font-bold text-gold leading-none">
              1203
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/60 uppercase">
              RTW
            </span>
          </a>

          {/* ── Desktop Nav Links ──────────────────── */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className="
                    text-xs font-bold uppercase tracking-[0.15em]
                    text-white/70 hover:text-gold
                    transition-colors duration-300
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Right Actions ──────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/1203_rtw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-gold hover:bg-white/5 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </a>

            <a href="#shop" onClick={(e) => scrollTo(e, '#shop')}>
              <Button className="bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-[0.15em] px-5 py-2 transition-all duration-300">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </Button>
            </a>
          </div>

          {/* ── Mobile Hamburger ───────────────────── */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-gold hover:bg-white/5"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] bg-navy border-l border-white/10 p-0"
              >
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-white/10">
                  <SheetTitle className="flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl font-bold text-gold">
                      1203
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                      RTW
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col px-6 py-8">
                  {/* Nav links */}
                  <ul className="flex flex-col gap-6">
                    {navLinks.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          onClick={(e) => scrollTo(e, href)}
                          className="
                            text-sm font-bold uppercase tracking-[0.15em]
                            text-white/70 hover:text-gold
                            transition-colors duration-300
                          "
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="my-8 h-px bg-white/10" />

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/1203_rtw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 mb-6"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.15em]">
                      Instagram
                    </span>
                  </a>

                  {/* Shop Now CTA */}
                  <a
                    href="#shop"
                    onClick={(e) => scrollTo(e, '#shop')}
                    className="w-full"
                  >
                    <Button className="w-full bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-[0.15em] px-5 py-3 transition-all duration-300">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Shop Now
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
