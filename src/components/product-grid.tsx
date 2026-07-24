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
    <section id="shop" className="py-24 bg-navy relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Shop 1203 RTW
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Ready To Wear <span className="italic text-gold">Collection</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base font-light">
            Unisex streetwear pieces crafted for style, versatility, and everyday comfort.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory('All')}
            className={`
              px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer
              ${
                activeCategory === 'All'
                  ? 'bg-gold text-navy shadow-md'
                  : 'bg-navy-light/60 border border-white/15 text-white/70 hover:border-gold/40 hover:text-white'
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
                  px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer
                  ${
                    activeCategory === category
                      ? 'bg-gold text-navy shadow-md'
                      : 'bg-navy-light/60 border border-white/15 text-white/70 hover:border-gold/40 hover:text-white'
                  }
                `}
              >
                {category} ({count})
              </button>
            )
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
