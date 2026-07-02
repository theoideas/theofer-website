import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") || "daily"; 
  const authHeader = req.headers.get("authorization");
  
  if (process.env.VERCEL_ENV === "production" && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const startDate = new Date();
  if (type === "daily") {
    startDate.setDate(startDate.getDate() - 1);
  } else if (type === "weekly") {
    startDate.setDate(startDate.getDate() - 7);
  } else if (type === "monthly") {
    startDate.setMonth(startDate.getMonth() - 1);
  }

  // Usamos la llave maestra (Service Role) para saltarnos el RLS y poder leer los datos
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { data: leads, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .gte("fecha_creacion", startDate.toISOString());

    if (error) throw error;

    const total = leads?.length || 0;
    
    const emails = process.env.CONTACT_EMAIL_TO?.split(",") || ["info@theofer.com"];
    
    const emailContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
        <h2 style="color: #1e293b;">Resumen ${type === "daily" ? "Diario" : type === "weekly" ? "Semanal" : "Mensual"} de Leads</h2>
        <p>En este periodo, la web ha capturado <strong>${total}</strong> nuevos prospectos.</p>
        <hr style="border: 1px solid #e2e8f0; margin: 30px 0;" />
        ${leads?.map(lead => `
          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f1f5f9;">
            <p style="margin: 0 0 5px 0;"><strong>${lead.nombre}</strong> <span style="color: #94a3b8; font-size: 0.9em;">(${lead.rama} - ${lead.tipo_proyecto || lead.tipo_inversion})</span></p>
            <p style="margin: 0 0 5px 0; font-size: 0.9em;">✉️ ${lead.email}</p>
            <p style="margin: 0; font-size: 0.85em; color: #64748b;">UTMs: Fuente: <strong>${lead.utm_source || "Directo"}</strong> | Medio: <strong>${lead.utm_medium || "N/A"}</strong> | Campaña: <strong>${lead.utm_campaign || "N/A"}</strong></p>
          </div>
        `).join("") || "<p>No hubo actividad en este periodo.</p>"}
        <p style="margin-top: 30px; font-size: 0.8em; color: #94a3b8;">Generado automáticamente por THEOFER Platform Analytics.</p>
      </div>
    `;

    await resend.emails.send({
      from: "THEOFER Analytics <onboarding@resend.dev>",
      to: emails,
      subject: `Reporte ${type === "daily" ? "Diario" : type === "weekly" ? "Semanal" : "Mensual"} THEOFER: ${total} Leads Nuevos`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, total });
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
