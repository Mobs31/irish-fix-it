import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import type { Category } from "@/data/irelandProblems";

const categories: Category[] = [
  "Housing", "Healthcare", "Homelessness", "Cost of Living", "Childcare",
  "Transport", "Mental Health", "Education", "Environment", "Technology",
  "Employment", "Rural Issues",
];

export const SubmitProblem = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<string>("");
  const [problem, setProblem] = useState("");
  const [detail, setDetail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!problem.trim() || !category) {
      toast.error("Please fill in the required fields.");
      return;
    }
    if (problem.trim().length < 10) {
      toast.error("Problem statement must be at least 10 characters.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("submitted_problems").insert({
        name: name.trim() || null,
        email: email.trim() || null,
        category,
        problem: problem.trim(),
        detail: detail.trim() || null,
      });
      if (error) throw error;
      toast.success("Thank you! Your problem has been submitted for review.");
      setName("");
      setEmail("");
      setCategory("");
      setProblem("");
      setDetail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="submit" className="py-20 px-4 bg-muted/30 scroll-mt-20 relative overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-irish-orange/4 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
        >
          Submit a Problem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground text-center mb-10"
        >
          Know an issue affecting Ireland that's not on our list? Tell us about it.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name <span className="text-muted-foreground text-xs">(optional)</span></Label>
              <Input
                id="name"
                placeholder="Seán O'Brien"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 100))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-muted-foreground text-xs">(optional)</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="sean@example.ie"
                value={email}
                onChange={(e) => setEmail(e.target.value.slice(0, 255))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Problem Statement <span className="text-destructive">*</span></Label>
            <Input
              id="problem"
              placeholder="e.g. Rising insurance premiums for young drivers"
              value={problem}
              onChange={(e) => setProblem(e.target.value.slice(0, 200))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="detail">More Detail <span className="text-muted-foreground text-xs">(optional)</span></Label>
            <Textarea
              id="detail"
              placeholder="Describe the problem, who it affects, and why it matters..."
              rows={4}
              value={detail}
              onChange={(e) => setDetail(e.target.value.slice(0, 1000))}
            />
          </div>

          <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-5">
            {submitting ? "Submitting…" : "Submit Problem"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
