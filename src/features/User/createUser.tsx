import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import type { AppDispatch } from "../../store";
import { createUsername } from "./userSlice";


export default function CreateUser() {
    const [username, setUsername] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    function handleUserSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!username) return;
        dispatch(createUsername(username));
        navigate("/products")
    }

    return (
    <div className={`py-12 flex mx-auto justify-center h-auto rounded-4xl shadow-lg border-[0.5px] border-gray-300`}>

    <form onSubmit={handleUserSubmit} className="flex flex-col gap-4 max-w-md justify-center items-center">

        <p className="text-stone-700 font-bold">👋 Dobrodošli! Molimo vas unesite korisničko ime:</p>

        <input type="text" placeholder="Vaše korisničko ime" value={username} onChange={(e) => setUsername(e.target.value)} 
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" />

        {username && <button type="submit" className="px-4 py-2 bg-green-300 rounded-2xl text-stone-800 
        font-semibold hover:bg-green-500 hover:text-stone-100 active:scale-[0.98] transition">Kreiraj korisnika</button>}

    </form>
    </div>)
}