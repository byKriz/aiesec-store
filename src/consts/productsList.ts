import { type Product } from "../models/Product";
import { Categories } from "./categories";
import { Colors } from "../models/Color";

import franela1 from "../../public/products/shirts/camisa-1.webp";
import flayer1 from "../../public/products/flayers/flayer-1.webp";
import sticker1 from "../../public/products/stickers/STICKER_1-1.webp";
import sticker2 from "../../public/products/stickers/STICKER_2-1.webp";
import sticker3 from "../../public/products/stickers/STICKER_3-1.webp";
import sticker4 from "../../public/products/stickers/STICKER_4-1.webp";
import sticker5 from "../../public/products/stickers/STICKER_5-1.webp";
import sticker6 from "../../public/products/stickers/STICKER_6-1.webp";

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
    name: "AIESEC Lanyard",
    description:
      "Hola people ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.LANYARD,
    price: 4,
    image: flayer1,
  },
  {
    id: '3',
    name: "Sticker - AIESEC",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker1,
  },
  {
    id: '4',
    name: "Sticker - SIUUUU",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker2,
  },
  {
    id: '5',
    name: "Sticker - Eva esta orgullosa de ti",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker3,
  },
  {
    id: '6',
    name: "Sticker - ¿Donde estan las atrevidas?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker4,
  },
  {
    id: '7',
    name: "Sticker - A eva me la respetas",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker5,
  },
  {
    id: '8',
    name: "Sticker - Es tan perfecta",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa esse hic rerum soluta maiores sapiente",
    category: Categories.STICKERS,
    price: 1,
    image: sticker6,
  },
];
