
import type { Route, Service } from './types';

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

export const SERVICES_DATA: Service[] = [
  {
    title: "Transporte de Pasajeros",
    description: "Viajes cómodos y seguros con salidas diarias y puntualidad garantizada.",
    icon: "fa-bus",
    categoryColor: "#0E6BA8" // Blue
  },
  {
    title: "Envío de Encomiendas",
    description: "Servicio rápido de mensajería y paquetes pequeños con entrega en 24 horas.",
    icon: "fa-box-open",
    categoryColor: "#C62828" // Red
  },
  {
    title: "Servicio de Carga",
    description: "Transporte de mercancías pesadas y logística regional eficiente.",
    icon: "fa-truck-moving",
    categoryColor: "#2E2E2E" // Dark Grey
  },
  {
    title: "Turismo",
    description: "Excursiones y rutas turísticas para conocer lo mejor de la región.",
    icon: "fa-map-location-dot",
    categoryColor: "#2E7D32" // Green
  },
  {
    title: "Servicios Múltiples",
    description: "Comercio y soluciones diversas para las necesidades de Monzón.",
    icon: "fa-briefcase",
    categoryColor: "#F2B705" // Gold
  }
];

export const ROUTES_DATA: Route[] = [
  {
    id: 1,
    name: "Ruta 1: Huánuco - Monzón",
    stops: ["Huánuco", "Tingo María", "Monzón"],
    description: "Conexión principal entre la capital y el valle del Monzón.",
    icon: "fa-route"
  },
  {
    id: 2,
    name: "Ruta 2: Circuito de Altura",
    stops: ["Monzón", "Urpish", "Tantamayo", "Chavín de Pariarca", "Jacas Grande", "Llata", "Singa"],
    description: "Ruta histórica conectando los pueblos más altos de la región.",
    icon: "fa-mountain"
  },
  {
    id: 3,
    name: "Ruta 3: Conexión Marañón",
    stops: ["Monzón", "Jircan", "Arancay", "Huacaybamba"],
    description: "Acceso estratégico a las zonas de producción altoandinas.",
    icon: "fa-tree"
  },
  {
    id: 4,
    name: "Ruta 4: Eje Selva San Martín",
    stops: ["Monzón", "Tingo María", "Aucayacu", "Yanajanca", "Progreso", "Uchiza", "Tocache"],
    description: "Corredor vital para el comercio con la región San Martín.",
    icon: "fa-truck-fast"
  }
];

export const PASSENGER_PRICES = [
  { from: "Tingo María", to: "Tocache", price: 40.00 },
  { from: "Tingo María", to: "Uchiza", price: 35.00 },
  { from: "Tingo María", to: "Progreso", price: 30.00 },
  { from: "Tingo María", to: "Yanajanca", price: 30.00 },
  { from: "Tingo María", to: "Aucayacu", price: 15.00 },
  { from: "Monzón", to: "Jircan", price: 60.00, offer: 55.00 },
  { from: "Monzón", to: "Llata", price: 90.00, offer: 55.00 },
  { from: "Monzón", to: "Huánuco", price: 50.00, offer: 45.00 },
];

export const PARCEL_INFO = {
  basePrice: 5.00,
  items: ["Sobres", "Cajas", "Galones", "Costales"],
  note: "El costo final se determinará por volumen, peso y fragilidad del paquete."
};
