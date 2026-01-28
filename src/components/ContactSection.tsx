
import React from 'react';
import { COMPANY_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0E6BA8]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <span className="text-[#C62828] font-black uppercase tracking-widest text-sm mb-4 block italic">Canales de Atención</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-8 uppercase italic leading-tight">
              Oficina <span className="text-[#0E6BA8]">Principal</span> y Contacto
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0E6BA8] shrink-0 border border-slate-100">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#C62828] mb-1">Dirección</h4>
                  <p className="text-xl font-bold text-slate-700 leading-tight">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#C62828] shrink-0 border border-slate-100">
                  <i className="fa-solid fa-phone-volume text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#C62828] mb-1">Teléfonos de Atención</h4>
                  <p className="text-xl font-bold text-slate-700 leading-tight">Central: {COMPANY_INFO.phone}</p>
                  <p className="text-xl font-bold text-slate-700 leading-tight">Móvil: {COMPANY_INFO.mobile}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#F2B705] shrink-0 border border-slate-100">
                  <i className="fa-solid fa-envelope-open-text text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#C62828] mb-1">Correo Electrónico</h4>
                  <p className="text-xl font-bold text-slate-700 leading-tight lowercase">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2E2E2E] shrink-0 border border-slate-100">
                  <i className="fa-solid fa-id-card text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#C62828] mb-1">Identificación Fiscal</h4>
                  <p className="text-xl font-black text-slate-700 uppercase italic">RUC: {COMPANY_INFO.ruc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Side */}
          <div className="bg-slate-50 rounded-[3rem] p-8 sm:p-12 border border-slate-100 shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-black text-[#2E2E2E] mb-6 uppercase italic">Comunícate de manera <span className="text-[#C62828]">directa</span></h3>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
              ¿Tienes una duda sobre nuestros servicios, tarifas o disponibilidad de rutas? Nuestro equipo está listo para atenderte de forma inmediata.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`tel:${COMPANY_INFO.mobile}`}
                className="flex items-center justify-center gap-3 bg-[#0E6BA8] text-white px-6 py-5 rounded-2xl font-black uppercase italic hover:scale-[1.02] transition-all shadow-lg"
              >
                <i className="fa-solid fa-phone"></i> Llamar Móvil
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace('-', '')}`}
                className="flex items-center justify-center gap-3 bg-[#2E2E2E] text-white px-6 py-5 rounded-2xl font-black uppercase italic hover:scale-[1.02] transition-all shadow-lg"
              >
                <i className="fa-solid fa-phone-flip"></i> Llamar Central
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola,%20quisiera%20solicitar%20información%20sobre%20sus%20servicios.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-5 rounded-2xl font-black uppercase italic hover:scale-[1.02] transition-all shadow-lg sm:col-span-2"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i> Enviar WhatsApp
              </a>
            </div>
            
            <p className="mt-8 text-center text-xs font-black uppercase tracking-widest text-slate-400">
              Horario de Atención: {COMPANY_INFO.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
