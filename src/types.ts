
export interface Route {
  id: number;
  name: string;
  stops: string[];
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  categoryColor: string;
}

/**
 * PassengerPrice interface defines the structure for transport fares,
 * including an optional offer price for discounts.
 */
export interface PassengerPrice {
  from: string;
  to: string;
  price: number;
  offer?: number;
}
