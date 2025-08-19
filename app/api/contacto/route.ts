// app/api/contacto/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

import type { Fields, Files } from "formidable";


export const runtime = "nodejs";

export async function POST(req: Request): Promise<Response> {
  const form = formidable({ multiples: false, keepExtensions: true });

  return new Promise((resolve) => {

    form.parse(req as any, async (err: Error | null, fields: Fields, files: Files) => {
      if (err) {
        console.error("Error parseando form:", err);
        resolve(
          NextResponse.json({ error: "Error al procesar el archivo" }, { status: 500 })
        );
        return;
      }

      try {
        const nombre = fields.nombre as string;
        const email = fields.email as string;
        const mensaje = fields.mensaje as string;
        const archivo = files.archivo?.[0];

        // Configura tu transporte SMTP (ejemplo con Gmail)
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER, // tu correo
            pass: process.env.SMTP_PASS, // tu clave o App Password
          },
        });

        await transporter.sendMail({
          from: `"Formulario Web" <${process.env.SMTP_USER}>`,
          to: "tucorreo@ejemplo.com",
          subject: "Nueva solicitud de contacto",
          text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje:\n${mensaje}`,
          attachments: archivo
            ? [
                {
                  filename: archivo.originalFilename,
                  path: archivo.filepath, // formidable guarda en tmp
                },
              ]
            : [],
        });

        resolve(NextResponse.json({ message: "✅ Correo enviado correctamente" }));
      } catch (error) {
        console.error("Error enviando correo:", error);
        resolve(
          NextResponse.json({ error: "Error enviando correo" }, { status: 500 })
        );
      }
    });
  });
}
