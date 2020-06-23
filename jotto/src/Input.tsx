import React, { useContext } from 'react';
import stringUtils from './helpers/strings';
import LanguageContext from './contexts/LanguageContext';

const { getStringByLanguage } = stringUtils;

type Props = {
    secretWord: string;
};

const Input: React.FC<Props> = ({ secretWord }) => {
    // useState is not destructured on import so it can be mocked
    const [currentGuess, setCurrentGuess] = React.useState<string>();
    const language = useContext(LanguageContext);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCurrentGuess("");
    };

    return (<div>
        <form>
            <input type="text" placeholder={getStringByLanguage(language, 'guessInputPlaceholder')} onChange={({ target: { value } }) => setCurrentGuess(value)} value={currentGuess} />
            <button onClick={handleSubmit}>{getStringByLanguage(language, 'submit')}</button>
        </form>
    </div>);
};

export default Input;