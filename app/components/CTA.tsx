
'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Optimizar tu Consumo Energético?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Comienza tu transformación energética hoy mismo. Nuestros expertos te ayudarán a reducir costos y mejorar la eficiencia de tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contacto">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Solicitar Consulta Gratuita
              </button>
            </Link>
            <Link href="/auditoria">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Auditoría Energética
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center">
              <i className="ri-phone-line text-2xl mr-3"></i>
              <div>
                <div className="font-semibold">Llama Ahora</div>
                <div className="text-green-200">+34 628 232 718</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-mail-line text-2xl mr-3"></i>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-green-200">licitacionesybalances@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-time-line text-2xl mr-3"></i>
              <div>
                <div className="font-semibold">Respuesta en</div>
                <div className="text-green-200">48 horas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
