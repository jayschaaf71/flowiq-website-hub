import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AdvisoryBoardSignupRequest {
  name: string;
  email: string;
  company?: string;
  role?: string;
  experience_level?: string;
  motivation?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const signupData: AdvisoryBoardSignupRequest = await req.json();
    console.log("Processing advisory board signup notification:", signupData);

    const emailResponse = await resend.emails.send({
      from: "FlowIQ Notifications <notifications@resend.dev>",
      to: ["jayschaaf71@gmail.com"], // Replace with your actual email
      subject: "🎯 New Advisory Board Application - FlowIQ",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Advisory Board Application
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">Applicant Information</h2>
            <p><strong>Name:</strong> ${signupData.name}</p>
            <p><strong>Email:</strong> ${signupData.email}</p>
            ${signupData.company ? `<p><strong>Company:</strong> ${signupData.company}</p>` : ''}
            ${signupData.role ? `<p><strong>Role:</strong> ${signupData.role}</p>` : ''}
            ${signupData.experience_level ? `<p><strong>Experience Level:</strong> ${signupData.experience_level}</p>` : ''}
          </div>

          ${signupData.motivation ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Motivation</h3>
              <p style="color: #451a03;">${signupData.motivation}</p>
            </div>
          ` : ''}

          <div style="background-color: #ede9fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #5b21b6; margin: 0;">
              <strong>Next Steps:</strong> Review this application and schedule an advisory board interview if qualified.
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
    console.error("Error in notify-advisory-board-signup function:", error);
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