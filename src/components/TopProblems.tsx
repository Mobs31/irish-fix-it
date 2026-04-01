import { useState } from "react";
import { topProblems } from "@/data/irelandProblems";
import { ChevronDown, ChevronUp } from "lucide-react";

export const TopProblems = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="top-problems" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-foreground">
          TOP 10 PROBLEMS
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 text-lg">
          The most critical issues facing Ireland today
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {topProblems.map((problem, index) => (
            <div
              key={problem.id}
              className="group border border-border rounded-xl bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
                className="w-full flex items-start gap-4 p-5 text-left"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center mt-0.5">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium font-body mb-2">
                    {problem.category}
                  </span>
                  <p className="font-body text-foreground font-medium leading-relaxed">
                    {problem.question}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-muted-foreground font-body">Score</span>
                    <p className="font-display font-bold text-primary text-lg">{problem.score}</p>
                  </div>
                  {expandedId === problem.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              {expandedId === problem.id && problem.detail && (
                <div className="px-5 pb-5 pl-[4.5rem]">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed border-t border-border pt-4">
                    {problem.detail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
