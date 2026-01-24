import { useDispatch } from "react-redux";
import type { Product } from "../Storage/ProductsSlice";


type CartItemProps = {
        cartItem: Product;
        };


export default function CartItem({ cartItem } : CartItemProps) {
    const dispatch = useDispatch()
    
    
    return <div>ITEMS</div>
}