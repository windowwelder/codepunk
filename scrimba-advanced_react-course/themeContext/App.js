import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    const [theme, setTheme] = React.useState("light")

    const toggleTheme = () => {
        setTheme(
            theme => theme === "light" ? "dark" : "light"
        )
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }