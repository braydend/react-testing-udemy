import React, { useEffect } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';
import Input from './Input';

type StateType = {
  secretWord: string | null,
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
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null});

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  const {
    secretWord
  } = state;

  return (
    <div className="App">
      <h1>Jotto!</h1>
      {secretWord ? (
        <div id="app">
         <Input secretWord={secretWord} />
         <Congrats success={false} />
         <GuessedWords guessedWords={[{word: 'foo', letterMatchCount: 1}]} />
       </div>
      ) : (
        <div id="spinner">
          <p>Loading secret word</p>
        </div>
      )}
     
    </div>
  );
}

export default App;
