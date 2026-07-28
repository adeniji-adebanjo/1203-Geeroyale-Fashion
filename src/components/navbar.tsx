'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Menu, Instagram, ShoppingBag } from './icons'
import { Button } from './ui/button'
import { navLinks, site } from '../data/site'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

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
  const scrollTo = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  /* Closing the sheet releases the body scroll lock, so the scroll has to
     wait a frame or the restored position cancels it. */
  const scrollToFromMenu = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setMobileOpen(false)
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(href)))
    },
    [scrollTo],
  )

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        bg-navy/85 backdrop-blur-md
        border-b transition-all duration-300
        ${
          scrolled
            ? 'border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
            : 'border-white/10'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 md:h-20">
          {/* ── Brand ──────────────────────────────── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="1203 by Gee Royale — back to top"
            className="flex shrink-0 items-center gap-2.5 select-none"
          >
            <Image
              src="/1203-wordmark-light.png"
              alt="1203"
              width={1045}
              height={492}
              priority
              className="h-7 w-auto md:h-9"
            />
            <span className="hidden h-6 w-px bg-white/20 sm:block" />
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:block">
              by Gee Royale
            </span>
          </a>

          {/* ── Desktop Nav Links ──────────────────── */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(href)
                  }}
                  className="
                    whitespace-nowrap text-xs font-bold uppercase tracking-[0.15em]
                    text-white/70 transition-colors duration-300 hover:text-gold
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Right Actions ──────────────── */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow 1203 on Instagram (${site.instagramHandle})`}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 transition-colors duration-300 hover:bg-white/5 hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="#shop"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#shop')
              }}
            >
              <Button className="bg-gold px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:bg-gold-light">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </Button>
            </a>
          </div>

          {/* ── Mobile / Tablet Menu ───────────────── */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow 1203 on Instagram (${site.instagramHandle})`}
              className="hidden sm:block"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 text-white/70 hover:bg-white/5 hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 text-white hover:bg-white/10 hover:text-gold"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <SheetHeader className="border-b border-white/10 px-6 pb-5 pt-6">
                  <SheetTitle className="flex items-center gap-2.5">
                    <Image
                      src="/1203-wordmark-light.png"
                      alt="1203"
                      width={1045}
                      height={492}
                      className="h-7 w-auto"
                    />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      by Gee Royale
                    </span>
                  </SheetTitle>
                  <p className="text-[11px] font-light text-white/45">
                    {site.tagline}
                  </p>
                </SheetHeader>

                <nav className="flex flex-col px-4 py-4">
                  <ul className="flex flex-col">
                    {navLinks.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          onClick={(e) => scrollToFromMenu(e, href)}
                          className="
                            flex min-h-12 items-center rounded-md px-3
                            text-sm font-bold uppercase tracking-[0.15em] text-white/75
                            transition-colors duration-200 hover:bg-white/5 hover:text-gold
                            active:bg-white/10
                          "
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto space-y-4 border-t border-white/10 px-6 pt-6 pb-safe">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 text-white/70 transition-colors duration-300 hover:text-gold"
                  >
                    <Instagram className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-[0.15em]">
                      {site.instagramHandle}
                    </span>
                  </a>

                  <a
                    href="#shop"
                    onClick={(e) => scrollToFromMenu(e, '#shop')}
                    className="block w-full"
                  >
                    <Button className="h-12 w-full bg-gold text-xs font-bold uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:bg-gold-light">
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
