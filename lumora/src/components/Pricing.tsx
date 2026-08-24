import { ArrowRight, CalendarCheck, Check, Clock, ShieldCheck } from "@phosphor-icons/react";
import { ADD_ONS, COMING_SOON, PACKAGES, whatsappLink } from "../data";
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

        {/* Part A — website packages */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {PACKAGES.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
                  plan.popular
                    ? "border-volt/50 bg-gradient-to-b from-volt/12 to-transparent shadow-[0_20px_60px_rgba(200,241,105,0.08)]"
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

                <p className="mt-6 flex items-center gap-2.5">
                  <span className="text-sm text-zinc-500 line-through decoration-zinc-600">
                    {plan.marketRate}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-volt">
                    launch price
                  </span>
                </p>
                <p className="mt-1.5 font-display text-4xl font-semibold tracking-tight text-zinc-50">
                  {plan.price}
                  <span className="ml-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {plan.unit}
                  </span>
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
                  Start a project
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

        {/* Part B — add-ons */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-50">
            Add-on services
          </h3>
          <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-zinc-500">
            À la carte — mix these into any package or take them on their own.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ADD_ONS.map((addon, i) => (
            <Reveal key={addon.name} delay={(i % 3) * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-volt/30">
                <h4 className="font-display text-base font-semibold tracking-tight text-zinc-100">
                  {addon.name}
                </h4>
                <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  {addon.marketRate && (
                    <span className="text-xs text-zinc-500 line-through decoration-zinc-600">
                      {addon.marketRate}
                    </span>
                  )}
                  <span className="font-display text-xl font-semibold tracking-tight text-volt">
                    {addon.price}
                  </span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{addon.note}</p>
              </article>
            </Reveal>
          ))}

          {/* Fills the 6th cell of the 3-col grid */}
          <Reveal delay={0.12} className="h-full">
            <a
              href="#estimator"
              className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-volt/30 bg-volt/[0.04] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-volt/60"
            >
              <p className="font-display text-base font-semibold tracking-tight text-zinc-100">
                Not sure what it costs?
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-volt">
                Build your own estimate
                <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </a>
          </Reveal>
        </div>

        {/* Part C — coming soon */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 sm:p-7">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <Clock size={15} />
              Coming soon
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {COMING_SOON.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-[60ch] text-xs leading-relaxed text-zinc-600">
              We only launch services we've tested ourselves — these open up
              once our first pilot clients are through them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
