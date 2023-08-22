export interface Product {
    id: number | string,
    name: string,
    price: number,
    quantity: number,
    images: string[] | string,
    category: string,
    brand: string,
    size: string[] | string,
    color: string[] | string,
    HTMLDesc?: string
}