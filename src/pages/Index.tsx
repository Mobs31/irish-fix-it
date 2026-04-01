import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { TopProblems } from "@/components/TopProblems";
import { AllProblems } from "@/components/AllProblems";
import { CTAFooter } from "@/components/CTAFooter";
import { SubmitProblem } from "@/components/SubmitProblem";
import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { CategoryBreakdown } from "@/components/CategoryBreakdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <SectionDivider variant="diamond" />
      <TopProblems />
      <SectionDivider variant="wave" />
      <CategoryBreakdown />
      <SectionDivider variant="dots" />
      <AllProblems />
      <SectionDivider variant="line" />
      <SubmitProblem />
      <CTAFooter />
    </div>
  );
};

export default Index;
