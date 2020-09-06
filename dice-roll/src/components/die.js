import React from 'react';
import '../styles/Die.css';

function Die({ face, rolling }) {
  return (
    <i className={`Die fas fa-dice-${face} ${rolling ? 'Shaking' : ''}`}></i>
  );
}

export default Die;
