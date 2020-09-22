import { ProductsStep } from './products-step.interface';

export interface Products {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
    textColor: string;
    steps: ProductsStep[];
    users: string[];
   
    
}