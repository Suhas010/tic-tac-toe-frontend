import React, { useContext } from 'react';
import './header.css';
import ThemeContext from '../context/TheamContext';

const Header = () => {
  const { dark, toggle } = useContext(ThemeContext);
  
  const toggleTheam =  () => {
    console.log("toggle Theam")
  };
  return (
    <div className="header-container">
      <button onClick={() => toggle()}>{dark? "Light": "Dark"}</button>
    </div>
  );
}

export default Header;