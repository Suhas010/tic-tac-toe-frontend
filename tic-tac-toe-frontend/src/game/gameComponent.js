import React, { useContext } from 'react';
import ThemeContext from '../context/TheamContext';

const GameComponent = ({
  handleTileClick
}) => {
  const { dark } = useContext(ThemeContext);
  
  return (
    <React.StrictMode>
      <div className="game-container">
        <div className="game" onClick={handleTileClick}>
          <div class="tile" data-source="1"></div>
          <div class="tile" data-source="2"></div>
          <div class="tile" data-source="3"></div>
          <div class="tile" data-source="4"></div>
          <div class="tile" data-source="5"></div>
          <div class="tile" data-source="6"></div>
          <div class="tile" data-source="7"></div>
          <div class="tile" data-source="8"></div>
          <div class="tile" data-source="9"></div>
        </div>
      </div>
    </React.StrictMode>

  )
}

export default GameComponent;