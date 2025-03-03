import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.dreamhost.com",
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "All fields are required",
        }),
        { status: 400 },
      );
    }

    // Send email
    await transporter.sendMail({
      from: "scottij1@dreamhost.com",
      to: "jeff@jeffscotti.net",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Error sending message",
      }),
      { status: 500 },
    );
  }
};
