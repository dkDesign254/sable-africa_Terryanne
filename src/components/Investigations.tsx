const investigations = [
  {
    title: "The Dangote Effect: How One Refinery Reshaped Global Energy Flows",
    slug: "/investigations/dangote-effect-refinery",
    excerpt:
      "An investigation into the $25 billion bet that is rewriting West African energy economics, challenging European refineries, and creating a new axis of African industrial power.",
    category: "Energy",
    readTime: "18 min read",
    gradient: "from-amber-800/50 via-slate-900/60 to-sable-black",
    region: "Lagos, Nigeria",
  },
  {
    title: "Inside the Great Ethiopian Dam Negotiations",
    slug: "/investigations/great-ethiopian-dam-negotiations",
    excerpt:
      "What the diplomacy around Africa's largest hydroelectric project reveals about the continent's new geopolitical playbook — and who holds the leverage.",
    category: "Geopolitics",
    readTime: "14 min read",
    gradient: "from-blue-800/50 via-slate-900/60 to-sable-black",
    region: "Addis Ababa, Ethiopia",
  },
];

export default function Investigations() {
  return (
    <section id="investigations" className="bg-light-grey py-20 dark:bg-sable-black/95 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14 max-w-2xl">
          <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">
            Longform
          </p>
          <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="text-muted-gold">Investigations</span>
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
            Deep-dive reporting that goes beneath the surface of Africa's
            defining economic stories. Rigorous. Original. Indispensable.
          </p>
        </div>

        {/* Magazine-style layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {investigations.map((inv, i) => (
            <a
              key={inv.title}
              href={inv.slug}
              className="reveal group relative cursor-pointer overflow-hidden rounded-xl"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${inv.gradient}`}
              />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(181,154,93,0.08),transparent_50%)]" />

              <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-8 sm:p-10">
                {/* Region badge */}
                <div className="mb-auto">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-muted-gold/20 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold/80 uppercase backdrop-blur-sm">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {inv.region}
                  </span>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-muted-gold/20 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase backdrop-blur-sm">
                      {inv.category}
                    </span>
                    <span className="font-body text-[10px] text-warm-ivory/50">
                      {inv.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold leading-tight text-warm-ivory transition-colors group-hover:text-muted-gold sm:text-3xl">
                    {inv.title}
                  </h3>
                  <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-warm-ivory/60">
                    {inv.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-muted-gold">
                    <span className="font-body text-xs font-medium tracking-wider uppercase">
                      Read Investigation
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}