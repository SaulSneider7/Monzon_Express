
import React from 'react';
import { ROUTES_DATA, COMPANY_INFO } from '../constants';

const RouteList: React.FC = () => {
  return (
    <section id="rutas" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm mb-2 block">Red de Transporte Público Interprovincial</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] uppercase italic leading-tight">
            Nuestras <span className="text-[#C62828]">Rutas de Servicio</span>
          </h2>
          <p className="mt-4 text-slate-500 font-bold max-w-2xl mx-auto">
            Conectamos pueblos, ciudades y regiones con salidas diarias garantizadas.
          </p>
          <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ROUTES_DATA.map((route) => (
            <div key={route.id} className="bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 hover:border-[#0E6BA8] transition-all group flex flex-col shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0E6BA8] shadow-sm border border-slate-100 group-hover:bg-[#0E6BA8] group-hover:text-white transition-all">
                  <i className={`fa-solid ${route.icon} text-xl`}></i>
                </div>
                <span className="bg-[#C62828]/10 text-[#C62828] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Interprovincial
                </span>
              </div>
              
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 uppercase italic leading-tight group-hover:text-[#0E6BA8] transition-colors">
                {route.name}
              </h3>
              
              <p className="text-slate-500 text-sm mb-8 font-medium italic">
                {route.description}
              </p>
              
              <div className="mt-auto space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F2B705]">Escalas y Paradas</p>
                <div className="flex flex-wrap gap-2">
                  {route.stops.map((stop, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-100 shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0E6BA8]"></div>
                      <span className="text-[11px] font-black text-slate-700 uppercase">{stop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ticketing Banner */}
        <div className="bg-[#2E2E2E] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#0E6BA8]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <span className="text-[#F2B705] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Atención al Pasajero</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-4 leading-none">
                Servicio de <span className="text-[#0E6BA8]">Venta de Pasajes</span>
              </h3>
              <p className="text-slate-400 font-medium max-w-md">
                Reserva tu asiento con anticipación llamando a nuestros terminales autorizados o vía WhatsApp.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              {COMPANY_INFO.ticketingPhones.map((phone, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex items-center gap-5 group hover:bg-[#0E6BA8] transition-all">
                  <div className="w-12 h-12 bg-[#F2B705] rounded-xl flex items-center justify-center text-[#2E2E2E] text-xl group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-ticket"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#F2B705] uppercase tracking-widest group-hover:text-white mb-1">Celular {idx + 1}</p>
                    <a href={`tel:${phone}`} className="text-2xl font-black italic tracking-tighter">
                      {phone.slice(0, 3)} {phone.slice(3, 6)} {phone.slice(6)}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteList;
