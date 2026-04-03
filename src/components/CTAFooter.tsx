import { Clover } from "lucide-react";
import { motion } from "framer-motion";

export const CTAFooter = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden scroll-mt-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Clover className="h-12 w-12 text-primary mx-auto mb-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Start Building Now
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
            Ireland is full of problems worth solving. Now, they're all in one place.
          </p>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            This is our gift to the next generation of founders — to scratch the itch and build what Ireland needs.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          href="#top-problems"
          className="inline-flex px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 transition glow-green"
        >
          Explore Problems
        </motion.a>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Clover className="h-4 w-4 text-primary" />
            <span className="font-display text-sm text-muted-foreground">
              Fix Ireland's Itch
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body">
            Research-backed. Community-driven. Built for builders. Inspired by{" "}
            <a
              href="https://razorpay.com/m/fix-my-itch/#all-problems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Razorpay
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
