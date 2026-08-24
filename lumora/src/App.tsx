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
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-volt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      {/* Small background animation — subtle volt orbs drifting */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 size-[520px] rounded-full bg-volt/[0.04] blur-[90px] animate-[drift_22s_ease-in-out_infinite]" />
        <div className="absolute top-[45%] -right-48 size-[640px] rounded-full bg-volt/[0.03] blur-[100px] animate-[drift2_28s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 left-[30%] size-[480px] rounded-full bg-white/[0.02] blur-[80px] animate-[drift_26s_ease-in-out_infinite_reverse]" />
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
