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
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Product Image */}
          <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-navy-light border border-white/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-top"
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-gold text-navy text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                NEW RELEASE
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-5">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {product.name}
              </h2>
            </div>

            {/* Price section with NGN and USD */}
            <div className="flex items-baseline gap-3 p-3 rounded-md bg-navy-light border border-white/5">
              <span className="text-2xl font-extrabold text-gold">
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
                <span className="font-bold text-white uppercase tracking-wider">
                  Select Size
                </span>
                <span className="text-white/50">Unisex Fit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const isSelected = currentSize === size
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        h-10 px-4 rounded-md text-xs font-bold transition-all border cursor-pointer
                        ${
                          isSelected
                            ? 'bg-gold text-navy border-gold shadow-md'
                            : 'bg-navy-light border-white/15 text-white/80 hover:border-gold/50'
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
                <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Authentic Gee Royale Afro-Urban quality</span>
              </div>
            </div>

            {/* Buy Now CTA */}
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gold hover:bg-gold-light text-navy font-bold uppercase tracking-[0.15em] h-14 text-xs sm:text-sm shadow-xl transition-all hover:scale-[1.01]"
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
