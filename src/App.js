
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';


const cardImages=[
  {'src': '/img/helmet-1.png'},
  {'src': '/img/potion-1.png'},
  {'src': '/img/ring-1.png'},
  {'src': '/img/scroll-1.png'},
  {'src': '/img/shield-1.png'},
  {'src': '/img/sword-1.png'},
]

function App() {
const  [cards,setCards] = useState([])
const [turns,setTurns]= useState(0)
const [choiceOne,setChoiceOne] = useState(null)
const [choiceTwo,setChoiceTwo] = useState(null)

  // shuffle cards 
const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id:Math.random() }))

  setCards(shuffledCards)
  setTurns(0)
}

//HANDLE choices
const handleChoice = (card) =>{
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

// compare two selected cards
useEffect(() => {
if (choiceOne && choiceTwo){
  if ( choiceOne.src === choiceTwo.src){
    console.log('they match')
    resetTurn()
  }else{
    console.log('they dont match')
    resetTurn()
  }
}
},[choiceOne,choiceTwo])

//reset choice & increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

console.log(cards,turns)
  return (
    <div className="App">
    <h1>Magic Match</h1>
    <button onClick={shuffleCards}>New Game</button>

    <div className='card-grid'>
      {cards.map(card => (
        <SingleCard 
        key={card.id} 
        card={card}
        handleChoice={handleChoice}
        />
      ))}
    </div>
  </div>
  );
}

export default App;
