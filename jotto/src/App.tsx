import React, { useEffect } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';
import Input from './Input';
import LanguageContext from './contexts/LanguageContext';
import LanguagePicker from './LanguagePicker';
import SuccessContext from './contexts/SuccessContext';
import GuessedWordsContext from './contexts/GuessedWordsContext';

type StateType = {
  secretWord: string | null,
  language: string;
};

type ActionType = {
  type: 'setSecretWord' | 'setLanguage';
  payload: any;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "setSecretWord": 
      return { ...state, secretWord: action.payload };    
      
    case "setLanguage": 
      return { ...state, language: action.payload };

    default:
      throw new Error(`invalid action type ${action}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null, language: 'en'});

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  const setLanguage = (language: string) => {
    dispatch({ type: "setLanguage", payload: language });
  };

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  const {
    secretWord, 
    language,
  } = state;

  return (
      <LanguageContext.Provider value={language}>
        <div className="App">
          <LanguagePicker setLanguage={setLanguage} />
          <h1>Jotto!</h1>
          {secretWord ? (
            <div id="app">
              <GuessedWordsContext.GuessedWordsProvider>
                <SuccessContext.SuccessProvider>
                  <Input secretWord={secretWord} />
                  <Congrats />
                </SuccessContext.SuccessProvider>
                <GuessedWords />
              </GuessedWordsContext.GuessedWordsProvider>
            </div>
          ) : (
            <div id="spinner">
              <p>Loading secret word</p>
            </div>
          )}
        
        </div>
      </LanguageContext.Provider>
  );
}

export default App;
