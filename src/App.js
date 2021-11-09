
import { useState } from 'react';
import './App.css';


const cardImages=[
  {'src': '/img/helmet-1.pmg'},
  {'src': '/img/potion-1.pmg'},
  {'src': '/img/ring-1.pmg'},
  {'src': '/img/scroll-1.pmg'},
  {'src': '/img/shield-1.pmg'},
  {'src': '/img/sword-1.pmg'},
]

function App() {
const  [cards,setCards] = useState([]);
const [turns,setTurns]= useState(0);

  // shuffle cards 
const shuffledCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card,id:Math.random() }))

  setCards(shuffledCards)
  setTurns(0)
}

console.log(cards,turns)
  return (
    <div className="App">
    <h1>Magic Match</h1>
    <button onClick={shuffledCards}>New Game</button>
  </div>
  );
}

export default App;
