
'use client';

export default function Services() {
  const services = [
    {
      title: "Auditorías Energéticas",
      description: "Análisis completo de tu consumo energético actual para identificar oportunidades de ahorro y optimización.",
      icon: "ri-search-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20energy%20auditor%20with%20tablet%20analyzing%20electrical%20systems%20in%20modern%20office%20building%2C%20technical%20inspection%2C%20energy%20efficiency%20assessment%2C%20professional%20lighting%2C%20detailed%20documentation&width=400&height=300&seq=audit-service&orientation=landscape"
    },
    {
      title: "Gestión Energética",
      description: "Implementación de sistemas de monitoreo y control para optimizar el consumo energético en tiempo real.",
      icon: "ri-dashboard-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20energy%20management%20control%20room%20with%20multiple%20screens%20showing%20real-time%20energy%20data%2C%20digital%20dashboard%2C%20professional%20monitoring%20equipment%2C%20blue%20and%20green%20interface%20colors%2C%20high-tech%20environment&width=400&height=300&seq=management-service&orientation=landscape"
    },
    {
      title: "Energías Renovables",
      description: "Diseño e instalación de sistemas de energía solar, eólica y otras fuentes renovables adaptadas a tus necesidades.",
      icon: "ri-sun-line",
      image: "https://readdy.ai/api/search-image?query=Solar%20panel%20installation%20on%20modern%20commercial%20building%20roof%2C%20renewable%20energy%20system%2C%20professional%20installation%20team%2C%20clear%20blue%20sky%2C%20sustainable%20technology%2C%20clean%20energy%20infrastructure&width=400&height=300&seq=renewable-service&orientation=landscape"
    },
    {
      title: "Eficiencia Energética",
      description: "Mejoras en sistemas de iluminación, climatización y equipos para reducir el consumo energético.",
      icon: "ri-flashlight-line",
      image: "https://readdy.ai/api/search-image?query=LED%20lighting%20system%20in%20modern%20office%20space%2C%20energy%20efficient%20lighting%20installation%2C%20bright%20professional%20environment%2C%20efficient%20electrical%20systems%2C%20modern%20workspace%20lighting&width=400&height=300&seq=efficiency-service&orientation=landscape"
    },
    {
      title: "Certificación Energética",
      description: "Obtención de certificados de eficiencia energética para cumplir con normativas y mejorar el valor de tu propiedad.",
      icon: "ri-award-line",
      image: "https://readdy.ai/api/search-image?query=Energy%20efficiency%20certificate%20document%20with%20rating%20scale%2C%20official%20certification%20papers%2C%20professional%20documentation%2C%20green%20building%20standards%2C%20sustainability%20compliance%20rating&width=400&height=300&seq=certification-service&orientation=landscape"
    },
    {
      title: "Consultoría Especializada",
      description: "Asesoramiento experto en normativas energéticas, subvenciones y estrategias de sostenibilidad.",
      icon: "ri-user-settings-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20energy%20consultant%20presenting%20to%20business%20team%2C%20modern%20conference%20room%2C%20energy%20efficiency%20charts%20and%20graphs%2C%20professional%20meeting%2C%20sustainable%20business%20solutions&width=400&height=300&seq=consulting-service&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para optimizar tu consumo energético y reducir costos operativos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-2xl text-green-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
