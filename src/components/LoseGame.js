import { NavLink } from "react-router-dom";

const LoseGame = () => {
  return (
    <section className="outcome-container">
      <div className="outcome-wrap">
        <h1>Don't worry, even Lewis Hamilton has bad days!</h1>
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </section>
  );
};

export default LoseGame;
