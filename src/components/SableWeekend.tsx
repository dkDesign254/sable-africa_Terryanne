const items = [
  {
    title: "48 Hours in Kigali",
    slug: "/weekend/48-hours-in-kigali",
    subtitle:
      "The Rwandan capital is quietly building Africa's most functional city. A walking guide to the corridors of power, innovation, and quiet ambition.",
    category: "City Profile",
    readTime: "8 min read",
    gradient: "from-emerald-800/40 via-slate-800/30 to-sable-black",
  },
  {
    title: "The Electric Hum of Curious People",
    slug: "/weekend/electric-hum-of-curious-people",
    subtitle:
      "Inside Accra's new creative economy — where fashion, fintech, and philosophy collide in ways that are reshaping West Africa's cultural export model.",
    category: "Culture & Leadership",
    readTime: "10 min read",
    gradient: "from-amber-800/30 via-slate-800/30 to-sable-black",
  },
  {
    title: "The Library of Lost Fortunes",
    slug: "/weekend/library-of-lost-fortunes",
    subtitle:
      "A meditation on what Africa's abandoned colonial archives reveal about the continent's relationship with capital, memory, and the future of its financial architecture.",
    category: "Essays",
    readTime: "6 min read",
    gradient: "from-stone-800/40 via-slate-800/30 to-sable-black",
  },
];

export default function SableWeekend() {
  return (
    <section id="weekend" className="bg-warm-ivory py-20 dark:bg-sable-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">
              Weekend Edition
            </p>
            <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
              Sable{" "}
              <span className="text-muted-gold">Weekend</span>
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
              The intersection of power, culture, and ideas across Africa. For
              the reader who understands that markets are shaped by more than
              spreadsheets.
            </p>
          </div>
          <a
            href="#"
            className="font-body text-xs font-medium tracking-wider text-muted-gold transition-colors hover:text-muted-gold/70 uppercase"
          >
            All weekend reads &rarr;
          </a>
        </div>

        {/* Grid - Monocle/FT Weekend inspired */}
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <a
              key={item.title}
              href={item.slug}
              className="reveal group cursor-pointer overflow-hidden rounded-xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image area */}
              <div
                className={`relative h-52 overflow-hidden bg-gradient-to-br ${item.gradient} sm:h-60`}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-muted-gold">
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                {/* Category badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-black/40 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="border-x border-b border-muted-gold/10 bg-white p-5 dark:bg-slate-grey/10 sm:p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-body text-[10px] text-muted-gold/60">{item.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-sable-black transition-colors group-hover:text-muted-gold dark:text-warm-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60 line-clamp-3">
                  {item.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-1 text-muted-gold">
                  <span className="font-body text-[11px] font-medium tracking-wider uppercase">
                    Read
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}