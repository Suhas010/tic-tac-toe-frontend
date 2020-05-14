import React from 'react';
import { ThemeProvider } from '../context/TheamContext';
import GameContainer from '../game/gameContainer';
import Footer from '../footer/footerComponent';
import Header from '../header/headerComponent';

function App() {
  let name = localStorage.getItem("name");
  localStorage.setItem("player2name", "Suhas");
  if(!name) {
    localStorage.setItem("name", "You");
  }
  return (
    <ThemeProvider>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="main">
        <Header />
        <GameContainer/>
        <footer>
          <Footer/>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
