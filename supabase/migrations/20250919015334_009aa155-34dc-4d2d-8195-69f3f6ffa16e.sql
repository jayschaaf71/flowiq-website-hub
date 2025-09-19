-- Add user_id column to link assessments to authenticated users (nullable for public purchases)
ALTER TABLE public.ai_assessments 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Create index for better performance
CREATE INDEX idx_ai_assessments_user_id ON public.ai_assessments(user_id);
CREATE INDEX idx_ai_assessments_email ON public.ai_assessments(email);

-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Allow public read for AI assessments" ON public.ai_assessments;
DROP POLICY IF EXISTS "Allow public update for AI assessments" ON public.ai_assessments;

-- Create secure RLS policies

-- Allow public to create assessments (for the public purchase flow)
-- Keep existing insert policy as it's needed for functionality

-- Users can only read their own assessments if they're authenticated
CREATE POLICY "Users can view their own assessments" 
ON public.ai_assessments 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL AND 
  (user_id = auth.uid() OR email = auth.email())
);

-- Allow users to update their own assessments
CREATE POLICY "Users can update their own assessments" 
ON public.ai_assessments 
FOR UPDATE 
USING (
  auth.uid() IS NOT NULL AND 
  (user_id = auth.uid() OR email = auth.email())
);

-- Create a secure function for assessment access by email + id (for non-authenticated users)
CREATE OR REPLACE FUNCTION public.get_assessment_by_email_and_id(
  assessment_id UUID,
  user_email TEXT
)
RETURNS SETOF public.ai_assessments
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.ai_assessments 
  WHERE id = assessment_id 
  AND email = user_email 
  LIMIT 1;
$$;

-- Function to link assessment to user when they sign up
CREATE OR REPLACE FUNCTION public.link_assessment_to_user(
  assessment_id UUID,
  user_email TEXT
)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.ai_assessments 
  SET user_id = auth.uid()
  WHERE id = assessment_id 
  AND email = user_email 
  AND user_id IS NULL;
  
  SELECT FOUND;
$$;