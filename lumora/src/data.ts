import type { Icon } from "@phosphor-icons/react";
import {
  Monitor,
  ArrowsClockwise,
  ShieldCheck,
  Fingerprint,
  VideoCamera,
  Sparkle,
  Robot,
  FileText,
  Megaphone,
} from "@phosphor-icons/react";

export const CONTACT = {
  email: "hello@vynlabs.lk", // TODO: replace with your real email
  whatsappNumber: "+94770000000", // TODO: replace with your real WhatsApp number (digits only, country code first)
  whatsappDisplay: "+94 77 000 0000", // TODO: replace with your real number for display
  location: "Colombo, Sri Lanka",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  title: string;
  description: string;
  icon: Icon;
  span?: "wide" | "tall";
  tone?: "image" | "volt" | "plain" | "soft";
  chips?: string[];
  image?: string;
  alt?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Website Design & Development",
    description:
      "Modern, fast websites built to win customers — landing pages, online stores and booking systems that look world-class.",
    icon: Monitor,
    span: "tall",
    tone: "image",
    chips: ["Landing pages", "Online stores", "Booking systems"],
    image:
      "https://picsum.photos/seed/lumora-webdesign-desk/900/1100",
    alt: "Designer working on a modern website layout",
  },
  {
    title: "Website Care & Updates",
    description:
      "Content changes, new pages, speed tune-ups — we keep your site fresh while you run the business.",
    icon: ArrowsClockwise,
    tone: "plain",
  },
  {
    title: "Hosting & Security",
    description:
      "Fast, secure hosting with SSL, backups and monitoring handled for you. No jargon, no downtime worries.",
    icon: ShieldCheck,
    tone: "plain",
  },
  {
    title: "Logo & Brand Identity",
    description:
      "A logo and brand kit that makes your business instantly recognisable — colors, fonts and templates included.",
    icon: Fingerprint,
    span: "wide",
    tone: "plain",
  },
  {
    title: "AI Video Content",
    description:
      "Scroll-stopping promo videos and social reels produced with AI at a fraction of studio cost.",
    icon: VideoCamera,
    span: "wide",
    tone: "volt",
  },
  {
    title: "AI Posters & Graphics",
    description:
      "Eye-catching AI visuals plus print-ready posters and flyers — for campaigns, events and social feeds.",
    icon: Sparkle,
    tone: "plain",
  },
  {
    title: "AI Chatbots & Automation",
    description:
      "Instant answers for your customers, even while you sleep — support bots, lead capture and workflow automation.",
    icon: Robot,
    tone: "soft",
  },
  {
    title: "CV Design",
    description:
      "CVs and portfolios that pass both recruiters and robots — clean layouts that get interviews.",
    icon: FileText,
    span: "wide",
    tone: "plain",
  },
  {
    title: "Digital Marketing",
    description:
      "Social media management, ad campaigns and SEO that bring real customers to your door.",
    icon: Megaphone,
    span: "wide",
    tone: "soft",
  },
];

export const TICKER_ITEMS = [
  "Web design",
  "AI video",
  "Logo design",
  "Posters & flyers",
  "CV design",
  "Secure hosting",
  "AI automation",
  "Digital marketing",
  "Website care",
];

export type WorkItem = {
  title: string;
  tag: string;
  image: string;
  alt: string;
};

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Café Kandy",
    tag: "Brand identity",
    image: "https://picsum.photos/seed/lumora-cafe-brand/640/800",
    alt: "Café brand identity concept",
  },
  {
    title: "Urban Fitness",
    tag: "Poster series",
    image: "https://picsum.photos/seed/lumora-fitness-poster/640/800",
    alt: "Fitness poster series concept",
  },
  {
    title: "Skyline Realty",
    tag: "Property website",
    image: "https://picsum.photos/seed/lumora-realty-site/640/800",
    alt: "Real estate website concept",
  },
  {
    title: "Bloom Skincare",
    tag: "Launch video",
    image: "https://picsum.photos/seed/lumora-skincare-video/640/800",
    alt: "Product launch video still",
  },
  {
    title: "Northline Logistics",
    tag: "Corporate website",
    image: "https://picsum.photos/seed/lumora-logistics-site/640/800",
    alt: "Corporate website concept",
  },
  {
    title: "Chef Menu",
    tag: "CV & portfolio",
    image: "https://picsum.photos/seed/lumora-cv-design/640/800",
    alt: "Designed CV and portfolio concept",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    description:
      "Free chat about your goals, customers and style. We reply within one business day.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "You get real concepts to react to — unlimited revisions until it feels right.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We build everything — website, content, chatbots — and keep you updated as it comes together.",
  },
  {
    num: "04",
    title: "Launch & grow",
    description:
      "Hosting, security, updates and marketing handled month after month. You just watch results.",
  },
];

