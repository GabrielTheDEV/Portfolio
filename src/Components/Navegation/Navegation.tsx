

interface skipPageProps{
    name: string;
}

function SkipPage({name}: skipPageProps ) {
    return <button >{name}</button>
}

export function Navegation(){

    return(
        <nav>
           <SkipPage name={'Home'} />
           <SkipPage name={'Home'} />
           <SkipPage name={'Home'} />
           <SkipPage name={'Home'} />        
        </nav>
    )
}