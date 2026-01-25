import { useSelector } from "react-redux"
import { getCart, getTotalCartPrice } from "./cartSlice"
import type { RootState } from "../../store"
import CartItem from "./CartItem"
import { Navigate, useNavigate } from "react-router"


export default function CartOverview() {
 
    const username = useSelector((state: RootState) => state.user.username)
    const totalPrice = useSelector(getTotalCartPrice)
    const cart = useSelector(getCart)
    const navigate = useNavigate()

    if (!username) {
    return <Navigate to="/" replace />
  }


    return <div>
      <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold
           text-white shadow-md hover:bg-red-500 transition">Back</button>

        <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
        <ul>

        {cart.map(item => <CartItem cartItem={item} key={item.id} />) }
        </ul>
        <span></span>
        <button>Finish shopping, your total cart price is {totalPrice} $</button>
        </div>
}



//todo: Here get get all items in cart
//first of all we need to create that button for adding and reducing quantity in our cart
//after that when we have cart items here and price of all items, we can finish shopping and navigate us to the link of that purchase