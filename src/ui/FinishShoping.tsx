import { useSelector } from "react-redux"
import { getTotalCartPrice, getTotalCartQuantity } from "../features/Cart/cartSlice"

export default function FinishShoping(){
    const totalPrice = useSelector(getTotalCartPrice)
    const itemQuantity = useSelector(getTotalCartQuantity)

    return <div>
        You chose {itemQuantity} items for just {totalPrice}$!
    </div>
}