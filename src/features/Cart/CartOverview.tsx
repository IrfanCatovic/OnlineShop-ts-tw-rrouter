import { useSelector } from "react-redux"
import { getCart } from "./cartSlice"
import type { RootState } from "../../store"

export default function CartOverview() {
    const username = useSelector((state: RootState) => state.user.username)

    const cart = useSelector(getCart)


    return <div>
        <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
        </div>
}

