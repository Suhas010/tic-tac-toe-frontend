import React, { useContext } from 'react';
import ThemeContext from '../context/TheamContext';

const GameComponent = ({
  handleTileClick
}) => {
  const { dark } = useContext(ThemeContext);
  
  let i=0;
  const renderTiles = () => [...Array(9)].map(() => {
    return (
      <div class="tile" data-source={i++} key={i}></div>
    );
  })


  return (
    <React.StrictMode>
      <div className="game-container">
        <div className="game" onClick={handleTileClick}>
          {renderTiles()}
        </div>
      </div>
    </React.StrictMode>

  )
}

export default GameComponent;