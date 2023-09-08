import { ProductState, Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
    productList: [],
    product: {}
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductList: (state, action: PayloadAction<any>) => {
            state.productList = action.payload
        },
        setProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload
        }
        
    },
});

export const {
    setProductList, setProduct
} = productSlice.actions;

export default productSlice.reducer;