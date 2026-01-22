import {type Product} from "./ProductsSlice"

    type ShoeItemProps = {
        shoe: Product;
        };

export default function Obuca({shoe} : ShoeItemProps){


return (
  <div className="flex gap-4 px-4 py-3 border my-2 border-gray-300">
    {/* Slika */}
    <img
      src={shoe.image}
      alt={shoe.name}
      className="w-32 h-32 object-cover"
    />


    <div className="flex flex-col justify-between flex-1">

      <h3 className="text-lg font-semibold">
        {shoe.name}
      </h3>


      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">
          {shoe.price} RSD
        </span>

        <button className="px-4 py-2 bg-black text-white rounded">
          Dodaj u korpu
        </button>
      </div>
    </div>
  </div>
);

} 