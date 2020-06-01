import React from 'react';
import { shallow } from 'enzyme';
import Congrats, { CongratsProps } from './Congrats';

const setup = (props: CongratsProps) => {
    const defaultProps: CongratsProps = { success: true }
    const setupProps: CongratsProps = { ...defaultProps, ...props };
    
    return shallow(<Congrats {...setupProps} />);
};

describe('<Congrats />', () => {
    test('renders without error', () => {
        const wrapper = setup({ success: true });
        const component = wrapper.find('div');

        expect(component.length).toBe(1);
    });
    test('renders no text when success prop is false', () => {
        const wrapper = setup({ success: false });
        const component = wrapper.find('div');

        expect(component.text()).toBe("");
    });
    test('renders non-empty congrats message when success prop is true', () => {
        const wrapper = setup({ success: true });
        const component = wrapper.find('div');

        expect(component.text().length).not.toBe(0);
    });
});