import { Product } from './product';
export interface UserState {
    productList: Product[],
    product: Product,
}