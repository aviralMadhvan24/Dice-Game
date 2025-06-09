import React from 'react'

const Rules = () => {
  return (
   <div className="rules-container">
  <h2>Follow the Rules:</h2>
  <ul>
    <li>Select a number between 1 to 6</li>
    <li>Click on roll dice</li>
    <li>If the number matches, you get points equal to that number</li>
    <li>If not, you lose 2 points</li>
    <li>Reset to start over</li>
  </ul>
</div>

  )
}

export default Rules
