import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

type Theme = "light" | "dark";

function getPreferred(): Theme {
  try {
    const stored = localStorage.getItem("vyn-theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  try {
    localStorage.setItem("vyn-theme", theme);
  } catch {}
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = getPreferred();
    setTheme(initial);
    apply(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`grid size-9 place-items-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
        theme === "dark"
          ? "border-white/15 bg-white/5 text-zinc-400 hover:border-volt/50 hover:text-volt"
          : "border-zinc-200 bg-zinc-100 text-zinc-600 hover:border-volt/50 hover:text-zinc-900"
      } ${className}`}
    >
      {theme === "dark" ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
    </button>
  );
}
