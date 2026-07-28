'use client'

import { useState } from 'react'
import { products, categories, Product } from '../data/products'
import ProductCard from './product-card'
import ProductModal from './product-modal'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="shop" className="relative bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-3 text-center sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em]">
            Shop 1203
          </span>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready-to-Wear <span className="italic text-gold">Collection</span>
          </h2>
          <p className="mx-auto max-w-lg text-sm font-light text-white/60 sm:text-base">
            Elevated essentials and statement pieces, cut for everyday
            expression.
          </p>
        </div>

        {/* Category Filter Tabs — scrolls edge-to-edge on small screens */}
        <div className="edge-scroll mb-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none sm:mb-10 sm:justify-center sm:pb-6">
          <button
            onClick={() => setActiveCategory('All')}
            className={`
              shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:px-5
              ${
                activeCategory === 'All'
                  ? 'bg-gold text-navy shadow-md'
                  : 'border border-white/15 bg-navy-light/60 text-white/70 hover:border-gold/40 hover:text-white'
              }
            `}
          >
            All Pieces ({products.length})
          </button>
          {categories.map((category) => {
            const count = products.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:px-5
                  ${
                    activeCategory === category
                      ? 'bg-gold text-navy shadow-md'
                      : 'border border-white/15 bg-navy-light/60 text-white/70 hover:border-gold/40 hover:text-white'
                  }
                `}
              >
                {category} ({count})
              </button>
            )
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  )
}
