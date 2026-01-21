import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { initialProducts, type Product } from "./MagacinProizvoda"

type ProductState = {
    products: Product[]
}

const initialState: ProductState ={
    products: initialProducts,
}

const productSlice = createSlice({
    name:"products", 
    initialState,
    reducers:{
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload)
            //Adding new product to the products array
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer