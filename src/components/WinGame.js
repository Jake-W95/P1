import { NavLink } from "react-router-dom";

const WinGame = () => {
  return (
    <section className="outcome-container">
      <div className="outcome-wrap">
        <h1>The checkered flag is yours - you've taken P1 in style!</h1>
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </section>
  );
};

export default WinGame;
