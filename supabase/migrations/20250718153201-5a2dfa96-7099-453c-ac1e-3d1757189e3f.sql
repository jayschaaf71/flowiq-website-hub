
-- Create table for AI assessment purchases and tracking
CREATE TABLE public.ai_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  practice_type TEXT,
  practice_size TEXT,
  current_challenges TEXT,
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  amount INTEGER NOT NULL, -- Amount in cents
  currency TEXT DEFAULT 'usd',
  payment_status TEXT DEFAULT 'pending',
  assessment_package TEXT NOT NULL, -- 'basic' or 'comprehensive'
  assessment_status TEXT DEFAULT 'purchased', -- purchased, scheduled, completed
  calendly_booking_url TEXT,
  scheduled_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ai_assessments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is for lead generation)
CREATE POLICY "Allow public insert for AI assessments" ON public.ai_assessments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read for AI assessments" ON public.ai_assessments
  FOR SELECT USING (true);

CREATE POLICY "Allow public update for AI assessments" ON public.ai_assessments
  FOR UPDATE USING (true);

-- Create index for efficient lookups
CREATE INDEX idx_ai_assessments_email ON public.ai_assessments(email);
CREATE INDEX idx_ai_assessments_stripe_session ON public.ai_assessments(stripe_session_id);
CREATE INDEX idx_ai_assessments_status ON public.ai_assessments(payment_status, assessment_status);
