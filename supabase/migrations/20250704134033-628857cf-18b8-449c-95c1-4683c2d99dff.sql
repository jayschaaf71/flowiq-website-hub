-- Create table for customer advisory board signups
CREATE TABLE public.advisory_board_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  experience_level TEXT,
  motivation TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  company_size TEXT,
  use_case TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.advisory_board_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for signups
CREATE POLICY "Allow public to insert advisory board signups" 
ON public.advisory_board_signups 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public to insert early access signups" 
ON public.early_access_signups 
FOR INSERT 
WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX idx_advisory_board_signups_email ON public.advisory_board_signups(email);
CREATE INDEX idx_advisory_board_signups_created_at ON public.advisory_board_signups(created_at);
CREATE INDEX idx_early_access_signups_email ON public.early_access_signups(email);
CREATE INDEX idx_early_access_signups_created_at ON public.early_access_signups(created_at);