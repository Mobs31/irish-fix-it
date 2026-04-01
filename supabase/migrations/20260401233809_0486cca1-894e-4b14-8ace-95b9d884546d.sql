
CREATE TABLE public.submitted_problems (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  category TEXT NOT NULL,
  problem TEXT NOT NULL,
  detail TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.submitted_problems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert submitted problems"
ON public.submitted_problems
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
