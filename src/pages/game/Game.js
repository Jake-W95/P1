import TrumpCard from "../../components/TrumpCard";
import "./game.css";

    // GAME LOGIC 
import shuffleDeal from "../../gameScripts/gameLogic";
// import round from "../../gameScripts/round";

  //
  // const driverData = require("../../driver-data.json");

// shuffleDeal()


const Game = () => {
  const hand1 = shuffleDeal()[0];
  const hand2 = shuffleDeal()[1]

  // round(hand1, hand2)
return console.log(shuffleDeal()[0][0])

  return (
    <section className="game-container">
      <div className="row">
        <div className="col-12 col-md-6">
          <TrumpCard player="user" /*hand={hand1[0]}*/ />
        </div>
        <div className="col-12 col-md-6">
          <TrumpCard player="computer" /*hand={hand2[0]}*/ />
        </div>
      </div>
    </section>
  );
};

export default Game;
