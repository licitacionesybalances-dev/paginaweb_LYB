// app/api/contacto/route.ts
import { NextResponse } from "next/server";
import formidable from "formidable";
import { promisify } from "util";

export const runtime = "nodejs";

export const POST = async (req: Request): Promise<Response> => {
  const form = formidable({ multiples: false });
  const parse = promisify(form.parse.bind(form));

  try {
    const { fields, files } = await parse(req as any) as any;
    console.log("Campos:", fields);
    console.log("Archivos:", files);
    return NextResponse.json({ message: "Solicitud recibida correctamente" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al procesar el archivo" }, { status: 500 });
  }
};