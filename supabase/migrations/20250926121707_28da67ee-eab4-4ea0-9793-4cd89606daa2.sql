-- Fix Advisory Board Data Exposure: Remove overly permissive SELECT policy
-- Advisory board signups should only be accessible by administrators via Supabase dashboard
DROP POLICY IF EXISTS "Authenticated users can view advisory board signups" ON public.advisory_board_signups;

-- Also remove the similar policy for early_access_signups for consistency
-- Early access signups should also only be accessible by administrators
DROP POLICY IF EXISTS "Authenticated users can view early access signups" ON public.early_access_signups;

-- Fix AI Assessments: Remove unsafe unauthenticated update capability
DROP POLICY IF EXISTS "Allow updating own assessment status" ON public.ai_assessments;

-- Create a safer update policy that only allows authenticated users to update their own assessments
CREATE POLICY "Allow updating own assessments by email" ON public.ai_assessments
FOR UPDATE 
USING (((auth.jwt() ->> 'email'::text) = email))
WITH CHECK (((auth.jwt() ->> 'email'::text) = email));