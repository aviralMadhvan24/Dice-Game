


const StartGame = ({toggle}) => {
  return (
    <div
    
    >
      <button 
     

      onMouseOver={e => e.currentTarget.style.backgroundColor = '#fa5252'}
    onMouseOut={e => e.currentTarget.style.backgroundColor = '#ff6b6b'}
      onClick= {toggle}>Start Game</button>
    </div>
  )
}

export default StartGame
