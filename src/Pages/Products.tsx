import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { Navigate } from "react-router"


export default function Products(){

    const username = useSelector((state: RootState) => state.user.username)

    if (!username) {
    return <Navigate to="/" replace />
  }

    return(
        <div>
            <p className="">Ovo je nova strana </p>
        </div>
    )
}