export default function Die(props) {
    const theme = {
        size: "70px"
    }
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : null,
        width: theme.size,
        height: theme.size
    }
    return (<button onClick={ () => props.hold()} style={styles}>{props.value}</button>)
}