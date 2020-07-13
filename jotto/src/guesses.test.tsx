import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SuccessContext from './contexts/SuccessContext';
import Input from './Input';
import GuessedWordsContext from './contexts/GuessedWordsContext';
import GuessedWords from './GuessedWords';

const setUp = (secretWord = "party", guessedWords: string[] = []) => {
    const wrapper = mount(
        <SuccessContext.SuccessProvider>
            <GuessedWordsContext.GuessedWordsProvider>
                <GuessedWords />
               <Input secretWord={secretWord} />
            </GuessedWordsContext.GuessedWordsProvider>
        </SuccessContext.SuccessProvider>
    );

    const inputBox = wrapper.find('input');
    const submitButton = wrapper.find('button');

    // Pre-populating guessed words
    guessedWords.map(word => {
        const mockEvent = { target: { value: word } };
        
        inputBox.simulate("change", mockEvent);
        submitButton.simulate("click");
    });

    return [wrapper, inputBox, submitButton];
};

describe('test word guesses', () => {
    let wrapper: ReactWrapper;
    let inputBox: ReactWrapper;
    let submitButton: ReactWrapper;

    describe("non-empty guessed words", () => {
        beforeEach(() => {
            [wrapper, inputBox, submitButton] = setUp("party", ['foo']);
        });

        describe('correct guess', () => {
            beforeEach(() => {
            const mockEvent = { target: { value: "party" } };
            
            inputBox.simulate("change", mockEvent);
            submitButton.simulate("click");
            });

            test('Input component contains no children', () => {
                const inputComponent = wrapper.find("Input");

                expect(inputComponent.children().length).toBe(0);
            });
            
            test("GuessedWords table has correct amount of guesses", () => {
                const guessedWords = wrapper.find(".guessed-word");

                expect(guessedWords.length).toBe(2);
            });
        });

        describe('incorrect guess', () => {
            beforeEach(() => {
                const mockEvent = { target: { value: "train" } };
                
                inputBox.simulate("change", mockEvent);
                submitButton.simulate("click");
            });

            test("Input box remains", () => {
                expect(inputBox.exists()).toBeTruthy(); 
            });

            test("GuessedWords table has correct amount of guesses", () => {
                const guessedWords = wrapper.find(".guessed-word");

                expect(guessedWords.length).toBe(2);
            });
        });
    });

    describe("empty guessed words", () => {
        beforeEach(() => {
            [wrapper, inputBox, submitButton] = setUp("party");
        });

        test("GuessedWords table has 0 guesses by default", () => {
            const guessedWords = wrapper.find(".guessed-word");

            expect(guessedWords.length).toBe(0);
        });        
        
        test("GuessedWords table has correct amount of guesses", () => {
            const mockEvent = { target: { value: "train" } };
                
            inputBox.simulate("change", mockEvent);
            submitButton.simulate("click");

            const guessedWords = wrapper.find(".guessed-word");

            expect(guessedWords.length).toBe(1);
        });
    });
});
