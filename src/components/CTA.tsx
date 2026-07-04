export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-sable-black/5 py-20 dark:bg-sable-black lg:py-32">
      {/* Decorative gold line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-muted-gold/30 to-transparent" />

      {/* Background shimmer */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #B59A5D 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="reveal">
          <div className="gold-line-wide mx-auto mb-8" />

          <h2 className="font-heading text-3xl font-bold leading-tight text-sable-black dark:text-warm-ivory sm:text-4xl lg:text-5xl">
            The Future of African Intelligence{" "}
            <span className="text-muted-gold">Is Being Built Now</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-slate-grey/60 dark:text-warm-ivory/50">
            Join the decision-makers who rely on Sable Africa for the clarity
            that moves capital. The African Economic Century is underway — are
            you reading the signal?
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#newsletter"
              className="rounded-full bg-muted-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90 hover:scale-[1.03] active:scale-[0.98]"
            >
              Subscribe to Daily Brief
            </a>
            <a
              href="#intelligence"
              className="rounded-full border border-muted-gold/30 px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black dark:text-warm-ivory uppercase transition-all hover:border-muted-gold/60 hover:bg-muted-gold/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View Intelligence Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}