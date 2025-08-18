import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("mensaje") as string;
    const archivo = formData.get("archivo") as File | null;

    if (!archivo) {
      return NextResponse.json({ error: "No se adjuntó archivo" }, { status: 400 });
    }

    // Convertir el archivo PDF a buffer
    const bytes = await archivo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Configurar transporte SMTP con Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar correo con adjunto
    await transporter.sendMail({
      from: `"Web Consulta" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // puedes poner otra dirección si quieres
      subject: "Nueva solicitud de consulta",
      text: `📩 Nueva solicitud recibida:\n\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
      attachments: [
        {
          filename: archivo.name,
          content: buffer,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ message: "Correo enviado con éxito ✅" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
