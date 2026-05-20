import { useState } from 'react';
import Title from './components/Title/Title.jsx';
import Game from './components/Game/Game.jsx';
import Scoreboard from './components/Scoreboard/Scoreboard.jsx';
import './App.css';

const App = () => {
  const [turns, setTurns] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const handleNewGame = () => {
    setTurns(0);
    setIsWon(false);
  };

  return (
    <div className="App">
      <Title />
      <Scoreboard 
        turns={turns} 
        isWon={isWon} 
        onNewGame={handleNewGame} 
      />
      
    </div>
  );
};

export default App;