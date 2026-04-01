import { useMemo } from "react";
import { allProblems, categories, type Category } from "@/data/irelandProblems";
import { motion } from "framer-motion";
import {
  Home, HeartPulse, Users, Wallet, Baby, Train,
  Brain, GraduationCap, Leaf, Cpu, Briefcase, Tractor,
} from "lucide-react";

const categoryIcons: Record<Category, React.ElementType> = {
  Housing: Home,
  Healthcare: HeartPulse,
  Homelessness: Users,
  "Cost of Living": Wallet,
  Childcare: Baby,
  Transport: Train,
  "Mental Health": Brain,
  Education: GraduationCap,
  Environment: Leaf,
  Technology: Cpu,
  Employment: Briefcase,
  "Rural Issues": Tractor,
};

export { categoryIcons };

export const CategoryBreakdown = () => {
  const data = useMemo(() => {
    return categories.map((cat) => {
      const problems = allProblems.filter((p) => p.category === cat);
      const avgScore = problems.length
        ? Math.round(problems.reduce((a, p) => a + p.score, 0) / problems.length)
        : 0;
      return { category: cat, count: problems.length, avgScore };
    }).sort((a, b) => b.avgScore - a.avgScore);
  }, []);

  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-irish-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-foreground"
        >
          BY CATEGORY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          How Ireland's problems break down across sectors
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, i) => {
            const Icon = categoryIcons[item.category];
            const barWidth = (item.count / maxCount) * 100;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                className="relative group rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-display text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <span className="font-display text-2xl font-bold text-foreground">{item.count}</span>
                      <span className="text-xs text-muted-foreground font-body ml-1">issues</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground font-body">avg</span>
                      <span className="font-display text-lg font-bold text-primary ml-1">{item.avgScore}</span>
                    </div>
                  </div>

                  {/* Mini bar */}
                  <div className="h-1 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barWidth}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-irish-glow"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
