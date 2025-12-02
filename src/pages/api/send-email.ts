export const prerender = false;
import 'dotenv/config';
import nodemailer from "nodemailer";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `${data.name} <${data.email || "info@kavianroshd.com"}>`,
      to: "info@kavianroshd.com",
      subject: "درخواست مشاوره از وب‌سایت لوتوس",
      text: `نام: ${data.name}\nشماره موبایل: ${data.mobile}\nنوع کسب و کار: ${data.business || "انتخاب نشده"}`,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
