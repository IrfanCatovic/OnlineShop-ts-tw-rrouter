import { configureStore} from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';
import productsReducer  from './features/Storage/ProductsSlice';
import cartReducer from './features/Cart/cartSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        products: productsReducer,
        cart: cartReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;