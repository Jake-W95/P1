import { useState, useEffect } from "react";

import TrumpCard from "../../components/TrumpCard";
import "./game.css";

// GAME LOGIC 
import shuffleDeal from "../../gameScripts/gameLogic";


// const driverData = require("../../driver-data.json");

// const hand2 = shuffleDeal()[1]
// console.log(hand1)


const hands = shuffleDeal()
const Game = () => {
  // useEffect(()=> setHands(shuffleDeal()), [hands])

  // const [hands, setHands] = useState([])
  const hand1 = hands[0];
  const hand2 = hands[1]

  console.log(hands)
  // States Getting User's chosen Att Name and Value
  const [userAttVal, setUserAttVal] = useState(undefined)
  const [userAttName, setUserAttName] = useState(undefined)

  // 
  const getUserAttVal = (userAttVal) => { setUserAttVal(userAttVal) }
  const getUserAttName = (userAttName) => { setUserAttName(userAttName) }

  // State Getting AI's Att Value for comparison
  const [AIAttVal, setAIAttVal] = useState(undefined)

  const getAIVal = (AIAttVal) => { setAIAttVal(AIAttVal) }

  // Value Comparison
  const WLD = ''
  if (userAttVal > AIAttVal) {
    WLD = 'YOU WIN'
  } else if (userAttVal < AIAttVal) {
    WLD = 'YOU LOSE'
  } else if (userAttVal === AIAttVal && userAttName != undefined) {
    WLD = 'DRAW'
  }
  return (
    <section className="game-container">
      <h1>{WLD}</h1>
      <h1>{userAttVal}</h1>
      <h1>{AIAttVal}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <TrumpCard player="user" card={hand1[0]} getUserAttVal={getUserAttVal} getUserAttName={getUserAttName} />
        </div>
        <div className="col-12 col-md-6">
          <TrumpCard player="computer" card={hand2[0]} userAttName={userAttName} getAIAttVal={getAIVal} />
        </div>
      </div>
    </section>
  );

};

export default Game;
