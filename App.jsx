import React from "react"
import { languages } from "./languages"
import { clsx } from "clsx"
import { getFarewellText } from "./utils"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = React.useState("REACT")
    const [guessedLetters, setGuessedLetters] = React.useState([])

    let wrongGuessCount = guessedLetters.map(
        letter => currentWord.includes(letter) ? true : false
        ).filter( el => !el ).length;

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const isWrongGuess = guessedLetters.length > 0 ? !currentWord.includes(guessedLetters[guessedLetters.length - 1]) : false

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    const languagesChips = languages.map( (el,index) => 
        {
            const diff = wrongGuessCount - index > 0 ? wrongGuessCount - index : null;
            const classNameLang = clsx({
            "language-chip": !diff,
            "lost": diff
        });
            return (<div className={classNameLang} style={{
            backgroundColor: el.backgroundColor,
            color: el.color
            }}>
            {el.name}
        </div>)}
        )

    const word = currentWord.split("").map( 
        (el,index) => <span className="letters" key={index}>{ guessedLetters.includes(el) ? el.toUpperCase() : ""}</span> 
        )
         
    const letters = alphabet.toUpperCase().split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isWrongGuess
    })

    function renderGameStatus(language) {
        if (!isGameOver && !isWrongGuess) {
            return (
                <>
                    {null}
                </>
            )
        }
        else if (!isGameOver && isWrongGuess) {
            return (
                <>
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </>
                )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p className="description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            {
                <section className={gameStatusClass}>
                    {renderGameStatus()}
                </section> 
            }
            <section className="chips-container">
                {languagesChips}
            </section>
            <section className="word">
                {word}
            </section>
            <section className="keyboard">
                {letters}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}