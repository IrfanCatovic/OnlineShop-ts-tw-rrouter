import {type Product} from "./MagacinProizvoda"

    type ShoeItemProps = {
        shoe: Product;
        };

export default function Obuca({shoe} : ShoeItemProps){


    return <div>
        {shoe.name} - {shoe.price}RSD
    </div>
}