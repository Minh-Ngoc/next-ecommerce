import { Product } from './product';
export interface ProductState {
    productList: Product[],
    product?: Product | {},
}