export type Package = {
  name: string;
  blurb: string;
  marketRate?: string;
  price: string;
  unit: string;
  recurring: string;
  features: string[];
  popular?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Website Making",
    blurb: "Brand-new site built from scratch.",
    marketRate: "LKR 25,000",
    price: "LKR 5,000",
    unit: "one-time",
    recurring: "+ LKR 1,000/month hosting & care",
    features: [
      "1–3 page website",
      "Mobile-friendly",
      "WhatsApp / contact button",
      "SSL certificate",
      "Free security hardening",
    ],
  },
  {
    name: "Website Modernising",
    blurb: "Refresh your existing site to modern standards.",
    marketRate: "LKR 45,000",
    price: "LKR 7,000",
    unit: "one-time",
    recurring: "+ LKR 1,000/month hosting & care",
    popular: true,
    features: [
      "Full redesign & speed boost",
      "About & services/menu pages",
      "Photo gallery",
      "Contact form + lead capture",
      "Free security hardening",
    ],
  },
  {
    name: "Custom Website",
    blurb: "Anything you can imagine — fully tailored.",
    price: "Custom",
    unit: "tailored quote",
    recurring: "Hosting as needed",
    features: [
      "Unlimited pages & features",
      "Custom integrations & booking",
      "Advanced SEO & performance",
      "Priority support",
      "Free security hardening",
    ],
  },
];

export type AddOn = {
  name: string;
  marketRate?: string;
  price: string;
  note: string;
};

// Kept for Estimator compatibility — detailed tiers below are for display
export const ADD_ONS: AddOn[] = [
  { name: "Logo design", marketRate: "LKR 15,000", price: "LKR 7,000", note: "Logo + brand kit" },
  { name: "Posters / flyers", marketRate: "LKR 8,000", price: "LKR 4,000", note: "Per piece" },
  { name: "CV design", marketRate: "LKR 6,000", price: "LKR 3,000", note: "CV + cover" },
  { name: "Custom software", price: "From LKR 15,000", note: "Final quote after chat" },
  { name: "Domain (.com.lk / .com)", marketRate: "LKR 12,000", price: "LKR 1,000 – LKR 8,000 / year", note: ".com.lk from LKR 1,000, .com from LKR 8,000 — at cost" },
];

