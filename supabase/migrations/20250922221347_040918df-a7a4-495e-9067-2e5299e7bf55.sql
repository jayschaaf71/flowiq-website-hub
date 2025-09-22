-- Create a function to securely update payment status using just session_id
-- This is safe for post-payment confirmation since session_id is a secure Stripe token
CREATE OR REPLACE FUNCTION public.confirm_assessment_payment(
  session_id text
)
RETURNS SETOF public.ai_assessments
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.ai_assessments 
  SET 
    payment_status = 'completed',
    updated_at = now()
  WHERE stripe_session_id = session_id 
  AND payment_status = 'pending'  -- Only update pending payments
  RETURNING *;
$$;