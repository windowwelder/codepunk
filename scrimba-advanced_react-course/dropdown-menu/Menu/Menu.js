import React from "react"
import useToggle from "../../toggle-context/hooks/useToggle"

export default function Menu({ children }) {
    const [open, toggleOpen] = useToggle(false)
    return (
                <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                    {children}
                </div>
    )
}
