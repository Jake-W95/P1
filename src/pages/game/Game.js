import { useState } from "react";

// import WinGame from "../../components/WinGame";

import TrumpCard from "../../components/TrumpCard";
import "./game.css";
import GameInstructions from "../../components/GameInstructions";

// GAME LOGIC 
import shuffleDeal from "../../gameScripts/gameLogic";


// const driverData = require("../../driver-data.json");

// const hand2 = shuffleDeal()[1]
// console.log(hand1)




const hands = shuffleDeal()
const Game = () => {

  let hand1 = hands[0];
  let hand2 = hands[1]

  // States Getting User's chosen Att Name and Value
  const [userAttVal, setUserAttVal] = useState(undefined)
  const [userAttName, setUserAttName] = useState(undefined)

  // 
  const getUserAttVal = (userAttVal) => { setUserAttVal(userAttVal) }
  const getUserAttName = (userAttName) => { setUserAttName(userAttName) }

  // State Getting AI's Att Value for comparison
  const [AIAttVal, setAIAttVal] = useState(undefined)

  // const getAIVal = (AIAttVal) => { setAIAttVal(AIAttVal) }

  // Value Comparison
  // let WLD = ''
  function winCard() {
    let wonCard = [];
    wonCard = hand2.splice(j, 1);

    hand1.splice(hand1.lastIndexOf, 0, wonCard[0])
    seti(i += 2);
    setUserAttVal(undefined);
    setAIAttVal(undefined)
  }
  function loseCard() {
    let lostCard = [];
    lostCard = hand1.splice(i, 1)
    hand2.splice(hand2.lastIndexOf, 0, lostCard[0])
    setj(j += 2)
    setUserAttVal(undefined);
    setAIAttVal(undefined)
  }

  let [i, seti] = useState(0)
  let [j, setj] = useState(0)

  const increment = () => {
    i === hand1.length ? seti(0) : seti(i++);
    j === hand2.length ? setj(0) : setj(j++);

  }
  // Started thinking of how to set up AI Card flip on user choice, but decided to leave it
  const [AIFlip, setAIFlip] = useState(true)
  const flipAICard = () => setAIFlip(false)

  const nextRound = () => {
    if (userAttName === 'Team Ranking') {
      if (userAttVal < AIAttVal) {
        winCard();
        increment()
      } else if (userAttVal > AIAttVal) {
        loseCard();
        increment()
      } else if (userAttVal === AIAttVal && userAttName !== undefined) {
        increment()
      }

      setAIFlip(true)
    } else {
      if (userAttVal > AIAttVal) {
        winCard();
        increment()
      } else if (userAttVal < AIAttVal) {
        loseCard();
        increment()
      } else if (userAttVal === AIAttVal && userAttName !== undefined) {
        increment()
      }
      setAIFlip(true)

    }
    setAIFlip(true)

    console.log('bacon')
  }



  //  Boolean controlling display of game instructions
  const [showInstructions, setShowInstructions] = useState(true)
  //  Function used to toggle showInstructions true/false
  const toggleInstructions = () => setShowInstructions(!showInstructions)

  //  Win State
  if (hand1.length === 20) {
    return (

      <>
        <h1>You Won!</h1>
        <button onClick={() => Game}>Play Again?</button></>
    )
  }
  //  Lose State
  if (hand2.length === 20) {
    return (
      <div>
        <h1>YOU LOSE</h1>
        <button onClick={() => Game}>Play Again?</button>
      </div>
    )
  }
  //  Game State
  else {
    return (
      <>
        <GameInstructions toggleInstructions={toggleInstructions} showInstructions={showInstructions} />

        <section className="game-container">

          <div className="row">
            <div className="col-12 col-md-6">
              <TrumpCard player="user" card={hand1[i]} getUserAttVal={getUserAttVal} getUserAttName={getUserAttName} nextRound={nextRound} flipAICard={flipAICard} />
              <h1>Cards Remaining:</h1>
              <h2 style={{ textAlign: "center" }}>{hand1.length}</h2>
            </div>
            <div className="col-12 col-md-6">
              <TrumpCard player="computer" card={hand2[j]} userAttName={userAttName} /*getAIAttVal={getAIVal}*/ AIFlip={AIFlip} />
              <h1>Cards Remaining:</h1>
              <h2 style={{ textAlign: "center" }}>{hand2.length}</h2>
            </div>
          </div>
          {/* <div>
          <h3>{AIAttVal}</h3> 
          {hand2.map(card => {
            return (
              <li key={card.name}>
                {card.name}
              </li>
            )
          })}
        </div> */}
        </section>
      </>
    );
  }
};


export default Game;
