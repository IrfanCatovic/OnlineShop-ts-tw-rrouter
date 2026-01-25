import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { useNavigate } from "react-router"

export default function Welcome() {
    const username = useSelector((state: RootState) => state.user.username)
    const navigate = useNavigate()

    return <div className="flex flex-col items-center">
        <div className="flex min-h-[50vh] items-center justify-center">
            <p className="text-xl md:text-2xl font-medium text-gray-800">
                Hello <span className="font-semibold">{username}</span>,
                <br />
                <span className="text-gray-500">what do you need today?</span>
            </p>
            
            </div>
            <button onClick={()=> navigate('/products')} className="w-xl rounded-xl bg-green-500 px-6 py-2 text-sm font-semibold text-black hover:bg-green-400 transition">
                    Shop now! 🛒
                </button>
            </div>
}