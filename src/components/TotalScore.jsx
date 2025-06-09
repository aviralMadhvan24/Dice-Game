import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div>
  <div className="total-score">{score}</div>
  <div className="total-score-label">Total Score</div>
</div>

  )
}

export default TotalScore
