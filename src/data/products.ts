// ─────────────────────────────────────────────────────────────
// 1203 – Product Data
// Afro-Urban Ready-to-Wear by Gee Royale
// ─────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  priceNGN: number;
  priceUSD: number;
  category: string;
  description: string;
  image: string;
  sizes: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export const categories = [
  'Shirts',
  'Pants',
  'Co-ord Sets',
  'Hoodies & Sweats',
  'T-Shirts',
  'Dresses',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  // ── Shirts ──────────────────────────────────────────────────
  {
    id: 'adire-flow-shirt',
    name: 'Adire Flow Shirt',
    priceNGN: 15_000,
    priceUSD: 9,
    category: 'Shirts',
    description:
      'A lightweight oversized shirt featuring subtle Adire-inspired patterns. Perfect for layering or wearing solo on warm Lagos evenings.',
    image: '/products/product-1.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestseller: true,
  },
  {
    id: 'ojuelegba-linen-shirt',
    name: 'Ojuelegba Linen Shirt',
    priceNGN: 18_000,
    priceUSD: 11,
    category: 'Shirts',
    description:
      'Crisp linen-blend shirt with a relaxed boxy fit. Breathable fabric meets street-ready styling for the modern Afro-urbanite.',
    image: '/products/product-2.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
  },

  // ── Pants ───────────────────────────────────────────────────
  {
    id: 'aso-oke-trim-joggers',
    name: 'Aso Oke Trim Joggers',
    priceNGN: 16_000,
    priceUSD: 10,
    category: 'Pants',
    description:
      'Premium cotton joggers accented with hand-finished Aso Oke trim at the cuffs. Where heritage craft meets everyday comfort.',
    image: '/products/product-3.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestseller: true,
  },
  {
    id: 'mainland-cargo-pants',
    name: 'Mainland Cargo Pants',
    priceNGN: 20_000,
    priceUSD: 13,
    category: 'Pants',
    description:
      'Utility-inspired wide-leg cargos built for the streets. Durable twill fabric with deep pockets and a tapered silhouette.',
    image: '/products/product-4.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
  },

  // ── Co-ord Sets ─────────────────────────────────────────────
  {
    id: 'yaba-stripe-coord',
    name: 'Yaba Stripe Co-ord Set',
    priceNGN: 28_000,
    priceUSD: 18,
    category: 'Co-ord Sets',
    description:
      'A matching shirt-and-shorts set in bold vertical stripes. Effortless coordination that takes you from day hangouts to night vibes.',
    image: '/products/product-5.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestseller: true,
  },
  {
    id: 'ankara-remix-set',
    name: 'Ankara Remix Co-ord Set',
    priceNGN: 35_000,
    priceUSD: 22,
    category: 'Co-ord Sets',
    description:
      'Contemporary two-piece featuring reworked Ankara motifs on premium cotton. A statement set that celebrates African print in a modern silhouette.',
    image: '/products/product-6.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
  },

  // ── Hoodies & Sweats ───────────────────────────────────────
  {
    id: 'lagos-nights-hoodie',
    name: 'Lagos Nights Hoodie',
    priceNGN: 22_000,
    priceUSD: 14,
    category: 'Hoodies & Sweats',
    description:
      'Heavyweight fleece hoodie with embroidered 1203 branding. The go-to layer for cool harmattan evenings and late-night studio sessions.',
    image: '/products/product-7.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestseller: true,
  },
  {
    id: 'surulere-crewneck',
    name: 'Surulere Crewneck Sweatshirt',
    priceNGN: 18_000,
    priceUSD: 11,
    category: 'Hoodies & Sweats',
    description:
      'Midweight crewneck in washed-out earth tones. Garment-dyed for a vintage feel that gets better with every wear.',
    image: '/products/product-8.jpg',
    sizes: ['M', 'L', 'XL'],
  },

  // ── T-Shirts ────────────────────────────────────────────────
  {
    id: 'eko-graphic-tee',
    name: 'Èkó Graphic Tee',
    priceNGN: 8_000,
    priceUSD: 5,
    category: 'T-Shirts',
    description:
      'Soft-touch cotton tee with a bold Èkó skyline graphic. A love letter to Lagos printed on 180gsm combed cotton.',
    image: '/products/product-9.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestseller: true,
  },
  {
    id: 'naija-script-tee',
    name: 'Naija Script Tee',
    priceNGN: 10_000,
    priceUSD: 6,
    category: 'T-Shirts',
    description:
      'Oversized drop-shoulder tee featuring hand-lettered Yorùbá script across the chest. Culture meets streetwear comfort.',
    image: '/products/product-10.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
  },

  // ── Dresses ─────────────────────────────────────────────────
  {
    id: 'ife-wrap-dress',
    name: 'Ifè Wrap Dress',
    priceNGN: 25_000,
    priceUSD: 16,
    category: 'Dresses',
    description:
      'A flattering wrap dress in breathable cotton with a subtle geometric print. Versatile enough for brunch, the office, or a gallery opening.',
    image: '/products/product-11.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
  },
  {
    id: 'oshodi-tshirt-dress',
    name: 'Oshodi T-Shirt Dress',
    priceNGN: 14_000,
    priceUSD: 9,
    category: 'Dresses',
    description:
      'Relaxed-fit t-shirt dress that blends street style with effortless femininity. Premium jersey fabric with side-slit detailing.',
    image: '/products/product-12.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];

// ── WhatsApp Integration ──────────────────────────────────────
export const WHATSAPP_NUMBER = '';

export function getWhatsAppLink(product: Product, size: string): string {
  const message = encodeURIComponent(
    `Hi, I'd like to order the ${product.name} (Size: ${size}) from 1203 by Gee Royale. Price: ₦${product.priceNGN.toLocaleString()} / $${product.priceUSD}`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
