import React from "react"
import Decision from "./Decision"

function App() {
    return (
        <div>
            <Decision sayName={function trueOrFalse(bool) {console.log(bool)}} />
        </div>
    )
}

export default App