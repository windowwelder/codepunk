import React from "react"

function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            onToggle()
        }
    }, [on])
}