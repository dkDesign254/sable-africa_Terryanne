const tiers = [
  {
    name: "Free",
    price: "£0",
    period: "/month",
    description: "Essential intelligence to stay informed.",
    features: [
      "Daily Brief email",
      "3 free articles per month",
      "Weekly market snapshot",
      "Public data access",
    ],
    cta: "Subscribe Free",
    featured: false,
  },
  {
    name: "Professional",
    price: "£49",
    period: "/month",
    description: "For the serious Africa market professional.",
    features: [
      "Full Daily Brief archive",
      "Unlimited articles & intelligence",
      "Dashboard access (live data)",
      "Weekly deep-dive reports",
      "Curated morning briefing",
      "PDF export of all reports",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    description: "For funds, governments, and multinationals.",
    features: [
      "Everything in Professional",
      "Priority bespoke research",
      "Dedicated analyst team",
      "API data feed access",
      "Private briefings & calls",
      "Multi-user dashboard",
      "Compliance-ready reports",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="subscribe" className="bg-light-grey py-20 dark:bg-sable-black/95 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">
            Plans & Pricing
          </p>
          <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
            Choose Your{" "}
            <span className="text-muted-gold">Intelligence Tier</span>
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
            From the daily briefing to full institutional intelligence. Every
            tier built for clarity, not noise.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="reveal grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative flex flex-col rounded-xl border p-8 ${
                tier.featured
                  ? "border-muted-gold/60 bg-slate-grey/10 dark:bg-sable-black"
                  : "border-muted-gold/10 bg-white dark:bg-slate-grey/10"
              }`}
            >
              <div>
                <h3
                  className={`font-heading text-lg font-semibold ${
                    tier.featured
                      ? "text-warm-ivory"
                      : "text-sable-black dark:text-warm-ivory"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`font-heading text-4xl font-bold ${
                      tier.featured
                        ? "text-muted-gold"
                        : "text-sable-black dark:text-warm-ivory"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`font-body text-sm ${
                        tier.featured
                          ? "text-warm-ivory/50"
                          : "text-slate-grey/50 dark:text-warm-ivory/50"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 font-body text-sm ${
                    tier.featured
                      ? "text-warm-ivory/50"
                      : "text-slate-grey/60 dark:text-warm-ivory/50"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 grow space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0 text-muted-gold"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      className={`font-body text-sm ${
                        tier.featured
                          ? "text-warm-ivory/70"
                          : "text-slate-grey/70 dark:text-warm-ivory/70"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`mt-8 block rounded-full py-3 text-center font-body text-xs font-semibold tracking-widest uppercase transition-all ${
                  tier.featured
                    ? "bg-muted-gold text-sable-black hover:bg-muted-gold/90"
                    : "border border-muted-gold/30 text-sable-black hover:bg-muted-gold/5 dark:text-warm-ivory dark:hover:bg-muted-gold/10"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal mt-10 text-center font-body text-xs text-slate-grey/40 dark:text-warm-ivory/30">
          All plans include access to the Sable Intelligence Assistant. Institutional
          pricing based on seat count and scope of engagement.
        </p>
      </div>
    </section>
  );
}