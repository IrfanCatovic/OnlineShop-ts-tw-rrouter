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

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id : number) => (state : RootState) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;