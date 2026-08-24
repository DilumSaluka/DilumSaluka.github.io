import { TICKER_ITEMS } from "../data";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item) => (
        <span key={`${item}-${hidden}`} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            {item}
          </span>
          <span aria-hidden="true" className="size-1 rounded-full bg-volt" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-panel/60 py-4">
      <div className="marquee-track flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
