import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, branch, projectType, investmentType, message, utmSource, utmMedium, utmCampaign } = body;

    // 1. Insert into Supabase
    const { error } = await supabase
      .from("leads")
      .insert([
        {
          nombre: name,
          email: email,
          rama: branch,
          tipo_proyecto: projectType,
          tipo_inversion: investmentType,
          mensaje: message,
          utm_source: utmSource || null,
          utm_medium: utmMedium || null,
          utm_campaign: utmCampaign || null,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
    }

    // 2. Send Email via Resend
    const emails = process.env.CONTACT_EMAIL_TO?.split(",") || ["info@theofer.com"];

    const emailContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">Nuevo Lead de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rama:</strong> ${branch}</p>
        <p><strong>Tipo Proyecto:</strong> ${projectType}</p>
        <p><strong>Tipo Inversión:</strong> ${investmentType}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="border-left: 4px solid #d4af37; padding-left: 15px; color: #475569; font-style: italic;">
          ${message}
        </blockquote>
        <hr style="border: 1px solid #e2e8f0; margin: 30px 0;" />
        <h3 style="color: #1e293b;">Trazabilidad de Marketing (UTMs)</h3>
        <p><strong>Fuente (utm_source):</strong> ${utmSource || "Orgánico / Directo"}</p>
        <p><strong>Medio (utm_medium):</strong> ${utmMedium || "N/A"}</p>
        <p><strong>Campaña (utm_campaign):</strong> ${utmCampaign || "N/A"}</p>
      </div>
    `;

    await resend.emails.send({
      from: "THEOFER Web <onboarding@resend.dev>", 
      to: emails,
      subject: `Nuevo Lead de Contacto: ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Error interno del servidor" }, { status: 500 });
  }
}
