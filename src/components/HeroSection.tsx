export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-body text-primary">Crowdsourced from the people of Ireland</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">FIX</span>{" "}
          <span className="text-gradient-irish">IRELAND'S</span>{" "}
          <span className="text-foreground">ITCH</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Real problems. Real people. Ireland's most pressing issues — researched, verified, and scored — all in one place for the next generation of builders and founders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#top-problems"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 transition glow-green"
          >
            Show Me Top Problems
          </a>
          <a
            href="#all-problems"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-display font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition"
          >
            Show Me Everything
          </a>
        </div>
      </div>
    </section>
  );
};
