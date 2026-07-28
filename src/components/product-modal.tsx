'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, Check } from './icons'
import { Product, getWhatsAppLink } from '../data/products'
import { Dialog, DialogContent } from './ui/dialog'
import { Button } from './ui/button'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')

  if (!product) return null

  const currentSize = selectedSize || product.sizes[0]

  const handleWhatsAppOrder = () => {
    const link = getWhatsAppLink(product, currentSize)
    window.open(link, '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <div className="grid items-start gap-5 sm:gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative mx-auto aspect-3/4 w-full max-w-64 overflow-hidden rounded-md border border-white/10 bg-navy-light sm:max-w-none">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 90vw, 22rem"
              className="object-cover object-top"
            />
            {product.isNew && (
              <span className="absolute left-3 top-3 rounded-xs bg-gold px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-navy">
                NEW RELEASE
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="pr-10 sm:pr-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {product.category}
              </span>
              <h2 className="mt-1 font-serif text-xl font-bold text-white sm:text-3xl">
                {product.name}
              </h2>
            </div>

            {/* Price section with NGN and USD */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-md border border-white/5 bg-navy-light p-3">
              <span className="text-xl font-extrabold text-gold sm:text-2xl">
                ₦{product.priceNGN.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-white/60">
                / ${product.priceUSD} USD
              </span>
            </div>

            <p className="text-sm text-white/75 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-white">
                  Select Size
                </span>
                <span className="text-white/50">Unisex fit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const isSelected = currentSize === size
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={isSelected}
                      className={`
                        h-11 min-w-11 cursor-pointer rounded-md border px-4 text-xs font-bold transition-all
                        ${
                          isSelected
                            ? 'border-gold bg-gold text-navy shadow-md'
                            : 'border-white/15 bg-navy-light text-white/80 hover:border-gold/50'
                        }
                      `}
                    >
                      {size}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Guarantees / Badges */}
            <div className="space-y-1.5 pt-2 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Fast nationwide delivery across Nigeria & international shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                <span>Gee Royale craftsmanship and premium materials</span>
              </div>
            </div>

            {/* Buy Now CTA */}
            <Button
              onClick={handleWhatsAppOrder}
              className="h-13 w-full bg-gold text-xs font-bold uppercase tracking-[0.15em] text-navy shadow-xl transition-all hover:scale-[1.01] hover:bg-gold-light sm:h-14 sm:text-sm"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order via WhatsApp ({currentSize})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
