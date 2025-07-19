export default function ToggleOn( { children } ) {
    const { on } = React.useContext(ToggleContext);
    return (
        <>
         {on ? children : null} 
        </>
    )
}