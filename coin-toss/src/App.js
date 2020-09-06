import React, { useState } from 'react';
import Coin from './components/Coin';
import heads from './images/S_Half_Dollar_Obverse_2016.jpg';
import tails from './images/71009269r.jpg';
import './styles/App.css';

function App() {
  const coins = [
    {
      side: 'heads',
      img: heads,
    },
    {
      side: 'tails',
      img: tails,
    },
  ];

  const [currCoin, setCurrCoin] = useState('');
  let [flipCount, setFlipCount] = useState(0);
  let [headsCount, setHeadsCount] = useState(0);
  let [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    let randomIndex = Math.random();

    randomIndex < 0.5
      ? setHeadsCount((headsCount += 1), setCurrCoin(coins[0]))
      : setTailsCount((tailsCount += 1), setCurrCoin(coins[1]));

    setFlipCount((flipCount += 1));
  };

  return (
    <div className="App">
      <h1 className="App__header">Let's flip a coin</h1>
      {currCoin && <Coin face={currCoin} />}
      <button onClick={flipCoin}>Flip Me!</button>
      <p>
        Out of {flipCount} flips, there have been {headsCount} heads and{' '}
        {tailsCount} tails
      </p>
    </div>
  );
}

export default App;
