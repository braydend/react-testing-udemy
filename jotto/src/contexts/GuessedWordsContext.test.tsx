import React from 'react';
import GuessedWordsContext from './GuessedWordsContext';
import { shallow, mount } from 'enzyme';

const FunctionalComponent: React.FC = () => {
    GuessedWordsContext.useGuessedWords();

    return <div />;
};

describe('useGuessedWords', () => {
    test('Throws error when called outside of <GuessedWordsProvider>', () => {
        expect(() => {
            shallow(<FunctionalComponent />);
        }).toThrow('useGuessedWords cannot be called outside of a GuessedWordsProvider');
    });

    test('Does not throw error when called within <GuessedWordsProvider>', () => {
        expect(() => {
            mount(
                <GuessedWordsContext.GuessedWordsProvider>
                    <FunctionalComponent />
                </GuessedWordsContext.GuessedWordsProvider>
            );
        }).not.toThrow();
    });
});