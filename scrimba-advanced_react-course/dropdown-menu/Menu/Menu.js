import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({ children }) {
    /**
     * Challenge:
     * Using what you know now, complete the Menu component so 
     * everything is working again via Context + State
     */
    const [open, setOpen] = React.useState(false);
    const menuId = React.useId();

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{open, toggle, menuId}}>
            <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }