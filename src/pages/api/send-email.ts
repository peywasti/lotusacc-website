export const prerender = false;

import nodemailer from "nodemailer";
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // تنظیمات SMTP اختصاصی
    const transporter = nodemailer.createTransport({
      host: "mail.kavianroshd.com",      
      port: 465,                  
      secure: true,              
      auth: {
        user: "lotus@kavianroshd.com",    
        pass: "OAkiTkxNraX4uqk3"
      }
    });

    await transporter.sendMail({
      from: `${data.name} <${data.email || "info@kavianroshd.com"}>`,
      to: "info@kavianroshd.com",
      subject: "درخواست مشاوره از وب‌سایت لوتوس",
      text: `نام: ${data.name}\nشماره موبایل: ${data.mobile}\nنوع کسب و کار: ${data.business || "انتخاب نشده"}`
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

  return new Response(JSON.stringify({ success: false, error: message }), {
    status: 500,
    headers: { "Content-Type": "application/json" }
  });
  }
}
