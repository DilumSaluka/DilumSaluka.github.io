import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { CONTACT, whatsappLink } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "A new website",
  "Update my existing website",
  "Logo & brand identity",
  "AI videos",
  "Posters / flyers",
  "CV design",
  "Hosting & security",
  "Digital marketing",
  "Something else",
];

const inputClasses =
  "w-full rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-600 transition-colors focus:border-volt/60 focus:outline-none focus:ring-2 focus:ring-volt/20";

export function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi VYN Labs! I'm ${name || "..."}. I need: ${service}. ${message}`.trim();
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <AnimatedHeading className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Start a project.
          </AnimatedHeading>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-zinc-400">
            Tell us what you need. We reply within one business day with a
            free quote and a clear plan.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={whatsappLink("Hi VYN Labs!")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-volt transition-transform duration-300 group-hover:scale-110">
                  <WhatsappLogo size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-zinc-100 group-hover:text-volt">
                    {CONTACT.whatsappDisplay}
                  </span>
                  <span className="block text-xs text-zinc-500">WhatsApp — fastest reply</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-volt transition-transform duration-300 group-hover:scale-110">
                  <EnvelopeSimple size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-zinc-100 group-hover:text-volt">
                    {CONTACT.email}
                  </span>
                  <span className="block text-xs text-zinc-500">Email us anytime</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-volt">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-100">{CONTACT.location}</span>
                <span className="block text-xs text-zinc-500">Working worldwide, remotely</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-white/10 bg-panel p-7 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-zinc-200">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Amara Perera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-zinc-200">
                  What do you need?
                </label>
                <select
                  id="contact-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`${inputClasses} appearance-none`}
                >
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o} className="bg-panel text-zinc-100">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-zinc-200">
                Tell us a little more
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="I run a small bakery in Kandy and need a simple website with a menu page..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClasses} resize-y`}
              />
              <p className="mt-2 text-xs text-zinc-500">
                We reply within one business day. No spam, ever.
              </p>
            </div>
            <button
              type="submit"
              className="group btn-shine mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(200,241,105,0.25)] active:translate-y-px active:scale-[0.98] sm:w-auto"
            >
              Send via WhatsApp
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <p className="mt-4 text-xs text-zinc-500">
              Prefer email?{" "}
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Project inquiry")}`}
                className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-volt"
              >
                Write to us directly
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
