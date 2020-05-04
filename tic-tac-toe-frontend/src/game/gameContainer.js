import React, { useState, useEffect } from "react";

import GameComponent from "./gameComponent";
import "./game.css";
const intialState =  () =>  [[{sign: ""}, {sign: ""}, {sign: ""}], [{sign: ""}, {sign: ""}, {sign: ""}], [{sign: ""}, {sign: ""}, {sign: ""}]];
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
    if(gameState[i][j].sign.length) {
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

  const getPlayerName = (tile) => {
    if(tile === "X") {
      return localStorage.getItem("name");
    }
    return localStorage.getItem("player2name");
  }

  const getWinner = (gameState) => {
    console.log(gameState[0][0], "##")
    if (gameState[0][0].sign === gameState[1][1].sign && gameState[1][1].sign === gameState[2][2].sign) {
      gameState[0][0].won = true;
      gameState[1][1].won = true;
      gameState[2][2].won = true;
      return getPlayerName(gameState[0][0].sign);
    } else if (gameState[0][2].sign === gameState[1][1].sign && gameState[1][1].sign === gameState[2][0].sign) {
      gameState[0][2].won = true;
      gameState[1][1].won = true;
      gameState[2][0].won = true;
      return getPlayerName(gameState[0][2].sign);
    }
    for(let i=0; i<3; i++) {
      if(gameState[i][0].sign === gameState[i][1].sign && gameState[i][1].sign === gameState[i][2].sign) {
        gameState[i][0].won = true;
        gameState[i][1].won = true;
        gameState[i][2].won = true;
        return getPlayerName(gameState[i][0].sign);
      } else if (gameState[0][i].sign === gameState[1][i].sign &&  gameState[1][i].sign === gameState[2][i].sign) {
        gameState[0][i].won = true;
        gameState[1][i].won = true;
        gameState[2][i].won = true;
        return getPlayerName(gameState[0][i].sign);
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

  useEffect(() => {

  }, [])


  const handleTileClick = ({ target }, artificialMove = false, move) => {
    
    let player = state.turn ? 'O' : 'X';
    let [i, j] = artificialMove ? move : target.getAttribute("data-source").split(',');
    let tempEntries = state.entries;
    if(tempEntries[i][j].length) {
      return;
    }
    tempEntries[i][j] = {
      sign: player,
      won: false
    };
    let winner = getWinner(tempEntries);
    if (winner) {
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
    <>
      {/* {state.won && ()} */}
      <GameComponent
        handleTileClick={handleTileClick}
        gameState={state.entries}
      />
    </>
    );
};

export default GameContainer;
