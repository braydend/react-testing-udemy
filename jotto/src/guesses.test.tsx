import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SuccessContext from './contexts/SuccessContext';
import Input from './Input';
import GuessedWordsContext from './contexts/GuessedWordsContext';

const setUp = (secretWord = "party") => {
    const wrapper = mount(
        <SuccessContext.SuccessProvider>
            <GuessedWordsContext.GuessedWordsProvider>
               <Input secretWord={secretWord} />
            </GuessedWordsContext.GuessedWordsProvider>
        </SuccessContext.SuccessProvider>
    );

    const inputBox = wrapper.find('input');
    const submitButton = wrapper.find('button');

    return [wrapper, inputBox, submitButton];
};

describe('test word guesses', () => {
    let wrapper: ReactWrapper;
    let inputBox: ReactWrapper;
    let submitButton: ReactWrapper;

    beforeEach(() => {
        [wrapper, inputBox, submitButton] = setUp();
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
    });
});
