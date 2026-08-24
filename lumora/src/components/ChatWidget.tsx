import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp, ChatCircleDots, PaperPlaneTilt, X } from "@phosphor-icons/react";

type Message = { from: "bot" | "user"; text: string };

const GREETING =
  "Hi 👋 Welcome to VYN Labs. How can I help you today?";

const QUICK_CHIPS = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does a project take?",
  "Can you build AI chatbots?",
];

// Simple keyword-matched demo assistant — no backend needed
const KNOWLEDGE: { keys: string[]; reply: string }[] = [
  {
    keys: ["service", "offer", "do you do", "what can"],
    reply:
      "We design websites, AI videos & posters, logos, CVs, and we run hosting, security and digital marketing. We also build AI chatbots and automations. Which one are you curious about?",
  },
  {
    keys: ["cost", "price", "much", "rate", "budget", "lkr", "rs", "cheap"],
    reply:
      "Launch pricing right now: websites from LKR 5,000 (+ LKR 1,000/month hosting & care). Add-ons — logos LKR 7,000, posters LKR 4,000, CVs LKR 3,000. Try the estimator on this page for an instant total!",
  },
  {
    keys: ["long", "time", "take", "fast", "when", "deadline"],
    reply:
      "Most websites go live in 5–14 days. We agree on the date before starting — and we hit it.",
  },
  {
    keys: ["chatbot", "bot", "automation", "ai ", "automate"],
    reply:
      "Yes! We build support bots, lead-capture assistants and workflow automations — I'm a live example 😊 Ask us for a custom demo.",
  },
  {
    keys: ["hosting", "domain", "ssl", "secure", "server"],
    reply:
      "We handle fast, secure hosting with SSL, backups and monitoring — fully managed, no jargon.",
  },
  {
    keys: ["logo", "brand", "poster", "flyer", "cv", "video", "design"],
    reply:
      "Yep — logos & brand kits, posters & flyers, AI videos and CV design. All delivered with source files you own 100%.",
  },
  {
    keys: ["contact", "whatsapp", "call", "talk", "human", "email"],
    reply:
      "Fastest way is WhatsApp — tap 'Start a project' or the contact section below and your message comes straight to us. We reply within one business day.",
  },
];

const FALLBACK =
  "Great question! For anything specific, message us on WhatsApp via the contact form below — we answer within one business day. Meanwhile, try one of the quick questions below.";

function botReply(input: string): string {
  const text = input.toLowerCase();
  const hit = KNOWLEDGE.find((entry) => entry.keys.some((k) => text.includes(k)));
  return hit ? hit.reply : FALLBACK;
}

export function ChatWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: GREETING },
  ]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setDraft("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: botReply(text) }]);
      setTyping(false);
    }, 800);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    send(draft);
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.section
            aria-label="VYN Assistant chat"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[92px] right-4 z-50 flex max-h-[min(560px,72dvh)] w-[min(92vw,370px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_24px_70px_rgba(0,0,0,0.55)] sm:right-6"
          >
            <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-volt text-ink">
                <svg viewBox="0 0 48 48" aria-hidden="true" className="size-5">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 8h12l7 22 7-22h8L35 44h-8L16 20 12 32z M36.5 18a3.2 3.2 0 1 0 0 .01z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-zinc-50">VYN Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
            </header>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "rounded-xl rounded-tl-sm bg-white/[0.06] text-zinc-200"
                      : "ml-auto rounded-xl rounded-tr-sm bg-volt font-medium text-ink"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="flex w-16 items-center justify-center gap-1 rounded-xl rounded-tl-sm bg-white/[0.06] px-3 py-3" aria-label="Assistant is typing">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-bounce rounded-full bg-zinc-400"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 px-4 py-3">
              <form onSubmit={submit} className="flex items-center gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your message..."
                  aria-label="Type your message"
                  className="w-full bg-transparent py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-volt text-ink transition-all duration-300 hover:-translate-y-px active:translate-y-px active:scale-95"
                >
                  <PaperPlaneTilt size={16} weight="fill" />
                </button>
              </form>
              <div className="mt-2.5 flex flex-wrap gap-1.5 pb-0.5">
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => send(chip)}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] leading-tight text-zinc-400 transition-colors duration-300 hover:border-volt/50 hover:text-volt"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Floating action buttons */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
        <button
          type="button"
          title="Back to top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-panel/90 text-zinc-300 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-volt/60 hover:text-volt active:translate-y-0 active:scale-95"
        >
          <ArrowUp size={18} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close chat" : "Chat with VYN Assistant"}
          className="btn-shine grid size-14 place-items-center rounded-full bg-volt text-ink shadow-[0_12px_36px_rgba(200,241,105,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          {open ? <X size={22} weight="bold" /> : <ChatCircleDots size={24} weight="fill" />}
        </button>
      </div>
    </>
  );
}
