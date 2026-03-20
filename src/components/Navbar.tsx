
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Servicios", href: "#servicios" },
        { name: "Autopartes", href: "#autopartes" },
        { name: "Grifo", href: "#grifo" },
        { name: "Rutas", href: "#rutas" },
        { name: "Tarifas", href: "#tarifas" },
        { name: "Sedes", href: "#sedes" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="./logo.png"
                            alt="Monzón Express"
                            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
                        />

                        <div className="hidden sm:flex flex-col leading-none">
                            <span className="font-black text-lg text-[#0E6BA8] uppercase">
                                Monzón Express
                            </span>
                            <span className="text-[10px] tracking-widest text-[#C62828] uppercase font-semibold">
                                Servicios Múltiples
                            </span>
                        </div>
                    </div>


                    <div className="hidden lg:flex space-x-6 xl:space-x-8 font-bold text-slate-700 text-sm uppercase tracking-tighter">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-[#0E6BA8] transition relative group py-2">
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0E6BA8] transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <a
                            href={`tel:${COMPANY_INFO.mobile}`}
                            className="hidden xl:flex items-center gap-2 text-[#0E6BA8] font-black hover:scale-105 transition-transform uppercase text-sm"
                        >
                            <i className="fa-solid fa-phone"></i>
                            <span>Llamar</span>
                        </a>
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C62828] text-white px-4 sm:px-6 py-2.5 rounded-lg font-black hover:bg-[#a32020] transition shadow-md text-xs sm:text-sm uppercase italic tracking-tight"
                        >
                            Consultar
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
                            aria-label="Menu"
                        >
                            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-black text-slate-700 hover:text-[#0E6BA8] text-lg py-2 border-b border-slate-50 uppercase italic"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`tel:${COMPANY_INFO.mobile}`}
                            className="flex items-center justify-center gap-2 text-[#0E6BA8] font-black border-2 border-[#0E6BA8] py-4 rounded-2xl uppercase italic"
                        >
                            <i className="fa-solid fa-phone"></i>
                            Llamar a Central
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
