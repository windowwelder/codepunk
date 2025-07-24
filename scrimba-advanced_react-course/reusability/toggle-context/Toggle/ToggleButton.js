import {ToggleContext} from "./Toggle/Toggle"
import React from "react"

export default function ToggleButton( { children } ) {
    const { on, toggle } = React.useContext(ToggleContext);
    return (
        <div onClick={toggle}>{children}</div>
    )
}