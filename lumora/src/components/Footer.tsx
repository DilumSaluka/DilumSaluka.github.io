import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { CONTACT } from "../data";

const SOCIALS = [
  // TODO: replace "#" with your real profile links before launch
  { label: "Instagram", icon: InstagramLogo, href: "#" },
  { label: "Facebook", icon: FacebookLogo, href: "#" },
  { label: "TikTok", icon: TiktokLogo, href: "#" },
  { label: "LinkedIn", icon: LinkedinLogo, href: "#" },
];

export function VynMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8h12l7 22 7-22h8L35 44h-8L16 20 12 32z M36.5 18a3.2 3.2 0 1 0 0 .01z"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-volt text-ink shadow-[0_0_20px_rgba(200,241,105,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-[-3deg] group-hover:shadow-[0_0_30px_rgba(200,241,105,0.45)]"
      >
        <VynMark className="size-6 transition-transform duration-500 group-hover:scale-110" />
      </span>
      <span className="font-display text-base font-bold uppercase tracking-[0.22em] text-zinc-50">
        VYN&nbsp;Labs
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel/40">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-zinc-500">
            A digital studio for small businesses that want to look world-class
            online — websites, AI content, chatbots and marketing under one
            roof.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-volt/50 hover:text-volt"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
            {[
              ["Web design", "#services"],
              ["AI video & posters", "#services"],
              ["Logo & branding", "#services"],
              ["Hosting & security", "#services"],
              ["Digital marketing", "#services"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-volt">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Studio">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Studio
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
            {[
              ["Our work", "#work"],
              ["Process", "#process"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-volt">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Get started">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Get started
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
            <li>
              <a href="#estimator" className="transition-colors hover:text-volt">
                Instant estimate
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-volt">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.whatsappDisplay}</li>
            <li>{CONTACT.location}</li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 px-4 py-6 text-xs text-zinc-600 sm:px-6">
          <p>© {new Date().getFullYear()} VYN Labs & Dilum Saluka. All rights reserved.</p>
          <p>Made with care in Sri Lanka · Crafted by Dilum Saluka</p>
        </div>
      </div>
    </footer>
  );
}
