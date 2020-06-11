import React from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="App">
      <h1>Jotto!</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{word: 'foo', letterMatchCount: 1}]} />
    </div>
  );
}

export default App;
