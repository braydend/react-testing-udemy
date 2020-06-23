import React from 'react';
import LanguageContext from './contexts/LanguageContext';
import stringUtils from './helpers/strings';

const { getStringByLanguage } = stringUtils;

export type GuessedWord = {
    word: string;
    letterMatchCount: number;
};

export type Props = {
    guessedWords: GuessedWord[];
};

const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
    // using React.useContext so it can be mocked
    const language = React.useContext(LanguageContext);
    const hasGuessed = guessedWords.length > 0;
    
    return (
        <div>
            {!hasGuessed ? <span id="instructions">{getStringByLanguage(language, 'guessPrompt')}</span> : (
                <>
                    <h1 id="guessed-words-header">{getStringByLanguage(language, 'guessColumnHeader')}</h1>
                    <ul id="guessed-words">
                        {guessedWords.map(({ word, letterMatchCount }) => <li key={word} className="guessed-word">{word} - {letterMatchCount} {getStringByLanguage(language, 'matchingLettersColumnHeader')}</li>)}
                    </ul>
                </>
            )}
        </div>
        );
};

export default GuessedWords;