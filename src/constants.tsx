
import type { Route, Service, PassengerPrice } from './types';

export const COMPANY_INFO = {
  commercialName: "Monzón Express",
  legalName: "EMPRESA DE TRANSPORTES MONZÓN EXPRESS Y SERVICIOS MÚLTIPLES SAC",
  ruc: "20489491266",
  phone: "+51 951 348 262",
  whatsapp: "51951348262",
  address: "Jr. General Prado Nro. 1024, Huánuco",
  hours: "Lun - Dom: 06:00 AM - 09:00 PM",
  developerUrl: "https://tu-sitioweb.com"
};

export const BRANCHES_DATA = [
  {
    region: "LIMA",
    city: "Keiko Sofia Fujimori",
    address: "A.H. KEIKO SOFIA FUJIMORI CAL. LOS CISNES Mz P Lote 18",
    icon: "fa-city"
  },
  {
    region: "HUANUCO",
    city: "Leoncio Prado (Pucayacu)",
    address: "CAS. MILANO SN",
    icon: "fa-tree"
  },
  {
    region: "HUANUCO",
    city: "Huamalies (Llata)",
    address: "JR. 28 DE JULIO SN",
    icon: "fa-mountain-sun"
  },
  {
    region: "HUANUCO",
    city: "Huamalies (Monzón)",
    address: "C.P. SAN BENITO CAL. SAN BENITO Mz A1 Lote 3 (Ref. I.E. 32405 SAN BENITO)",
    icon: "fa-landmark"
  }
];

export const MANAGEMENT_TEAM = [
  { name: "ELIAS RUIZ VILLAORDUÑA", role: "Gerente General", icon: "fa-user-tie" },
  { name: "JAKELINE VIRGINIA RUIZ MORENO", role: "Sub Gerente", icon: "fa-user-group" },
  { name: "NINFA ROSALIA MORENO SALGADO DE RUIZ", role: "Economía y Finanzas", icon: "fa-calculator" },
  { name: "ESLÍ ELIAS RUIZ MORENO", role: "Asesor Legal", icon: "fa-scale-balanced" }
];

export const SERVICES_DATA: Service[] = [
  {
    title: "Transporte de Pasajeros",
    description: "Viajes cómodos y seguros con salidas diarias y puntualidad garantizada en toda la región.",
    icon: "fa-bus",
    categoryColor: "#0E6BA8"
  },
  {
    title: "Alquiler de Vehículos",
    description: "Flota moderna de Autos, Camionetas 4x4 y SUVs para turismo o paseos familiares con total libertad.",
    icon: "fa-key",
    categoryColor: "#F59E0B"
  },
  {
    title: "Transporte Corporativo",
    description: "Servicio especializado para personal de empresas a nivel nacional en unidades modernas (Autos y Remisse).",
    icon: "fa-user-tie",
    categoryColor: "#2E2E2E"
  },
  {
    title: "Envío de Encomiendas",
    description: "Servicio rápido de mensajería y paquetes pequeños con entrega en 24 horas y total seguridad.",
    icon: "fa-box-open",
    categoryColor: "#C62828"
  },
  {
    title: "Servicio de Carga",
    description: "Transporte de mercancías pesadas y logística regional eficiente para negocios y particulares.",
    icon: "fa-truck-moving",
    categoryColor: "#4B5563"
  },
  {
    title: "Turismo Regional",
    description: "Rutas turísticas por los paisajes más bellos de Huánuco, Ancash y San Martín.",
    icon: "fa-camera-retro",
    categoryColor: "#2E7D32"
  }
];

export const ROUTES_DATA: Route[] = [
  {
    id: 1,
    name: "Monzón - Lima / Tingo María - Lima",
    stops: ["Monzón / Tingo María", "Huánuco", "Pasco", "Lima"],
    description: "Servicio Premium en Autos y Remisse conectando con la capital.",
    icon: "fa-car-side"
  },
  {
    id: 2,
    name: "Ruta Huánuco - Monzón",
    stops: ["Huánuco", "Tingo María", "Monzón"],
    description: "Conexión principal entre la capital regional y el valle.",
    icon: "fa-route"
  },
  {
    id: 3,
    name: "Eje Selva San Martín",
    stops: ["Monzón", "Aucayacu", "Uchiza", "Tocache", "Tarapoto"],
    description: "Corredor vital para el comercio con la selva norte.",
    icon: "fa-tree"
  },
  {
    id: 4,
    name: "Circuito de Altura Huánuco - Ancash",
    stops: ["Llata", "Chavín de Huántar", "Huaraz"],
    description: "Ruta histórica que une la sierra de Huánuco con el Callejón de Huaylas.",
    icon: "fa-mountain"
  }
];

export const PASSENGER_PRICES: PassengerPrice[] = [
  { from: "Tingo María", to: "Tocache", price: 40.00 },
  { from: "Tingo María", to: "Uchiza", price: 35.00 },
  { from: "Tingo María", to: "Progreso", price: 30.00 },
  { from: "Tingo María", to: "Yanajanca", price: 30.00 },
  { from: "Tingo María", to: "Aucayacu", price: 15.00 },
  { from: "Monzón", to: "Jircan", price: 60.00 },
  { from: "Monzón", to: "Llata", price: 90.00, offer: 85.00 },
  { from: "Monzón", to: "Huánuco", price: 50.00, offer: 45.00 },
  { from: "Monzón", to: "Tingo María", price: 20.00, offer: 18.00 }
];

export const PARCEL_INFO = {
  basePrice: 5.00,
  items: ["Sobres", "Cajas", "Mercancías", "Equipos"],
  note: "Tarifas especiales para envíos corporativos frecuentes."
};
