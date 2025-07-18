import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EarlyAccessSignupRequest {
  name: string;
  email: string;
  company?: string;
  company_size?: string;
  use_case?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const signupData: EarlyAccessSignupRequest = await req.json();
    console.log("Processing early access signup notification:", signupData);

    const emailResponse = await resend.emails.send({
      from: "FlowIQ Notifications <notifications@resend.dev>",
      to: ["jayschaaf71@gmail.com"], // Replace with your actual email
      subject: "🚀 New Early Access Signup - FlowIQ",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Early Access Signup
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${signupData.name}</p>
            <p><strong>Email:</strong> ${signupData.email}</p>
            ${signupData.company ? `<p><strong>Company:</strong> ${signupData.company}</p>` : ''}
            ${signupData.company_size ? `<p><strong>Company Size:</strong> ${signupData.company_size}</p>` : ''}
          </div>

          ${signupData.use_case ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Use Case</h3>
              <p style="color: #451a03;">${signupData.use_case}</p>
            </div>
          ` : ''}

          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #065f46; margin: 0;">
              <strong>Next Steps:</strong> Follow up with this prospect within 24 hours to schedule a demo.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in notify-early-access-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);