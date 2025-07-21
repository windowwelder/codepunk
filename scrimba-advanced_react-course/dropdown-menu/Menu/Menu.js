import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {

    return (
            <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                {children}
            </div>
    )
}
