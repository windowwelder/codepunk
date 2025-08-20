import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    
    return (
        <div>
            <h1>Sorry, the page you were looking was not found.</h1>
            <Link to="/" className="return-button">Return to home</Link>
        </div>
    )
};