/*
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";


sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Campos del formulario
    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("mensaje") as string;
    const archivo = formData.get("archivo") as File | null;

    // Preparar el mensaje base
    const msg: any = {
      to: process.env.SMTP_TO, // receptor
      from: process.env.SMTP_FROM as string, // remitente autorizado en SendGrid
      subject: "Nueva solicitud de contacto",
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}
      `,
      replyTo: email, // permite responder al correo real del usuario
      attachments: [],
    };

    // Si hay archivo adjunto, convertirlo a Base64
    if (archivo) {
      const buffer = Buffer.from(await archivo.arrayBuffer());
      msg.attachments.push({
        content: buffer.toString("base64"),
        filename: archivo.name,
        type: archivo.type,
        disposition: "attachment",
      });
    }

    // Enviar correo
    await sgMail.send(msg);

    return NextResponse.json({
      ok: true,
      message: "Formulario recibido y correo enviado con SendGrid.",
    });
  } catch (error: any) {
    console.error("Error al procesar formulario:", error);
    return NextResponse.json({
      ok: false,
      error: error.message || "Error desconocido",
    });
  }
}*/

import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Preflight y CORS
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*"); // cámbialo por tu dominio en producción
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, x-vercel-protection-bypass"
  );
  return res;
}

// Manejar POST
export async function POST(req: NextRequest) {
  // Validar header de bypass de Vercel
  const bypassHeader = req.headers.get("x-vercel-protection-bypass");
  if (bypassHeader !== process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
    return NextResponse.json(
      { ok: false, error: "No autorizado (bypass inválido)" },
      { status: 401 }
    );
  }

  try {
    const formData = await req.formData();

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("mensaje") as string;
    const archivo = formData.get("archivo") as File | null;

    const msg: any = {
      to: process.env.SMTP_TO,
      from: process.env.SMTP_FROM as string,
      subject: "Nueva solicitud de contacto",
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}
      `,
      replyTo: email,
      attachments: [],
    };

    if (archivo) {
      const arrayBuffer = await archivo.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const base64 = Buffer.from(uint8Array).toString("base64");

      msg.attachments.push({
        content: base64,
        filename: archivo.name,
        type: archivo.type,
        disposition: "attachment",
      });
    }

    await sgMail.send(msg);

    return NextResponse.json({
      ok: true,
      message: "Formulario recibido y correo enviado con SendGrid.",
    });
  } catch (error: any) {
    console.error("Error al procesar formulario:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Error desconocido" },
      { status: 500 }
    );
  }
}
