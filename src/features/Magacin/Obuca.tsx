import type { RootState } from "../../store"
import ShoeItem from "./ShoeItem"
import { useSelector } from "react-redux"


export default function Obuca(){
    const username = useSelector((state: RootState ) => state.user.username)
    const products = useSelector((state: RootState ) => state.products)
    //ovo RootState nam omogucava da koristimo tipizaciju iz store-a
    //zato sto ts trenutno ne zna sta je state i koji su njegovi delovi
    //mi u store-u definisemo tip stanja pomocu RootState i on sam skota tamo ahaa ovaj state je  tipa UserState 
    const shoes = products.products.filter(product => product.type === 'shoes');

    return <div>
       <p>👋 Hello {username} </p> 
        <h1>Shoes 🌟</h1>
            {shoes.map(shoe => <ShoeItem key={shoe.id} shoe={shoe}/>)}
    </div>
}

//TODO: PROP DOESNT WORK CORRECTLY 