export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  description: string;
  moq: number;
  status: 'Ready Stock' | 'Private Label Available' | 'New Formula';
  image: string;
}

export interface Formula {
  id: string;
  code: string;
  name: string;
  keyIngredients: string[];
  benefits: string[];
  texture: string;
  targetSkin: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
