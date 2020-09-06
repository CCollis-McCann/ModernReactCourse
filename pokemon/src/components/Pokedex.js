import React from 'react';
import Pokecard from './Pokecard';
import '../styles/Pokedex.css';

const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title;
  if (isWinner) {
    title = <h1 className='pokedex__winner'>WINNING HAND!</h1>;
  } else {
    title = <h1 className='pokedex__looser'>LOOSING HAND!</h1>;
  }
  return (
    <div className='pokedex'>
      <h1>POKEDEX!</h1>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className='pokedex__cards'>
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
