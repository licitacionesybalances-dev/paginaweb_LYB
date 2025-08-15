
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-leaf-line text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold" style={{fontFamily: 'var(--font-pacifico)'}}>LyB</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas en gestión y eficiencia energética. Transformamos tu consumo energético con soluciones innovadoras y sostenibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Auditorías Energéticas</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Gestión Energética</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Energías Renovables</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Eficiencia Energética</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Certificación</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Av. San Francisco Javier, nº9, 2º planta, Oficina 4 Sevilla, 41005
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                +34 628 232 718
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                licitacionesybalances@gmail.com
              </li>
              <li className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LYB. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
