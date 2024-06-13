import { Product } from '../models/Product'
import { Categories } from './categories'

import franela1 from '../../public/products/shirts/camisa-1.png'

export const productsList: Product[] = [{
    id: 1,
    name: 'Franela 1',
    description: 'mucho texto',
    category: Categories.FRANELAS,
    price: 20,
    image: franela1
}]
