import React, { useState, useEffect } from "react";

import GameComponent from "./gameComponent";
import "./game.css";
const intialState =  () =>  [[[], [], []], [[], [], []], [[], [], []]];
const GameContainer = () => {
  const [state, setState] = useState({
    turn: false,
    entries: [...intialState()],
    againstCom: true,
    won: false
  });

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const calculateArtificialMove = (gameState) => {
    const i = getRandomInt(3);
    const j = getRandomInt(3);
    if(gameState[i][j].length) {
      return calculateArtificialMove(gameState);
    }
    return [i, j];
  }

  const outOfMove = (gameState) => {
    let outOfMove = true;
    console.log(gameState, "Gamte")
    for(let row in gameState) {
      for(let col in gameState[row]) {
        console.log(gameState[row][col], "###")
        if(!gameState[row][col].length) {
          outOfMove =  false;
        }
      }
    }
    return outOfMove;
  };

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
    return false;
  }

  useEffect(() => {
    const performArtificialMove = () => {
      if(state.againstCom && player === 'O' && !state.won){
        handleTileClick({}, true, calculateArtificialMove(state.entries));
      }
    }
    const player = state.turn ? 'O' : 'X';
    console.log(state.won, "Won");
    if(outOfMove(state.entries)) {
      alert("Match Withdraw");
      return;
    }
    performArtificialMove();
  }, [state.turn])



  const handleTileClick = ({ target }, artificialMove = false, move) => {
    
    let player = state.turn ? 'O' : 'X';
    let [i, j] = artificialMove ? move : target.getAttribute("data-source").split(',');
    let tempEntries = [...state.entries];
    if(tempEntries[i][j].length) {
      return;
    }
    tempEntries[i][j] = player;
    let winner = getWinner(tempEntries);
    if (winner) {
      console.log("object")
      tempEntries = intialState();
      // console.log(tempEntries, "ten")
    }
    setState({
      ...state,
      won: winner,
      turn: winner ? state.turn : !state.turn,
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
