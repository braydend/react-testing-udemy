import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import Input from "./Input";

const setUp = (secretWord: string = 'party') => shallow(<Input secretWord={secretWord} />);

test('renders without error', () => {
    const wrapper = setUp();

    expect(wrapper.length).toBe(1);
});

describe('<Input />', () => {
    const mockSetCurrentGuess = jest.fn();
    let wrapper: ShallowWrapper;
    
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setUp();
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