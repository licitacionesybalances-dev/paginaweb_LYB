import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Obtener el FormData directamente
    const formData = await req.formData();

    // Campos del formulario
    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("mensaje") as string;
    const archivo = formData.get("archivo") as File | null;
    
    // Configurar el transporte SMTP (ejemplo con Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // tu correo
        pass: process.env.SMTP_PASS, // contraseña o app password
      },
    });

    // Preparar el correo
    const mailOptions: any = {
      from: `"${nombre}" <${email}>`,
      to: process.env.SMTP_TO, // correo receptor
      subject: "Nueva solicitud de contacto",
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}
      `,
      attachments: [],
    };

    if (archivo) {
      const buffer = Buffer.from(await archivo.arrayBuffer());
      mailOptions.attachments.push({
        filename: archivo.name,
        content: buffer,
        contentType: archivo.type,
      });
    }

    // Enviar correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);

    return NextResponse.json({ ok: true, message: "Formulario recibido y correo enviado." });
  } catch (error) {
    console.error("Error al procesar formulario:", error);
    return NextResponse.json({ ok: false, error: (error as Error).message });
  }
}
