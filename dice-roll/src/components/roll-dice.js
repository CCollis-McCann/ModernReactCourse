import React, { useState } from 'react';
import Die from './die';
import '../styles/RollDice.css';

const DIE_FACES = ['one', 'two', 'three', 'four', 'five', 'six'];

function RollDice() {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setDie1(
      DIE_FACES[Math.floor(Math.random() * DIE_FACES.length)],
      setRolling(true)
    );
    setDie2(
      DIE_FACES[Math.floor(Math.random() * DIE_FACES.length)],
      setRolling(true)
    );
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="RollDice">
      <div className="RollDice__container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll'}
      </button>
    </div>
  );
}

export default RollDice;
