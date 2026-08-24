import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

type MiniSiteKey = "Café Kandy" | "Urban Fitness" | "Skyline Realty" | "Bloom Skincare" | "Northline Logistics" | "Chef Portfolio";

const SITE_LABELS: Record<MiniSiteKey, string> = {
  "Café Kandy": "BRAND IDENTITY",
  "Urban Fitness": "POSTER SERIES",
  "Skyline Realty": "PROPERTY WEBSITE",
  "Bloom Skincare": "LAUNCH WEBSITE",
  "Northline Logistics": "CORPORATE WEBSITE",
  "Chef Portfolio": "PORTFOLIO WEBSITE",
};

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-900">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-800/80 px-3 py-2">
        <span className="size-2 rounded-full bg-red-400/80" />
        <span className="size-2 rounded-full bg-yellow-400/80" />
        <span className="size-2 rounded-full bg-green-400/80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function MiniCafe() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-[#faf6f0] p-2.5 text-zinc-900">
        <div className="flex items-center justify-between text-[5px] font-bold tracking-[0.14em] text-zinc-500">
          <span>KANDY BREW</span>
          <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-[4px] text-white">ORDER</span>
        </div>
        <p className="mt-2 font-display text-[10px] font-bold leading-none tracking-tight">Good coffee,<br />good people.</p>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {[
            ["Espresso", "kandy-espresso", "photo-1510707577719-ae7c14805e3a"],
            ["Latte", "kandy-latte", "photo-1561047029-3000c68339ca"],
            ["Filter", "kandy-filter", "photo-1447933601403-0c6688de566e"],
          ].map(([n, , id]) => (
            <div key={n} className="rounded-md bg-white p-1.5 shadow-sm">
              <img
                src={`https://images.unsplash.com/${id}?w=160&h=100&fit=crop&q=70&auto=format`}
                alt=""
                width={160}
                height={100}
                loading="lazy"
                className="h-9 w-full rounded object-cover"
              />
              <p className="mt-1 text-[4px] font-bold">{n}</p>
              <p className="text-[3px] text-zinc-500">Rs. 650</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-md bg-amber-100 p-1.5">
          <span className="text-[6px]">☕</span>
          <p className="text-[4px] font-semibold text-amber-900">Today's special — Ceylon spice latte Rs. 550</p>
        </div>
        <div className="mt-auto flex items-center justify-between rounded-md bg-zinc-900 px-2 py-1 text-[4px] text-zinc-300">
          <span>Open 7AM — 9PM</span>
          <span className="text-white">Kandy · Colombo</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function MiniFitness() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-[#0f0f0f] p-2.5 text-white">
        <div className="flex items-center justify-between text-[5px] font-bold tracking-wide">
          <span>URBAN FIT</span>
          <span className="rounded-full bg-[#c8f169] px-1.5 py-0.5 text-[4px] font-bold text-black">JOIN NOW</span>
        </div>
        <p className="mt-2 font-display text-[11px] font-black leading-none">TRAIN<br /><span className="text-[#c8f169]">HARDER.</span></p>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center">
          {[
            ["12k", "Members"],
            ["24/7", "Open"],
            ["40+", "Classes"],
          ].map(([n, l]) => (
            <div key={n} className="rounded bg-white/10 px-1 py-1">
              <p className="text-[6px] font-black text-[#c8f169]">{n}</p>
              <p className="text-[3px] text-zinc-400">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-1">
          {["MON — Legs & Core", "TUE — HIIT Blast", "WED — Strength"].map((r) => (
            <div key={r} className="flex items-center justify-between rounded bg-white px-1.5 py-1 text-[4px] font-medium text-black">
              <span>{r}</span>
              <span className="text-zinc-500">6AM</span>
            </div>
          ))}
        </div>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=320&h=110&fit=crop&q=70&auto=format"
          alt=""
          width={320}
          height={110}
          loading="lazy"
          className="mt-auto h-10 w-full rounded object-cover"
        />
      </div>
    </BrowserChrome>
  );
}

function MiniRealty() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-white p-2.5 text-zinc-900">
        <div className="flex items-center justify-between">
          <span className="text-[5px] font-black tracking-tight">SKYLINE</span>
          <div className="flex items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-[4px] text-zinc-500">
            <span>Search by city</span>
            <span className="rounded-full bg-zinc-900 px-1 py-0.5 text-white">⌕</span>
          </div>
        </div>
        <div className="mt-2 flex gap-1 text-[4px]">
          <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-white">All</span>
          <span className="rounded-full bg-zinc-100 px-1.5 py-0.5">Houses</span>
          <span className="rounded-full bg-zinc-100 px-1.5 py-0.5">Apartments</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {[
            ["Rs. 42M", "Kandy Hills · 4bd", "photo-1568605114967-8130f3a36994"],
            ["Rs. 28M", "Colombo 07 · 3bd", "photo-1570129477492-45c003edd2be"],
            ["Rs. 19M", "Galle · 2bd", "photo-1564013799919-ab600027ffc6"],
            ["Rs. 55M", "Negombo · 5bd", "photo-1512917774080-9991f1c4c750"],
          ].map(([price, place, id]) => (
            <div key={place} className="overflow-hidden rounded-md border border-zinc-100">
              <img
                src={`https://images.unsplash.com/${id}?w=200&h=110&fit=crop&q=70&auto=format`}
                alt=""
                width={200}
                height={110}
                loading="lazy"
                className="h-11 w-full object-cover"
              />
              <div className="p-1">
                <p className="text-[4px] font-bold">{price}</p>
                <p className="text-[3px] text-zinc-500">{place}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between rounded-md bg-zinc-900 px-2 py-1 text-[4px] text-white">
          <span>1,200+ properties</span>
          <span className="rounded-full bg-[#c8f169] px-1.5 py-0.5 font-bold text-black">List yours</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function MiniSkincare() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-[#fdf2f4] p-2.5 text-zinc-900">
        <div className="flex items-center justify-between text-[5px] tracking-wide">
          <span className="font-display font-bold">BLOOM</span>
          <span className="text-[4px] text-zinc-500">Shop · About · Journal</span>
        </div>
        <p className="mt-2 font-display text-[9px] font-semibold leading-none">Skin that<br /><span className="font-normal italic">feels like you.</span></p>
        <div className="mt-2 flex gap-1">
          <div className="flex-1 rounded-md bg-white p-1.5 text-center shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=120&h=120&fit=crop&q=70&auto=format"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              className="mx-auto h-11 w-11 rounded-xl object-cover"
            />
            <p className="mt-1 text-[4px] font-bold">Glow Serum</p>
            <p className="text-[3px] text-zinc-500">Rs. 3,900</p>
          </div>
          <div className="flex-1 rounded-md bg-white p-1.5 text-center shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&h=120&fit=crop&q=70&auto=format"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              className="mx-auto h-11 w-11 rounded-xl object-cover"
            />
            <p className="mt-1 text-[4px] font-bold">Calm Cream</p>
            <p className="text-[3px] text-zinc-500">Rs. 2,800</p>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-white p-1.5 text-center shadow-sm">
          <p className="text-[5px] font-bold text-amber-500">★★★★★</p>
          <p className="text-[3.5px] text-zinc-500">"My skin has never felt better" — 2,300+ happy customers</p>
        </div>
        <div className="mt-auto rounded-full bg-zinc-900 px-2 py-1 text-center text-[4px] font-bold tracking-wide text-white">SHOP THE COLLECTION →</div>
      </div>
    </BrowserChrome>
  );
}

function MiniLogistics() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-[#f1f5f9] p-2.5 text-zinc-900">
        <div className="flex items-center justify-between text-[5px] font-bold">
          <span>NORTHLINE</span>
          <span className="text-zinc-500">Track · Services · Contact</span>
        </div>
        <div className="mt-2 rounded-md bg-zinc-900 p-2 text-white">
          <p className="text-[5px] font-bold">Track your shipment</p>
          <div className="mt-1 flex gap-1">
            <div className="flex-1 rounded bg-white px-1.5 py-1 text-[4px] text-zinc-400">Enter tracking number…</div>
            <div className="rounded bg-[#c8f169] px-2 py-1 text-[4px] font-bold text-black">Track</div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[4px]">
          {[
            ["24h", "Express"],
            ["48h", "Standard"],
            ["Global", "Freight"],
          ].map(([a, b]) => (
            <div key={b} className="rounded bg-white p-1 shadow-sm">
              <p className="font-bold text-blue-600">{a}</p>
              <p className="text-zinc-500">{b}</p>
            </div>
          ))}
        </div>
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=320&h=110&fit=crop&q=70&auto=format"
          alt=""
          width={320}
          height={110}
          loading="lazy"
          className="mt-auto h-10 w-full rounded object-cover"
        />
      </div>
    </BrowserChrome>
  );
}

function MiniChef() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-white p-2.5 text-zinc-900">
        <div className="flex gap-2">
          <img
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=120&h=120&fit=crop&q=70&auto=format"
            alt=""
            width={120}
            height={120}
            loading="lazy"
            className="size-8 rounded-full object-cover"
          />
          <div>
            <p className="text-[5px] font-bold">Nimal Perera</p>
            <p className="text-[3px] text-zinc-500">Executive Chef · 12 yrs · Colombo</p>
          </div>
          <span className="ml-auto rounded-full bg-zinc-900 px-1.5 py-0.5 text-[4px] font-bold text-white">Download CV</span>
        </div>
        <div className="mt-2 h-px bg-zinc-100" />
        <p className="mt-2 text-[4px] font-bold uppercase tracking-wide text-zinc-500">Experience</p>
        <div className="mt-1 space-y-1">
          {[
            ["2022–Now", "Head Chef — Cinnamon Grand"],
            ["2018–22", "Sous Chef — Galle Face Hotel"],
          ].map(([yr, role]) => (
            <div key={yr} className="flex gap-2 text-[4px]">
              <span className="w-10 shrink-0 font-bold text-zinc-500">{yr}</span>
              <span className="font-medium">{role}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1 text-[3px]">
          <span className="rounded-full bg-zinc-100 px-1.5 py-0.5">Sri Lankan</span>
          <span className="rounded-full bg-zinc-100 px-1.5 py-0.5">French</span>
          <span className="rounded-full bg-zinc-100 px-1.5 py-0.5">Pastry</span>
        </div>
        <div className="mt-auto flex items-center justify-between rounded-md bg-zinc-900 px-2 py-1 text-[4px] text-zinc-300">
          <span>Available for events</span>
          <span className="text-white">★ 4.9 rated</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

const MINIS: Record<MiniSiteKey, React.ReactNode> = {
  "Café Kandy": <MiniCafe />,
  "Urban Fitness": <MiniFitness />,
  "Skyline Realty": <MiniRealty />,
  "Bloom Skincare": <MiniSkincare />,
  "Northline Logistics": <MiniLogistics />,
  "Chef Portfolio": <MiniChef />,
};

const ORDER: MiniSiteKey[] = [
  "Café Kandy",
  "Urban Fitness",
  "Skyline Realty",
  "Bloom Skincare",
  "Northline Logistics",
  "Chef Portfolio",
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <AnimatedHeading className="max-w-[22ch] font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Work we're proud to show.
          </AnimatedHeading>
          <p className="max-w-[42ch] text-sm leading-relaxed text-zinc-500">
            Every piece below is a concept project — not commissioned work.
            Yours could be next in this row.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="scrollbar-none -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
            {ORDER.map((key) => (
              <article
                key={key}
                className="group w-[260px] shrink-0 snap-start sm:w-[300px]"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="aspect-[4/5] w-full bg-zinc-900">{MINIS[key]}</div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-volt">
                    {key}
                  </h3>
                  <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {SITE_LABELS[key]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
