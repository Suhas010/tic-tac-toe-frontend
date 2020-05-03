import React from 'react';

const GameComponent = ({
  handleTileClick,
  gameState
}) => {
  const renderTiles = () => {
    return gameState.map((row, i) => {
      return row.map((col, j) => {
        return (
          <div className={`tile ${col.length ? 'filled' : ''}` } data-source={[i, j]} key={i+j}>
            {col && (<span className="item" onClick={(e) => e.stopPropagation()}>{col}</span>)}
          </div>
        );
      });
    })
  };

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