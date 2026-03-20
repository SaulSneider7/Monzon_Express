
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[700px] flex items-center overflow-hidden bg-[#2E2E2E]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
          alt="Transporte profesional" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E6BA8]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
  <div className="max-w-3xl">

    {/* Badge */}
    <div className="inline-block px-4 py-1.5 bg-[#F2B705] text-[#2E2E2E] rounded-full font-bold text-sm mb-8 uppercase tracking-wider">
      Líderes en la Región
    </div>

    {/* LOGO */}
    <div className="mb-6">
      <img
        src="/logo_horizontal.webp"
        alt="Monzón Express - Servicios Múltiples"
        className="
          w-full
          max-w-xl
          md:max-w-2xl
          h-auto
          object-contain
        "
      />
    </div>

    {/* Subtítulo */}
    <h2 className="text-2xl md:text-3xl font-black mb-6 text-white/90 uppercase">
      Transporte, Encomiendas, Carga y Turismo
    </h2>

    {/* Descripción */}
    <p className="text-xl text-slate-100 mb-12 max-w-xl leading-relaxed font-medium">
      Empresa de servicios múltiples al servicio de Monzón y la región.
      Formalidad, trayectoria y compromiso en cada kilómetro.
    </p>

    {/* CTAs */}
    <div className="flex flex-wrap gap-4">
      <a 
        href="#contacto"
        className="bg-[#C62828] hover:bg-[#a32020] text-white px-10 py-5 rounded-xl font-black text-xl transition-all flex items-center gap-3 shadow-2xl uppercase italic"
      >
        Contáctanos ahora <i className="fa-solid fa-arrow-right"></i>
      </a>

      <a 
        href="#servicios"
        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl transition-all flex items-center gap-3 uppercase"
      >
        Nuestros Servicios
      </a>
    </div>

  </div>
</div>

    </section>
  );
};

export default Hero;
