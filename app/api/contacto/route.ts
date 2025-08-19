// app/api/contacto/route.ts
import { NextResponse } from "next/server";

// Maneja únicamente POST
export async function POST(req: Request) {
  try {
    // Leer los datos enviados
    const formData = await req.formData();
    const nombre = formData.get("nombre") || "sin nombre";

    // Respuesta simple para probar
    return NextResponse.json({
      success: true,
      message: `Hola ${nombre}, tu POST llegó correctamente`,
    });
  } catch (error) {
    console.error("Error en /api/contacto:", error);
    return NextResponse.json(
      { error: "Error desconocido" },
      { status: 500 }
    );
  }
}
