import React from "react"

export default function Button( { children, ...rest}) {
    const classNameSize = size === "sm" ? "button-small" : size === "lg" ? "button-large" : null;
    return (
        <button className={`${sizeClass} ${color}`} {...rest}>{children}</button>
    )
}