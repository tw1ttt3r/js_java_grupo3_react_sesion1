import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Boton from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Boton />
      </header>
    </div>
  );
}

export default App;
