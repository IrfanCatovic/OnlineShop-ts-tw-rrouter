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
        navigate("/orders")
    }

    return (
    <div className="flex mx-auto justify-center h-48 rounded-4xl shadow-lg border-red-500">

    <form onSubmit={handleUserSubmit} className="flex flex-col gap-4 max-w-md justify-center items-center">
        <p>👋 Dobrodošli! Molimo vas unesite korisničko ime:</p>
        <input type="text" placeholder="Vaše korisničko ime" value={username} onChange={(e) => setUsername(e.target.value)} />
        {username && <button type="submit">Kreiraj korisnika</button>}

    </form>
    </div>)
}