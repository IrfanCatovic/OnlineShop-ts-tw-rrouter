import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { Navigate } from "react-router"
import Obuca from "../features/Magacin/Obuca"
import Odeca from "../features/Magacin/Odeca"


export default function Products(){

    const username = useSelector((state: RootState) => state.user.username)

    if (!username) {
    return <Navigate to="/" replace />
  }

    return(
        <div>
            <Odeca />
            <Obuca />
        </div>
    )
}