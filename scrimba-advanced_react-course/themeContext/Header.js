import React from "react"
import { ThemeContext } from "./App"

export default function Header() {
    const value = React.useContext(ThemeContext)
    
    const themeClass = value === "light" ? "light" : "dark";
    const capitalized = themeClass[0].toUpperCase() + themeClass.slice(1);
    return (
        <header className={`${themeClass}-theme`}>
            <h1>{`${capitalized} Theme`}</h1>
        </header>
    )
}