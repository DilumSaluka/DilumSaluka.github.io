import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { ChatWidget } from "./components/ChatWidget";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Services } from "./components/Services";
import { Estimator } from "./components/Estimator";
import { Work } from "./components/Work";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = document.getElementById("vyn-particles");
    if (!container) return;
    const interval = window.setInterval(() => {
      if (container.childElementCount > 18) return;
      const p = document.createElement("div");
      p.className = "particle";
      const size = 2 + Math.random() * 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = Math.random() > 0.5 ? "rgba(200,241,105,0.55)" : "rgba(255,255,255,0.32)";
      p.style.animationDuration = `${9 + Math.random() * 9}s`;
      p.style.animationDelay = `${Math.random() * 1.5}s`;
      container.appendChild(p);
      window.setTimeout(() => p.remove(), 18000);
    }, 500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-volt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      {/* Portfolio-style background — blobs + particles (like dilumsaluka.github.io) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -top-40 -left-48 h-[520px] w-[520px] bg-volt" />
        <div className="blob absolute -bottom-40 -right-48 h-[560px] w-[560px] bg-volt" style={{ animationDelay: "2s" }} />
        <div className="blob absolute left-1/2 top-[40%] h-[380px] w-[380px] -translate-x-1/2 bg-white" style={{ animationDelay: "4s" }} />
        <div id="vyn-particles" className="absolute inset-0" />
      </div>
      <Nav />
      <ScrollProgress />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Pricing />
        <Estimator />
        <Work />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
