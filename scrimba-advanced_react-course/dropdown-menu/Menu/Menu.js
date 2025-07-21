import React from "react"
import Toggle from "./Toggle/index";

export default function Menu({ children, onOpen }) {

    return (
            <Toggle onToggle={onOpen}>
                <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                    {children}
                </div>
            </Toggle>
    )
}
