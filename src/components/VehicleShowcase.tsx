
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
