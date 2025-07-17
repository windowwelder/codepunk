import React from "react"

export default function Button( { children, ...rest}) {
    let sizeClass = size ? `button-${size}` : "";
    const allClasses = classnames(sizeClass, className, variantClass)
    return (
        <button className={allClasses} {...rest}>{children}</button>
    )
}