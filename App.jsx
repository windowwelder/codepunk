import React from "react"
import { languages } from "./languages"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = React.useState("REACT")
    const word = currentWord.split("").map( (el,index) => <span className="letters" key={index}>{el}</span> )
    
    const [keys,setKeys] = React.useState([])
    
    const handleClick = (letter) => {
        setKeys( 
            prevKeys => prevKeys.includes(letter) ? prevKeys : [...prevKeys, letter]
        )
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letters = alphabet.toUpperCase().split("").map( el => <button key={el} className="letters" onClick={() => handleClick(el)}>{el}</button>)

    const languagesChips = languages.map( (el) => 
        <div className="language-chip" style={{
            backgroundColor: el.backgroundColor,
            color: el.color
            }}>
            {el.name}
        </div>
        )
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p className="description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <div className="status-section">
                <p className="win-text">You win!</p><p className="win-text" id="well-done">Well done!🎉</p>
            </div>
            <section className="chips-container">
                {languagesChips}
            </section>
            <section className="word">
                {word}
            </section>
            <section className="keyboard">
            {letters}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}