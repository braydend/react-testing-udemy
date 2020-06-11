import React from 'react';

export type GuessedWord = {
    word: string;
    letterMatchCount: number;
};

export type Props = {
    guessedWords: GuessedWord[];
};

const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
    const hasGuessed = guessedWords.length > 0;
    
    return (
        <div>
            {!hasGuessed ? <span id="instructions">Try to guess the secret word!</span> : (
                <ul id="guessed-words">
                    {guessedWords.map(({ word, letterMatchCount }) => <li key={word} className="guessed-word">{word} - {letterMatchCount} matching letters</li>)}
                </ul>
            )}
        </div>
        );
};

export default GuessedWords;