interface Stock {
    _id?: string | number,
    quantity?: number,
    price: number,
    colorID?: string | number,
    sizeID?: string | number,
}

interface UrlImage {
    _id?: string | number,
    urlImage: string | null
}
export interface Product {
    _id?: string | number,
    productName: string,
    brand?: string,
    description?: any,
    categoryID?: string | number,
    productImages: UrlImage | UrlImage[],
    stock?: Stock | Stock[] ,
}