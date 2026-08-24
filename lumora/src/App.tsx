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
