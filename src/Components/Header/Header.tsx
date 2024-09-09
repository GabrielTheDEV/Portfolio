import { Navegation } from "../Navegation/Navegation"
import { NavegationMobile } from "../Navegation/NavegationMobile"

export function Header(){

    return(
        <header className="w-full flex p-4 items-center lg:justify-center border-b border-teal-800 text-white">
            <Navegation/>
            <NavegationMobile/>
        </header>
    )
}