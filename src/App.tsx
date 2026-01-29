
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleShowcase from './components/VehicleShowcase';
import ServiceCard from './components/ServiceCard';
import RouteList from './components/RouteList';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import { SERVICES_DATA, COMPANY_INFO, MANAGEMENT_TEAM, BRANCHES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] selection:bg-[#0E6BA8] selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* NEW: Logo and Infinite Vehicle Carrousel */}
        <VehicleShowcase />

        {/* Regions Showcase */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0E6BA8] font-black tracking-widest uppercase text-sm block mb-2">Explora con Nosotros</span>
              <h2 className="text-4xl font-black text-[#2E2E2E] uppercase italic">Nuestra Cobertura <span className="text-[#C62828]">Regional</span></h2>
              <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Huánuco */}
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <img src="./huanuco.jpg" alt="Huánuco" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-black uppercase italic">Huánuco</h4>
                  <p className="text-sm font-bold text-[#F2B705]">Puente Calicanto / Tingo María</p>
                </div>
              </div>
              {/* Ancash */}
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <img src="./ancash.webp" alt="Ancash" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-black uppercase italic">Ancash</h4>
                  <p className="text-sm font-bold text-[#F2B705]">Callejón de Huaylas / Chavín</p>
                </div>
              </div>
              {/* San Martin */}
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <img src="./san_martin.webp" alt="San Martin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-black uppercase italic">San Martín</h4>
                  <p className="text-sm font-bold text-[#F2B705]">Uchiza / Tocache / Tarapoto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#C62828] font-black tracking-widest uppercase text-sm block mb-2">Servicios Integrales</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tighter uppercase italic">
                Transporte de <span className="text-[#0E6BA8]">Personal y Logística</span>
              </h2>
              <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
              <p className="mt-8 text-lg font-bold text-slate-600 max-w-2xl mx-auto">
                Realizamos transporte corporativo especializado para empresas en todo el Perú y brindamos soluciones de movilidad versátiles para cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Rental Section */}
        <section id="alquiler" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute left-0 top-0 w-64 h-64 bg-[#F2B705]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#F59E0B] font-black uppercase tracking-widest text-sm mb-4 block italic">Libertad de Movimiento</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-6 uppercase italic leading-tight">
                  Alquiler de <br /><span className="text-[#0E6BA8]">Vehículos Modernos</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                  En Monzón Express, ofrecemos el servicio de alquiler de vehículos para que disfrutes de tus viajes con total independencia. Ideal para <span className="text-[#0E6BA8] font-bold">turismo</span> o <span className="text-[#0E6BA8] font-bold">paseos familiares</span>.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-[#F59E0B] group hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#F59E0B]">
                      <i className="fa-solid fa-car-side"></i>
                    </div>
                    <span className="text-lg font-black text-[#2E2E2E] uppercase italic">Autos Sedán</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-[#0E6BA8] group hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0E6BA8]">
                      <i className="fa-solid fa-truck-pickup"></i>
                    </div>
                    <span className="text-lg font-black text-[#2E2E2E] uppercase italic">Camionetas 4x4</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-[#C62828] group hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#C62828]">
                      <i className="fa-solid fa-shuttle-van"></i>
                    </div>
                    <span className="text-lg font-black text-[#2E2E2E] uppercase italic">Camionetas SUV</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20quisiera%20cotizar%20el%20alquiler%20de%20un%20vehículo.`}
                  className="inline-flex items-center gap-3 bg-[#2E2E2E] text-white px-8 py-4 rounded-2xl font-black uppercase italic hover:bg-black transition-all shadow-xl"
                >
                  Cotizar Alquiler <i className="fa-solid fa-calendar-days"></i>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
                  alt="SUV Rental"
                  className="rounded-3xl shadow-lg h-64 w-full object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
                  alt="4x4 Truck"
                  className="rounded-3xl shadow-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600"
                  alt="Sedan Car"
                  className="rounded-3xl shadow-lg h-64 w-full object-cover col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Routes Highlight */}
        <RouteList />

        <PricingSection />

        {/* Branches Section */}
        <section id="sedes" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C62828] font-black tracking-widest uppercase text-sm block mb-2">Presencia Regional</span>
              <h2 className="text-4xl font-black text-[#2E2E2E] uppercase italic">Nuestras <span className="text-[#0E6BA8]">Sucursales</span></h2>
              <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
              <p className="mt-8 text-slate-500 font-bold max-w-2xl mx-auto uppercase text-sm tracking-wide">Puntos de atención autorizados para pasajeros y encomiendas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BRANCHES_DATA.map((branch, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:border-[#0E6BA8] hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0E6BA8] mb-6 group-hover:bg-[#0E6BA8] group-hover:text-white transition-all">
                    <i className={`fa-solid ${branch.icon} text-xl`}></i>
                  </div>
                  <span className="text-[#C62828] font-black text-[10px] tracking-widest uppercase mb-2 block">{branch.region}</span>
                  <h4 className="text-lg font-black text-[#2E2E2E] uppercase italic mb-4 leading-tight">{branch.city}</h4>
                  <div className="flex gap-3 items-start">
                    <i className="fa-solid fa-location-dot text-[#F2B705] mt-1 text-sm"></i>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section (NEW) */}
        <ContactSection />

        {/* Management Board Section */}
        <section id="directorio" className="py-24 bg-[#2E2E2E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#F2B705] font-black tracking-widest uppercase text-sm block mb-2">Liderazgo y Confianza</span>
              <h2 className="text-4xl font-black uppercase italic">Directorio <span className="text-[#0E6BA8]">Ejecutivo</span></h2>
              <p className="mt-4 text-slate-400 font-bold">Nuestros directivos están a su disposición para consultas, reclamos o solicitudes de membresía.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {MANAGEMENT_TEAM.map((member, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-[#0E6BA8] transition-all group">
                  <div className="w-16 h-16 bg-[#F2B705] rounded-2xl flex items-center justify-center text-[#2E2E2E] mb-6 text-2xl group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${member.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-black uppercase italic mb-2 leading-tight">{member.name}</h4>
                  <p className="text-[#F2B705] font-black text-xs uppercase tracking-widest group-hover:text-white">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="nosotros" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="./CEO.webp"
                  alt="Equipo Directivo"
                  className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm mb-4 block">Sobre Nosotros</span>
                <h2 className="text-4xl font-black text-[#2E2E2E] mb-6 uppercase italic">Nuestra <span className="text-[#C62828]">Trayectoria</span></h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                  {COMPANY_INFO.legalName} es una organización dedicada al desarrollo logístico nacional. Facilitamos la movilidad de personal corporativo y el intercambio de mercancías con los más altos estándares.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                  Contamos con un equipo directivo comprometido con la excelencia, permitiendo que clientes y socios encuentren en nosotros un aliado estratégico para sus necesidades de transporte y servicios múltiples.
                </p>
                <div className="flex flex-wrap gap-8 border-t border-slate-100 pt-8">
                  <div className="bg-slate-50 px-6 py-4 rounded-2xl">
                    <p className="text-3xl font-black text-[#0E6BA8]">20+</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Unidades Modernas</p>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-2xl">
                    <p className="text-3xl font-black text-[#C62828]">100%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Cobertura Nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo institucional horizontal */}
          <div className="flex justify-center mb-16">
            <img
              src="./logo-horizontal.png"
              alt="Empresa de Transportes Monzón Express y Servicios Múltiples SAC"
              className="h-20 sm:h-24 md:h-28 max-w-[520px] object-contain opacity-90"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-slate-500 font-medium leading-relaxed mb-4">
                {COMPANY_INFO.legalName}
              </p>
              <p className="text-slate-400 font-bold text-xs uppercase mb-6">RUC: {COMPANY_INFO.ruc}</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#0E6BA8] transition-all border border-slate-100"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#C62828] transition-all border border-slate-100"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-[#25D366] transition-all border border-slate-100"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Menú Rápido</h4>
              <ul className="space-y-4">
                <li><a href="#servicios" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Servicios Corporativos</a></li>
                <li><a href="#alquiler" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Alquiler de Vehículos</a></li>
                <li><a href="#rutas" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Rutas a Lima</a></li>
                <li><a href="#sedes" className="text-slate-500 hover:text-[#0E6BA8] font-bold transition-colors">Nuestras Sedes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Directorio</h4>
              <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <li><span className="text-[#0E6BA8]">G.G.:</span> ELIAS RUIZ V.</li>
                <li><span className="text-[#C62828]">Sub G.:</span> JAKELINE RUIZ M.</li>
                <li><span className="text-[#F2B705]">Econ.:</span> NINFA MORENO S.</li>
                <li><span className="text-[#2E7D32]">Legal:</span> ESLÍ RUIZ M.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#2E2E2E] font-black uppercase italic mb-6 tracking-tight">Contacto Principal</h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-map-location-dot text-[#0E6BA8] mt-1 shrink-0"></i>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-phone-volume text-[#C62828] mt-1 shrink-0"></i>
                  <p className="text-slate-500 font-bold text-sm">{COMPANY_INFO.phone} - {COMPANY_INFO.mobile}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <i className="fa-solid fa-envelope text-[#F2B705] mt-1 shrink-0"></i>
                  <p className="text-slate-500 font-bold text-sm lowercase">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-bold">© 2024 Monzón Express. Todos los derechos reservados.</p>
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              Desarrollado por <a href={COMPANY_INFO.developerUrl} target="_blank" rel="noopener noreferrer" className="text-[#0E6BA8] hover:underline">tu-sitioweb.com</a>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20quisiera%20solicitar%20un%20servicio%20de%20transporte%20o%20alquiler.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
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
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
