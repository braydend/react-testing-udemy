import React from 'react';
import { shallow } from "enzyme";
import Input from "./Input";

const setUp = (secretWord: string = 'party') => shallow(<Input secretWord={secretWord} />);

describe('<Input />', () => {
    test('renders without error', () => {
        const wrapper = setUp();

        expect(wrapper.length).toBe(1);
    });

    test('state updates when input is changed', () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setUp();
        const input = wrapper.find('input');

        const mockEvent = { target: { value: "foo" } };
        input.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("foo");
    });
});