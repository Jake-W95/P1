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
  let WLD = ''
  function winCard () {hand1.splice(i++, 0, hand2.splice(j, 1)); seti(i++)}
  function loseCard () {hand2.splice(j++, 0, hand1.splice(i, 1))}
  
  let [i, seti] = useState(0)
  let [j, setj] = useState(0)
  const increment = () => {
    if (userAttVal > AIAttVal) {
      winCard()
    } else if (userAttVal < AIAttVal) {
      loseCard()
    } else if (userAttVal === AIAttVal && userAttName != undefined) {
      WLD = 'DRAW'
    }
      

    i === hand1.length ? seti(0) : seti(i++); 
      // i++
      j === hand2.length ? setj(0) : setj(j++);
      console.log('i' + i,' j ' + j);
      console.log(hand1.length, hand1[i])
      console.log(hand2.length, hand2[j])
  }
    // setj(j++); 
  // }

                                  // Started thinking of how to set up AI Card flip on user choice, but decided to leave it
  // const [AIFlip, setAIFlip] = useState(false)
  // const flipAICard = () => setAIFlip(true)


  return (
    <section className="game-container">
      <h1>{WLD}</h1>
      <h1>{userAttVal}</h1>
      <h1>{AIAttVal}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <TrumpCard player="user" card={hand1[i]} getUserAttVal={getUserAttVal} getUserAttName={getUserAttName} increment={increment}/>
        </div>
        <div className="col-12 col-md-6">
          <TrumpCard player="computer" card={hand2[j]} userAttName={userAttName} getAIAttVal={getAIVal} />
        </div>
      </div>
    </section>
  );

};

export default Game;
