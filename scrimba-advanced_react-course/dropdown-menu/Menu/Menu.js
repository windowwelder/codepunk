import React from "react"

export default function Menu({ children, onOpen }) {

    return (
                <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                    {children}
                </div>
    )
}
