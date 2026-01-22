import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';
import productsReducer  from './features/Storage/ProductsSlice';

const store = configureStore({
    reducer:{
        user: userReducer,
        products: productsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;