import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { TopProblems } from "@/components/TopProblems";
import { AllProblems } from "@/components/AllProblems";
import { CTAFooter } from "@/components/CTAFooter";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TopProblems />
      <AllProblems />
      <CTAFooter />
    </div>
  );
};

export default Index;
