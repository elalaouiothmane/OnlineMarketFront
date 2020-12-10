import {Category} from './category';

export class Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  promotion: boolean
  selected: boolean
  available: boolean
  photoName: string;
  category: Category;

}
