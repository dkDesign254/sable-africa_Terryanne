const cards = [
  {
    title: "Market Heat Map",
    subtitle: "Equity performance across African exchanges",
    data: [
      { market: "NGX (Nigeria)", value: "+2.41%", positive: true },
      { market: "JSE (South Africa)", value: "+0.87%", positive: true },
      { market: "NSE (Kenya)", value: "-0.32%", positive: false },
      { market: "GSE (Ghana)", value: "+1.15%", positive: true },
      { market: "BSE (Botswana)", value: "+0.43%", positive: true },
    ],
  },
  {
    title: "Currency Monitor",
    subtitle: "African currency movement vs. USD",
    data: [
      { market: "USD/ZAR", value: "18.24", change: "-0.41%", note: "Rand strengthens" },
      { market: "USD/NGN", value: "1,542.00", change: "+0.12%", note: "Naira stable" },
      { market: "USD/KES", value: "148.72", change: "-0.08%", note: "Shilling firm" },
      { market: "USD/EGP", value: "48.35", change: "+0.03%", note: "Pound steady" },
      { market: "USD/GHS", value: "14.92", change: "+0.67%", note: "Cedi under pressure" },
    ],
  },
  {
    title: "Regional Trends",
    subtitle: "Key developments by region",
    data: [
      { market: "East Africa", value: "Infrastructure", change: "Boom", note: "+8.2% growth" },
      { market: "West Africa", value: "Fintech", change: "Surge", note: "42% adoption" },
      { market: "Southern Africa", value: "Mining", change: "Recovery", note: "Commodity upswing" },
      { market: "North Africa", value: "Energy", change: "Expansion", note: "New discoveries" },
      { market: "Central Africa", value: "Logistics", change: "Growth", note: "Trade corridor" },
    ],
  },
  {
    title: "Commodity Signals",
    subtitle: "African commodity price movements",
    data: [
      { market: "Brent Crude", value: "$82.41/bbl", change: "+1.23%", note: "" },
      { market: "Gold", value: "$2,348/oz", change: "+0.56%", note: "" },
      { market: "Copper", value: "$9,847/t", change: "-0.32%", note: "" },
      { market: "Cocoa", value: "$7,412/t", change: "+2.14%", note: "" },
      { market: "Cobalt", value: "$28,450/t", change: "+0.78%", note: "" },
    ],
  },
];

export default function Dashboard() {
  return (
    <section id="intelligence" className="bg-slate-grey/5 py-20 dark:bg-sable-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14 max-w-2xl">
          <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">
            Live Intelligence
          </p>
          <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
            Africa Intelligence{" "}
            <span className="text-muted-gold">Dashboard</span>
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
            Real-time market signals across the continent. Curated for the
            institutional reader who needs the signal, not the noise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal dashboard-card p-5 sm:p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-base font-semibold text-warm-ivory sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs text-muted-gold/50">
                    {card.subtitle}
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              </div>

              {/* Data rows */}
              <div className="space-y-2">
                {card.data.map((row) => (
                  <div
                    key={row.market}
                    className="flex items-center justify-between border-b border-muted-gold/5 py-2 last:border-0"
                  >
                    <span className="data-indicator text-xs text-muted-gold/60">
                      {row.market}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="data-indicator text-xs font-medium text-warm-ivory">
                        {row.value}
                      </span>
                      {(row as any).change && (
                        <span
                          className={`data-indicator text-[10px] ${
                            (row as any).positive !== false
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {(row as any).change}
                        </span>
                      )}
                      {(row as any).note && (
                        <span className="data-indicator text-[10px] text-muted-gold/40">
                          {(row as any).note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="reveal mt-8 text-center font-body text-[10px] tracking-[0.15em] text-muted-gold/30 uppercase">
          Data delayed by 15 minutes &bull; For institutional use only
        </p>
      </div>
    </section>
  );
}