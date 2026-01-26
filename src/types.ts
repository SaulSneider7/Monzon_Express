
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
