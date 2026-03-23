import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    //  Validación básica
    if (!name || !email || !message) {
      return Response.json({ success: false, error: "Missing fields" });
    }

    // Validar API key
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return Response.json({ success: false, error: "Server config error" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Juliana Herrera <onboarding@resend.dev>",
      to: ["julianaherrera522@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("RESEND RESPONSE:", response);

    //  Validar respuesta real
    if (response.error) {
      console.error("RESEND ERROR:", response.error);
      return Response.json({ success: false, error: "Email failed" });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json({ success: false, error: "Server error" });
  }
}