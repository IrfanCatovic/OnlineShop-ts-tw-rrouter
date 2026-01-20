import { useSelector } from "react-redux"


export default function Obuca(){
    const username = useSelector((state: { user: { username: string } }) => state.user.username)
    //ova linija koda se cita kao "izvuci iz globalnog stanja (state) korisnicko ime (username)
    // koji je tipa string, a ono je sve u objektu koji je tipa interface
    //  koje se nalazi u delu stanja vezanom za korisnika (user)"

    return <div>Zdravo {username}</div>
}