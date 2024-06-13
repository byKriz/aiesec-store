import { type Product } from "../models/Product";
import { Categories } from "./categories";

import franela1 from "../../public/products/shirts/camisa-1.png";
import sticker1 from "../../public/products/stickers/STICKER_1-1.png"

export const productsList: Product[] = [
  {
    id: 1,
    name: "Franela 1",
    description: "mucho texto",
    category: Categories.FRANELAS,
    price: 14,
    image: franela1,
  },
  {
    id: 2,
    name: "Franela 2",
    description: "mucho texto",
    category: Categories.FRANELAS,
    price: 14,
    image: franela1,
  },
  {
    id: 3,
    name: "Sticker 1",
    description: "mucho texto",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: 4,
    name: "Sticker 1",
    description: "mucho texto",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: 5,
    name: "Sticker 1",
    description: "mucho texto",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: 6,
    name: "Sticker 1",
    description: "mucho texto",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
];
