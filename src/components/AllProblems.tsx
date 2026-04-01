import { useState, useMemo } from "react";
import { allProblems, categories, type Category } from "@/data/irelandProblems";
import { Filter, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AllProblems = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    if (selectedCategories.length === 0) return allProblems;
    return allProblems.filter((p) => selectedCategories.includes(p.category));
  }, [selectedCategories]);

  return (
    <section id="all-problems" className="py-20 bg-card/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16 text-foreground"
        >
          ALL PROBLEMS
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="lg:w-64 flex-shrink-0"
          >
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-foreground font-display font-semibold mb-4"
            >
              <Filter className="h-4 w-4" />
              FILTER BY
            </button>

            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="font-display text-sm font-semibold text-muted-foreground tracking-wider">
                  FILTER BY
                </span>
              </div>
              <p className="font-display text-xs font-semibold text-muted-foreground tracking-wider mb-3">
                Category
              </p>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedCategories.includes(cat)
                          ? "bg-primary border-primary"
                          : "border-muted-foreground/40 group-hover:border-primary/60"
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-sm font-body text-foreground/80 group-hover:text-foreground transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="mt-4 text-xs text-primary font-body hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Problems table */}
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-[1fr_100px_140px_40px] gap-4 px-5 pb-3 border-b border-border">
              <span className="font-display text-xs font-semibold text-muted-foreground tracking-wider">PROBLEMS</span>
              <span className="font-display text-xs font-semibold text-muted-foreground tracking-wider">SCORE</span>
              <span className="font-display text-xs font-semibold text-muted-foreground tracking-wider">CATEGORY</span>
              <span />
            </div>

            <div className="divide-y divide-border">
              {filtered.map((problem, i) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                  className="group"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
                    className="w-full grid grid-cols-1 md:grid-cols-[1fr_100px_140px_40px] gap-2 md:gap-4 px-5 py-4 text-left hover:bg-primary/5 transition-colors items-center"
                  >
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {problem.question}
                    </p>
                    <span className="font-display font-bold text-primary text-base">
                      {problem.score}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {problem.category}
                    </span>
                    <span className="justify-self-end">
                      {expandedId === problem.id ? (
                        <Minus className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Plus className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedId === problem.id && problem.detail && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4">
                          <p className="text-muted-foreground font-body text-sm leading-relaxed border-t border-border pt-3">
                            {problem.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body">No problems found for selected categories.</p>
              </div>
            )}

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground font-body">
                Showing {filtered.length} of {allProblems.length} problems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
