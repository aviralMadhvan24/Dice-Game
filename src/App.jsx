import { useState } from "react"
import Gameplay from "./components/Gameplay";
import StartGame from "./components/StartGame";
import NumberSelector from "./components/NumberSelector";
import DiceRoll from "./components/DiceRoll.jsx";
import './app.css'
function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGameplay = () =>{

    setIsGameStarted((prev)=> !prev);
  }

  return (
    <div className="app-container">

  {isGameStarted ? <Gameplay/> : <StartGame toggle = {toggleGameplay }/>}
    </div>
  ) 
}

export default App
