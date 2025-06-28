import React from "react"

type StackBoxProps = {
    children: React.ReactNode
    color: string
}

export function StackBox({children, color}: StackBoxProps) {
    return(
        <div className={`border ${color} rounded-md py-3 px-10 text-white`}>
            {children}
        </div>
    )
}