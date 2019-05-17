import React from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  // Shorter
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button">Menu</button>
      </header>
      <Toggle />
    </animated.div>
  );
};

export default App;
