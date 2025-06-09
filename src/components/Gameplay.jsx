import React from 'react'
import NumberSelector from './NumberSelector'
import DiceRoll from './DiceRoll'
import { useState } from 'react'
import TotalScore from './TotalScore'
import Button from './Button'
import Rules from './Rules'
const Gameplay = () => {
  const [score,setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
const [error,setError] = useState("");
const [rules, setRules] = useState(false);

const randomNumberGenerator = (min,max) =>{

    return (Math.floor(Math.random() * (max-min) + min))
}


const rollDice = () =>{

  if(!selectedNumber) {
    setError("Please select a number before rolling the dice");
    return;
  } ;
    const randomNumber = randomNumberGenerator(1,7);
    setCurrentDice( randomNumber);

  if(selectedNumber=== randomNumber){
    setScore((prev) => prev + randomNumber);
  }else{
    setScore((prev)=>prev -2);
  }

   setSelectedNumber(undefined)
}


const resetGame = () => {
  setScore(0);
  setCurrentDice(1);
  setSelectedNumber(undefined);
}

const showRules = (rules) => {
  setRules(!rules);
}


  return (
    <>
   <div className="game-container">
  {error && <div className="error-message">{error}</div>}

  <NumberSelector
    setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
  />

  <DiceRoll currentDice={currentDice} rollDice={rollDice} />

  <TotalScore score={score} />

  <Button className="btn" onClick={resetGame}>Reset</Button><br></br>
  <Button className="btn" onClick={() => setRules((prev) => !prev)}>
    {rules ? "Hide" : "Show"} Rules
  </Button>

  {rules && <Rules />}
</div>

</>
  )
}

export default Gameplay
