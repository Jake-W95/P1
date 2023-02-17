import { useState } from "react";

import TrumpCard from "../../components/TrumpCard";
import "./game.css";

// GAME LOGIC 
import shuffleDeal from "../../gameScripts/gameLogic";


// const driverData = require("../../driver-data.json");

// const hand2 = shuffleDeal()[1]
// console.log(hand1)



const Game = () => {
  const hands = shuffleDeal()
  const hand1 = hands[0];
  const hand2 = hands[1]

  const [attVal, setAttVal] = useState(Number)

  const userAttVal = (attVal) => {setAttVal(attVal)}


  return (
    <section className="game-container">
      <div className="row">
        <div className="col-12 col-md-6">
      <h1>{attVal}</h1>
          <TrumpCard player="user" card={hand1[0]} userAttVal={userAttVal} />
        </div>
        <div className="col-12 col-md-6">
          <TrumpCard player="computer" card={hand2[0]} />
        </div>
      </div>
    </section>
  );
};

export default Game;
