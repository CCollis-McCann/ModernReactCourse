import React, { useState } from 'react';
import Box from './Box';
import '../styles/App.css';

const COLORS = ['purple', 'magenta', 'violet', 'pink'];

function App() {
  const [color, setColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  );

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * COLORS.length);

    while (COLORS[randomIndex] !== color) {
      setColor(COLORS[randomIndex]);
      break;
    }
  };

  return (
    <div className="App">
      <Box color={color} handleClick={handleClick} />
    </div>
  );
}

export default App;
