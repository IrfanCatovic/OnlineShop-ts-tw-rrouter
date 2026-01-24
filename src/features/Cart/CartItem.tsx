import type { Product } from "../Storage/ProductsSlice";


type CartItemProps = {
        cartItem: Product;
        };


export default function CartItem({ cartItem } : CartItemProps) {
    console.log(cartItem)
    
    return <div>ITEMS</div>
}