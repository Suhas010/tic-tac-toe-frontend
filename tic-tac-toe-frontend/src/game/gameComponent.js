import React from 'react';

const GameComponent = ({
  handleTileClick,
  gameState
}) => {
  const renderTiles = () => {
    return gameState.map((row, i) => {
      return row.map(({sign, won}, j) => {
        return (
          <div className={`tile ${sign.length ? 'filled' : ''}` } data-source={[i, j]} key={i+j}>
            {sign && (<span className="item" onClick={(e) => e.stopPropagation()}>{sign}</span>)}
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