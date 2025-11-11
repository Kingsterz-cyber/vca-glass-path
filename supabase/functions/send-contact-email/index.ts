import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  fullName: string;
  email: string;
  company?: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, company, phone, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store submission in database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        full_name: fullName,
        email,
        company: company || null,
        phone,
        message,
        status: "new"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store submission");
    }

    console.log("Submission stored:", submission);

    // Send email using Resend
    const timestamp = new Date().toISOString();
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #0B1020; border-bottom: 3px solid #A3F7FF; padding-bottom: 10px; }
          .info-section { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .info-item { margin: 10px 0; }
          .label { font-weight: bold; color: #0B1020; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Message — Victory Clearing Agency</h2>
          
          <div class="info-section">
            <div class="info-item">
              <span class="label">Full Name:</span> ${fullName}
            </div>
            <div class="info-item">
              <span class="label">Email:</span> ${email}
            </div>
            ${company ? `<div class="info-item"><span class="label">Company:</span> ${company}</div>` : ''}
            <div class="info-item">
              <span class="label">Phone:</span> ${phone}
            </div>
            <div class="info-item">
              <span class="label">Message:</span><br>
              <div style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
            </div>
            <div class="info-item">
              <span class="label">Received at (UTC):</span> ${timestamp}
            </div>
            <div class="info-item">
              <span class="label">Submission ID:</span> ${submission.id}
            </div>
          </div>

          <div class="footer">
            <p>This message was sent from the Victory Clearing Agency contact form.</p>
            <p><strong>Your satisfaction is our passion 🤳</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "Victory Clearing Agency <onboarding@resend.dev>",
        to: ["iranezezaking07@gmail.com"],
        cc: ["info@victoryclearing.com"],
        subject: `New Contact Message — Victory Clearing Agency — ${fullName}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error(`Email sending failed: ${JSON.stringify(errorData)}`);
    }

    const emailResponse = await resendResponse.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        status: "ok", 
        message: "Message sent successfully",
        submissionId: submission.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send message. Please try again or contact info@victoryclearing.com directly.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);