import { useSelector } from "react-redux"
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice"
import type { RootState } from "../../store"
import CartItem from "./CartItem"
import { Navigate, useNavigate } from "react-router"


export default function CartOverview() {
 
    const username = useSelector((state: RootState) => state.user.username)
    const cart = useSelector(getCart)
    const totalPrice = useSelector(getTotalCartPrice)
    const cartQuantity = useSelector(getTotalCartQuantity)
    const navigate = useNavigate()

    const handleFinishShopping = async () => {
            if (!username || cart.length === 0) return
            const order = {
              username,
              items: cart,
              totalPrice,
            }
            try {
              const res = await fetch("http://localhost:8080/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
              })
              const data = await res.json()
              if (!res.ok) {
                // backend error
                console.log("Error: " + (data.error || "Something went wrong"))
                return
              }
              // success
              console.log(data.message)
            } catch (err) {
              console.error("Error sending order:", err)

            }
          }



    //early return if we dont have user logged in
    if (!username) {
    return <Navigate to="/" replace />
  }


    return (
            <>
              {cartQuantity === 0 ? (<div>

                <p>Your cart is empty right now!</p>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold
                    text-white shadow-md hover:bg-red-500 transition my-4"
                  >
                    Back
                  </button>
              </div>
                
              ) : (
                <div>
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold
                    text-white shadow-md hover:bg-red-500 transition"
                  >
                    Back
                  </button>

                  <h2 className="mt-7 text-xl font-semibold">
                    Your cart, {username}
                  </h2>

                  <ul>
                    {cart.map(item => (
                      <CartItem cartItem={item} key={item.id} />
                    ))}
                  </ul>

                  <button onClick={handleFinishShopping} className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white font-semibold">
                    Finish shopping, your total cart price is {totalPrice.toFixed(2)} $
                  </button>
                </div>
              )}
            </>
          );
}



//todo: Here get get all items in cart
//first of all we need to create that button for adding and reducing quantity in our cart
//after that when we have cart items here and price of all items, we can finish shopping and navigate us to the link of that purchase