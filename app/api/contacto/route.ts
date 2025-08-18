import { NextResponse } from "next/server";
import formidable from "formidable";

// Evitar que Next.js procese el body automáticamente
export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: Request) => {
  const form = formidable({ multiples: false });

  return new Promise((resolve) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        console.error("Error al procesar archivo:", err);
        resolve(
          NextResponse.json(
            { error: "Error al procesar el archivo" },
            { status: 500 }
          )
        );
        return;
      }

      console.log("Campos recibidos:", fields);
      console.log("Archivo recibido:", files);

      // Aquí podrías guardar el archivo en tu servidor o en un storage

      resolve(
        NextResponse.json({ message: "Solicitud recibida correctamente" })
      );
    });
  });
};