import React from 'react';
import '../styles/Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;
  return (
    <div className='pokecard'>
      <h1 className='pokecard__title'>{name}</h1>
      <div className='pokecard__img'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='pokecard__data'>Type: {type}</div>
      <div className='pokecard__data'>Exp: {exp}</div>
    </div>
  );
};

export default Pokecard;
