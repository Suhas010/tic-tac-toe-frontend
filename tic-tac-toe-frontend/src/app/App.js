import React from 'react';
import { ThemeProvider } from '../context/TheamContext';
import GameContainer from '../game/gameContainer';
import Footer from '../footer/footerComponent';
import Header from '../header/headerComponent';

function App() {
  return (
    <ThemeProvider>
        <Header />
        <GameContainer/>
        <footer>
          <Footer/>
        </footer>
    </ThemeProvider>
  );
}

export default App;
