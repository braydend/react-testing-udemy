import React from 'react';
import { Language } from '../types';

export type Props = {
    setLanguage: (language: string) => void;
};

const LanguagePicker: React.FC<Props> = ({ setLanguage }) => {
    const handleSelection = (selection: string) => {
        setLanguage(selection);
    };

    const languages: Language[] = [
        {code: 'en', symbol: '🇦🇺'},
        {code: 'emoji', symbol: '😀'},
    ];

    return (
        <div id="languages">
            {languages.map(({ code, symbol }) => (
                <span key={`language-${code}`}>
                    <button onClick={() => handleSelection(code)}>{symbol}</button>
                </span>
            ))}
        </div>
    );
};

export default LanguagePicker;