import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../Storage/ProductsSlice";
import { getCurrentQuantityById } from "./cartSlice";


type CartItemProps = {
        cartItem: Product;
        };


export default function CartItem({ cartItem } : CartItemProps) {
    const dispatch = useDispatch()

    const { id, title, price, description, image, raiting } = cartItem;
    const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart = currentQuantity > 0;

    console.log(title, price, description, image, raiting)
    
    return <div key={id} className="w-full my-4 flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full sm:w-1/3 h-64 object-contain bg-gray-100"/>

        <div className="p-6 flex flex-col gap-2 sm:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-lg font-bold">{price} RSD</p>
            <p className="text-gray-500">Quantity: {currentQuantity}</p>
        </div>
      </div>
}

//todo add isInCart so we can see buttons and quantity add and reduce
//after that we will see item in cart with that quantity, need to reduce all prices for final price of cart