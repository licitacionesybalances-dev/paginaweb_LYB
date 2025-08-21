"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fileInput = e.currentTarget.querySelector<HTMLInputElement>(
      'input[name="archivo"]'
    );

    if (!fileInput?.files?.[0]) {
      setStatus("❌ Debes adjuntar un archivo PDF.");
      return;
    }

    if (fileInput.files[0].type !== "application/pdf") {
      setStatus("❌ Solo se permiten archivos PDF.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        body: formData,
      });

      console.log(fileInput.files[0]);

      if (res.ok) {
        setStatus("✅ Tu solicitud fue enviada correctamente.");
        //e.currentTarget.reset();
      } else {
        setStatus("❌ Hubo un error al enviar la solicitud.");
      }
    } catch (error) {
      setStatus("❌ Error de conexión.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Solicitar Consulta
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input name="nombre" required className="w-full p-2 border rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input type="email" name="email" required className="w-full p-2 border rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea name="mensaje" rows={4} required className="w-full p-2 border rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Adjuntar factura (PDF)</label>
            <input type="file" name="archivo" accept="application/pdf" required />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg"
          >
            Enviar solicitud
          </button>
        </form>

        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </main>
  );
}