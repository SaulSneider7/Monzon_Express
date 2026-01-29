
import type { Route, Service, PassengerPrice } from './types';

export const COMPANY_INFO = {
  commercialName: "Monzón Express",
  legalName: "EMPRESA DE TRANSPORTES MONZÓN EXPRESS Y SERVICIOS MÚLTIPLES SAC",
  ruc: "20489491266",
  phone: "062-614336",
  mobile: "993597246",
  whatsapp: "51993597246",
  email: "monzonexpressac@gmail.com",
  address: "Av. Enrique Pimentel 188, Tingo María",
  hours: "Lun - Dom: 06:00 AM - 09:00 PM",
  developerUrl: "https://tu-sitioweb.com",
  ticketingPhones: ["993597246", "951348262"]
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
    icon: "fa-user-suit",
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
    name: "Ruta 1: Llata - Monzón",
    stops: ["Llata", "Jacas Grande", "Caruapata", "Quivilla", "Quipran", "Chavín de Parearca", "Tantamayo", "Punchao", "Singa", "Miraflores", "Monzón"],
    description: "Conexión integral entre la sierra alta de Huamalíes y el Valle del Monzón.",
    icon: "fa-mountain"
  },
  {
    id: 2,
    name: "Ruta 2: Conexión Huánuco",
    stops: ["Huánuco", "Tingo María", "Monzón"],
    description: "Nuestra ruta principal conectando la capital regional con el corazón del valle.",
    icon: "fa-route"
  },
  {
    id: 3,
    name: "Ruta 3: Eje Monzón - Chapacra",
    stops: ["Tingo María", "Cachicoto", "Monzón", "Chipaquillo", "Caunarapa", "Maravillas", "Chipaco", "Chapacra"],
    description: "Cobertura completa de los centros poblados y comunidades del alto Monzón.",
    icon: "fa-tree"
  },
  {
    id: 4,
    name: "Ruta 4: Marañón - Monzón",
    stops: ["Huacaybamba", "Cochabamba", "Arancay", "Jircan", "Urpish", "Monzón"],
    description: "Servicio vital para las provincias del Marañón hacia el valle.",
    icon: "fa-road"
  },
  {
    id: 5,
    name: "Ruta 5: Selva Central",
    stops: ["Monzón", "Tingo María", "Aucayacu", "Milano", "La Morada", "Yanajanca"],
    description: "Corredor logístico y de pasajeros hacia el norte de Leoncio Prado.",
    icon: "fa-truck-pickup"
  },
  {
    id: 6,
    name: "Ruta 6: Destino Capital",
    stops: ["Monzón - Lima", "Tingo María - Lima"],
    description: "Viajes directos a la ciudad de Lima en unidades confortables.",
    icon: "fa-city"
  },
  {
    id: 8,
    name: "Ruta 8: Conexión Amazonía",
    stops: ["Palcazu", "Pucallpa", "Progreso", "Tocache", "Juanjui", "Tarapoto"],
    description: "Salidas desde Monzón hacia los principales destinos de la selva peruana.",
    icon: "fa-water"
  }
];

export const PASSENGER_PRICES: PassengerPrice[] = [
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
  items: ["Sobres", "Cajas", "Galones", "Costales", "Otros"],
  note: "Se cobrará por volumen, peso y fragilidad."
};
