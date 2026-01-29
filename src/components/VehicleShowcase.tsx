
import React from 'react';

const VEHICLE_IMAGES = [
    "./carrousel_2.webp", // Bus
    "./carrousel_3.webp", // SUV
    "./carrousel_4.webp", // 4x4
    "./carrousel_5.webp", // Van
    "./carrousel_6.webp", // Pickup
    "./carrousel_7.webp", // Sedan
];

const VehicleShowcase: React.FC = () => {
    // We double the array to create a seamless infinite loop effect
    const doubledImages = [...VEHICLE_IMAGES, ...VEHICLE_IMAGES];

    return (
        <div className="bg-white py-12 overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 mb-12">
  <div className="relative group">

    {/* Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#0E6BA8] to-[#C62828] rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

    {/* Contenedor */}
    <div className="relative bg-white px-6 py-6 rounded-3xl flex justify-center">
      <img
        src="./logo-horizontal.png"
        alt="Monzón Express - Servicios Múltiples"
        className="
          w-full
          max-w-5xl
          h-auto
          object-contain
          transition-transform
          group-hover:scale-[1.02]
        "
      />
    </div>

  </div>
</div>



            {/* Infinite Carrousel */}
            <div className="relative flex overflow-x-hidden group">
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-4">
                    {doubledImages.map((src, index) => (
                        <div
                            key={index}
                            className="w-[280px] h-[180px] shrink-0 rounded-2xl overflow-hidden shadow-md border-4 border-white group-hover:pause transition-all"
                        >
                            <img
                                src={src}
                                alt={`Vehículo ${index + 1}`}
                                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* CSS for the animation */}
                <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .pause {
            animation-play-state: paused;
          }
        `}</style>
            </div>

            <div className="text-center mt-6">
                <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Nuestra Flota Moderna & Equipada</p>
            </div>
        </div>
    );
};

export default VehicleShowcase;
