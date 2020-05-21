import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">The counter is currently: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} data-test="increment-button">Increment</button>
    </div>
  );
}

export default App;
