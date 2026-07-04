const footerLinks = {
  Intelligence: ["Daily Brief", "Dashboard", "Investigations", "Weekend", "Archive"],
  Regions: ["East Africa", "West Africa", "Southern Africa", "North Africa", "Central Africa"],
  Company: ["About", "Careers", "Press", "Contact", "Partners"],
  Policies: ["Privacy", "Terms of Service", "Cookies", "Compliance", "Sitemap"],
};

export default function Footer() {
  return (
    <footer className="border-t border-muted-gold/10 bg-sable-black/5 py-16 dark:bg-sable-black lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="text-muted-gold"
              >
                <path d="M16 4L4 16l12 12 12-12L16 4z" />
                <path d="M16 8l-6 6 6 6 6-6-6-6z" opacity="0.3" />
                <circle cx="16" cy="14" r="2" />
              </svg>
              <span className="font-heading text-base font-semibold tracking-wide text-sable-black dark:text-warm-ivory">
                Sable <span className="text-muted-gold">Africa</span>
              </span>
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/50 dark:text-warm-ivory/40">
              The definitive intelligence infrastructure for global capital
              allocators navigating African markets.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {["Twitter", "LinkedIn", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-muted-gold/10 text-slate-grey/30 transition-all hover:border-muted-gold/30 hover:text-muted-gold dark:text-warm-ivory/30"
                  aria-label={s}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 font-body text-[10px] font-semibold tracking-[0.2em] text-muted-gold uppercase">
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-slate-grey/50 transition-colors hover:text-muted-gold dark:text-warm-ivory/40"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-muted-gold/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-slate-grey/40 dark:text-warm-ivory/30">
            &copy; {new Date().getFullYear()} Sable Africa Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="font-body text-xs text-slate-grey/30 dark:text-warm-ivory/20">
              London &bull; Nairobi &bull; Lagos &bull; Accra
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}