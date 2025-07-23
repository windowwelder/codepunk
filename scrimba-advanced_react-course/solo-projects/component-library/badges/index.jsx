import React from "react"
import ReactDOM from "react-dom/client";
import Badge from "./Badge"

function App() {
    /* const allClassNames = { gray, red, yellow, green, blue, indigo, purple, pink}; */
    return (
        <Badge color="red" shape="square">Badge</Badge>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);   