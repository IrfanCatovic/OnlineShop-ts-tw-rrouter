import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


export type Product = {
    id: string
  name: string
  price: number
  type: string
  image: string
}

type ProductState = {
    products: Product[]
}

const initialState: ProductState ={
    products: [],
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