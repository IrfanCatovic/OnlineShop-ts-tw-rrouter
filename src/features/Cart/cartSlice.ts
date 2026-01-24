import { createSlice } from "@reduxjs/toolkit"
import type { Product } from "../Storage/ProductsSlice"
import type { RootState } from "../../store"

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


export const getCart = (state: RootState) => state.cart.cart;

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;