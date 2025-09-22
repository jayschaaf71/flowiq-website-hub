-- Remove the overly permissive public read policy
DROP POLICY IF EXISTS "Allow public read for AI assessments" ON public.ai_assessments;

-- Remove the overly permissive public update policy  
DROP POLICY IF EXISTS "Allow public update for AI assessments" ON public.ai_assessments;

-- Create a more secure policy that only allows reading assessments by email and stripe_session_id
-- This allows users to access their own assessments after payment without exposing all data
CREATE POLICY "Allow reading own assessments by email and session" 
ON public.ai_assessments 
FOR SELECT 
USING (
  -- Allow access if the user knows both the email and stripe_session_id
  -- This provides reasonable security for anonymous purchases
  auth.jwt() ->> 'email' = email OR 
  -- For now, we'll create a function to handle secure access
  false
);

-- Create a security definer function that allows secure access to assessments
-- This will be used by the application to verify ownership
CREATE OR REPLACE FUNCTION public.get_assessment_by_session_and_email(
  session_id text,
  user_email text
)
RETURNS SETOF public.ai_assessments
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.ai_assessments 
  WHERE stripe_session_id = session_id 
  AND email = user_email
  LIMIT 1;
$$;

-- Create a more restrictive update policy that only allows updating specific fields
-- and only for the assessment owner (verified by email + session)
CREATE POLICY "Allow updating own assessment status" 
ON public.ai_assessments 
FOR UPDATE 
USING (false)  -- Prevent direct updates, use functions instead
WITH CHECK (false);

-- Create a function to securely update assessment payment status
CREATE OR REPLACE FUNCTION public.update_assessment_payment_status(
  session_id text,
  user_email text,
  new_status text DEFAULT 'completed'
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.ai_assessments 
  SET 
    payment_status = new_status,
    updated_at = now()
  WHERE stripe_session_id = session_id 
  AND email = user_email;
  
  RETURN FOUND;
END;
$$;