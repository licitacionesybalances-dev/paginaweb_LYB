
'use client';

export default function About() {
  const stats = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "30%", label: "Ahorro Promedio" },
    { number: "98%", label: "Satisfacción del Cliente" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Líderes en Eficiencia Energética
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos una empresa especializada en brindar soluciones integrales de gestión y eficiencia energética. 
              Nuestro equipo de expertos trabaja con las últimas tecnologías para ayudar a empresas y organizaciones 
              a optimizar su consumo energético y reducir su huella de carbono.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Con más de 15 años de experiencia en el sector, hemos desarrollado metodologías propias que nos 
              permiten identificar oportunidades de ahorro significativas y implementar soluciones sostenibles 
              que generan valor a largo plazo.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="rounded-2xl h-96 bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20energy%20engineers%20team%20working%20with%20renewable%20energy%20systems%2C%20modern%20office%20environment%2C%20sustainability%20experts%20analyzing%20data%2C%20teamwork%20collaboration%2C%20professional%20business%20atmosphere%2C%20clean%20technology&width=600&height=400&seq=about-team&orientation=landscape')`
              }}
            ></div>
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <i className="ri-leaf-line text-3xl mr-4"></i>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Energía Limpia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
