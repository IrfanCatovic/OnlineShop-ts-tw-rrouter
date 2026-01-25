import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../Cart/cartSlice";

type UpdateItemProps = {
        currentQuantity: number;
        itemId: number;
        };

export default function UpdateItemQuantity({ currentQuantity, itemId} : UpdateItemProps) {
    const dispatch = useDispatch()


    return <div className="flex items-center gap-3">
  <button
    onClick={() => dispatch(decreaseItemQuantity(itemId))}
    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-sm font-bold text-gray-700 hover:bg-gray-100 active:scale-90 transition"
  >
    −
  </button>

  <p className="w-6 text-center text-sm font-semibold">
    {currentQuantity}
  </p>

  <button
    onClick={() => dispatch(increaseItemQuantity(itemId))}
    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-sm font-bold text-gray-700 hover:bg-gray-100 active:scale-90 transition"
  >
    +
  </button>
</div>

}

// make buttons + - and use reduce 