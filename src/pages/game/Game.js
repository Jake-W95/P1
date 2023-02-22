import { useState } from "react";

import WinGame from "../../components/WinGame";
import LoseGame from "../../components/LoseGame"

import TrumpCard from "../../components/TrumpCard";
import "./game.css";
import GameInstructions from "../../components/GameInstructions";

// GAME LOGIC 
import shuffleDeal from "../../gameScripts/gameLogic";

const hands = shuffleDeal()


const Game = () => {
  // Dealt hands
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
  const getAIVal = (AIAttVal) => { setAIAttVal(AIAttVal) }

  const valueReset =() => {
    setUserAttName(undefined)
    setUserAttVal(undefined);
    setAIAttVal(undefined);
  }




  // Value Comparison

  function winCard() {
    let wonCard = [];
    wonCard = hand2.splice(j, 1);
    hand1.splice(hand1.lastIndexOf, 0, wonCard[0])
    seti(i += 2);
    valueReset()
  }
  function loseCard() {
    let lostCard = [];
    lostCard = hand1.splice(i, 1)
    hand2.splice(hand2.lastIndexOf, 0, lostCard[0])
    setj(j += 2)
    valueReset()
  }

  let [i, seti] = useState(0)
  let [j, setj] = useState(0)

  const increment = () => {
    i === hand1.length ? seti(0) : seti(i++);
    j === hand2.length ? setj(0) : setj(j++);
  }
  // Started thinking of how to set up AI Card flip on user choice, but decided to leave it
  const [AIFlip, setAIFlip] = useState(true)
  const flipAICard = () => setAIFlip(!AIFlip)


  const nextRound = () => {

    if (userAttVal === AIAttVal && userAttName !== undefined) {
      increment()
      increment()
      flipAICard()
      valueReset()
      //  return
    } else if (userAttName === 'Team Ranking') {
      if (userAttVal < AIAttVal) {
        winCard();
        increment();
      } else if (userAttVal > AIAttVal) {
        loseCard();
        increment();
      }

    } else {
      if (userAttVal > AIAttVal) {
        winCard();
        increment();
      } else if (userAttVal < AIAttVal) {
        loseCard();
        increment();
      }
    }
    flipAICard()
    // console.log(userAttVal, userAttName, AIAttVal)
  }

  //  Boolean controlling display of game instructions
  const [showInstructions, setShowInstructions] = useState(true)
  //  Function used to toggle showInstructions true/false
  const toggleInstructions = () => setShowInstructions(!showInstructions)

  //  Win State
  if (hand1.length === 20) {
    return <WinGame />
  }
  //  Lose State
  if (hand2.length === 20) {
    return <LoseGame />
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
              <h3>{userAttName}</h3>
              <h1>Cards Remaining:</h1>
              <h2 style={{ textAlign: "center" }}>{hand1.length}</h2>
            </div>
            <div className="col-12 col-md-6">
              <TrumpCard player="computer" card={hand2[j]} userAttName={userAttName} getAIAttVal={getAIVal} AIFlip={AIFlip} />
              <h1>Cards Remaining:</h1>
              <h2 style={{ textAlign: "center" }}>{hand2.length}</h2>
            </div>
          </div>
        </section>
      </>
    );
  }
};


export default Game;
