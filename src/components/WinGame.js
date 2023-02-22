import { NavLink } from "react-router-dom"


const WinGame = () => {
    return (
        <section>
            <h1>You Won!</h1>
           <NavLink to='/'>Home</NavLink>
        </section>
    )
}

export default WinGame