import { useState } from "react";

import WinGame from "../../components/WinGame";
import LoseGame from "../../components/LoseGame";

import TrumpCard from "../../components/TrumpCard";
import "./game.css";
import GameInstructions from "../../components/GameInstructions";

// GAME LOGIC
import shuffleDeal from "../../gameScripts/gameLogic";

const hands = shuffleDeal();

const Game = () => {
  // Dealt hands
  let hand1 = hands[0];
  let hand2 = hands[1];

  // States Getting User's chosen Att Name and Value
  const [userAttVal, setUserAttVal] = useState(undefined);
  const [userAttName, setUserAttName] = useState(undefined);

  //
  const getUserAttVal = (userAttVal) => {
    setUserAttVal(userAttVal);
  };
  const getUserAttName = (userAttName) => {
    setUserAttName(userAttName);
  };

  // State Getting AI's Att Value for comparison
  const [AIAttVal, setAIAttVal] = useState(undefined);
  const getAIVal = (AIAttVal) => {
    setAIAttVal(AIAttVal);
  };

  const valueReset = () => {
    setUserAttName(undefined);
    setUserAttVal(undefined);
    setAIAttVal(undefined);
  };

  // Value Comparison

  function winCard() {
    let wonCard = [];
    wonCard = hand2.splice(j, 1);
    hand1.splice(hand1.lastIndexOf, 0, wonCard[0]);
    seti((i += 2));
    valueReset();
  }
  function loseCard() {
    let lostCard = [];
    lostCard = hand1.splice(i, 1);
    hand2.splice(hand2.lastIndexOf, 0, lostCard[0]);
    setj((j += 2));
    valueReset();
  }

  let [i, seti] = useState(0);
  let [j, setj] = useState(0);

  const increment = () => {
    i === hand1.length ? seti(0) : seti(i++);
    j === hand2.length ? setj(0) : setj(j++);
  };
  // Started thinking of how to set up AI Card flip on user choice, but decided to leave it
  const [AIFlip, setAIFlip] = useState(true);
  const flipAICard = () => setAIFlip(!AIFlip);

  const nextRound = () => {
    if (userAttVal === AIAttVal && userAttName !== undefined) {
      increment();
      increment();
      flipAICard();
      valueReset();
      //  return
    } else if (userAttName === "Team Ranking") {
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
    flipAICard();
    // console.log(userAttVal, userAttName, AIAttVal)
  };

  //  Boolean controlling display of game instructions
  const [showInstructions, setShowInstructions] = useState(true);
  //  Function used to toggle showInstructions true/false
  const toggleInstructions = () => setShowInstructions(!showInstructions);

  //  Win State
  if (hand1.length === 20) {
    return <WinGame />;
  }
  //  Lose State
  if (hand2.length === 20) {
    return <LoseGame />;
  }
  //  Game State
  else {
    return (
      <section className="game">
        <div className="title-container">
          <h1 className="page-title">P1 Heroes</h1>
        </div>

        <div className="instructions-wrap row">
          <GameInstructions toggleInstructions={toggleInstructions} showInstructions={showInstructions} />
        </div>

        <div className="game-wrap row">
          <div className="col-12 col-md-6">
            <div className="player-wrap">
              <h3>Player 1</h3>
              <p>Cards left:{hand1.length}</p>
            </div>
            <TrumpCard
              player="user"
              card={hand1[i]}
              getUserAttVal={getUserAttVal}
              getUserAttName={getUserAttName}
              nextRound={nextRound}
              flipAICard={flipAICard}
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="player-wrap">
              <h3>Computer</h3>
              <p>Cards left: {hand2.length}</p>
            </div>
            <TrumpCard
              player="computer"
              card={hand2[j]}
              userAttName={userAttName}
              getAIAttVal={getAIVal}
              AIFlip={AIFlip}
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Game;
