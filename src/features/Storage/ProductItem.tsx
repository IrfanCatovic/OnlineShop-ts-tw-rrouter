
import {type Product} from "./ProductsSlice"

import { addItem, getCurrentQuantityById } from "../Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "./UpdateItemQuantity";

    type ProductItemProps = {
        product: Product;
        };

export default function ProductItem({product} : ProductItemProps){
  const dispatch = useDispatch()
  const { id, title, price, description, image, raiting} = product

  const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart = currentQuantity > 0;


  function handleClick(){
    
    const newItem = {
      id,
      title, 
      price, 
      description,
      quantity: 1, 
      totalPrice: price * 1,
      image, 
      raiting
    }
    dispatch(addItem(newItem))
    console.log(currentQuantity)

  }

return (
  <div className="flex gap-4 px-4 py-3 border my-2 border-gray-300">
    {/* Slika */}

    <img
      src={product.image}
      alt={product.title}
      className="w-32 h-32 object-cover"
    />


    <div className="flex flex-col justify-between flex-1">

      <h3 className="text-[16px] font-semibold">
        {product.title}
      </h3>


      <div className="flex items-center justify-between">
        <span className="text-[16px] font-bold ">
          {product.price} USD
        </span>


        {currentQuantity > 0 ? (
                <UpdateItemQuantity currentQuantity={currentQuantity} itemId={id} />
              ) : (
                <button className="px-4 py-2 bg-black text-white rounded transition-all duration-150 hover:bg-stone-800 active:scale-95 active:bg-stone-900 shadow-md 
        active:shadow-sm" onClick={handleClick}>Add to cart</button>
        )}

      </div>
    </div>
  </div>
);

} 

//todo izracunaj totalPrice