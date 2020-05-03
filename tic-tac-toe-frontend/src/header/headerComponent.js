import React, { useContext } from 'react';
import './header.css';
import ThemeContext from '../context/TheamContext';

const Header = () => {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <div className="header-container">
      <div></div>
      <div className="title">Tic Tac Toe</div>
      <div className="but">
        <label class="switch">
          <input type="checkbox" checked={dark} onClick={() => toggle()}/>
          <span class="slider round fa-">
            {dark && <img src="/sun-solid.svg" style={{ filter: 'invert(1)'}}/> }
            {!dark && <img src="/moon-solid.svg" />}
          </span>
        </label>
      </div>
    </div>
  );
}

export default Header;