export const OTHER_PRICING: { category: string; packs: Package[] }[] = [
  {
    category: "Logo & Brand Identity",
    packs: [
      {
        name: "Basic Logo",
        blurb: "One strong mark.",
        marketRate: "LKR 8,000",
        price: "LKR 1,000",
        unit: "one-time",
        recurring: "1 concept + 2 revisions",
        features: ["Single logo concept", "PNG + JPG + SVG", "Black & white versions", "Free minor tweaks"],
      },
      {
        name: "Brand Kit",
        blurb: "Most chosen.",
        marketRate: "LKR 15,000",
        price: "LKR 3,000",
        unit: "one-time",
        recurring: "Logo + kit",
        popular: true,
        features: ["Logo + colour palette", "Fonts & usage guide", "Social avatar + favicon", "Source files included"],
      },
      {
        name: "Custom Identity",
        blurb: "Full system.",
        price: "Custom",
        unit: "tailored quote",
        recurring: "For teams & print",
        features: ["Complete brand system", "Stationery & templates", "Brand guidelines PDF", "Priority delivery"],
      },
    ],
  },
  {
    category: "Posters / Flyers",
    packs: [
      { name: "Single", blurb: "One standout piece.", marketRate: "LKR 8,000", price: "LKR 500", unit: "per piece", recurring: "Print-ready", features: ["1 poster / flyer", "2 revisions", "Print + web files", "Fast delivery"] },
      { name: "Pack of 5", blurb: "Campaign ready.", marketRate: "LKR 35,000", price: "LKR 3,000", unit: "per pack", recurring: "Save more per piece", popular: true, features: ["5 coordinated designs", "Consistent style", "All source files", "Priority support"] },
      { name: "Custom Campaign", blurb: "Any volume.", price: "Custom", unit: "tailored quote", recurring: "Events & launches", features: ["Unlimited pieces", "Custom illustrations", "Rush available", "Ongoing tweaks"] },
    ],
  },
  {
    category: "CV Design",
    packs: [
      { name: "Starter CV", blurb: "Clean & hired.", marketRate: "LKR 4,000", price: "LKR 500", unit: "one-time", recurring: "1 page", features: ["Single-page CV", "ATS-friendly layout", "PDF + Word", "1 revision"] },
      { name: "Pro Portfolio", blurb: "Most chosen.", marketRate: "LKR 6,000", price: "LKR 1,000", unit: "one-time", recurring: "CV + letter", popular: true, features: ["CV + cover letter", "LinkedIn banner", "2 revisions", "Print & digital"] },
      { name: "Executive", blurb: "Fully tailored.", price: "Custom", unit: "tailored quote", recurring: "For leaders", features: ["Multi-page portfolio", "Personal logo", "Custom infographics", "Unlimited revisions"] },
    ],
  },
  {
    category: "Domain",
    packs: [
      { name: ".com.lk", blurb: "Local favourite.", marketRate: "LKR 2,000", price: "LKR 1,000", unit: "/ year", recurring: "Billed at cost", features: [".com.lk registration", "In your own name", "DNS setup", "Pass-through cost"] },
      { name: ".com / .net / .org", blurb: "Global reach.", marketRate: "LKR 12,000", price: "LKR 8,000", unit: "/ year", recurring: "Billed at cost", popular: true, features: [".com from LKR 8,000", "In your own name", "DNS + SSL help", "Pass-through cost"] },
      { name: "Custom / Bulk", blurb: "Premium & bulk.", price: "Custom", unit: "tailored quote", recurring: "Any TLD", features: ["Premium domains", "Bulk registration", "Transfer help", "Priority handling"] },
    ],
  },
  {
    category: "Custom Software / Tools",
    packs: [
      { name: "Starter Tool", blurb: "Small automation.", price: "From LKR 15,000", unit: "one-time", recurring: "Final after chat", features: ["Single workflow", "Basic logic", "1 integration", "2 weeks support"] },
      { name: "Business System", blurb: "Grows with you.", marketRate: "LKR 60,000", price: "From LKR 35,000", unit: "one-time", recurring: "Most chosen", popular: true, features: ["Multi-step workflows", "CRM / sheet sync", "User roles", "1 month support"] },
      { name: "Custom Enterprise", blurb: "No limits.", price: "Custom", unit: "tailored quote", recurring: "Complex builds", features: ["Unlimited logic", "API ecosystem", "Dedicated support", "Ongoing dev"] },
    ],
  },
  {
    category: "Social Media Management",
    packs: [
      { name: "Starter", blurb: "Stay active.", marketRate: "LKR 18,000", price: "LKR 12,000", unit: "/ month", recurring: "8 posts", features: ["8 posts / month", "Captions + hashtags", "Basic design", "Monthly report"] },
      { name: "Growth", blurb: "Grow faster.", marketRate: "LKR 35,000", price: "LKR 25,000", unit: "/ month", recurring: "15 posts + ads", popular: true, features: ["15 posts + stories", "Ad setup (budget extra)", "Community replies", "Growth report"] },
      { name: "Custom", blurb: "Full outsource.", price: "Custom", unit: "tailored quote", recurring: "Your voice 24/7", features: ["Daily posting", "Video & reels", "Influencer outreach", "Dedicated manager"] },
    ],
  },
  {
    category: "AI Video",
    packs: [
      { name: "Single Video", blurb: "One scroll-stopper.", marketRate: "LKR 8,000", price: "LKR 1,000", unit: "per video", recurring: "15–30s", features: ["Script + AI generation", "Music + captions", "2 revisions", "Ready for social"] },
      { name: "Pack of 3", blurb: "Launch discount.", marketRate: "LKR 10,000", price: "LKR 8,000", unit: "per pack", recurring: "3 videos, one style", popular: true, features: ["3 coordinated videos", "Consistent style", "All formats", "Priority edit"] },
      { name: "Custom Studio", blurb: "Series & ads.", price: "Custom", unit: "tailored quote", recurring: "Ongoing", features: ["Unlimited videos", "Voice + avatar", "Ad variants", "Monthly retainer"] },
    ],
  },
  {
    category: "Chatbots & Automation",
    packs: [
      { name: "Basic Bot", blurb: "Answer 24/7.", marketRate: "LKR 15,000", price: "LKR 3,000", unit: "setup", recurring: "+ usage", features: ["FAQ bot for site/WhatsApp", "24/7 answers", "Lead capture", "2 weeks tuning"] },
      { name: "Pro Automation", blurb: "Do work for you.", marketRate: "LKR 45,000", price: "LKR 10,000", unit: "setup", recurring: "Most chosen", popular: true, features: ["Multi-step workflows", "Sheets / CRM sync", "Human handoff", "1 month support"] },
      { name: "Custom AI", blurb: "Your AI team.", price: "Custom", unit: "tailored quote", recurring: "Complex ops", features: ["LLM + tools", "API ecosystem", "Analytics dashboard", "Ongoing optimisation"] },
    ],
  },
];

