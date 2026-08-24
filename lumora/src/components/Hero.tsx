import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Back card drifts slower than the front card — subtle depth on scroll
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const enter = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 32 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden">
      {/* Grid pattern — Aceternity style */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      {/* Ambient glow, tinted to accent — no purple */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #c8f169 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid min-h-[100dvh] max-w-[1200px] items-center gap-14 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-20">
        {/* Copy */}
        <div>
          <motion.p
            {...enter(0)}
            className="font-display text-xs font-medium uppercase tracking-[0.22em] text-zinc-500"
          >
            Web design — AI content — Automation
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
          >
            We make small businesses look{" "}
            <em className="shiny-volt pb-1 leading-[1.1] not-italic">
              world-class
            </em>{" "}
            online.
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mt-6 max-w-[52ch] text-lg leading-relaxed text-zinc-400"
          >
            Modern websites, AI videos, logos and digital marketing — one
            studio handles it all, start to finish.
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink btn-shine transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(200,241,105,0.25)] active:translate-y-px active:scale-[0.98]"
            >
              Start a project
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-px hover:border-volt/50 hover:text-volt active:translate-y-px active:scale-[0.98]"
            >
              Explore services
              <ArrowDown size={16} weight="bold" />
            </a>
          </motion.div>
        </div>

        {/* Visual composition */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:h-[520px]"
        >
          <motion.figure
            style={reduce ? undefined : { y: yBack }}
            className="absolute left-0 top-6 w-[68%] rotate-[-4deg] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-[-2deg]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=720&h=900&fit=crop&q=80&auto=format"
              alt="Modern website displayed on a laptop in a bright studio workspace"
              width={720}
              height={900}
              fetchPriority="high"
              loading="eager"
              className="aspect-[4/5] w-full object-cover grayscale-[18%]"
            />
          </motion.figure>
          <motion.figure
            style={reduce ? undefined : { y: yFront }}
            className="absolute bottom-0 right-0 w-[58%] rotate-[3deg] overflow-hidden rounded-2xl border border-volt/30 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-[1.5deg]"
          >
            <img
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=680&h=850&fit=crop&q=80&auto=format"
              alt="Clean dashboard and brand design system on screen"
              width={680}
              height={850}
              loading="eager"
              className="aspect-[4/5] w-full object-cover grayscale-[12%]"
            />
          </motion.figure>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 right-[38%] z-10 rotate-[-2deg] rounded-xl bg-volt px-4 py-2 font-display text-sm font-semibold text-ink shadow-[0_12px_32px_rgba(200,241,105,0.3)]"
          >
            Delivered in days, not months
          </div>
        </motion.div>
      </div>
    </section>
  );
}
