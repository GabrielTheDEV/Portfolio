import { Profile } from "../Avatar/Profile";

export function Intro(){

    return(
        <section className="w-screen h- flex items-center justify-center p-40 border-b ">
            <div className="flex flex-col items-center justify-center ">
               
                <Profile/>
                <div className="my-4 lg:m-0 ">
                    <span className="text-1xl text-start lg:text-2xl font-medium lg:ml-2">Olá, meu nome é</span><br />
                    <span className="text-4xl lg:text-8xl font-extrabold">Gabriel Barbosa,</span>
                    <h1 className="text-2xl lg:text-4xl font-bold">Desenvolvedor Front end</h1>
                </div>
                <div className="flex gap-8 p-10">
                    <button className="border border-green-400 rounded py-3 px-10">Ver Projetos</button>
                    <button className="border border-black rounded py-3 px-10 ">Baixar CV</button>
                </div>
            </div>
        </section>

    )
}