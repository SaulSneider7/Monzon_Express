
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import RouteList from './components/RouteList';
import PricingSection from './components/PricingSection';
import { SERVICES_DATA, COMPANY_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] selection:bg-[#0E6BA8] selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Services Section */}
        <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#C62828] font-black tracking-widest uppercase text-sm block mb-2">Nuestras Soluciones</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tighter uppercase italic">
                Servicios <span className="text-[#0E6BA8]">Integrales</span>
              </h2>
              <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#0E6BA8] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C62828] -skew-x-12 translate-x-32 hidden lg:block opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[#F2B705] font-black uppercase tracking-widest text-sm block mb-4">Diferenciales</span>
                <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight">
                  ¿Por qué confiar en <br /><span className="text-[#F2B705]">Monzón Express?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F2B705]">
                      <i className="fa-solid fa-clock-rotate-left text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase">Experiencia</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Años de trayectoria garantizando puntualidad en cada ruta regional.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F2B705]">
                      <i className="fa-solid fa-shield-check text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase">Seguridad</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Unidades monitoreadas y conductores profesionales altamente capacitados.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F2B705]">
                      <i className="fa-solid fa-handshake text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase">Confianza</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Trato personalizado y transparencia en todos nuestros servicios.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F2B705]">
                      <i className="fa-solid fa-map-location-dot text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase">Cobertura</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Llegamos a los puntos más estratégicos conectando toda la región.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-[#F2B705] rounded-3xl rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
                  alt="Equipo Monzón Express"
                  className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <RouteList />

        <PricingSection />

        {/* About Us */}
        <section id="nosotros" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
                  alt="Oficina administrativa"
                  className="rounded-3xl shadow-xl h-[400px] w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm mb-4 block">Sobre Nosotros</span>
                <h2 className="text-4xl font-black text-[#2E2E2E] mb-6 uppercase italic">Nuestra <span className="text-[#C62828]">Trayectoria</span></h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                  {COMPANY_INFO.legalName} es una organización dedicada al desarrollo logístico y de transporte en el corazón de la región.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                  Nuestra misión es facilitar la movilidad de personas y el intercambio de mercancías mediante servicios de alta calidad, promoviendo el crecimiento económico de Monzón y las zonas aledañas. Nos distinguimos por nuestra formalidad institucional y el compromiso inquebrantable con cada cliente.
                </p>
                <div className="flex gap-8 border-t border-slate-100 pt-8">
                  <div>
                    <p className="text-3xl font-black text-[#0E6BA8]">15+</p>
                    <p className="text-sm font-bold text-slate-400 uppercase">Años de Éxito</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#C62828]">500k</p>
                    <p className="text-sm font-bold text-slate-400 uppercase">Viajes Seguros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contacto" className="py-24 bg-[#2E2E2E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#F2B705] font-black uppercase tracking-widest text-sm block mb-2">Canales de Atención</span>
              <h2 className="text-4xl font-black uppercase italic">Encuéntranos en <span className="text-[#0E6BA8]">la Región</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-[#0E6BA8] transition-colors group">
                <div className="w-14 h-14 bg-[#0E6BA8] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4 className="text-xl font-black uppercase text-[#F2B705] mb-3 italic">Ubicación</h4>
                <p className="text-slate-400 font-bold leading-relaxed">{COMPANY_INFO.address}</p>
              </div>

              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-[#C62828] transition-colors group">
                <div className="w-14 h-14 bg-[#C62828] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h4 className="text-xl font-black uppercase text-[#C62828] mb-3 italic">Central</h4>
                <p className="text-slate-400 font-bold leading-relaxed">{COMPANY_INFO.phone}</p>
              </div>

              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-[#25D366] transition-colors group">
                <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h4 className="text-xl font-black uppercase text-[#25D366] mb-3 italic">WhatsApp</h4>
                <p className="text-slate-400 font-bold leading-relaxed">Atención inmediata las 24 horas del día.</p>
              </div>

              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-[#F2B705] transition-colors group">
                <div className="w-14 h-14 bg-[#F2B705] rounded-2xl flex items-center justify-center text-[#2E2E2E] text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <h4 className="text-xl font-black uppercase text-[#F2B705] mb-3 italic">Horarios</h4>
                <p className="text-slate-400 font-bold leading-relaxed">{COMPANY_INFO.hours}</p>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center gap-8">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20vengo%20de%20la%20web.%20Quisiera%20más%20información.`}
                className="bg-[#C62828] hover:bg-[#a32020] text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl uppercase italic flex items-center gap-4 group"
              >
                Reservar ahora <i className="fa-solid fa-paper-plane group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"></i>
              </a>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0E6BA8] transition"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C62828] transition"><i className="fa-brands fa-instagram text-xl"></i></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2E7D32] transition"><i className="fa-brands fa-tiktok text-xl"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
              {/* Logo institucional horizontal */}
              <div className="flex justify-center mb-16">
                <img
                  src="./logo-horizontal.png"
                  alt="Empresa de Transportes Monzón Express y Servicios Múltiples SAC"
                  className="h-20 sm:h-24 md:h-28 max-w-[520px] object-contain opacity-90"
                  loading="lazy"
                />
              </div>

              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                Líderes en transporte interprovincial y servicios múltiples en la región Monzón. Comprometidos con su seguridad y puntualidad.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#0E6BA8] hover:bg-[#0E6BA8]/10 transition-all border border-slate-100"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#C62828] hover:bg-[#C62828]/10 transition-all border border-slate-100"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all border border-slate-100"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Navegación</h4>
              <ul className="space-y-4">
                <li><a href="#inicio" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Nuestros Servicios</a></li>
                <li><a href="#rutas" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Rutas Principales</a></li>
                <li><a href="#tarifas" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Tarifario Actualizado</a></li>
                <li><a href="#nosotros" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Sobre la Empresa</a></li>
              </ul>
            </div>

            {/* Column 3: Services Summary */}
            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Servicios</h4>
              <ul className="space-y-4">
                {SERVICES_DATA.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-bold group">
                    <i className={`fa-solid ${s.icon} text-xs text-[#F2B705] group-hover:scale-125 transition-transform`}></i>
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact details */}
            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Atención</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-map-location-dot text-[#0E6BA8] mt-1"></i>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-phone-volume text-[#C62828] mt-1"></i>
                  <p className="text-slate-500 font-bold text-sm">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-clock text-[#2E7D32] mt-1"></i>
                  <p className="text-slate-500 font-bold text-sm">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-bold">© 2024 Monzón Express. Todos los derechos reservados.</p>
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              Diseño por <a href={COMPANY_INFO.developerUrl} target="_blank" rel="noopener noreferrer" className="text-[#0E6BA8] hover:underline">tu-sitioweb.com</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20vengo%20de%20la%20web.%20Quisiera%20más%20información.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-20 h-20 rounded-full shadow-[0_15px_60px_-15px_rgba(37,211,102,0.5)] flex items-center justify-center text-4xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-slow"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
