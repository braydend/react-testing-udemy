import React, { useContext, Dispatch, SetStateAction } from 'react';
import stringUtils from './helpers/strings';
import LanguageContext from './contexts/LanguageContext';
import GuessedWordsContext from './contexts/GuessedWordsContext';
import { getLetterMatchCount } from './helpers';
import { GuessedWord } from './GuessedWords';
import SuccessContext from './contexts/SuccessContext';

const { getStringByLanguage } = stringUtils;

type Props = {
    secretWord: string;
};

const Input: React.FC<Props> = ({ secretWord }) => {
    // useState is not destructured on import so it can be mocked
    const [currentGuess, setCurrentGuess] = React.useState<string>();
    const language = useContext(LanguageContext);
    const [guessedWords, setGuessedWords] = GuessedWordsContext.useGuessedWords();
    const [success, setSuccess] = SuccessContext.useSuccess();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        (setGuessedWords as Dispatch<SetStateAction<GuessedWord[]>>)([...guessedWords as GuessedWord[], { word: currentGuess as string, letterMatchCount: getLetterMatchCount(currentGuess as string, secretWord)}]);
        setCurrentGuess("");
    };

    if (success) return null;

    return (
        <div>
            <form>
                <input type="text" placeholder={getStringByLanguage(language, 'guessInputPlaceholder')} onChange={({ target: { value } }) => setCurrentGuess(value)} value={currentGuess} />
                <button onClick={handleSubmit}>{getStringByLanguage(language, 'submit')}</button>
            </form>
        </div>
    );
};

export default Input;