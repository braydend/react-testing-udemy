import React, { useEffect } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';

type StateType = {
  secretWord: string,
};

type ActionType = {
  type: 'setSecretWord';
  payload: any;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "setSecretWord": 
      return { ...state, secretWord: action.payload };

    default:
      throw new Error(`invalid action type ${action}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: 'foo' });

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="App">
      <h1>Jotto!</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{word: 'foo', letterMatchCount: 1}]} />
    </div>
  );
}

export default App;
