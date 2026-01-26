import React from 'react';
import { ROUTES_DATA } from '../constants';

const RouteList: React.FC = () => {
  return (
    <section id="rutas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo institucional secundario */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo-horizontal.png"
            alt="Empresa de Transportes Monzón Express y Servicios Múltiples SAC"
            className="h-16 sm:h-20 md:h-24 object-contain opacity-85"
            loading="lazy"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm mb-2 block">
            Red de Conectividad
          </span>
          <h2 className="text-4xl font-black text-[#2E2E2E] uppercase italic">
            Destinos <span className="text-[#C62828]">Estratégicos</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROUTES_DATA.map((route) => (
            <div
              key={route.id}
              className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 hover:border-[#0E6BA8] transition-all group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0E6BA8] mb-6 shadow-sm border border-slate-100 group-hover:bg-[#0E6BA8] group-hover:text-white transition-all">
                <i className={`fa-solid ${route.icon} text-xl`}></i>
              </div>

              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 uppercase tracking-tight">
                {route.name}
              </h3>

              <p className="text-slate-500 text-sm mb-6 font-medium">
                {route.description}
              </p>

              <div className="space-y-3">
                {route.stops.map((stop, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F2B705]"></div>
                    <span className="text-sm font-bold text-slate-700">
                      {stop}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RouteList;
