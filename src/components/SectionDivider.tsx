import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "dots" | "wave" | "diamond" | "line";
  className?: string;
}

export const SectionDivider = ({ variant = "dots", className = "" }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.3 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-4 flex items-center justify-center ${className}`}
    >
      {variant === "dots" && (
        <div className="flex items-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary/40"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      )}

      {variant === "wave" && (
        <svg width="200" height="20" viewBox="0 0 200 20" className="text-primary/20">
          <path
            d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {variant === "diamond" && (
        <div className="flex items-center gap-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-irish-orange/30" />
          <div className="w-2 h-2 rotate-45 border border-irish-orange/40" />
          <div className="w-3 h-3 rotate-45 bg-primary/20 border border-primary/30" />
          <div className="w-2 h-2 rotate-45 border border-irish-orange/40" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-irish-orange/30" />
        </div>
      )}

      {variant === "line" && (
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />
          <div className="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary/40" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
        </div>
      )}
    </motion.div>
  );
};
