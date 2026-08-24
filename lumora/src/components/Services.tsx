import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { Service } from "../data";
import { SERVICES } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

function Cell({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon;
  const span =
    service.span === "tall"
      ? "md:col-span-2 md:row-span-2"
      : service.span === "wide"
        ? "md:col-span-2"
        : "";

  const tone =
    service.tone === "volt"
      ? "border-volt/30 dark:border-volt/25 bg-volt/10 dark:bg-gradient-to-br dark:from-volt/12 dark:to-transparent"
      : service.tone === "soft"
        ? "border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.04]"
        : "border-zinc-200 dark:border-white/10 bg-white dark:bg-panel";

  // Cursor spotlight: a soft volt glow follows the pointer across the card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(200, 241, 105, 0.09), transparent 70%)`;

  const trackPointer = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <Reveal delay={delay} className={span}>
      <article
        onMouseMove={trackPointer}
        className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-volt/40 ${tone}`}
      >
        {service.tone === "image" && service.image && (
          <>
            <img
              src={service.image}
              alt=""
              width={900}
              height={1100}
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-20 grayscale transition-opacity duration-700 group-hover:opacity-30"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent"
            />
          </>
        )}
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative z-10 flex h-full flex-col">
          <span className="grid size-11 place-items-center rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-volt transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:border-volt/40">
            <Icon size={22} />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors duration-300 group-hover:text-volt">
            {service.title}
          </h3>
          <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {service.description}
          </p>
          {service.chips && (
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {service.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-zinc-300 dark:border-white/15 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:border-volt/30"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <AnimatedHeading
            className="max-w-[26ch] font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl"
          >
            One studio. Every service your brand needs.
          </AnimatedHeading>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            From your first logo to monthly marketing — everything works
            together because one team makes it all.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-min lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Cell key={s.title} service={s} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
