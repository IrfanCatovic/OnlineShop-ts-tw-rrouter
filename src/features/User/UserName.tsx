import { useSelector } from "react-redux"
import type { RootState } from "../../store"


export default function UserName(){
    const username = useSelector((state: RootState) => state.user.username)

    if (!username) return <p className="text-lg font-semibold text-gray-900">Registruj se</p>

    return(
        <p className="text-lg font-semibold text-gray-900 ">
          Zdravo - {username} 👋
        </p>
    )
}