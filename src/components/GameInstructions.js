

const GameInstructions = ({ toggleInstructions, showInstructions }) => {
    if (showInstructions) {
        return (
            <section className="game-instructions">
                <h1>P1 Heroes</h1>
                <h3>Welcome to P1 Heroes!</h3>
                <h4>Pit your favourite Formula 1 drivers against each-other in this incredibly original card game that definitely isn't a rip-off of Top Trumps <br></br>
                    Win cards by choosing an attribute that beats your opponents! But choose carefully, get it wrong and you'll lose your own card!<br></br>
                    The winner is the player who ends up with all of the cards, the loser must hang their head in shame and think about what they've done. <br></br>
                    Don't be a pathetic loser. Be a hero.</h4>
                <h3 style={{marginTop: "2rem"}}>With Team Ranking the lowest number wins!</h3>

                <button onClick={toggleInstructions}>Toggle Show</button>

            </section>
        )
    }
    return <button onClick={toggleInstructions}>Toggle Show</button>
}

export default GameInstructions