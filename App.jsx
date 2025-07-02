import React from "react"

export default function AssemblyEndgame() {
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p className="description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <div className="status-section">
                <p className="win-text">You win!</p><p className="win-text" id="well-done">Well done!🎉</p>
            </div>
        </main>
    )
}