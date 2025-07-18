import React from "react"

export default function MenuDropdown({ children, open }) {
    console.log(open, toggle)
    return open ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    ) : null
}