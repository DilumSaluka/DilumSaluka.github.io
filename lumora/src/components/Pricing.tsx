import { ArrowRight, CalendarCheck, Check, ShieldCheck } from "@phosphor-icons/react";
import { OTHER_PRICING, PACKAGES, whatsappLink } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header + launch availability */}
        <Reveal>
          <AnimatedHeading className="max-w-[30ch] font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Launch pricing while we build our first local portfolio — below
            standard market rates, real quality, no shortcuts.
          </AnimatedHeading>
          <p className="mt-4 flex items-center gap-2.5 text-sm font-medium text-zinc-300">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-volt opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-volt" />
            </span>
            Available for our first 5 clients
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-4 py-2 text-sm font-medium text-volt">
            <ShieldCheck size={16} weight="fill" />
            Every site includes a full security review — free.
          </p>
        </Reveal>

        {/* Website packages — 3 tiers: Making, Modernising, Custom */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PACKAGES.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
                  plan.popular
                    ? "border-volt/50 bg-gradient-to-b from-volt/12 to-transparent shadow-[0_20px_60px_rgba(200,241,105,0.08)]"
                    : plan.price === "Custom"
                      ? "border-white/10 bg-white/[0.02] hover:border-volt/30"
                      : "border-white/10 bg-panel hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-volt px-3 py-1 text-xs font-semibold text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-50">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.blurb}</p>

                {plan.marketRate ? (
                  <p className="mt-6 flex items-center gap-2.5">
                    <span className="text-sm text-zinc-500 line-through decoration-zinc-600">
                      {plan.marketRate}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-volt">
                      launch price
                    </span>
                  </p>
                ) : (
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-zinc-500">Tailored quote</p>
                )}
                <p className="mt-1.5 font-display text-4xl font-semibold tracking-tight text-zinc-50">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="ml-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                      {plan.unit}
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-sm text-zinc-400">{plan.recurring}</p>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-volt" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Hi VYN Labs! I'd like to start a project with the ${plan.name} package.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:translate-y-px active:scale-[0.98] ${
                    plan.popular
                      ? "bg-volt text-ink hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(200,241,105,0.25)]"
                      : "border border-white/15 text-zinc-100 hover:border-volt/50 hover:text-volt"
                  }`}
                >
                  {plan.price === "Custom" ? "Discuss your project" : "Start a project"}
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Hosting annual note */}
        <Reveal delay={0.1}>
          <p className="mt-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-zinc-300">
            <CalendarCheck size={17} className="shrink-0 text-volt" />
            Pay 12 months of hosting upfront, get 1 month free.
          </p>
        </Reveal>

        {/* Other services — every service gets 2 money + 1 custom */}
        <div className="mt-16 space-y-12">
          {OTHER_PRICING.map((group) => (
            <div key={group.category}>
              <Reveal>
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {group.category}
                </h3>
              </Reveal>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {group.packs.map((pack, j) => (
                  <Reveal key={pack.name} delay={(j % 3) * 0.06} className="h-full">
                    <article
                      className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                        pack.popular
                          ? "border-volt/40 bg-volt/[0.06]"
                          : pack.price.startsWith("Custom")
                            ? "border-white/10 bg-white/[0.02] hover:border-volt/30"
                            : "border-white/10 bg-panel hover:border-volt/30"
                      }`}
                    >
                      {pack.popular && (
                        <span className="mb-3 inline-flex w-fit rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                          Most popular
                        </span>
                      )}
                      <h4 className="font-display text-base font-semibold tracking-tight text-zinc-100">
                        {pack.name}
                      </h4>
                      <p className="mt-1 text-xs text-zinc-500">{pack.blurb}</p>
                      {pack.marketRate ? (
                        <p className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-zinc-500 line-through decoration-zinc-600">
                            {pack.marketRate}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wide text-volt">launch</span>
                        </p>
                      ) : (
                        !pack.price.startsWith("Custom") && (
                          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">launch price</p>
                        )
                      )}
                      <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-50">
                        {pack.price}
                        {!pack.price.startsWith("Custom") && !pack.price.startsWith("From") && (
                          <span className="ml-1.5 text-xs font-medium text-zinc-500">{pack.unit}</span>
                        )}
                      </p>
                      <p className="text-xs text-zinc-500">{pack.recurring}</p>
                      <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                        {pack.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                            <Check size={12} weight="bold" className="mt-0.5 shrink-0 text-volt" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={whatsappLink(`Hi VYN Labs! I'm interested in ${group.category} — ${pack.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 active:scale-95 ${
                          pack.popular
                            ? "bg-volt text-ink hover:shadow-[0_6px_20px_rgba(200,241,105,0.2)]"
                            : "border border-white/15 text-zinc-300 hover:border-volt/50 hover:text-volt"
                        }`}
                      >
                        {pack.price.startsWith("Custom") ? "Customised plan" : "Choose plan"}
                        <ArrowRight size={12} weight="bold" />
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estimator CTA */}
        <Reveal className="mt-12">
          <a
            href="#estimator"
            className="group flex items-center justify-between rounded-2xl border border-dashed border-volt/30 bg-volt/[0.04] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-volt/60"
          >
            <div>
              <p className="font-display text-base font-semibold tracking-tight text-zinc-100">
                Not sure what it costs?
              </p>
              <p className="mt-1 text-sm text-zinc-500">Build your own estimate in 30 seconds.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-volt">
              Open estimator <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
