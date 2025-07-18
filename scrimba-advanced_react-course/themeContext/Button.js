import React from "react"
import { ThemeContext } from "./App"

export default function Button() {

    const themeClass = React.useContext(ThemeContext)
    
    return (
        <button className={`${themeClass}-theme`}>
            Switch Theme
        </button>
    )
}