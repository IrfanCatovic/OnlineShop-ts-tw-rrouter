import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { Navigate, useLoaderData } from "react-router"
import { getStorage } from "../services/apiStorage"



export default function Products(){
    const products = useLoaderData()
    const username = useSelector((state: RootState) => state.user.username)

    
    if (!username) {
    return <Navigate to="/" replace />
  }

    return(
        <div>
                
        </div>
    )
}


export async function loader() {
    //when react sees this he thinks
    //oh wait we got loader here, lets we fetch some items from API
    const products = await getStorage();
    return products
}