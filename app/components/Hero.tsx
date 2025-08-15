
'use client';

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const bgUrl = "https://readdy.ai/api/search-image?query=Modern%20solar%20panels%20and%20wind%20turbines%20in%20a%20green%20field%20with%20blue%20sky%2C%20clean%20energy%20infrastructure%2C%20sustainable%20power%20generation%2C%20professional%20industrial%20photography%2C%20bright%20natural%20lighting%2C%20environmental%20technology%2C%20renewable%20energy%20facility&width=1920&height=1080&seq=hero-energy&orientation=landscape";

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Fondo con imagen externa */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${bgUrl}')`,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Logo responsive */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo de la empresa"
            width={170}
            height={142}
            priority
            className="w-28 h-auto sm:w-32 md:w-40 lg:w-44"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Soluciones Energéticas
          <span className="block text-green-400">Inteligentes</span>
        </h1>

        {/* Descripción */}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Optimizamos su facturación energética con tecnología avanzada y estrategias personalizadas para maximizar la eficiencia y reducir costes.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Solicitar estudio gratuito <br /> (mediante factura)
            </button>
          </Link>
          <Link href="/servicios">
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Conocer Servicios
            </button>
          </Link>
        </div>

        <div className="flex justify-center mb-6">
          <p></p>
        </div>
        <div className="flex justify-center mb-6">
          <p></p>
        </div>
        <div className="flex justify-center mb-6">
          <p></p>
        </div>
        <div className="flex justify-center mb-6">
          <p></p>
        </div>
        
      </div>
    </section>
  );
}
