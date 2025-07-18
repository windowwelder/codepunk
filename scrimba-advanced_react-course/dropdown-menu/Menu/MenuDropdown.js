import React from "react"

export default function MenuDropdown({ open, children }) {
    return (
        open ? 
        <div className="menu-dropdown">
            {children}
        </div> : null
    )
}