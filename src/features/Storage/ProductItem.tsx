import { Form } from "react-router";
import {type Product} from "./ProductsSlice"
import { title } from "process";
import { addItem } from "../Cart/cartSlice";
import { useDispatch } from "react-redux";

    type ProductItemProps = {
        product: Product;
        };

export default function ProductItem({product} : ProductItemProps){
  const dispatch = useDispatch()

  const { id, title, price, description, image, raiting} = product

  function handleClick(): void{
    const newItem = {
      id,
      title, 
      price, 
      description, 
      image, 
      raiting
    }
    dispatch(addItem(newItem))
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

        <button className="px-4 py-2 bg-black text-white rounded" onClick={handleClick}>
          Dodaj u korpu
        </button>
      </div>
    </div>
  </div>
);

} 