import React, { Dispatch, SetStateAction, useContext, useState, createContext } from 'react';
import { GuessedWord } from '../GuessedWords';

const guessedWordsContext = createContext<(GuessedWord[] | Dispatch<SetStateAction<GuessedWord[]>>)[] | undefined>(undefined);

const useGuessedWords = () => {
    const context = useContext(guessedWordsContext);

    if (!context){
        throw new Error('useGuessedWords cannot be called outside of a GuessedWordsProvider');
    }

    return context;
};

const GuessedWordsProvider: React.FC = ({ children }) => {
    const [guessedWords, setGuessedWords] = useState<GuessedWord[]>([]);

    return (
        <guessedWordsContext.Provider value={[guessedWords, setGuessedWords]}>
            {children}
        </guessedWordsContext.Provider>
    );
};

export default { useGuessedWords, GuessedWordsProvider };