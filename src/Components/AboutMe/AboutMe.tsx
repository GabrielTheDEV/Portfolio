
export function AboutMe(){

    return(
        <section className="lg:w-screen p-20 my-2">
            <h2 className="text-4xl  lg:text-5xl font-medium">Sobre mim</h2>

            <div className="w-full lg:flex gap-10 items-center justify-center bg-green-200 my-10">
                <div className="w-full h-full border border-black  bg-blue-500"></div>
                <div className="w-full h-full border border-black bg-red-500"></div>
            </div>
        </section>
    )
}