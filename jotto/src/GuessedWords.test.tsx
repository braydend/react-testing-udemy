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


describe('language picker', () => {
    describe('english', () => {
        test('renders guess instructions in english by default', () => {
            const wrapper = setup({ guessedWords: [] });
            const guessInstructions = wrapper.find('#instructions');
    
            expect(guessInstructions.text()).toBe('Try to guess the secret word!');
        });
      
        test('renders guessed words header in english by default', () => {
            const wrapper = setup({ guessedWords: [{ word: 'foo', letterMatchCount: 1}] });
            const guessInstructions = wrapper.find('#guessed-words-header');
    
            expect(guessInstructions.text()).toBe('Guessed Words');
        });
        
        test('renders guess letter match count in english by default', () => {
            const wrapper = setup({ guessedWords: [{ word: 'foo', letterMatchCount: 1}] });
            const firstGuesedWord = wrapper.find('#guessed-words').first();
    
            expect(firstGuesedWord.text()).toBe('foo - 1 Matching Letters');
        });
    });
    describe('emoji', () => {
        beforeAll(() => {
            const mockUseContext = jest.fn().mockReturnValue('emoji');
            React.useContext = mockUseContext;
        });

        test('renders guess instructions in emoji', () => {
            const wrapper = setup({ guessedWords: [] });
            const guessInstructions = wrapper.find('#instructions');
    
            expect(guessInstructions.text()).toBe('🤔🤫🔤');
        });  

        test('renders guessed words header in emoji', () => {
            const wrapper = setup({ guessedWords: [{ word: 'foo', letterMatchCount: 1}] });
            const guessInstructions = wrapper.find('#guessed-words-header');
    
            expect(guessInstructions.text()).toBe('🤷‍');
        });

        test('renders guess letter match count in emoji', () => {
            const wrapper = setup({ guessedWords: [{ word: 'foo', letterMatchCount: 1}] });
            const firstGuesedWord = wrapper.find('#guessed-words').first();
    
            expect(firstGuesedWord.text()).toBe('foo - 1 ✅');

        })
    });
});