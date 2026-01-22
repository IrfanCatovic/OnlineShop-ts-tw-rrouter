import type { RootState } from "../../store"
import { useSelector } from "react-redux"

import ShoeItem from "./ShoeItem"






export default function Obuca(){

    const products = useSelector((state: RootState ) => state.products)
    //ovo RootState nam omogucava da koristimo tipizaciju iz store-a
    //zato sto ts trenutno ne zna sta je state i koji su njegovi delovi
    //mi u store-u definisemo tip stanja pomocu RootState i on sam skota tamo ahaa ovaj state je  tipa UserState 

    // const shoes = products.products.filter(product => product.type === 'shoes');

    return <div>

        <ul className="grid grid-cols-3 gap-4">
            {shoes.map(shoe => <ShoeItem key={shoe.id} shoe={shoe}/>)}
        </ul>
    </div>
}

