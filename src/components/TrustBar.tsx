const logos = [
  "Bloomberg",
  "CNBC Africa",
  "Reuters",
  "Financial Times",
  "AfDB",
  "World Bank",
  "The Economist",
  "McKinsey",
];

const stats = [
  { value: "123K+", label: "Readers" },
  { value: "12", label: "Markets Tracked" },
  { value: "Daily", label: "Intelligence Briefings" },
  { value: "Institutional", label: "Grade Reporting" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-muted-gold/10 bg-sable-black/5 dark:bg-warm-ivory/5">
      {/* Stats row */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="font-heading text-2xl font-bold text-sable-black dark:text-warm-ivory md:text-3xl">
                {s.value}
              </div>
              <div className="font-body text-xs font-medium tracking-wider text-muted-gold/70 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Marquee */}
        <p className="mb-4 text-center font-body text-[10px] font-medium tracking-[0.25em] text-muted-gold/50 uppercase">
          Trusted by decision-makers at
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {/* First copy */}
            <div className="flex items-center gap-12 px-6">
              {logos.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 font-heading text-sm font-semibold tracking-wide text-slate-grey/30 dark:text-warm-ivory/20"
                >
                  {/* Simple icon placeholder */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-gold/30">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {name}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-12 px-6">
              {logos.map((name) => (
                <div
                  key={`dup-${name}`}
                  className="flex items-center gap-3 font-heading text-sm font-semibold tracking-wide text-slate-grey/30 dark:text-warm-ivory/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-gold/30">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}