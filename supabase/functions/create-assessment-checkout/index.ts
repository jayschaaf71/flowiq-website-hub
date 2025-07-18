import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { 
      email, 
      name, 
      company, 
      phone, 
      practice_type, 
      practice_size, 
      current_challenges, 
      assessment_package 
    } = await req.json()

    // Define assessment packages and pricing
    const packages = {
      basic: {
        name: 'AI Assessment - Basic',
        price: 29700, // $297 in cents
        description: 'Complete AI readiness assessment with custom recommendations'
      },
      comprehensive: {
        name: 'AI Assessment - Comprehensive',
        price: 49700, // $497 in cents
        description: 'Complete assessment plus 1-hour strategy session and implementation roadmap'
      }
    }

    const selectedPackage = packages[assessment_package as keyof typeof packages]
    if (!selectedPackage) {
      throw new Error('Invalid assessment package')
    }

    // Create assessment record in database
    const { data: assessment, error: dbError } = await supabaseClient
      .from('ai_assessments')
      .insert({
        email,
        name,
        company,
        phone,
        practice_type,
        practice_size,
        current_challenges,
        assessment_package,
        amount: selectedPackage.price,
        payment_status: 'pending'
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Failed to create assessment record')
    }

    // Create Stripe checkout session
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeKey) {
      throw new Error('Stripe secret key not configured')
    }

    const stripe = await import('https://esm.sh/stripe@14.11.0')
    const stripeClient = new stripe.default(stripeKey, {
      apiVersion: '2023-10-16',
    })

    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: selectedPackage.name,
              description: selectedPackage.description,
            },
            unit_amount: selectedPackage.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/assessment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/ai-assessment`,
      client_reference_id: assessment.id,
      customer_email: email,
      metadata: {
        assessment_id: assessment.id,
        assessment_package,
      },
    })

    // Update assessment record with Stripe session ID
    await supabaseClient
      .from('ai_assessments')
      .update({ stripe_session_id: session.id })
      .eq('id', assessment.id)

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})