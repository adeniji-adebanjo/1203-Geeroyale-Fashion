'use client'

import Image from 'next/image'
import { ShoppingBag, Eye } from './icons'
import { Product, getWhatsAppLink } from '../data/products'
import { Button } from './ui/button'

interface ProductCardProps {
  product: Product
  onQuickView: (product: Product) => void
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    const link = getWhatsAppLink(product, product.sizes[0])
    window.open(link, '_blank')
  }

  return (
    <div
      onClick={() => onQuickView(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onQuickView(product)
        }
      }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-md border border-white/10 bg-navy-light/60 shadow-md transition-all duration-300 hover:border-gold/50 hover:shadow-xl focus-visible:border-gold focus-visible:outline-none"
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-navy">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5 sm:left-3 sm:top-3">
          {product.isNew && (
            <span className="rounded-xs bg-gold px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-navy shadow-md sm:px-2 sm:text-[10px]">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="rounded-xs bg-white/90 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-navy shadow-md sm:px-2 sm:text-[10px]">
              POPULAR
            </span>
          )}
        </div>

        {/* Quick View — hover on pointer devices only */}
        <div className="absolute inset-0 hidden items-center justify-center bg-navy/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
          <Button
            variant="outline"
            size="sm"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation()
              onQuickView(product)
            }}
            className="border-white/40 bg-navy/80 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-gold hover:text-navy"
          >
            <Eye className="mr-1.5 h-3.5 w-3.5" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col space-y-2 p-3 sm:space-y-3 sm:p-4">
        <div className="space-y-1">
          <span className="block text-[9px] font-semibold uppercase tracking-widest text-gold sm:text-[10px]">
            {product.category}
          </span>
          <h3 className="line-clamp-2 text-xs font-semibold text-white transition-colors group-hover:text-gold sm:line-clamp-1 sm:text-base">
            {product.name}
          </h3>
        </div>

        {/* Price display with NGN and USD */}
        <div className="mt-auto flex flex-wrap items-baseline gap-x-2">
          <span className="text-sm font-bold text-white sm:text-lg">
            ₦{product.priceNGN.toLocaleString()}
          </span>
          <span className="text-[11px] font-medium text-white/50 sm:text-xs">
            / ${product.priceUSD}
          </span>
        </div>

        {/* Buy Now WhatsApp Button */}
        <Button
          onClick={handleBuyNow}
          aria-label={`Order ${product.name} on WhatsApp`}
          className="mt-1 h-10 w-full bg-gold px-2 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-md transition-all hover:bg-gold-light sm:mt-2 sm:text-xs"
        >
          <ShoppingBag className="mr-1.5 h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Order on WhatsApp</span>
        </Button>
      </div>
    </div>
  )
}
