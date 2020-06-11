import React from 'react';
import GuessedWords, { Props, GuessedWord } from './GuessedWords';
import { shallow, ShallowWrapper } from 'enzyme';

const defaultProps: Props = {
    guessedWords: [
        { word: 'train', letterMatchCount: 3 },
    ],
};

const setup = (props?: Props) => {
    const setupProps: Props = {...defaultProps, ...props};
    
    return shallow(<GuessedWords {...setupProps} />);
};

describe('<GuessedWords /> with no words guessed', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: []});
    });

    test('renders without error', () => {
        const component = wrapper.find('div');

        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = wrapper.find('#instructions');

        expect(instructions.text().length).not.toBe(0);
    });
});

    
describe('if there are words guessed', () => {
    let wrapper: ShallowWrapper;
    const guessedWords: GuessedWord[] = [
        { word: 'foo', letterMatchCount: 1 },
        { word: 'bar', letterMatchCount: 0 },
        { word: 'friend', letterMatchCount: 5 },
    ];
    
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('renders without error', () => {
        const component = wrapper.find('div');

        expect(component.length).toBe(1);
    });

    test('renders guessed words section', () => {
        const guessedWordsNode = wrapper.find('#guessed-words');

        expect(guessedWordsNode.length).toBe(1);
    });

    test('renders correct amount of guessed words', () => {
        const guessedWordsNodes = wrapper.find('.guessed-word');

        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});
