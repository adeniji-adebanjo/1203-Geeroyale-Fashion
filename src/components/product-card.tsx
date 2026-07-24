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
      className="group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-navy-light/60 hover:border-gold/50 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-gold text-navy text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-md">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-white/90 text-navy text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-md">
              POPULAR
            </span>
          )}
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onQuickView(product)
            }}
            className="border-white/40 bg-navy/80 hover:bg-gold hover:text-navy text-white text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <Eye className="mr-1.5 h-3.5 w-3.5" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="space-y-1">
          <span className="text-[10px] font-semibold text-gold uppercase tracking-widest block">
            {product.category}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-gold transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>

        {/* Price display with NGN and USD */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-base sm:text-lg font-bold text-white">
            ₦{product.priceNGN.toLocaleString()}
          </span>
          <span className="text-xs text-white/50 font-medium">
            / ${product.priceUSD}
          </span>
        </div>

        {/* Buy Now WhatsApp Button */}
        <Button
          onClick={handleBuyNow}
          className="w-full bg-gold hover:bg-gold-light text-navy text-xs font-extrabold uppercase tracking-wider h-10 mt-2 transition-all shadow-md"
        >
          <ShoppingBag className="mr-1.5 h-3.5 w-3.5" />
          Buy Now (WhatsApp)
        </Button>
      </div>
    </div>
  )
}
