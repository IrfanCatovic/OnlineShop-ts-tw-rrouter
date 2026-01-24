import { createSlice } from "@reduxjs/toolkit"
import type { Product } from "../Storage/ProductsSlice"

export interface Cart {
    cart: Product[]
}

const initialState: Cart ={
    cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addItem(state, action){
        state.cart.push(action.payload)
    }
  }
})


export const getCart = (state) => state.cart.cart;

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;