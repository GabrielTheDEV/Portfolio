
export function Intro(){

    return(
        <section className="w-screen flex items-center justify-center p-20 border-b">
            <div className="flex flex-col items-center justify-center ">
                <div className="w-64 h-64 p-10 border border-green-400 rounded-full">
                    <img 
                        className="w-full h-full object-cover "
                        src="https://avatars.githubusercontent.com/u/152109789?s=400&u=b67685bf430ab7d0d73f2625fae91114185bcd4e&v=4" alt="My photo" />
                </div>
                <div className="my-20 lg:m-0 ">
                    <span className="text-2xl font-medium ml-4">Olá, meu nome é</span><br />
                    <span className="text-8xl font-extrabold">Gabriel Barbosa,</span>
                    <h1 className="text-4xl font-bold">Desenvolvedor Front end</h1>
                </div>
                <div className="flex gap-8 p-10">
                    <button className="border border-green-400 rounded py-3 px-10">Baixar CV</button>
                    <button className="border border-black rounded py-3 px-10">Baixar CV</button>
                </div>
            </div>
        </section>

    )
}