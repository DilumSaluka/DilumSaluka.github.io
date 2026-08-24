import { PROCESS_STEPS } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-y border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-panel/40 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <AnimatedHeading className="max-w-[26ch] font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Simple process. No surprises.
          </AnimatedHeading>
        </Reveal>

        <ol className="mt-14 divide-y divide-zinc-200 dark:divide-white/5 border-y border-zinc-200 dark:border-white/5">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.06}>
              <li className="group grid gap-2 py-8 transition-colors sm:grid-cols-[90px_240px_1fr] sm:items-baseline sm:gap-x-8">
                <span className="font-display text-2xl font-semibold tabular-nums text-zinc-400 dark:text-zinc-700 transition-colors duration-500 group-hover:text-volt">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {step.title}
                </h3>
                <p className="max-w-[60ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
