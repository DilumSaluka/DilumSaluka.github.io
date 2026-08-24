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
  marketRate: string;
  price: string;
  unit: string;
  recurring: string;
  features: string[];
  popular?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Starter",
    blurb: "Get your business online, properly.",
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
    name: "Growth",
    blurb: "Everything in Starter, plus room to grow.",
    marketRate: "LKR 45,000",
    price: "LKR 7,000",
    unit: "one-time",
    recurring: "+ LKR 1,000/month hosting & care",
    popular: true,
    features: [
      "Multi-page website",
      "About & services/menu pages",
      "Photo gallery",
      "Contact form",
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

export const ADD_ONS: AddOn[] = [
  {
    name: "Logo design",
    marketRate: "LKR 15,000",
    price: "LKR 7,000",
    note: "Logo + brand kit, source files included",
  },
  {
    name: "Posters / flyers",
    marketRate: "LKR 8,000",
    price: "LKR 4,000",
    note: "Per piece, print-ready",
  },
  {
    name: "CV design",
    marketRate: "LKR 6,000",
    price: "LKR 3,000",
    note: "CV + matching cover letter",
  },
  {
    name: "Custom software / tools",
    price: "From LKR 15,000",
    note: "Final quote after a free chat",
  },
  {
    name: "Domain (.com.lk)",
    price: "LKR 1,000/year",
    note: "Billed at cost, registered in your own name — a pass-through cost, not studio profit",
  },
];

export const COMING_SOON = [
  "Social media management",
  "AI video",
  "Chatbots & automation",
];

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
  { id: "logo", label: "Logo design", note: "logo + brand kit", min: 7000, max: 7000 },
  { id: "posters", label: "Poster / flyer", note: "per piece", min: 4000, max: 4000 },
  { id: "cv", label: "CV design", note: "CV + cover letter", min: 3000, max: 3000 },
  { id: "software", label: "Custom software", note: "tools & integrations", min: 15000, max: 45000 },
  { id: "domain", label: "Domain (.com.lk)", note: "per year, billed at cost", min: 1000, max: 1000 },
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
