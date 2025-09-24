export default function Die(props) {
    return (<button onClick={ () => props.hold()}>{props.value}</button>)
}