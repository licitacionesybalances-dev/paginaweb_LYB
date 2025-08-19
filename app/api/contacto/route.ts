// app/api/contacto/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");
    const archivo = formData.get("archivo") as File | null;

    if (!archivo) {
      return NextResponse.json({ error: "No se envió archivo" }, { status: 400 });
    }

    if (archivo.type !== "application/pdf") {
      return NextResponse.json({ error: "Solo se permiten archivos PDF" }, { status: 400 });
    }

    // ✅ Ejemplo: leer el contenido del archivo (si lo necesitas en memoria)
    const bytes = await archivo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Aquí podrías guardar en disco, S3, etc.
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    console.log("Archivo:", archivo.name, "->", buffer.length, "bytes");

    return NextResponse.json({ success: true, message: "Solicitud recibida" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
