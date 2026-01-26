
import React from 'react';
import { PASSENGER_PRICES, PARCEL_INFO } from '../constants';

const PricingSection: React.FC = () => {
  return (
    <section id="tarifas" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm block mb-2">Transparencia</span>
          <h2 className="text-4xl font-black text-[#2E2E2E] uppercase italic">Tarifas y <span className="text-[#C62828]">Precios</span></h2>
          <div className="w-24 h-2 bg-[#F2B705] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Passenger Prices */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#0E6BA8] rounded-xl flex items-center justify-center text-white">
                <i className="fa-solid fa-users text-xl"></i>
              </div>
              <h3 className="text-2xl font-black text-[#2E2E2E] uppercase tracking-tight">Pasajes Interprovinciales</h3>
            </div>
            
            <div className="space-y-4">
              {PASSENGER_PRICES.map((fare, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0E6BA8] transition-colors">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <span className="font-bold text-slate-700">{fare.from}</span>
                    <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                    <span className="font-black text-[#0E6BA8]">{fare.to}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-lg ${fare.offer ? 'text-slate-400 line-through text-sm' : 'text-[#C62828]'}`}>
                        S/ {fare.price.toFixed(2)}
                      </span>
                      {fare.offer && (
                        <span className="font-black text-xl text-[#2E7D32]">
                          S/ {fare.offer.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {fare.offer && (
                      <span className="text-[10px] font-black uppercase text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">
                        Oferta Clientes Continuos
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parcel Prices */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#C62828] rounded-xl flex items-center justify-center text-white">
                  <i className="fa-solid fa-box-open text-xl"></i>
                </div>
                <h3 className="text-2xl font-black text-[#2E2E2E] uppercase tracking-tight">Encomiendas y Envíos</h3>
              </div>
              
              <div className="mb-8">
                <p className="text-slate-500 font-medium mb-6">Realizamos el envío seguro de diversos tipos de carga:</p>
                <div className="grid grid-cols-2 gap-4">
                  {PARCEL_INFO.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <i className="fa-solid fa-check text-[#2E7D32]"></i>
                      <span className="font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                    <i className="fa-solid fa-plus text-[#F2B705]"></i>
                    <span className="font-bold text-slate-700">Y muchos otros más...</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#C62828] rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-2">Desde tan solo</p>
                <p className="text-6xl font-black italic mb-4">S/ {PARCEL_INFO.basePrice.toFixed(2)}</p>
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  <i className="fa-solid fa-circle-info mr-2"></i>
                  {PARCEL_INFO.note}
                </p>
              </div>
            </div>

            <div className="bg-[#F2B705] rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all">
               <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#2E2E2E] rounded-2xl flex items-center justify-center text-[#F2B705] text-2xl group-hover:rotate-12 transition-transform">
                    <i className="fa-solid fa-truck-ramp-box"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] uppercase">Carga Pesada</h4>
                    <p className="text-[#2E2E2E]/70 font-bold">Consulta tarifas especiales</p>
                  </div>
               </div>
               <i className="fa-solid fa-chevron-right text-[#2E2E2E] text-2xl group-hover:translate-x-2 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
