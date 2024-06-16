import { Categories } from "../consts/categories";
import type { Colors } from "./Color";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Categories;
  price: number;
  image: ImageMetadata;
  colors?: Colors[];
}
