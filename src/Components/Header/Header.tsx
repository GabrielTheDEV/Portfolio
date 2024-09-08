import { Navegation } from "../Navegation/Navegation"

export function Header(){

    return(
        <header className="w-full flex p-4 items-center justify-center border-b border-teal-800 text-white">
            <Navegation/>
        </header>
    )
}