import React from 'react';
import '../styles/Box.css';

function Box({ color, handleClick }) {
  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default Box;
