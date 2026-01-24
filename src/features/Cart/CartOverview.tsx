import { useSelector } from "react-redux"
import { getCart } from "./cartSlice"
import type { RootState } from "../../store"
import CartItem from "./CartItem"
import { Navigate } from "react-router"


export default function CartOverview() {
 
    const username = useSelector((state: RootState) => state.user.username)

    const cart = useSelector(getCart)


    if (!username) {
    return <Navigate to="/" replace />
  }


    return <div>
        <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
        <ul>

        {cart.map(item => <CartItem cartItem={item} key={item.id} />) }
        </ul>
        <button>Finish shopping</button>
        </div>
}



//todo: Here get get all items in cart
//first of all we need to create that button for adding and reducing quantity in our cart
//after that when we have cart items here and price of all items, we can finish shopping and navigate us to the link of that purchase