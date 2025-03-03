import nodemailer from "nodemailer";
export { renderers } from "../../renderers.mjs";

const transporter = nodemailer.createTransport({
  host: "mail.dreamhost.com",
  port: 465,
  secure: true,
  auth: {
    user: "scottij1",
    pass: "Fc1w7B4NRz",
  },
});
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "All fields are required",
        }),
        { status: 400 },
      );
    }
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

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      POST,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
