import { StackBox } from "../StackBox/StackBox"

export function AboutMe(){

    return(
        <section className="w-screen p-10 lg:p-28 my-2 bg-gray-900">
            <h2 className="text-5xl font-bold bg-gradient-to-b from-emerald-400  via-green-500 to-cyan-400 bg-clip-text text-transparent">
                Habilidades
            </h2>

            <div className="w-full h-1/2 flex flex-col-reverse lg:flex-row gap-20 border-t border-emerald-500 my-10">
                <div className="w-full h-full flex flex-col text-white lg:p-8 py-6">

                    {/* <span className="text-xl " >
                        Olá, meu nome é {<span className="text-xl font-bold text-emerald-400">Gabriel Barbosa</span>} , sou um desenvolvedor backend especializado em Node.js com 1 ano de experiencia trabalhando com {<span className="text-xl">JavaScript</span>} e TypeScript além de ter conhecimentos sólidos em frontend.
                    </span>
                    
                    <span className="text-xl my-8">
                        Minha paixão é desenvolver aplicações e soluções eficientes e escalaveis, sendo capaz de construir tanto a lógica do servidor quanto a experiência do usuário final. 
                    </span >
                    <span className="text-xl ">
                        Tenho experiência em desenvolvimento de APIs robustas, integração com bancos de dados e otimização de performance. Além disso, meus conhecimentos em front end me permitem colaborar de ponta a ponta no desenvolvimento de produtos.
                        Sempre buscando novas tecnologias, estou pronto para transformar ideias em soluções reais.
                    </span> */}


                    <span className="text-2xl my-8 text-emerald-300">Linguagens:</span>
                    
                    <div className="w-full flex flex-wrap gap-4">
                        <StackBox color='border-white'>java</StackBox>
                        <StackBox color='border-white'>SQL</StackBox>
                        <StackBox color='border-white'>TypeScript</StackBox>
                        <StackBox color='border-white'>JavaScript</StackBox>
                       
                    </div>
                    <span className="text-2xl my-8 text-emerald-300">Ferramentas:</span>
                    <div className="w-full flex flex-wrap gap-4">
                        <StackBox color='border-white'>mySQL</StackBox>
                        <StackBox color='border-white'>Docker</StackBox>
                        <StackBox color='border-white'>Git</StackBox>
                        <StackBox color='border-white'>GitHub</StackBox>
                        <StackBox color='border-white'>React</StackBox>
                        <StackBox color='border-white'>Next.js</StackBox>               
                        <StackBox color='border-white'>Tailwind css</StackBox>
                        <StackBox color='border-white'>Maven</StackBox>
                        <StackBox color='border-white'>Intellij</StackBox>
                        <StackBox color='border-white'>VScode</StackBox>
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center lg:p-20">
                    <div className="rounded-full">
                        <img 
                        src="https://avatars.githubusercontent.com/u/152109789?s=400&u=b67685bf430ab7d0d73f2625fae91114185bcd4e&v=4" 
                        alt="image" 
                        className="w-full h-full rounded-full hidden lg:block"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}