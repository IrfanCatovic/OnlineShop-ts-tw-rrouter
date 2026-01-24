import { useSelector } from "react-redux"
import { getCart } from "./cartSlice"

export default function CartOverview() {
    const cart = useSelector(getCart)
    console.log(cart)

    return <div>CartOverview comp</div>
}

