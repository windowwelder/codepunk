export default function Die(props) {
    const theme = {
        size: "60px"
    }
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#e4e9e8ff",
        width: theme.size,
        height: theme.size,
        margin: "5px",
        border: "0.5px solid #070908ff",
        borderRadius: "5px",
        fontSize: "30px",
        fontFamily: "Inter, sans-serif"
    }
    return (<button onClick={ () => props.hold()} /* style={styles} */>{props.value}</button>)
}