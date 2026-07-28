// ─────────────────────────────────────────────────────────────
// 1203 — Afro-Urban Ready-to-Wear by Gee Royale
// Single source of truth for brand copy, links and metadata.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "1203",
  fullName: "1203 by Gee Royale",
  parent: "Gee Royale",
  tagline: "Wear Your Identity.",
  headline: "Afro-Urban Ready-to-Wear by Gee Royale",
  subheadline:
    "Designed for everyday expression. Inspired by African identity.",
  description:
    "1203 is the Afro-urban ready-to-wear label of Gee Royale — contemporary silhouettes, premium materials and enduring design, made to be worn confidently every day.",
  url: "https://1203.geeroyalefashion.com",
  parentUrl: "https://geeroyalefashion.com",
  instagram: "https://www.instagram.com/1203_rtw/",
  instagramHandle: "@1203_rtw",
  locality: "Lagos",
  country: "Nigeria",
  developerName: "Adeniji Adebanjo",
  developerUrl: "https://adebanjo-adeniji.netlify.app",
} as const;

export const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Design Language", href: "#design-language" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const designLanguage = [
  {
    word: "Modern",
    note: "Contemporary silhouettes built on clean lines and considered proportion.",
  },
  {
    word: "Confident",
    note: "Statement pieces made for people who dress with intent.",
  },
  {
    word: "Functional",
    note: "Construction and detailing that hold up to work, travel and daily wear.",
  },
  {
    word: "African",
    note: "African aesthetics reimagined for a modern wardrobe.",
  },
  {
    word: "Urban",
    note: "The energy of city living, translated into everyday clothing.",
  },
] as const;
