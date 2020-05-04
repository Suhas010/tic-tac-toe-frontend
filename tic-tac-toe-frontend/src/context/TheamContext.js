import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
  dark: true,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider (props) {
  const [dark, setDark] = useState(false);
  
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');
    
    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    } 
  }, [dark]);

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }

  const toggle = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };

  return (
    <ThemeContext.Provider value={{
      dark,
      toggle,
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}


// styles
const lightTheme = [
  '--app-background: white',
  '--tile-color: #218186',
  '--tile-shadow: 1px 1px 20px 0px #64cbdc78',
  '--tile-active: 1px 1px 20px 10px #41dede',
  '--title-color: black',
  '--star-color: red',
  '--back-grad: radial-gradient(#e4ff0000, #ecbc0d47, #58202014, #d8d20f1f)'
];

const darkTheme = [
  '--app-background: black',
  '--tile-color: red',
  '--tile-shadow: 1px 1px 20px 20px #ff00005c',
  '--tile-active: 1px 1px 20px 20px red',
  '--title-color: white',
  '--star-color: #FFF',
  '--back-grad: radial-gradient(#171414a6, #00000094, #500b0b59, #61efdb3b)'
];