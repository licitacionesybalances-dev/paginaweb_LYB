// app/api/contacto/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Desactivar bodyParser de Next.js
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Error al procesar archivo" });

    console.log("Campos:", fields);
    console.log("Archivos:", files);

    // Aquí puedes guardar el archivo en disco o subirlo a S3, etc.
    res.status(200).json({ message: "Solicitud recibida" });
  });
}
