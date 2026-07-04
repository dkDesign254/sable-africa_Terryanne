export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-sable-black lg:min-h-screen">
      {/* Animated network background */}
      <div className="hero-network">
        <svg
          className="h-full w-full opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Signal lines */}
          <line x1="100" y1="200" x2="400" y2="350" className="signal-line" />
          <line x1="400" y1="350" x2="700" y2="250" className="signal-line" style={{ animationDelay: "0.5s" }} />
          <line x1="700" y1="250" x2="1100" y2="400" className="signal-line" style={{ animationDelay: "1s" }} />
          <line x1="1100" y1="400" x2="1340" y2="300" className="signal-line" style={{ animationDelay: "1.5s" }} />
          <line x1="200" y1="550" x2="500" y2="450" className="signal-line" style={{ animationDelay: "0.8s" }} />
          <line x1="500" y1="450" x2="900" y2="600" className="signal-line" style={{ animationDelay: "1.2s" }} />
          <line x1="900" y1="600" x2="1300" y2="500" className="signal-line" style={{ animationDelay: "1.8s" }} />
          <line x1="300" y1="700" x2="600" y2="650" className="signal-line" style={{ animationDelay: "0.3s" }} />
          <line x1="600" y1="650" x2="1000" y2="750" className="signal-line" style={{ animationDelay: "0.7s" }} />
          <line x1="1000" y1="750" x2="1350" y2="650" className="signal-line" style={{ animationDelay: "1.4s" }} />

          {/* Nodes */}
          {[
            [100, 200], [400, 350], [700, 250], [1100, 400], [1340, 300],
            [200, 550], [500, 450], [900, 600], [1300, 500],
            [300, 700], [600, 650], [1000, 750], [1350, 650],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill="#B59A5D"
              className="animate-pulse-dot"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}

          {/* Continent outline (simplified Africa) */}
          <path
            d="M720 400 Q740 380 760 370 Q800 360 820 380 Q850 400 840 430 Q830 460 810 480 Q790 500 770 520 Q750 540 730 560 Q710 570 690 560 Q670 540 660 510 Q650 480 660 450 Q670 420 690 410 Q710 400 720 400Z"
            fill="none"
            stroke="#B59A5D"
            strokeWidth="0.8"
            opacity="0.15"
            className="animate-data-pulse"
          />

          {/* Data signal dots tracking across continent */}
          <circle cx="720" cy="440" r="2" fill="#B59A5D" className="animate-data-pulse" style={{ animationDelay: "0.2s" }} />
          <circle cx="760" cy="410" r="1.5" fill="#B59A5D" className="animate-data-pulse" style={{ animationDelay: "0.7s" }} />
          <circle cx="700" cy="500" r="2" fill="#B59A5D" className="animate-data-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="780" cy="450" r="1.5" fill="#B59A5D" className="animate-data-pulse" style={{ animationDelay: "1.3s" }} />
        </svg>

        {/* Gradient overlays for edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-sable-black/70 via-transparent to-sable-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-sable-black/50 via-transparent to-sable-black/90" />
      </div>

      {/* Data indicators overlay top-right */}
      <div className="absolute right-6 top-24 z-10 hidden space-y-2 md:block lg:right-10">
        {[
          { label: "NGX ALL SHARE", value: "102,453.21", change: "+0.84%", positive: true },
          { label: "USD/KES", value: "148.72", change: "-0.12%", positive: false },
          { label: "BRENT CRUDE", value: "$82.41", change: "+1.23%", positive: true },
        ].map((d, i) => (
          <div
            key={d.label}
            className="animate-fade-in data-indicator flex items-center gap-3 rounded border border-muted-gold/10 bg-black/40 px-4 py-2.5 backdrop-blur-sm"
            style={{ animationDelay: `${0.5 + i * 0.2}s`, opacity: 0 }}
          >
            <span className="text-muted-gold/60">{d.label}</span>
            <span className="text-warm-ivory font-medium">{d.value}</span>
            <span className={d.positive ? "text-emerald-400" : "text-red-400"}>
              {d.change}
            </span>
          </div>
        ))}
      </div>

      {/* Data indicators overlay bottom-left */}
      <div className="absolute bottom-24 left-6 z-10 hidden space-y-2 md:block lg:left-10">
        {[
          { label: "AFRICA GDP GROWTH", value: "3.8%", sub: "2026 Projected" },
          { label: "INTRA-AFRICA TRADE", value: "$91.2B", sub: "Q2 2026" },
        ].map((d, i) => (
          <div
            key={d.label}
            className="animate-slide-left data-indicator flex items-center gap-3 rounded border border-muted-gold/10 bg-black/40 px-4 py-2.5 backdrop-blur-sm"
            style={{ animationDelay: `${0.8 + i * 0.3}s`, opacity: 0 }}
          >
            <span className="text-muted-gold/60">{d.label}</span>
            <span className="text-warm-ivory font-medium">{d.value}</span>
            <span className="text-muted-gold/40 text-[10px]">{d.sub}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Gold line */}
          <div className="gold-line-wide mb-8" />

          {/* Eyebrow */}
          <p className="animate-fade-in mb-4 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Sable Africa Intelligence
          </p>

          {/* Main heading */}
          <h1 className="animate-fade-in-up mb-6 font-heading text-5xl font-bold leading-tight text-warm-ivory sm:text-6xl lg:text-7xl xl:text-8xl" style={{ animationDelay: "0.3s", opacity: 0 }}>
            The Architecture of{" "}
            <span className="text-muted-gold">African Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up mb-10 max-w-xl font-body text-base leading-relaxed text-warm-ivory/60 sm:text-lg" style={{ animationDelay: "0.5s", opacity: 0 }}>
            The definitive intelligence infrastructure for global capital
            allocators. Structural clarity on African markets, delivered with
            veteran newsroom rigour and strategic theory.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up flex flex-wrap gap-4" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <a
              href="#newsletter"
              className="rounded-full bg-muted-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90 hover:scale-[1.03] active:scale-[0.98]"
            >
              Subscribe to Daily Brief
            </a>
            <a
              href="#intelligence"
              className="rounded-full border border-muted-gold/30 px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black dark:text-warm-ivory uppercase transition-all hover:border-muted-gold/60 hover:bg-muted-gold/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Intelligence
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] font-medium tracking-[0.2em] text-muted-gold/40 uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="#B59A5D" strokeWidth="1.2" opacity="0.4">
            <rect x="1.5" y="1.5" width="13" height="21" rx="6.5" />
            <circle cx="8" cy="8" r="1.5" fill="#B59A5D">
              <animate attributeName="cy" values="7;11;7" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}