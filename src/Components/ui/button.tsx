import React from "react"

type ButtonProps = {
    children: React.ReactNode
    color: string
}

export function DefaultButton({children, color}: ButtonProps){

    return(
        
        <button className={`border ${color} rounded-md py-3 px-10 text-white`}>
            {children}
        </button>
    )
}