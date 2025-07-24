import React from "react"
import useToggle from "../../toggle-context/hooks/useToggle"

const MenuContext = React.createContext()

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle(true, onOpen)
    return (
            <MenuContext.Provider value={{open, toggleOpen}}>
                <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                    {children}
                </div>
            </MenuContext.Provider>
    )
}
