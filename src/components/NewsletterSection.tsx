import { useState } from "react";
import { subscribeToNewsletter } from "~/lib/newsletter";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      const result = await subscribeToNewsletter({ data: { email } });
      if (result.error) {
        setStatus("error");
        setMessage(result.error);
      } else {
        setStatus("success");
        setMessage(result.message === "Already subscribed" ? "You're already subscribed!" : "Welcome to the Daily Brief!");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="newsletter" className="border-t border-muted-gold/10 bg-sable-black/5 py-20 dark:bg-sable-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal gold-line-wide mx-auto mb-8" />
          <p className="reveal mb-3 font-body text-xs font-medium tracking-[0.25em] text-muted-gold uppercase" style={{ transitionDelay: "0.1s" }}>Stay Informed</p>
          <h2 className="reveal font-heading text-3xl font-bold text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.15s" }}>
            Get the <span className="text-muted-gold">Daily Brief</span>
          </h2>
          <p className="reveal mt-4 font-body text-base text-slate-grey/50 dark:text-warm-ivory/50" style={{ transitionDelay: "0.2s" }}>
            Join 123K+ readers getting Africa's definitive market intelligence, delivered to your inbox every morning.
          </p>

          <form onSubmit={handleSubmit} className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ transitionDelay: "0.25s" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className="flex-1 rounded-full border border-muted-gold/30 bg-muted-gold/5 px-6 py-3.5 font-body text-sm text-sable-black placeholder-slate-grey/40 outline-none transition-all focus:border-muted-gold/60 disabled:opacity-50 dark:text-warm-ivory dark:placeholder-warm-ivory/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-muted-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90 hover:scale-[1.02] disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe Free"}
            </button>
          </form>

          {message && (
            <p className={`reveal mt-4 font-body text-sm ${status === "success" ? "text-emerald-500" : "text-red-400"}`}>
              {message}
            </p>
          )}

          <p className="reveal mt-4 font-body text-xs text-slate-grey/30 dark:text-warm-ivory/30" style={{ transitionDelay: "0.3s" }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}