import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
  dark: false,
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
];

const darkTheme = [
  '--app-background: black',
  '--tile-color: red',
  '--tile-shadow: 1px 1px 20px 20px #ff00005c',
  '--tile-active: 1px 1px 20px 20px red',
];