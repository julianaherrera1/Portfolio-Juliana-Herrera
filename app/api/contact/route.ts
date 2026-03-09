import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // VALIDACIÓN
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return Response.json(
        { success: false, error: "Message too short" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
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

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}