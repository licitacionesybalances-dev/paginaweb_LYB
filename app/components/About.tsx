
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
              HISTORIA
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestra historia dentro del Área Energética está marcada por varios hitos que han determinado nuestro crecimiento y enfoque de negocio.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              La primera etapa, queda marcada por el estudio y análisis del mercada Eléctrico, desde antes de 1997, con el análisis y estudios de todas las tarifas reguladas del sector eléctrico analizando cual era la más adecuada según la tipología de consumo, optimización de Potencia, corrección de E. Reactiva…
            </p>
            <p className="text-lg text-gray-600 mb-6">
              En 1.997, se produce un hito relevante: Se aprueba la Ley de Liberalización del Sector Eléctrico, y en el sector entendimos que debíamos adelantarnos a las consecuencias de esta ley, buscando un crecimiento de la estructura, y una mayor presencia en el mercado.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Desde entonces los estudios quedaron enfocados en ofrecer servicios que respondieran a las futuras y superiores exigencias de los clientes.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Desde 1997, se han producido varios cambios en el mercado en el que estamos presente, que son necesarios resaltar. El primero es la LIBERALIZACIÓN TOTAL DE LOS MERCADOS ELÉCTRICO Y GASISTA. El segundo cambio, es el desarrollo de las energías renovables en un porcentaje muy elevado, debido al apoyo del Estado con una regulación de primas e incentivos muy adecuada.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Desde entonces, hemos aprovechado estas dos oportunidades, para conocer y analizar todo tipos de ofertas, para con ello conseguir el modelo que mas se ajuste a nuestros clientes
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Desde entonces nos planteamos nuevos retos, tomando un camino de manera independiente, abordando proyectos que mantengan esta línea de progresión, y el posicionamiento de ser una empresa “cercana al cliente” y especializada en Gestión Energética
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
            Ser una empresa cercana al cliente, en la cual se analiza la eficiencia Energética, desde todos los parámetros desde a las necesidades energéticas de cada cliente para reducir sus costes de operación y contribuir en la mejora de a la imagen como empresa que cuida el medio ambiente.
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
