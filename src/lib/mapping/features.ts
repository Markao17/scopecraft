// src/lib/mappings/features.ts

export type Feature = {
  id: string;
  label: string;         // shown in UI
  description?: string;  // short description
  category: string;      // category
};

export const FEATURES: Feature[] = [
  {
    id: "blog",
    label: "Blog / News",
    description: "Post type, archive, categories, search",
    category: "Content",
  },
  {
    id: "seo_baseline",
    label: "SEO Baseline",
    description: "Sitemap, OG tags, schema markup",
    category: "SEO & Perf",
  },
  {
    id: "perf",
    label: "Performance",
    description: "Caching, CDN, image optimization",
    category: "SEO & Perf",
  },
  {
    id: "i18n",
    label: "Multilingual",
    description: "Multiple languages and switcher",
    category: "System",
  },
  {
    id: "headless",
    label: "Headless",
    description: "Expose WP API, integrate with React",
    category: "System",
  },
  {
    id: "giftcards",
    label: "Gift Cards",
    description: "WooCommerce virtual products + emails",
    category: "Commerce",
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "GA4 or PostHog event tracking",
    category: "System",
  },
  // ... continua
];
