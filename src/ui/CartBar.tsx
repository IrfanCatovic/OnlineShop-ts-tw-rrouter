import { useSelector } from "react-redux"
import { getTotalCartPrice, getTotalCartQuantity } from "../features/Cart/cartSlice"

export default function CartBar() {
    const totalPrice = useSelector(getTotalCartPrice)
    const itemQuantity = useSelector(getTotalCartQuantity)


    return <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-360 -translate-x-1/2">
  <div className="flex items-center justify-between rounded-2xl bg-gray-900 px-6 py-4 text-white shadow-2xl animate-slide-up">
    
    <div className="flex flex-col">
      <span className="text-sm text-gray-300">Ukupno</span>
      <span className="text-xl font-bold">{totalPrice} RSD</span>
    </div>

    <div className="flex items-center gap-6">
      <span className="text-sm text-gray-300">
        🛒 {itemQuantity} proizvoda
      </span>

      <button className="rounded-xl bg-green-500 px-6 py-2 text-sm font-semibold text-black hover:bg-green-400 transition">
        Nastavi
      </button>
    </div>

  </div>
</div>
}