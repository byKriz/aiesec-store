import { Categories } from "../consts/categories";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Categories;
  price: number;
  image: ImageMetadata;
}
