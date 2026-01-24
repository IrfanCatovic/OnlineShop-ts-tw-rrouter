import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { Navigate, useLoaderData } from "react-router"
import { getStorage } from "../services/apiStorage"
import type { Product } from "../features/Storage/ProductsSlice";

import ProductItem from "../features/Storage/ProductItem"
import { getTotalCartPrice } from "../features/Cart/cartSlice";



export default function Products(){
    const products = useLoaderData() as Product[];
    const username = useSelector((state: RootState) => state.user.username)
    const totalPrice = useSelector(getTotalCartPrice)
    
    if (!username) {
    return <Navigate to="/" replace />
  }

    return(
        <ul className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ">
            <p>{totalPrice}</p>
            {products.map(product => <ProductItem product={product} key={product.id} />)}
        </ul>
    )
}


export async function loader() {
    //when react sees this he thinks
    //oh wait we got loader here, lets we fetch some items from API
    const products = await getStorage();
    return products
}