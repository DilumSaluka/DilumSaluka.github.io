import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// React Bits — DotGrid background (Aceternity + React Bits style)
// Subtle volt dots that match VYN Labs branding
export function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.12] dot-grid"
    />
  );
}

// React Bits — DecryptedText (hacker reveal) — for logo / eyebrow
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

export function DecryptedText({
  text,
  speed = 35,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduce) return;
    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, idx) => {
            if (char === " " || char === "—" || char === "·") return char;
            if (idx < iteration) return text[idx]!;
            return CHARS[Math.floor(Math.random() * CHARS.length)]!;
          })
          .join(""),
      );
      if (iteration >= text.length) window.clearInterval(interval);
      iteration += 1 / 2;
    }, speed);
    return () => window.clearInterval(interval);
  }, [text, speed, reduce]);

  return <span className={className}>{display}</span>;
}
