import React from 'react';
import { mount, ReactWrapper } from "enzyme";
import Input from "./Input";
import LanguageContext from './contexts/LanguageContext';

const setUp = ({secretWord = 'party', language = 'en'}: { secretWord?: string, language?: string }) => {
    return mount(
        <LanguageContext.Provider value={language}>
            <Input secretWord={secretWord} />
        </LanguageContext.Provider>
    );
};

test('renders without error', () => {
    const wrapper = setUp({});

    expect(wrapper.length).toBe(1);
});

describe('<Input />', () => {
    const mockSetCurrentGuess = jest.fn();
    let wrapper: ReactWrapper;
    
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setUp({});
    });

    test('state updates when input is changed', () => {
        const input = wrapper.find('input');

        const mockEvent = { target: { value: "foo" } };
        input.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("foo");
    });

    test('state is cleared when submit is clicked', () => {
        const submitButton = wrapper.find('button');

        submitButton.simulate("click", { preventDefault: () => {}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
});

describe('Language picker', () => {
    test('correctly renders submit button in english', () => {
        const wrapper = setUp({ language: 'en' });
        const submitButton = wrapper.find('button');

        expect(submitButton.text()).toBe('Submit');
    });

    test('correctly renders submit button in emoji', () => {
        const wrapper = setUp({ language: 'emoji' });
        const submitButton = wrapper.find('button');

        expect(submitButton.text()).toBe('🚀');
    });    
    
    test('correctly renders placeholder in english', () => {
        const wrapper = setUp({ language: 'en' });
        const input = wrapper.find('input');

        expect(input.prop('placeholder')).toBe('enter guess');
    });

    test('correctly renders placeholder in emoji', () => {
        const wrapper = setUp({ language: 'emoji' });
        const input = wrapper.find('input');

        expect(input.prop('placeholder')).toBe('⌨️🤔');
    });
});