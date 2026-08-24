import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Footer";

const LINKS = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-zinc-50"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-shine hidden rounded-full bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(200,241,105,0.25)] active:translate-y-px active:scale-[0.98] sm:inline-flex"
          >
            Start a project
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-volt/50 hover:text-volt md:hidden"
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-[1200px] space-y-1 px-4 py-4 sm:px-6">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-volt"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-volt px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
