import { Profile } from "../Avatar/Profile";
import { DefaultButton } from "../ui/defaultButton";

export function Intro(){

    return(
        <section className="w-screen h- flex items-center justify-center p-40 border-b ">
            <div className="flex flex-col items-center justify-center ">
                <Profile/>
                <div className="my-4 lg:m-0 ">
                    <span className="text-1xl text-start lg:text-2xl font-medium lg:ml-2 text-black ">Olá, meu nome é</span><br />
                    <span className="text-4xl lg:text-8xl font-extrabold bg-gradient-to-r from-lime-500 via-green-500 to-cyan-400 bg-clip-text text-transparent">Gabriel Barbosa,</span>
                    <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-clip-text text-transparent ">Desenvolvedor Front end</h1>
                </div>
                <div className="flex gap-8 p-10">
                    <DefaultButton color='green-400' >Ver Projetos</DefaultButton>
                    <DefaultButton color='black' >Baixar CV</DefaultButton>
                </div>
            </div>
        </section>

    )
}