import { type Product } from "../models/Product";
import { Categories } from "./categories";
import { Colors } from "../models/Color";

import franela1 from "../../public/products/shirts/camisa-1.webp";
import sticker1 from "../../public/products/stickers/STICKER_1-1.png";
import flayer1 from "../../public/products/flayers/flayer-1.webp";

export const productsList: Product[] = [
  {
    id: '1',
    name: "Work Hard | Party Hard",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.FRANELAS,
    price: 14,
    image: franela1,
    colors: [Colors.BLUE],
  },
  {
    id: '2',
    name: "Flayer 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.FLAYERS,
    price: 5,
    image: flayer1,
  },
  {
    id: '3',
    name: "Sticker 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: '4',
    name: "Sticker 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: '5',
    name: "Sticker 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: '6',
    name: "Sticker 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
];
