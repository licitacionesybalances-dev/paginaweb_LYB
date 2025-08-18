// app/api/contacto/route.ts
import { NextResponse } from "next/server";
import formidable from "formidable";

// Next.js App Router requiere bodyParser desactivado de esta manera:
export const runtime = "nodejs"; // permite usar Node APIs como formidable

export const POST = async (req: Request) => {
  const form = formidable({ multiples: false });

  return new Promise((resolve) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        resolve(
          NextResponse.json({ error: "Error al procesar el archivo" }, { status: 500 })
        );
        return;
      }

      console.log("Campos recibidos:", fields);
      console.log("Archivo recibido:", files);

      resolve(
        NextResponse.json({ message: "Solicitud recibida correctamente" })
      );
    });
  });
};