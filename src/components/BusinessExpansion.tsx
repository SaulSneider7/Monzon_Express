
import React from 'react';
import { AUTOPARTS_DATA, GAS_STATION_DATA } from '../constants';

const BusinessExpansion: React.FC = () => {
    return (
        <div id="expansion" className="space-y-24 py-24">
            {/* Autoparts Store Section */}
            <section id="autopartes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-[#0E6BA8] font-black uppercase tracking-widest text-sm mb-4 block italic">Nueva Apertura</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-6 uppercase italic leading-tight">
                            Tienda de <br /><span className="text-[#C62828]">Autopartes Monzón</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                            Contamos con un amplio stock de repuestos originales y alternativos de alta calidad para todas las marcas del mercado peruano. Especialistas en marcas asiáticas y americanas.
                        </p>

                        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mb-10">
                            {AUTOPARTS_DATA.brands.map((brand, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                                    <img src={brand.logo} alt={brand.name} className="h-8 object-contain" referrerPolicy="no-referrer" />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-black text-[#2E2E2E] uppercase tracking-widest mb-4">Repuestos Disponibles:</h4>
                            <div className="flex flex-wrap gap-2">
                                {AUTOPARTS_DATA.parts.map((part, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                                        {part.name}
                                    </span>
                                ))}
                                <span className="px-4 py-2 bg-[#F2B705]/20 text-[#2E2E2E] rounded-full text-xs font-bold uppercase tracking-wider border border-[#F2B705]/30">
                                    Y más...
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-48 rounded-3xl overflow-hidden shadow-lg">
                                <img src={AUTOPARTS_DATA.parts[0].image} alt="Suspension" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                                <img src={AUTOPARTS_DATA.parts[2].image} alt="Clutch" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                                <img src={AUTOPARTS_DATA.parts[3].image} alt="Filters" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="h-48 rounded-3xl overflow-hidden shadow-lg">
                                <img src={AUTOPARTS_DATA.parts[6].image} alt="Springs" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gas Station Section */}
            <section id="grifo" className="bg-[#2E2E2E] py-24 overflow-hidden relative">
                <div className="absolute right-0 top-0 w-96 h-96 bg-[#0E6BA8]/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#F2B705] font-black tracking-widest uppercase text-sm block mb-2">Abastecimiento Rural</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">Grifo <span className="text-[#0E6BA8]">Monzón Express</span></h2>
                        <div className="w-24 h-2 bg-[#C62828] mx-auto mt-6"></div>
                        <p className="mt-8 text-lg font-bold text-slate-400 max-w-2xl mx-auto">
                            Garantizamos combustible de alta pureza para nuestra flota y el público en general. Potencia y rendimiento para cada kilómetro.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {GAS_STATION_DATA.fuels.map((fuel, idx) => (
                            <div key={idx} className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={fuel.image} alt={fuel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="px-3 py-1 bg-[#F2B705] text-[#2E2E2E] text-[10px] font-black uppercase tracking-widest rounded-lg">
                                            {fuel.octane}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-black text-white uppercase italic mb-3">{fuel.name}</h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                        {fuel.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#0E6BA8] rounded-2xl flex items-center justify-center text-white text-3xl">
                                <i className="fa-solid fa-gas-pump"></i>
                            </div>
                            <div>
                                <h5 className="text-white font-black uppercase italic text-lg">Servicio 24/7</h5>
                                <p className="text-slate-400 text-sm font-bold">Abastecimiento continuo para rutas interprovinciales.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/10 text-white font-black text-xs uppercase tracking-widest">Gasolina</div>
                            <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/10 text-white font-black text-xs uppercase tracking-widest">Petróleo</div>
                            <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/10 text-white font-black text-xs uppercase tracking-widest">Gas</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessExpansion;
