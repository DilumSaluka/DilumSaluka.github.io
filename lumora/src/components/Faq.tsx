import { Plus } from "@phosphor-icons/react";
import { FAQS } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <AnimatedHeading className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Questions people ask.
          </AnimatedHeading>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-zinc-400">
            Something else on your mind? Message us on WhatsApp — we answer
            fast.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {FAQS.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-lg font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-volt">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    weight="bold"
                    className="shrink-0 text-zinc-500 transition-transform duration-300 group-open:rotate-45 group-hover:text-volt"
                  />
                </summary>
                <p className="faq-body max-w-[65ch] pb-6 text-sm leading-relaxed text-zinc-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
