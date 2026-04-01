import { Users, FileSearch, Brain, TrendingUp } from "lucide-react";

const stats = [
  { icon: FileSearch, value: "67+", label: "Verified Problems" },
  { icon: Users, value: "5M+", label: "People Affected" },
  { icon: Brain, value: "AI-Powered", label: "Research & Curation" },
  { icon: TrendingUp, value: "12", label: "Categories Covered" },
];

export const StatsBar = () => {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className="h-5 w-5 text-primary mb-1" />
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
