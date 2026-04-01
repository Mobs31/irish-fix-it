import { Clover } from "lucide-react";

export const CTAFooter = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Clover className="h-12 w-12 text-primary mx-auto mb-6" />
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Start Building Now
        </h2>

        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
          Ireland is full of problems worth solving. Now, they're all in one place.
        </p>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          This is our gift to the next generation of founders — to scratch the itch and build what Ireland needs.
        </p>

        <a
          href="#top-problems"
          className="inline-flex px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 transition glow-green"
        >
          Explore Problems
        </a>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Clover className="h-4 w-4 text-primary" />
            <span className="font-display text-sm text-muted-foreground">
              Fix Ireland's Itch
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body">
            Research-backed. Community-driven. Built for builders.
          </p>
        </div>
      </div>
    </section>
  );
};
