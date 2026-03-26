export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
}
