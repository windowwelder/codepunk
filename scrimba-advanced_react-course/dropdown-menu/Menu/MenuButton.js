import React from "react"
import Button from "../Button/Button"

export default function MenuButton({ children, toggle }) {
    console.log(open, toggle)
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}