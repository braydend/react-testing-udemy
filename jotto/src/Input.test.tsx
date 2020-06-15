import React from 'react';
import { shallow } from "enzyme";
import Input from "./Input";

const setUp = () => shallow(<Input secretWord="party" />);

describe('<Input />', () => {
    test('renders without error', () => {
        const wrapper = setUp();

        expect(wrapper.length).toBe(1);
    });
});