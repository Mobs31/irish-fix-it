import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Problem {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  category: string;
  problem: string;
  detail: string | null;
}

const Admin = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProblems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("submitted_problems")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProblems(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const categoryColor = (cat: string) => {
    const map: Record<string, string> = {
      Housing: "bg-destructive/20 text-destructive",
      Healthcare: "bg-primary/20 text-primary",
      "Cost of Living": "bg-[hsl(var(--irish-orange))]/20 text-[hsl(var(--irish-orange))]",
      Transport: "bg-accent/20 text-accent",
      Education: "bg-secondary text-secondary-foreground",
    };
    return map[cat] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold font-['Space_Grotesk']">
                Submitted Problems
              </h1>
              <p className="text-muted-foreground text-sm">
                {problems.length} submission{problems.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchProblems}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {problems.length === 0 && !loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Inbox className="h-12 w-12 mb-4" />
            <p className="text-lg">No submissions yet</p>
          </div>
        ) : (
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead className="hidden md:table-cell">Detail</TableHead>
                  <TableHead className="hidden lg:table-cell">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="whitespace-nowrap text-muted-foreground text-xs">
                      {new Date(p.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-medium">
                      {p.name || <span className="text-muted-foreground italic">Anonymous</span>}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={categoryColor(p.category)}>
                        {p.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">{p.problem}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-[200px] truncate text-muted-foreground text-sm">
                      {p.detail || "—"}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">
                      {p.email || "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
