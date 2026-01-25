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
    },
    increaseItemQuantity(state, action){
      const item = state.cart.find(item => item.id === action.payload) 
      if (!item) throw new Error("Item not found");
      
      item.quantity++
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action){
      const item = state.cart.find(item => item.id === action.payload)
      if (!item) throw new Error("Item not found");

      item.quantity--
      item.totalPrice = item.quantity * item.price
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

export const { addItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;