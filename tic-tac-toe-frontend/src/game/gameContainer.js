import React, { useState } from "react";

import GameComponent from "./gameComponent";
import "./game.css";
const intialState =  () =>  [[[], [], []], [[], [], []], [[], [], []]];
const GameContainer = () => {
  const [state, setState] = useState({
    turn: false,
    entries: [...intialState()],
    againstCom: true
  });

  const getWinner = (gameState) => {
    if (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) {
      return gameState[0][0];
    } else if (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) {
      return gameState[0][2];
    }
    for(let i=0; i<3; i++) {
      if(gameState[i][0] === gameState[i][1] && gameState[i][1] === gameState[i][2]) {
        return gameState[i][0];
      } else if (gameState[0][i] === gameState[1][i] &&  gameState[1][i] === gameState[2][i]) {
        return gameState[0][i];
      }
    }
    return null;
  }

  const handleTileClick = ({ target }) => {
    let player = state.turn ? 'O' : 'X';
    console.log(target.getAttribute("data-source"));
    let [i, j] = target.getAttribute("data-source").split(',');
    let tempEntries = [...state.entries];
    if(tempEntries[i][j].length) {
      return;
    }
    tempEntries[i][j] = player;
    if (getWinner(tempEntries)) {
      console.log("object")
      tempEntries = intialState();
      console.log(tempEntries, "ten")
    }
    setState({
      turn: !state.turn,
      entries: tempEntries
    });
    
  }
  return (
    <GameComponent
      handleTileClick={handleTileClick}
      gameState={state.entries}
    />
    );
};

export default GameContainer;
