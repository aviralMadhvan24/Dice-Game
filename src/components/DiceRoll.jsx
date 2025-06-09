import React, { useState } from 'react'

const DiceRoll = ({currentDice,rollDice}) => {





  return (
   <div className="dice-roll" onClick={rollDice}>
  <img src={`/images/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
</div>

  )
}

export default DiceRoll
