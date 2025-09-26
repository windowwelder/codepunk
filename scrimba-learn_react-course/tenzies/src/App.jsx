import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App() {
        const generateAllDice = () => {
        return [...Array(10)].map( () =>
                ({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                })
                    )
        }

        const [dice, setDice] = useState(generateAllDice())

        const [value, setValue] = useState(0)
        
        const hold = (id) => {
            setDice(prev => {
                const d = prev.find(d => d.id === id)
                const flipDice = prev.map( dice => dice.id === d.id ? {...dice, isHeld: !dice.isHeld} : dice )
                if (value === 0) {
                    setValue(d.value)
                    return flipDice
                }
                else {
                    if (value === d.value) {
                        if (d.isHeld === true) {
                            if (prev.filter(dice => dice.isHeld === true).length > 1) {
                                return flipDice
                            }
                            else {
                                setValue(0)
                                return flipDice
                            }
                        }
                        else {
                            return flipDice
                        }
                    }
                    else {
                        return prev
                    }
                }
                
            }
            )
        }

        const diceElements = dice.map( dice => 
            <Die 
                hold={ () => hold(dice.id) } 
                isHeld={dice.isHeld} 
                key={dice.id} 
                value={dice.value} 
                id={dice.id}
            />)

        const updateAllDice = () => {
        setDice( oldDice => oldDice.map(die => 
            die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
        ))
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={updateAllDice}>Roll</button>
        </main>
    )
}