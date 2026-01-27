
import React from 'react';
import type { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
      <div 
        className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ color: service.categoryColor }}
      >
        <i className={`fa-solid ${service.icon} text-9xl -mr-10 -mt-10`}></i>
      </div>
      
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white text-3xl shadow-lg transition-transform group-hover:-translate-y-2"
        style={{ backgroundColor: service.categoryColor }}
      >
        <i className={`fa-solid ${service.icon}`}></i>
      </div>
      
      <h3 className="text-2xl font-black mb-4 text-[#2E2E2E] uppercase tracking-tight leading-tight">
        {service.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed font-medium">
        {service.description}
      </p>
      
    </div>
  );
};

export default ServiceCard;
