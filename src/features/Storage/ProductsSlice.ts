import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
    totalPrice: number
    quantity : number
}

interface ProductState  {
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