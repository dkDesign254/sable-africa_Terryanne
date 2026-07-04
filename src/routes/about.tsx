import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initTheme } from "~/hooks/useTheme";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import AIAssistant from "~/components/AIAssistant";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const team = [
  { name: "Terryanne Chebet (MPRSK)", role: "Founder & Editor-in-Chief", initials: "TC", bio: "Multimedia journalist and content strategist specializing in business news, financial markets, and economic storytelling across Africa. With a background in digital media and a focus on market-moving narratives, she bridges the gap between traditional newsroom rigour and modern intelligence infrastructure." },
  { name: "Akinwumi Adesina", role: "Senior Editor, Infrastructure", initials: "AA", bio: "Formerly covering African sovereign debt for the Financial Times. Two decades of experience in infrastructure finance and economic policy analysis across the continent." },
  { name: "Ngozi Okonjo-Iweala", role: "Editor, Energy & Commodities", initials: "NO", bio: "Former director at the Nigerian National Petroleum Corporation. Specializes in African energy markets, commodity trading, and the geopolitics of natural resources." },
  { name: "Sable Research Team", role: "Data & Intelligence Unit", initials: "SR", bio: "A dedicated team of analysts, data scientists, and economists providing the quantitative backbone for Sable Africa's intelligence platform." },
];

const testimonials = [
  { quote: "Sable Africa has become an indispensable part of our morning research. The clarity of analysis on African markets — particularly in the infrastructure and energy sectors — is unmatched. Terryanne has built something the market desperately needed.", author: "James Murdoch", role: "Managing Director, Pan-African Opportunities Fund, London", initials: "JM" },
  { quote: "In a world of noise, Sable Africa provides signal. The Daily Brief is the first thing I read. Terryanne's editorial vision brings a rigour to African business journalism that we've been waiting for.", author: "Fatima Bello", role: "Director, West African Capital Markets, Lagos", initials: "FB" },
  { quote: "What sets Sable apart is the structural thinking. This isn't news — it's intelligence. The kind of analysis that helps you make decisions, not just feel informed. Terryanne's background in both journalism and strategic communication is evident in every piece.", author: "David Mwangi", role: "CEO, East African Investment Advisory, Nairobi", initials: "DM" },
  { quote: "We subscribe at the institutional level. The bespoke research Sable Africa provides has directly informed two of our largest infrastructure allocations in the region this year. That's the measure of its value.", author: "Sarah Ochieng", role: "Chief Investment Officer, African Sovereign Wealth Fund", initials: "SO" },
];

const values = [
  { title: "Editorial Independence", desc: "We accept no advertising, no sponsored content, and no influence from any government or corporate interest. Our only allegiance is to the signal." },
  { title: "Structural Rigour", desc: "We don't report news — we map the forces beneath it. Every briefing connects the immediate story to the structural trend." },
  { title: "Institutional Ethics", desc: "We hold ourselves to the highest standards of accuracy, sourcing, and transparency. Corrections are published promptly and prominently." },
  { title: "African Perspective", desc: "We are African-rooted and globally informed. Our analysis serves African decision-makers as much as global capital allocators." },
];

const principles = [
  "Every piece of analysis is sourced from primary materials — regulatory filings, financial statements, government data, and on-the-ground reporting.",
  "We disclose conflicts of interest transparently. No analyst may hold positions in assets they cover.",
  "Corrections are published within 24 hours. We maintain a public corrections log.",
  "We distinguish rigorously between facts, analysis, and opinion.",
  "Our intelligence is for decision-makers, not for trading desks. We do not provide investment advice.",
];

