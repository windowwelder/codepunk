import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const {open, menuId} = React.useContext(MenuContext)
    
    return open ? (
        <div 
            className="menu-dropdown"
            aria-controls={menuId}
        >
            {children}
        </div>
    ) : null
}