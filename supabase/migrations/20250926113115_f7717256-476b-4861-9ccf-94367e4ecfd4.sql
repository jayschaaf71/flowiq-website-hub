-- Fix security issues with personal data exposure and broken policies

-- 1. Add SELECT policies for early_access_signups table to restrict access to authenticated users only
CREATE POLICY "Authenticated users can view early access signups" 
ON public.early_access_signups 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- 2. Add SELECT policies for advisory_board_signups table to restrict access to authenticated users only  
CREATE POLICY "Authenticated users can view advisory board signups" 
ON public.advisory_board_signups 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- 3. Fix the broken UPDATE policy for ai_assessments table to allow legitimate updates
DROP POLICY IF EXISTS "Allow updating own assessment status" ON public.ai_assessments;

CREATE POLICY "Allow updating own assessment status" 
ON public.ai_assessments 
FOR UPDATE 
USING (
  -- Allow updates if user email matches or if it's a system update (no auth context)
  ((auth.jwt() ->> 'email'::text) = email) OR (auth.uid() IS NULL)
)
WITH CHECK (
  -- Same condition for the check
  ((auth.jwt() ->> 'email'::text) = email) OR (auth.uid() IS NULL)
);