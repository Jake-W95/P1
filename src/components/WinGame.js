import Game from "../pages/game/Game"

const WinGame = () => {
    return (
        <section>
            <h1>You Won!</h1>
            <button onClick={<Game />}>Play Again?</button>
        </section>
    )
}

export default WinGame