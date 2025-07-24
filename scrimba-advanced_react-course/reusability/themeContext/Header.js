import React from "react"
import { ThemeContext } from "./App"

export default function Header() {
    const value = React.useContext(ThemeContext)
    
    return (
        <header className={`${value.theme}-theme`}>
            <h1>{value.theme === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}