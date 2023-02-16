import TrumpCard from "../../components/TrumpCard";
import "./game.css";

const Game = () => {
  return (
    <section className="game-container">
      <div className="row">
        <div className="col-12 col-md-6">
          <TrumpCard player="user" />
        </div>
        <div className="col-12 col-md-6">
          <TrumpCard player="computer" />
        </div>
      </div>
    </section>
  );
};

export default Game;
