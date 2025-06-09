

import maindices from '/images/maindices.png';

const StartGame = ({toggle}) => {
  return (
    <div
    style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#black',
        color: '#fff',
        fontFamily: 'Arial, sans-serif'}
    }
    >
      <img src={maindices} alt="maindices" />
      <button 
     

      onMouseOver={e => e.currentTarget.style.backgroundColor = '#fa5252'}
    onMouseOut={e => e.currentTarget.style.backgroundColor = '#ff6b6b'}
      onClick= {toggle}>Start Game</button>
    </div>
  )
}

export default StartGame
