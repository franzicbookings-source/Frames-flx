export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  description?: string;
}

export type Category = 'men' | 'women' | 'unisex' | 'optical';
