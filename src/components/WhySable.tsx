export default function WhySable() {
  return (
    <section id="about" className="relative overflow-hidden bg-sable-black/5 py-20 dark:bg-sable-black lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #B59A5D 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Gold line */}
          <div className="reveal gold-line-wide mb-8" />

          <p className="reveal mb-4 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase" style={{ transitionDelay: "0.1s" }}>
            Why Sable Exists
          </p>

          <h2 className="reveal font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.15s" }}>
            Twenty Years in the Rooms Where African Economic Decisions{" "}
            <span className="text-muted-gold">Are Made</span>
          </h2>

          <div className="reveal mt-10 space-y-6 font-body text-base leading-relaxed text-slate-grey/70 dark:text-warm-ivory/60 sm:text-lg" style={{ transitionDelay: "0.2s" }}>
            <p>
              After two decades inside Africa's most consequential economic
              negotiations — from sovereign debt restructurings to
              continent-defining infrastructure deals — we recognised a
              persistent failure in the market.
            </p>
            <p>
              The signal was buried. The intelligence that moved capital was
              fragmented across diplomatic cables, analyst notes, regulatory
              filings, and whispered briefings in hotel lobbies from Nairobi to
              London. There was no single infrastructure delivering structural
              clarity.
            </p>
            <p>
              Sable Africa was built to fill that gap. We combine veteran
              newsroom rigour with strategic economic theory — not to report
              the news, but to map the momentum of what we believe will be the
              African Economic Century.
            </p>
          </div>

          {/* Signature block */}
          <div className="reveal mt-12 border-t border-muted-gold/10 pt-8" style={{ transitionDelay: "0.3s" }}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted-gold/20">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" className="text-muted-gold">
                  <path d="M16 4L4 16l12 12 12-12L16 4z" />
                  <path d="M16 8l-6 6 6 6 6-6-6-6z" opacity="0.3" />
                  <circle cx="16" cy="14" r="2" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-sable-black dark:text-warm-ivory">
                  Founding Team
                </p>
                <p className="font-body text-sm text-muted-gold/60">
                  Former editors, economists, and intelligence analysts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}