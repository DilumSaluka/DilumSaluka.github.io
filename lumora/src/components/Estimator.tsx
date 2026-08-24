import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Lightning } from "@phosphor-icons/react";
import { CONTACT, ESTIMATOR_ITEMS, whatsappLink } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

const fmt = (n: number) => `LKR ${n.toLocaleString("en-US")}`;
const fmtRange = (min: number, max: number) =>
  min === max ? fmt(min) : `${fmt(min)} – ${fmt(max)}`;

export function Estimator() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const picked = ESTIMATOR_ITEMS.filter((i) => selected.has(i.id));
  const minTotal = picked.reduce((s, i) => s + i.min, 0);
  const maxTotal = picked.reduce((s, i) => s + i.max, 0);

  const quoteMessage =
    picked.length === 0
      ? "Hi VYN Labs! I'd like to discuss a project."
      : `Hi VYN Labs! I used your estimator and I'm interested in:\n${picked
          .map((i) => `- ${i.label}`)
          .join("\n")}\nEstimated budget: ${fmtRange(minTotal, maxTotal)}`;

  return (
    <section id="estimator" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <AnimatedHeading className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Price it yourself in 30 seconds.
          </AnimatedHeading>
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-zinc-400">
            Tick what you need and watch the estimate update live. No email
            required — take the numbers straight to WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Service toggles */}
          <Reveal delay={0.05}>
            <div
              className="grid gap-3 sm:grid-cols-2"
              role="group"
              aria-label="Select services to estimate a price"
            >
              {ESTIMATOR_ITEMS.map((item) => {
                const active = selected.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(item.id)}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 active:scale-[0.98] ${
                      active
                        ? "border-volt/70 bg-volt/10"
                        : "border-white/10 bg-white/[0.02] hover:border-volt/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>
                      <span
                        className={`block text-sm font-semibold ${active ? "text-volt" : "text-zinc-100"}`}
                      >
                        {item.label}
                      </span>
                      <span className="block text-xs text-zinc-500">{item.note}</span>
                    </span>
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-md border transition-colors ${
                        active ? "border-volt bg-volt text-ink" : "border-white/20 text-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      <Check size={14} weight="bold" />
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Live summary */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-volt/25 bg-gradient-to-b from-volt/10 to-transparent p-7 lg:sticky lg:top-24">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-volt">
                <Lightning size={14} weight="fill" /> Your estimate
              </p>
              <div className="mt-5 flex min-h-[72px] items-end overflow-hidden">
                {picked.length === 0 ? (
                  <p className="text-base leading-relaxed text-zinc-500">
                    Pick a few services and your estimate appears here.
                  </p>
                ) : (
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.p
                      key={`${minTotal}-${maxTotal}`}
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display text-4xl font-semibold tracking-tight text-zinc-50"
                      aria-live="polite"
                    >
                      {fmtRange(minTotal, maxTotal)}
                    </motion.p>
                  </AnimatePresence>
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                Ballpark before we talk details. Final quote confirmed free of
                charge after a short chat.
              </p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-zinc-300">
                {picked.length === 0 ? (
                  <li className="text-zinc-600">Nothing selected yet</li>
                ) : (
                  picked.map((i) => (
                    <li key={i.id} className="flex items-center justify-between gap-4">
                      <span>{i.label}</span>
                      <span className="tabular-nums text-zinc-500">
                        {fmtRange(i.min, i.max)}
                      </span>
                    </li>
                  ))
                )}
              </ul>
              <a
                href={whatsappLink(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={picked.length === 0}
                className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:translate-y-px active:scale-[0.98] ${
                  picked.length === 0
                    ? "pointer-events-none border border-white/10 text-zinc-600"
                    : "bg-volt text-ink hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(200,241,105,0.25)]"
                }`}
              >
                Send this quote on WhatsApp
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(quoteMessage.replace(/^- /gm, "• "))}`}
                className="mt-4 text-center text-xs text-zinc-500 underline decoration-white/20 underline-offset-4 transition-colors hover:text-zinc-300"
              >
                Prefer email? Send instead
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
