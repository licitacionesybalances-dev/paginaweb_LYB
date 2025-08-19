// app/api/contacto/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const nombre = formData.get("nombre");
  const email = formData.get("email");

  return NextResponse.json({
    success: true,
    message: `Solicitud recibida de ${nombre} (${email})`,
  });
}
