import { Profile } from "../Avatar/Profile";
import { DefaultButton } from "../ui/button";

export function Intro(){

    return(
        <section className="w-screen h- flex items-center justify-center p-40 ">
            <div className="flex flex-col items-center justify-center ">
                <Profile/>
                <div className="my-4 lg:m-0 ">
                    <span className="text-1xl text-start lg:text-2xl font-medium lg:ml-2 bg-gradient-to-r from-emerald-400 to-cyan-800 bg-clip-text text-transparent ">Olá, meu nome é</span><br />
                    <span className="text-4xl lg:text-8xl font-extrabold bg-gradient-to-r from-teal-500 via-emerald-500 to-green-400 bg-clip-text text-transparent">Gabriel Barbosa,</span>
                    <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-500  via-green-500 to-cyan-400 bg-clip-text text-transparent ">Desenvolvedor Fullstack</h1>
                </div>
                <div className="flex gap-8 p-10">
                    <DefaultButton color='border-white' >Ver Projetos</DefaultButton>
                    <DefaultButton color='border-white' >Baixar CV</DefaultButton>
                </div>
            </div>
        </section>

    )
}