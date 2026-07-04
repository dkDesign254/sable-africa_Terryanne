import { useEffect, useState } from "react";
import { initTheme, useTheme } from "~/hooks/useTheme";

const navItems = [
  { label: "Daily Brief", href: "#daily-brief" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Investigations", href: "#investigations" },
  { label: "Weekend", href: "#weekend" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, cycleMode } = useTheme();

  // Initialize theme on mount
  useEffect(() => { initTheme(); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeLabel =
    mode === "dark" ? "Dark mode" : mode === "light" ? "Light mode" : "System theme";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              className="text-muted-gold"
              fill="currentColor"
            >
              <path d="M16 4L4 16l12 12 12-12L16 4z" />
              <path d="M16 8l-6 6 6 6 6-6-6-6z" fill="currentColor" opacity="0.3" />
              <circle cx="16" cy="14" r="2" fill="currentColor" />
            </svg>
            <span className="font-heading text-lg font-semibold tracking-wide text-sable-black dark:text-warm-ivory">
              Sable <span className="text-muted-gold">Africa</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium tracking-wide text-slate-grey dark:text-warm-ivory/80 transition-colors hover:text-muted-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Theme toggle — cycles system → light → dark → system */}
            <button
              onClick={cycleMode}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full text-slate-grey dark:text-warm-ivory/70 transition-colors hover:text-muted-gold hover:bg-muted-gold/10"
              aria-label={themeLabel}
            >
              {mode === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : mode === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  <path d="M2 12h20" strokeWidth="0.8" opacity="0.3" />
                </svg>
              )}
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-sable-black px-2 py-0.5 font-body text-[10px] text-warm-ivory opacity-0 transition-opacity group-hover:opacity-100 dark:bg-warm-ivory dark:text-sable-black pointer-events-none">
                {mode === "dark" ? "Light" : mode === "light" ? "System" : "Dark"}
              </span>
            </button>

            {/* Search icon */}
            <button
              className="hidden h-9 w-9 items-center justify-center rounded-full text-slate-grey dark:text-warm-ivory/70 transition-colors hover:text-muted-gold hover:bg-muted-gold/10 md:flex"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Subscribe button */}
            <a
              href="#subscribe"
              className="hidden rounded-full bg-muted-gold px-5 py-2 font-body text-xs font-semibold tracking-widest text-sable-black uppercase transition-all hover:bg-muted-gold/90 md:block"
            >
              Subscribe
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-grey dark:text-warm-ivory/70 transition-colors hover:text-muted-gold md:hidden"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-muted-gold/10 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-medium tracking-wide text-slate-grey dark:text-warm-ivory/80 transition-colors hover:text-muted-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#subscribe"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block self-start rounded-full bg-muted-gold px-5 py-2 font-body text-xs font-semibold tracking-widest text-sable-black uppercase transition-all hover:bg-muted-gold/90"
              >
                Subscribe
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}