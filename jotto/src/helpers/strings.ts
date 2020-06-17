const languageStrings: any = {
    en: {
     congrats: 'Congratulations! You guessed the word!',
     submit: 'Submit',
     guessPrompt: 'Try to guess the secret word!',
     guessInputPlaceholder: 'enter guess',
     guessColumnHeader: 'Guessed Words',
     guessedWords: 'Guesses',
     matchingLettersColumnHeader: 'Matching Letters',
    },
    emoji: {
     congrats: '🎯🎉',
     submit: '🚀',
     guessPrompt: '🤔🤫🔤',
     guessInputPlaceholder: '⌨️🤔',
     guessedWords: '🤷‍🔤',
     guessColumnHeader: '🤷‍',
     matchingLettersColumnHeader: '✅',
    }
  };

  const getStringByLanguage = (lang: string, stringKey: string, strings = languageStrings) => {
      if (!strings[lang] || !strings[lang][stringKey]){
        console.warn(`Could not get string (${stringKey}) for ${lang}`);

          return strings.en[stringKey];
      }
      return strings[lang][stringKey];
  };

  export default { getStringByLanguage };