import React from "react"
import Toggle from "./Toggle/index";

export default function Menu({ children }) {

    return (
            <Toggle>
                <div className="menu" role="menu" aria-expanded={open} aria-haspopup="true" >
                    {children}
                </div>
            </Toggle>
    )
}
