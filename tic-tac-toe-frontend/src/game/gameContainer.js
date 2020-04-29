import React from "react";

import GameComponent from "./gameComponent";
import "./game.css";

const GameContainer = () => {
  const handleTileClick = (e) => {
    console.log(e.target.getAttribute("data-source"))
  }
  return (
    <GameComponent
      handleTileClick={handleTileClick}
    />
    );
};

export default GameContainer;
