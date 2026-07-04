const briefs = [
  {
    title: "East Africa: The $800 Billion Infrastructure Paradox",
    slug: "/brief/east-africa-infrastructure-paradox",
    excerpt:
      "As capital floods into East African infrastructure, the gap between projected returns and realised yields reveals a structural disconnect few are discussing openly.",
    category: "Infrastructure",
    readTime: "8 min read",
    author: "Akinwumi Adesina",
    date: "3 July 2026",
    gradient: "from-emerald-900/40 to-sable-black/90",
  },
  {
    title: "The Refinery That Could Rewire African Finance",
    slug: "/brief/the-refinery-that-could-rewire-african-finance",
    excerpt:
      "A single industrial project in Lagos is quietly reshaping how global energy traders price West African crude — and the implications for sovereign credit run deeper than the headlines.",
    category: "Energy Finance",
    readTime: "12 min read",
    author: "Ngozi Okonjo-Iweala",
    date: "2 July 2026",
    gradient: "from-amber-900/30 to-sable-black/90",
  },
  {
    title: "Signal from the Street: Nairobi's Informal Economy",
    slug: "/brief/signal-from-the-street",
    excerpt:
      "What mobile money data reveals about consumer confidence that formal surveys miss. A ground-level reading of Kenya's economic pulse.",
    category: "Market Intelligence",
    readTime: "6 min read",
    author: "Sable Research",
    date: "1 July 2026",
    gradient: "from-blue-900/30 to-sable-black/90",
  },
  {
    title: "The Great Recalibration: African Bond Markets in 2026",
    slug: "/brief/african-bond-markets-2026",
    excerpt:
      "After the Eurobond reset, a new wave of local-currency issuance is rewriting the rules of African sovereign debt. Who is positioned — and who is exposed.",
    category: "Sovereign Debt",
    readTime: "10 min read",
    author: "Sable Research",
    date: "30 June 2026",
    gradient: "from-purple-900/30 to-sable-black/90",
  },
];

export default function DailyBrief() {
  return (
    <section id="daily-brief" className="bg-warm-ivory py-20 dark:bg-sable-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">
              Daily Brief
            </p>
            <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
              Today's{" "}
              <span className="text-muted-gold">Essential Reading</span>
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
              Curated intelligence. No filler. Every briefing answers one
              question: what does this mean for capital allocation in Africa?
            </p>
          </div>
          <a
            href="#"
            className="font-body text-xs font-medium tracking-wider text-muted-gold transition-colors hover:text-muted-gold/70 uppercase"
          >
            View all briefs &rarr;
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Featured card - larger */}
          <div className="reveal md:col-span-2 md:grid md:grid-cols-2 md:gap-5">
            {briefs.slice(0, 2).map((brief) => (
              <a
                key={brief.title}
                href={brief.slug}
                className="newsletter-card group relative cursor-pointer overflow-hidden rounded-xl bg-sable-black"
                style={{ transitionDelay: "0.1s" }}
              >
                {/* Image placeholder */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brief.gradient}`}
                />
                <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full border border-muted-gold/20 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase">
                      {brief.category}
                    </span>
                    <span className="font-body text-[10px] text-warm-ivory/40">
                      {brief.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-warm-ivory transition-colors group-hover:text-muted-gold sm:text-2xl">
                    {brief.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-warm-ivory/60 line-clamp-2">
                    {brief.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-muted-gold/10 pt-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-xs font-semibold text-muted-gold">
                      {brief.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium text-warm-ivory/70">
                        {brief.author}
                      </p>
                      <p className="font-body text-[10px] text-warm-ivory/40">
                        {brief.date}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button className="rounded-full p-1.5 text-warm-ivory/30 transition-colors hover:text-muted-gold" aria-label="Save">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                        </svg>
                      </button>
                      <button className="rounded-full p-1.5 text-warm-ivory/30 transition-colors hover:text-muted-gold" aria-label="Share">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Secondary cards */}
          {briefs.slice(2).map((brief, i) => (
            <a
              key={brief.title}
              href={brief.slug}
              className="reveal newsletter-card group cursor-pointer rounded-xl border border-muted-gold/10 bg-white p-6 transition-all hover:border-muted-gold/30 dark:bg-slate-grey/10 dark:hover:border-muted-gold/30 sm:p-8"
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-muted-gold/20 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase">
                  {brief.category}
                </span>
                <span className="font-body text-[10px] text-slate-grey/40 dark:text-warm-ivory/40">
                  {brief.readTime}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug text-sable-black transition-colors group-hover:text-muted-gold dark:text-warm-ivory">
                {brief.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60 line-clamp-2">
                {brief.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-muted-gold/10 pt-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-[10px] font-semibold text-muted-gold">
                  {brief.author.charAt(0)}
                </div>
                <p className="font-body text-xs font-medium text-slate-grey/70 dark:text-warm-ivory/70">
                  {brief.author}
                </p>
                <p className="font-body text-[10px] text-slate-grey/40 dark:text-warm-ivory/40">
                  {brief.date}
                </p>
                <div className="ml-auto flex gap-2">
                  <button className="rounded-full p-1.5 text-slate-grey/30 transition-colors hover:text-muted-gold dark:text-warm-ivory/30" aria-label="Save">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                  </button>
                  <button className="rounded-full p-1.5 text-slate-grey/30 transition-colors hover:text-muted-gold dark:text-warm-ivory/30" aria-label="Share">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}