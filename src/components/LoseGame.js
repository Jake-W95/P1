import { NavLink } from "react-router-dom"


const LoseGame = () => {
    return (
        <section>
            <h1>You Lost</h1>
           <NavLink to='/'>Home</NavLink>
        </section>
    )
}

export default LoseGame