export const COMING_SOON: string[] = [];

export type EstimateItem = {
  id: string;
  label: string;
  note: string;
  min: number;
  max: number;
};

// TODO: tune these to your real rates before launch
export const ESTIMATOR_ITEMS: EstimateItem[] = [
  { id: "website", label: "Website", note: "1–3 pages · +LKR 1,000/mo care", min: 5000, max: 7000 },
  { id: "logo", label: "Logo design", note: "logo or brand kit", min: 1000, max: 3000 },
  { id: "posters", label: "Poster / flyer", note: "piece or pack", min: 500, max: 3000 },
  { id: "cv", label: "CV design", note: "CV + cover letter", min: 500, max: 1000 },
  { id: "software", label: "Custom software", note: "tools & integrations", min: 15000, max: 45000 },
  { id: "domain", label: "Domain (.com.lk / .com)", note: "per year, billed at cost", min: 1000, max: 8000 },
  { id: "social", label: "Social media", note: "per month", min: 12000, max: 25000 },
  { id: "aivideo", label: "AI video", note: "single or pack", min: 1000, max: 8000 },
  { id: "chatbot", label: "Chatbot / automation", note: "setup", min: 3000, max: 10000 },
];

export const FAQS = [
  {
    q: "How long does a website take?",
    a: "Most sites go live in 5–14 days depending on size. We agree on a date before we start, and we hit it.",
  },
  {
    q: "Can you update my existing website?",
    a: "Yes. We can refresh the design, fix problems, improve speed and add new pages — whether or not we built it.",
  },
  {
    q: "Can you build AI chatbots?",
    a: "Yes — support bots, lead-capture assistants and workflow automations, just like the helper on this site. Ask us for a demo.",
  },
  {
    q: "Do I own everything you create?",
    a: "100%. Website files, domain, logo source files, videos — all yours from day one. No lock-in, ever.",
  },
  {
    q: "How do payments work?",
    a: "50% to start, 50% when you're happy before launch. Hosting & care is LKR 1,000/month — or pay 12 months upfront and get 1 month free.",
  },
];
