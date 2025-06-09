import React, { useState } from 'react'

const NumberSelector = ({selectedNumber,setSelectedNumber,setError}) => {
const arr = [1,2,3,4,5,6];


const NumberSelectorHandler = (value) =>{
  setSelectedNumber(value)
  setError("");
}
  return (
   <div className="number-selector">
  {arr.map((val, i) => (
    <div
      key={i}
      className={`${val === selectedNumber ? 'active' : ''}`}
      onClick={() => NumberSelectorHandler(val)}
    >
      {val}
    </div>
  ))}
</div>

  )
}

export default NumberSelector
