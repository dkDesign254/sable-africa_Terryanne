import type { ReactNode } from "react";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import AIAssistant from "~/components/AIAssistant";

interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  authorBio?: string;
  relatedArticles?: { title: string; href: string; category: string }[];
}

export default function ArticleLayout({
  children,
  title,
  author,
  date,
  readTime,
  category,
  imageUrl,
  authorBio = "Sable Africa's editorial team combines decades of experience in African economic journalism, financial analysis, and strategic intelligence.",
  relatedArticles = [],
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-warm-ivory text-sable-black dark:bg-sable-black dark:text-warm-ivory transition-colors duration-300">
      <Nav />
      <main className="pt-20 lg:pt-24">
        {/* Hero image */}
        <div
          className="relative h-64 w-full bg-cover bg-center sm:h-80 lg:h-96"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-sable-black/80 via-sable-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="mx-auto max-w-4xl">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-muted-gold/30 px-3 py-1 font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase backdrop-blur-sm">
                  {category}
                </span>
                <span className="font-body text-[10px] text-warm-ivory/50">
                  {readTime}
                </span>
                <span className="font-body text-[10px] text-warm-ivory/40">
                  {date}
                </span>
              </div>
              <h1 className="font-heading text-2xl font-bold leading-tight text-warm-ivory sm:text-3xl lg:text-4xl">
                {title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10 lg:py-14">
          {/* Author bar */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-muted-gold/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-lg font-semibold text-muted-gold">
                {author.charAt(0)}
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-sable-black dark:text-warm-ivory">
                  {author}
                </p>
                <p className="font-body text-sm text-slate-grey/50 dark:text-warm-ivory/40">
                  Sable Africa
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-muted-gold/20 p-2 text-slate-grey/40 transition-colors hover:border-muted-gold/50 hover:text-muted-gold dark:text-warm-ivory/40" aria-label="Save">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </button>
              <button className="rounded-full border border-muted-gold/20 p-2 text-slate-grey/40 transition-colors hover:border-muted-gold/50 hover:text-muted-gold dark:text-warm-ivory/40" aria-label="Share">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                </svg>
              </button>
            </div>
          </div>

          {/* Article body — styled prose */}
          <div className="prose-custom font-body text-base leading-relaxed text-slate-grey/80 dark:text-warm-ivory/70 sm:text-lg">
            {children}
          </div>

          {/* Author bio */}
          <div className="mt-12 rounded-xl border border-muted-gold/10 bg-white p-6 dark:bg-slate-grey/10 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-xl font-bold text-muted-gold">
                {author.charAt(0)}
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-sable-black dark:text-warm-ivory">
                  {author}
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">
                  {authorBio}
                </p>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-14">
              <h3 className="mb-6 font-heading text-xl font-bold text-sable-black dark:text-warm-ivory">
                Related Reading
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((ra) => (
                  <a
                    key={ra.href}
                    href={ra.href}
                    className="group rounded-xl border border-muted-gold/10 bg-white p-5 transition-all hover:border-muted-gold/30 dark:bg-slate-grey/10 sm:p-6"
                  >
                    <span className="mb-2 inline-block font-body text-[10px] font-medium tracking-wider text-muted-gold uppercase">
                      {ra.category}
                    </span>
                    <p className="font-heading text-base font-semibold leading-snug text-sable-black transition-colors group-hover:text-muted-gold dark:text-warm-ivory">
                      {ra.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-10 border-t border-muted-gold/10 pt-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted-gold transition-colors hover:text-muted-gold/70"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Sable Africa
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}