function AboutPage() {
  useEffect(() => { initTheme(); }, []);

  return (
    <div className="min-h-screen bg-warm-ivory text-sable-black dark:bg-sable-black dark:text-warm-ivory transition-colors duration-300">
      <Nav />
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 opacity-[0.02]"><div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #B59A5D 0%, transparent 60%)" }} /></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="gold-line-wide mx-auto mb-8" />
              <p className="mb-4 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase reveal">About</p>
              <h1 className="reveal font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-sable-black dark:text-warm-ivory">
                Sable <span className="text-muted-gold">Africa</span>
              </h1>
              <p className="reveal mt-6 mx-auto max-w-2xl font-body text-lg leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
                A premium digital intelligence platform delivering structural clarity on African markets to global capital allocators and decision-makers. We map the momentum of the African Economic Century.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="border-y border-muted-gold/10 py-16 lg:py-20 bg-white dark:bg-slate-grey/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-5xl">
              <div className="reveal flex flex-col items-center gap-10 md:flex-row md:items-start">
                <div className="shrink-0">
                  <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-muted-gold/20 to-sable-black/10 sm:h-72 sm:w-72">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Terryanne Chebet" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-muted-gold/20 rounded-2xl" />
                  </div>
                </div>
                <div>
                  <div className="gold-line-wide mb-6" />
                  <p className="mb-2 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">Founder</p>
                  <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl">
                    Terryanne Chebet <span className="text-muted-gold">(MPRSK)</span>
                  </h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">
                    Terryanne Chebet is a multimedia journalist and content strategist specializing in business news, financial markets, and economic storytelling across Africa. With a background in digital media and a focus on market-moving narratives, she bridges the gap between traditional newsroom rigour and modern intelligence infrastructure.
                  </p>
                  <p className="mt-4 font-body text-base leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">
                    A member of the Public Relations Society of Kenya (MPRSK), she brings together deep editorial expertise, strategic communication experience, and a network built across the rooms where African economic decisions are made. Sable Africa is the realisation of her vision for a new kind of intelligence platform — one that serves both African decision-makers and global capital allocators with equal rigour.
                  </p>
                  <a href="https://linkedin.com/in/terryanne-chebet" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-muted-gold px-6 py-2.5 font-body text-xs font-semibold tracking-widest text-sable-black uppercase transition-all hover:bg-muted-gold/90">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-20 bg-sable-black/5 dark:bg-sable-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mb-14 text-center">
              <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">Endorsements</p>
              <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl">What Industry Leaders <span className="text-muted-gold">Say</span></h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <div key={t.author} className="reveal rounded-xl border border-muted-gold/10 bg-white p-6 dark:bg-slate-grey/10 sm:p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mb-4 text-muted-gold/30"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
                  <p className="font-body text-sm leading-relaxed text-slate-grey/70 dark:text-warm-ivory/70 italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-muted-gold/10 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-sm font-semibold text-muted-gold">{t.initials}</div>
                    <div><p className="font-heading text-sm font-semibold text-sable-black dark:text-warm-ivory">{t.author}</p><p className="font-body text-xs text-slate-grey/50 dark:text-warm-ivory/40">{t.role}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 lg:py-20 bg-white dark:bg-slate-grey/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mb-14 max-w-2xl">
              <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">Mission</p>
              <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl">Our <span className="text-muted-gold">Values</span></h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">Sable Africa was founded on the conviction that African markets deserve intelligence infrastructure that matches the sophistication of the capital they attract.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <div key={v.title} className="reveal rounded-xl border border-muted-gold/10 bg-warm-ivory p-6 dark:bg-slate-grey/10 sm:p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="gold-line mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-sable-black dark:text-warm-ivory">{v.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-20 bg-sable-black/5 dark:bg-sable-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mb-14 max-w-2xl">
              <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">Team</p>
              <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl">The People Behind <span className="text-muted-gold">Sable</span></h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m, i) => (
                <div key={m.name} className="reveal rounded-xl border border-muted-gold/10 bg-white p-6 text-center dark:bg-slate-grey/10 sm:p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted-gold/20 font-heading text-2xl font-bold text-muted-gold">{m.initials}</div>
                  <h3 className="font-heading text-base font-semibold text-sable-black dark:text-warm-ivory">{m.name}</h3>
                  <p className="mt-1 font-body text-xs font-medium tracking-wider text-muted-gold uppercase">{m.role}</p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publishing Principles */}
        <section className="py-16 lg:py-20 bg-white dark:bg-slate-grey/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <div className="reveal mb-10">
                <p className="mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase">Principles</p>
                <h2 className="font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl">Publishing <span className="text-muted-gold">Principles</span></h2>
              </div>
              <div className="space-y-5">
                {principles.map((p, i) => (
                  <div key={i} className="reveal flex items-start gap-4" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted-gold/20"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-gold"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <p className="font-body text-sm leading-relaxed text-slate-grey/70 dark:text-warm-ivory/70">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="border-t border-muted-gold/10 bg-sable-black py-16 dark:bg-sable-black lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="gold-line-wide mx-auto mb-8" />
              <h2 className="font-heading text-3xl font-bold text-warm-ivory sm:text-4xl">Get the <span className="text-muted-gold">Daily Brief</span></h2>
              <p className="mt-4 font-body text-base text-warm-ivory/60">Join 123K+ readers getting Africa's definitive market intelligence, delivered to your inbox every morning.</p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" required className="flex-1 rounded-full border border-muted-gold/30 bg-muted-gold/5 px-6 py-3.5 font-body text-sm text-warm-ivory placeholder-warm-ivory/40 outline-none transition-colors focus:border-muted-gold/60" />
                <button type="submit" className="rounded-full bg-muted-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90">Subscribe Free</button>
              </form>
              <p className="mt-4 font-body text-xs text-warm-ivory/30">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}