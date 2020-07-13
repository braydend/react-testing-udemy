import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';
import stringUtils from './helpers/strings';
import SuccessContext from './contexts/SuccessContext';

const { getStringByLanguage } = stringUtils;

const Congrats: React.FC = () => {
    const language = useContext(LanguageContext);
    const [success] = SuccessContext.useSuccess();

    return (
        <div>{success ? getStringByLanguage(language, 'congrats') : ''}</div>
    );
};

export default Congrats;