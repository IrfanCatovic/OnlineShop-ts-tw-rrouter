import type { RootState } from "../../store"
import { useSelector } from "react-redux"


export default function Obuca(){
    const username = useSelector((state: RootState ) => state.user.username)
    const prodoucts = useSelector((state: RootState ) => state.products)
    //ovo RootState nam omogucava da koristimo tipizaciju iz store-a
    //zato sto ts trenutno ne zna sta je state i koji su njegovi delovi
    //mi u store-u definisemo tip stanja pomocu RootState i on sam skota tamo ahaa ovaj state je  tipa UserState 

    console.log(prodoucts)
    return <div>
        Zdravo {username}
        
    
    </div>
}