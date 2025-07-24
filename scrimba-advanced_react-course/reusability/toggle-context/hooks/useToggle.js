import React from "react"

export default function useToggle( initialValue = false, onToggle = () => {} ) {
    const [on, setOn] = React.useState(initialValue)
    const renderCount = React.useRef(0);

    React.useEffect(
        renderCount.current++
    )
    
    React.useEffect(
        () => renderCount.current > 1 ? onToggle() : null,
        [on]
    )
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    return [on, toggle]
}