import { Clover } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <Clover className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">
            Fix Ireland's Itch
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#top-problems" className="text-muted-foreground hover:text-primary transition-colors">
            Top Problems
          </a>
          <a href="#all-problems" className="text-muted-foreground hover:text-primary transition-colors">
            All Problems
          </a>
          <a href="#submit" className="text-muted-foreground hover:text-primary transition-colors">
            Submit
          </a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition">
            Start Building
          </a>
        </div>
      </div>
    </nav>
  );
};
