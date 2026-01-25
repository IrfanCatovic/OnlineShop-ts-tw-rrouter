import { useSelector } from "react-redux"
import CreateUser from "../features/User/CreateUser"
import type { RootState } from "../store"
import  Welcome from "../ui/Welcome"

export default function HomePage(){
        const username = useSelector((state: RootState) => state.user.username)

    return <div className="w-full ">
        {username ? <Welcome /> :
        <CreateUser/>}
    </div>
}