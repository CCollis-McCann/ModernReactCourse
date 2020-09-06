import React from 'react';

import '../styles/Coin.css';

function Coin(props) {
  return (
    <div className="coin">
      <img src={props.face.img} alt={props.face.side}></img>
    </div>
  );
}

export default Coin;
