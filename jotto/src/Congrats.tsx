import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';
import stringUtils from './helpers/strings';

const { getStringByLanguage } = stringUtils;

export type CongratsProps = {
    success: boolean,
};

const Congrats: React.FC<CongratsProps> = ({ success }) => {
    const language = useContext(LanguageContext);

    return (
        <div>{success ? getStringByLanguage(language, 'congrats') : ''}</div>
    );
};

export default Congrats;