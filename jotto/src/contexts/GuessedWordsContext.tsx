import React, { Dispatch, SetStateAction, useContext, useState, createContext } from 'react';

const guessedWordsContext = createContext<(string[] | Dispatch<SetStateAction<string[]>>)[] | undefined>(undefined);

const useGuessedWords = () => {
    const context = useContext(guessedWordsContext);

    if (!context){
        throw new Error('useGuessedWords cannot be called outside of a GuessedWordsProvider');
    }

    return context;
};

const GuessedWordsProvider: React.FC = ({ children }) => {
    const [guessedWords, setGuessedWords] = useState<string[]>([]);

    return (
        <guessedWordsContext.Provider value={[guessedWords, setGuessedWords]}>
            {children}
        </guessedWordsContext.Provider>
    );
};

export default { useGuessedWords, GuessedWordsProvider };